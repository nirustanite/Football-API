const { Router } = require('express');
const Team = require('./model');

const router = new Router();

router.post('/team', (req, res, next) => {
    console.log(req.body)
    Team.create(req.body)
        .then(team => res.json(team))
        .catch(next)
})

router.get('/team',(request,response,next) => {
    Team.findAll()
        .then(team => {
            if(team){
                return response.json(team)
            }
        })
        .catch(next)
});

module.exports = router;