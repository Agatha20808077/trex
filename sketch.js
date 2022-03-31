//declaração das variáveis
var trex, trex_correndo;
var edges, pontos=0;
var solo, soloImg, soloinvisivel;
var nuvem, nuvemimg;
var cacto, cactoimg1, cactoimg2, cactoimg3, cactoimg4, cactoimg5, cactoimg6;
var gCacto, gNuvem; 
var PLAY = 1;
var END = 0;
var gameState = PLAY; //gameState = 1

//Objeto JavaScript e JSON(JavaScript Object Notation)
/*
var Estudante = {
  nome: "Ágatha",
  idade: 14, //número
  curso: "Programação", //texto
  notas: [5,5,5,4] //matriz
  //i     0 1 2 3
};

console.log(Estudante.notas[3]);
*/

//função de pré-carregamento
function preload()
{
  trex_correndo = loadAnimation("trex1.png","trex2.png","trex3.png");
  soloImg = loadImage("ground2.png");
  nuvemimg = loadImage("cloud.png");
  cactoimg1 = loadImage("obstacle1.png");
  cactoimg2 = loadImage("obstacle2.png");
  cactoimg3 = loadImage("obstacle3.png");
  cactoimg4 = loadImage("obstacle4.png");
  cactoimg5 = loadImage("obstacle5.png");
  cactoimg6 = loadImage("obstacle6.png");


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

  //criar os grupos de cactos e nuvens
  gNuvem = new Group();
  gCacto = new Group();
}

//desenho e animação
function draw()
{
  background("lightgray");
  //exibir pontuação
  //console.log(frameCount);
  text("Score: " + pontos, 500,50);
  

  if(gameState === PLAY){
    //contar pontuação
    pontos = pontos + Math.round(frameCount/60);

    //movimento do solo
    solo.velocityX = -2;
    //console.log(solo.x);

  }
  else if(gameState === END){
    //solo parado
    solo.velocityX = 0;


  }

  

  //solo infinito
  if(solo.x<0){
    solo.x = solo.width/2;
  }

  //fazer o trex pular
  if(keyDown("space") && trex.y>=161.5){
    trex.velocityY = -10;
  }
 
  //dar gravidade para o trex
  trex.velocityY = trex.velocityY + 0.3;
  

  //colidir com o solo
  trex.collide(soloinvisivel);
 
  //posição do trex no eixo y
  //console.log(trex.y);
 
  //chamada da função gerar nuvens
  gerarNuvens();

  //chamada da função gerar cactos
  gerarCactos();

  //desenha o sprite do Trex
  drawSprites();

}
//função para gerar as nuvens
 function gerarNuvens()
 {
   //para gerar a nuvem a cada 60 quadros(frameCount)
   if(frameCount%60===0){
    nuvem=createSprite(600, 90, 20, 30);
    nuvem.addImage(nuvemimg);
    nuvem.velocityX = - 3;
    //gerar nuvens em posições aleatórias no eixo y
    nuvem.y=Math.round(random(70, 110));
    //console.log(trex.depth);
    //console.log(nuvem.depth);
    //altera a profundidade do trex (pro trex ficar na frente da nuvem);
    trex.depth=nuvem.depth +1;

    // atribuir tempo de vida para o sprite
    nuvem.lifetime = 250;

    //adicionar os sprites de nuvem no grupo
    gNuvem.add(nuvem);
   }
 }

 //função para gerar os cactos
  function gerarCactos()
  {
    if(frameCount % 100 === 0)
    {
     cacto = createSprite(600, 170, 20, 40);
     cacto.velocityX = -2;
     cacto.scale = 0.5;
     var aleatorio = Math.round(random(1,6));
     switch(aleatorio){
       case 1: cacto.addImage(cactoimg1);
       break;
       case 2: cacto.addImage(cactoimg2);
       break;
       case 3: cacto.addImage(cactoimg3);
       break;
       case 4: cacto.addImage(cactoimg4);
       break;
       case 5: cacto.addImage(cactoimg5);
       break;
       case 6: cacto.addImage(cactoimg6);
       break;
       default: break;
     }
     //break traz para cá

     // atribuir tempo de vida para o sprite
      cacto.lifetime = 330;

     //adicionar os cacto de nuvem no grupo
     gCacto.add(cacto);
    }
 }

