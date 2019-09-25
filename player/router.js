const { Router } = require('express');
const Player = require('./model');
const Team = require('../team/model');
const City = require('../city/model');

const router = new Router();

router.post('/player', (req,res,next) => {
    Player.create(req.body)
          .then(player => res.json(player))
          .catch(next)
})

router.get('/player',(req,res,next) => {
    Player.findAll()
          .then(player => {
              if(player){
                  return res.json(player)
              }
          })
          .catch(next)
})

router.get('/player/:id', (req,res,next) => {
    Player.findByPk(req.params.id, {include: [Team,City] })
          .then(player => {
              if(player){
                  return res.json(player);
              }
              return res.status(404).end();
          })
          .catch(next)
})

router.put('/player/:id', (req,res,next) => {
    Player.findByPk(req.params.id)
    .then(player => {
        if(player){
            return player.update(req.body)
                       .then(player => res.json(player))
        }
        return res.status(404).end();
    })
    .catch(next)
});

router.delete('/player/:id', (req,res,next) => {
    Player.destroy({
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