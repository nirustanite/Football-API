const { Router } = require('express');
const Player = require('./model');
const Team = require('../team/model')

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
    Player.findByPk(req.params.id, {include: [Team] })
          .then(player => {
              if(player){
                  return res.json(player);
              }
              return res.status(404).end();
          })
          .catch(next)
})

module.exports = router;