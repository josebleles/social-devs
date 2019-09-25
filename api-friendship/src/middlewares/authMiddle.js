var logado = {id:1,nome:"Jose"};

module.exports= (rq,rs,next)=>{
    rq.logado = logado;
    next();
}