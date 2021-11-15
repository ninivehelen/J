function preload() {
  this.load.image('cenario', 'assets/cenario.png');
  this.load.image('piso', 'assets/platform.png');
  this.load.image('cajado', 'assets/cajado.png');
  this.load.image('caixa', 'assets/box.png', 60, 40);
  this.load.image('caveira', 'assets/caveira.png');
  this.load.image('esmeralda', 'assets/vida.png');
  this.load.audio("musicafundo", "assets/musica.mp3");
  this.load.spritesheet('jogador',
    'assets/jogador.png',
    { frameWidth: 32, frameHeight: 49 }
  );
  this.load.spritesheet('caixa',
    'assets/box.png',
    { frameWidth: 32, frameHeight: 48 }
  );
  this.load.spritesheet('inimigo',
    'assets/inimigo2.png',
    { frameWidth: 50, frameHeight: 50 }
  );


}