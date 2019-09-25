class User {
    constructor(id ,nome, amigos, senha = ""){
        this.id = id;
        this.nome = nome;
        this.amigos = amigos;
        this.senha = senha;
    }
}

module.exports = User;