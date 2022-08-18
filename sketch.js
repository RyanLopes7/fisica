const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine, ball, ball2;
var btn1, btn2;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  //funcao do botao
  btn1 = createImg("");
  btn1.position(400, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(hForce);
  //funcao do botao2
  btn2 = createImg("");
  btn2.position(500, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);

  ground = new Ground(200, 390, 400, 20);
  left = new Ground(10, 200, 20, 400);
  right = new Ground(390, 200, 20, 400);
  topo = new Ground(200, 10, 400, 20);
  //comando da bola
  var ballOptions = {
    restitution: 0.95,
    frictionAir: 0.01,
  };
  // o corpo da bola, este corpo esta invisivel
  ball = Bodies.circle(100, 20, 20, ballOptions);
  World.add(world, ball);

  //comando da bola 2
  var ball2Options = {
    restitution: 1,
    frictionAir: 0.03,
  };
  // o corpo da bola2, este corpo esta invisivel
  ball2 = Bodies.circle(100, 20, 20, ball2Options);
  World.add(world, ball2);

  //comando para centralizar a bola
  rectMode(CENTER);
  //comando para o raio do circulo
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  Engine.update(engine);

  //posicao da bola fisica, para ficar na mesma posicao do corpo invisivel
  ellipse(ball.position.x, ball.position.y, 20);
  //posicao da bola2 fisica, para ficar na mesma posicao do corpo invisivel
  ellipse(ball2.position.x, ball2.position.y, 20);

  ground.show();
  left.show();
  right.show();
  topo.show();
}
//aplicao forcao quando clica no botao
function hForce() {
  Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 });
}
//aplicao forcao quando clica no botao2
function vForce() {
  Body.applyForce(ball2, { x: 0, y: 0 }, { x: 0, y: -0.05 });
}
