const express = require('express');
const Users = require('../database/UsersDAO');
const route = express.Router();

route.get('/my-friends', (rq, rs)=>{
    var {logado} = rq;
    rs.json(Users.listAllFriendsOf(logado.id));
});

route.post('/invite-user', (rq, rs)=>{
    var {logado} = rq;
    var {user} = rq.body;
    var result = Users.invite(logado.id, user.id);
    if(result = 0){
           //TODO: send event to web-socket user.id listener
    }
    rs.status(200).json({message: "Ok, enviado"});
});

route.get('/my-invites', (rq, rs)=>{
    var {logado} = rq;
    rs.json(Users.listMyInvites(logado.id)); // TODO criar
});

route.post('/answer-invite', (rq, rs)=>{
    var {logado} = rq;
    var {user,answer} = rq.body;
    rs.json(Users.setInviteStatus(logado.id,user.id, answer));
});

module.exports = route;