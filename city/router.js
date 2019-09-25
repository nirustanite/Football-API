const { Router } = require('express');
const City = require('./model');
const Player = require('../player/model');
const Team = require('../team/model')

const router = new Router();

router.post('/city', (req,res,next) => {
    City.create(req.body)
          .then(city => res.json(city))
          .catch(next)
})

router.get('/city',(req,res,next) => {
    City.findAll()
          .then(city => {
              if(city){
                  return res.json(city)
              }
          })
          .catch(next)
});

router.get('/city/:id', (req,res,next) => {
    City.findByPk(req.params.id, {include: [Team,Player] })
          .then(city => {
              if(city){
                  return res.json(city);
              }
              return res.status(404).end();
          })
          .catch(next)
});

router.put('/city/:id', (req,res,next) => {
    City.findByPk(req.params.id)
    .then(city => {
        if(city){
            return city.update(req.body)
                       .then(city => res.json(city))
        }
        return res.status(404).end();
    })
    .catch(next)
});

router.delete('/city/:id', (req,res,next) => {
    City.destroy({
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