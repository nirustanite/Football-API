const { Router } = require('express');
const Team = require('./model');

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
    Team.findByPk(req.params.id)
        .then(team => {
            if(team){
                return res.json(team);
            }
            return res.status(404).end();
        })
        .catch(next)
});

module.exports = router;