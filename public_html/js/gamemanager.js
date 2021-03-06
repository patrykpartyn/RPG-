
let gamemanager={
 
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
        
    },
    resetPlayer:function(classType){
        switch (classType){
            case "Warior":
                player=new Player(classType,200,0,200,100,50);
                break;
            case "Rogue":
                player=new Player(classType,100,0,100,150,200);
                break;
            case "Mage":
                player=new Player(classType,80,0,50,200,100);
                break;
            case "Hunter":
                player=new Player(classType,200,0,50,200,100);
                break;      
        }
        let getInterface=document.querySelector(".main-container");
        getInterface.innerHTML='<img src="img/'+classType+'.jpg" alt='+classType+' class="img1">\n\
        <div class="center"><h3>'+classType+'</h3>\n\
        <p class="health-player">Health:'+player.health+'</p>\n\
        <p>Mana:'+player.mana+'</p>\n\
        <p>Strength:'+player.strength+'</p>\n\
        <p>Agility:'+player.agility+'</p>\n\
        <p>Speed:'+player.speed+'</p></div>';     
    },
    setPreFight:function(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");
        let getArena=document.querySelector(".arena");
        getHeader.innerHTML='<div class="jumbotron jumbotron-fluid"><div class="container-fluid text-center"><h2 class="display-3">Random your enemy !</h2></div></div>';
        getActions.innerHTML='<a href="#" class="btn btn-warning" onclick="gamemanager.setFight()">Search Enemy!</a>';
        getArena.innerHTML='<div class="arena1">Fight Arena</div>';
        
    },
    setFight:function(){
        let getHeader=document.querySelector(".header");
        let getActions=document.querySelector(".actions");
        let getEnemy=document.querySelector(".enemy");
        //create enemy
        let enemy1=new Enemy("goblin",100,0,50,100,100);
        let enemy2=new Enemy("troll",100,0,150,80,150);
        let enemy3=new Enemy("spider",100,0,50,80,50);
        let chooseRandomEnemy=Math.floor(Math.random()*Math.floor(3));
// let chooseRandomEnemy=Math.random(2);
//        console.log(chooseRandomEnemy);

        switch(chooseRandomEnemy){
            case 0:
                enemy=enemy1;
                break;
            case 1:
                enemy=enemy2;
                break;
            case 2:
                enemy=enemy3;
                break;     
        }
        
        getHeader.innerHTML='<div class="jumbotron jumbotron-fluid"><div class="container-fluid text-center"><h2 class="display-3">Next attack!</h2></div></div>';
        getActions.innerHTML='<a href="#" class="btn btn-danger" onclick="PlayerMoves.calcAttack()" class="img1">Attack</a>';
        getEnemy.innerHTML='<img src="img/'+enemy.enemyType+'.jpg" alt='+enemy.enemyType+' class="img1">\n\
        <div class="center"><h3>'+enemy.enemyType+'</h3>\n\
        <p class="health-enemy">Health:'+enemy.health+'</p>\n\
        <p>Mana:'+enemy.mana+'</p>\n\
        <p>Strength:'+enemy.strength+'</p>\n\
        <p>Agility:'+enemy.agility+'</p>\n\
        <p>Speed:'+enemy.speed+'</p></div>';
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};