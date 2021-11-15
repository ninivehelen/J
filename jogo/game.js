
var pontuacao = 0;
var pontuacaoText;
var vidas;
var vidasText;
var musica;
var esmeralda;

function update() {
  cursors = this.input.keyboard.createCursorKeys();
  if (cursors.left.isDown) {
    jogador.setVelocityX(-160);

    jogador.anims.play('esquerda', true);
  }
  else if (cursors.right.isDown) {
    jogador.setVelocityX(160);

    jogador.anims.play('direita', true);
  }
  else {
    jogador.setVelocityX(0);

    jogador.anims.play('pula');
  }

  if (cursors.up.isDown && jogador.body.touching.down) {
    jogador.setVelocityY(-330);
  }


  function coletacajado(jogador, cajado) {
    cajado.disableBody(true, true);

    pontuacao +=5;
    pontuacaoText.setText('Pontuacão: ' + pontuacao);

  }

}


