const { Router } = require('express');
const Team = require('./model');

const router = new Router();


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