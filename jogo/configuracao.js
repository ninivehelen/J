window.onload = function(){
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 580,
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
        
    }
    
    
};
var game = new Phaser.Game(config);
}