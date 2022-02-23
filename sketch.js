//declaração das variáveis
var trex, trex_correndo;
var edges;
var solo, soloImg, soloinvisivel;

//função de pré-carregamento
function preload()
{
  trex_correndo = loadAnimation("trex1.png","trex2.png","trex3.png");
  soloImg = loadImage("ground2.png");
  
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

  //criar o sprite do solo
  solo = createSprite(300,180,600,20);
  solo.addImage(soloImg);

  soloinvisivel = createSprite(50,190,100,10);
  soloinvisivel.visible = false;
}

//desenho e animação
function draw()
{
  background("lightgray");
  solo.velocityX = -2;
  console.log(solo.x);

  //solo infinito
  if(solo.x<0){
    solo.x = solo.width/2;
  }

  //fazer o trex pular
  if(keyDown("space")){
    trex.velocityY = -10;
  }
 
  //dar gravidade para o trex
  trex.velocityY = trex.velocityY + 0.5;
  

  //colidir com o solo
  trex.collide(soloinvisivel);
 
  //posição do trex no eixo y
  //console.log(trex.y);
 
  //desenha o sprite do Trex
  drawSprites();

}

