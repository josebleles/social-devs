const User = require('../models/User');

const listOfUser = [new User(1, "Jose",[], "12345"), new User(2, "Lilia",[], "12345")];

const friendShipMap = []; // {key:1, = friends:[2,3,4]};

const invitationsMap = []; // {key:1, = friends:[2,3,4]};

module.exports = {
    listById(id){
        var usuario = listOfUser.find(user => user.id == id);
        usuario.amigos = this.listAllFriendsOf(id);
        return usuario; 
    },

    listAllFriendsOf(id){
        const myFriends = friendShipMap.find(friendship => friendship.key == id);
        let listOfFriends = []; 
        if(myFriends){
            myFriends.friends.forEach(idOfAFriend => {
                if(idOfAFriend != id) // no recursive call
                    listOfFriends.push(this.listById(idOfAFriend));
            });
        }
        
        return listOfFriends;
    },

    invite(id, userId){
        var exists = invitationsMap.find(invitation => {
            var where1 = invitation.key == id && invitation.invited == userId;
            var where2 = invitation.key == userId && invitation.invited == id;
            return where1 || where2;
        });
        if(exists) return;
        invitationsMap.push({key:id, invited:userId});
    },

    setInviteStatus(id, userId, status){
        if(status == 1){
            var myFriends = friendShipMap.find(friendship => friendship.key == id);
            if(myFriends){
                if(myFriends.friends){
                    myFriends.friends.push(userId);
                }else{
                    myFriends.friends = [];
                    myFriends.friends.push(userId);
                }
            }else{
                myFriends = {key:id, friends:[]};
                myFriends.friends.push(userId);
                friendShipMap.push(myFriends);
            }
        }
        
        invitationsMap.slice(invitationIndex,1);
        
    },
    listMyInvites(id){
        var invitationIndex = invitationsMap.find(invitation => {
            var where1 = invitation.key == id && invitation.invited == userId;
            return where1;
        });
    }
};