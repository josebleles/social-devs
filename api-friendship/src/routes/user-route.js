const express = require('express');
const Users = require('../database/Users');
const route = express.Router();


route.get('/', (rq, rs)=>{
    var {logado} = rq;
    rs.json(Users.listAllFriendsOf());
});

module.exports = route;