function create() {

  this.add.image(500, 300, 'cenario');

  this.musica = this.sound.add("musicafundo");
  this.musica.play();

  platforms = this.physics.add.staticGroup();



  platforms.create(400, 568, 'piso').setScale(2).refreshBody();

  platforms.create(620, 420, 'caixa');
  platforms.create(500, 320, 'caixa');
  platforms.create(400, 300, 'caixa');
  platforms.create(300, 220, 'caixa');
  platforms.create(200, 205, 'caixa');

  jogador = this.physics.add.sprite(100, 450, 'jogador');

  pontuacaoText = this.add.text(16, 40, 'Pontução: 0', { fontSize: '25px', fill: 'white' });

  this.add.text(16, 60, "Vidas:", { fontSize: '25px', fill: 'white' });

  this.vidas = 4;
  this.vidasText = this.add.text(120, 60, this.vidas, { fontSize: '25px', fill: 'white' })


  jogador.setBounce(0.2);
  jogador.setCollideWorldBounds(true);
  inimigos = this.physics.add.group({
    key: 'inimigo',
    repeat: 3,
    setXY: { x: 100, y: 95, stepX: 157 }
  });

  jogador.setBounce(0.2);
  jogador.setCollideWorldBounds(true);
  cajados = this.physics.add.group({
    key: 'cajado',
    repeat: 3,
    setXY: { x: 10, y: 10, stepX: 150 }
  });




  cajados.children.iterate(function (child) {

    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));


  });

  this.anims.create({
    key: 'esquerda',
    frames: this.anims.generateFrameNumbers('jogador', { start: 4, end: 7 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'pula',
    frames: [{ key: 'jogador', frame: 0 }],
    frameRate: 10
  });

  this.anims.create({
    key: 'direita',
    frames: this.anims.generateFrameNumbers('jogador', { start: 8, end: 11 }),
    frameRate: 10,
    repeat: -1
  });


  jogador.setBounce(0.2);
  jogador.setCollideWorldBounds(true);
  this.physics.add.collider(jogador, platforms);
  this.physics.add.collider(inimigos, platforms);
  this.physics.add.collider(cajados, platforms);
  this.physics.add.overlap(jogador, cajados, coletacajado, null, this);
  

  esmeraldas = this.physics.add.group();
  this.physics.add.collider(esmeraldas, platforms);
  this.physics.add.overlap(jogador, esmeraldas, pegouvida, null, this);

  

  caveiras = this.physics.add.group();

  this.physics.add.collider(caveiras, platforms);

  inimigo = this.physics.add.group();
  ;
  this.physics.add.collider(jogador, caveiras, apareceoinimigo, null, this);

  this.physics.add.collider(jogador, inimigos, inimigoenconstou, null, this);


}

function coletacajado(jogador, cajado) {
  cajado.disableBody(true, true);

  pontuacao += 5;
  pontuacaoText.setText('Pontuacão: ' + pontuacao);

  if (cajados.countActive(true) === 0) {
    cajados.children.iterate(function (child) {

      child.enableBody(true, child.x, 0, true, true);

    });

    var x = (jogador.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

    var caveira = caveiras.create(x, 16, 'caveira');
    caveira.setBounce(1);
    caveira.setCollideWorldBounds(true);
    caveira.setVelocity(Phaser.Math.Between(-200, 200), 20);

    esmeralda = esmeraldas.create(x, 16, 'esmeralda');
    esmeralda.setBounce(1);
    esmeralda.setVelocity(Phaser.Math.Between(-200, 200), 20);

  }
}
  
function apareceoinimigo(jogador, caveira) {
  this.vidas -= 1;
  this.vidasText.text = this.vidas;
  if (this.vidas == 0) {
    this.add.text(300, 300, "Você Perdeu", { fontSize: '40px', fill: 'white' });
    this.physics.pause();

    jogador.setTint(0xff0000);

    jogador.anims.play('turn');

  }
}

function inimigoenconstou(jogador, inimigo) {

  this.vidas -= 1;
  this.vidasText.text = this.vidas;
  if (this.vidas == 0) {
    this.add.text(300, 300, "Você Perdeu", { fontSize: '40px', fill: 'white' });

    this.physics.pause();

    jogador.setTint(0xff0000);

    jogador.anims.play('turn');

  }

}
function pegouvida(jogador, esmeralda) {
  this.vidas +=1;
  this.vidasText.text = this.vidas;
}


















