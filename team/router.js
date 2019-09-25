const { Router } = require('express');
const Team = require('./model');
const Player = require('../player/router');
const City = require('../city/model')

const router = new Router();

router.post('/team', (req, res, next) => {
    Team.create(req.body)
        .then(team => res.json(team))
        .catch(next)
});

router.get('/team',(request,response,next) => {
    Team.findAll()
        .then(team => {
            if(team){
                return response.json(team)
            }
        })
        .catch(next)
});

router.get('/team/:id', (req, res, next) => {
    Team.findByPk(req.params.id, {include : [Player, City]})
        .then(team => {
            if(team){
                return res.json(team);
            }
            return res.status(404).end();
        })
        .catch(next)
});


router.put('/team/:id', (req,res,next) => {
    Team.findByPk(req.params.id)
    .then(team => {
        if(team){
            return team.update(req.body)
                       .then(team => res.json(team))
        }
        return res.status(404).end();
    })
    .catch(next)
});

router.delete('/team/:id', (req,res,next) => {
    Team.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleted => {
        if(deleted){
            return res.status(204).end()
        }
        return res.status(404).end()
    })
    .catch(next)
})
module.exports = router;