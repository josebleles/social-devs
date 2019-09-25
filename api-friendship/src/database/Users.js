const listOfUser = [];
const friendShipMap = []; // 1 = [2,3,4]; 2 = [1];

module.exports = {
    listById(id){
        var usuario = listOfUser.find(user => user.id == id);
        usuario.amigos = this.listAllFriendsOf(id); 
    },
    listAllFriendsOf(id){
        const myFriends = friendShipMap.find(friendship => friendship.key == friendship.id);
        let listOfFriends = []; 
        myFriends.forEach(idOfAFriend => {
            if(idOfAFriend != id) // no recursive call
                listOfFriends.push(this.listById(idOfAFriend));
        });
        return listOfFriends;
    }
};