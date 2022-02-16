//declaração das variáveis
var trex, trex_correndo;
var edges;

//função de pré-carregamento
function preload()
{
  trex_correndo = loadAnimation("trex1.png","trex2.png","trex3.png");
  

}

//função de configuração
function setup()
{
  //criar tela
  createCanvas(600,200);
  //criar o sprite do trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("Correndo",trex_correndo);
  trex.scale = 0.5;

  //criar a borda
  edges = createEdgeSprites();
}

//desenho e animação
function draw()
{
  background("lightgray");

  //fazer o trex pular
  if(keyDown("space")){
    trex.velocityY = -10;
  }
 
  //dar gravidade para o trex
  trex.velocityY = trex.velocityY + 0.5;
  

  //colidir com as bordas
  trex.collide(edges[3]);
 
  //posição do trex no eixo y
  console.log(trex.y);
 
  //desenha o sprite do Trex
  drawSprites();

}

