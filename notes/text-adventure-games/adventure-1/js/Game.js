// Game.js 

var OregonH = OregonH || {};
 
//constants
OregonH.WEIGHT_PER_OX = 20;
OregonH.WEIGHT_PER_PERSON = 2;
OregonH.FOOD_WEIGHT = 0.6;
OregonH.FIREPOWER_WEIGHT = 5;
OregonH.GAME_SPEED = 800;
OregonH.DAY_PER_STEP = 0.2;
OregonH.FOOD_PER_PERSON = 0.02;
OregonH.FULL_SPEED = 5;
OregonH.SLOW_SPEED = 3;
OregonH.FINAL_DISTANCE = 1000;
OregonH.EVENT_PROBABILITY = 0.15;
OregonH.ENEMY_FIREPOWER_AVG = 5;
OregonH.ENEMY_GOLD_AVG = 50;



// ---------------------------------------------------------
// Game 

class Game {
  // Initialize the Game Object
  constructor() {
    // Create dependent Objects 
    this.ui = new UI(this);
    this.eventManager = new EventManager(this);
    this.caravan = new Caravan(this);

    // pass references - set dependencies 
    this.caravan.ui = this.ui;
    this.caravan.eventManager = this.eventManager;

    this.ui.caravan = this.caravan;
    this.ui.eventManager = this.eventManager;

    this.eventManager.caravan = this.caravan;
    this.eventManager.ui = this.ui;

    // begin adventure!
    this.startJourney();
  }
 
  
  // start the journey and time starts running
  startJourney () {
    this.gameActive = true;
    this.previousTime = null;
    this.ui.notify('A great adventure begins', 'positive');

    this.step();
  }
  
  
  // game loop
  step (timestamp) {

    // starting, setup the previous time for the first time
    if(!this.previousTime){
      this.previousTime = timestamp;
      this.updateGame();
    }

    //time difference
    var progress = timestamp - this.previousTime;

    //game update
    if(progress >= OregonH.GAME_SPEED) {
      this.previousTime = timestamp;
      this.updateGame();
    }

    //we use "bind" so that we can refer to the context "this" inside of the step method
    if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
  }
  
  //update game stats
  updateGame () {
    //day update
    this.caravan.day += OregonH.DAY_PER_STEP;

    //food consumption
    this.caravan.consumeFood();

    //game over no food
    if(this.caravan.food === 0) {
      this.ui.notify('Your caravan starved to death', 'negative');
      this.gameActive = false;
      return;
    }

    //update weight
    this.caravan.updateWeight();

    //update progress
    this.caravan.updateDistance();

    //show stats
    this.ui.refreshStats();

    //check if everyone died
    if(this.caravan.crew <= 0) {
      this.caravan.crew = 0;
      this.ui.notify('Everyone died', 'negative');
      this.gameActive = false;
      return;
    }

    //check win game
    if(this.caravan.distance >= OregonH.FINAL_DISTANCE) {
      this.ui.notify('You have returned home!', 'positive');
      this.gameActive = false;
      return;
    }

    //random events
    if(Math.random() <= OregonH.EVENT_PROBABILITY) {
      this.eventManager.generateEvent();
    }

  }
  
  // pause the journey
  pauseJourney () {
    this.gameActive = false;
  }

  // resume the journey
  resumeJourney () {
    this.gameActive = true;
    this.step();
  }
  
}



// =========================================================
 
//OregonH.Game = {};
// 
//// initiate the game
//OregonH.Game.init = function() {
// 
//  // reference ui
//  this.ui = OregonH.UI;
// 
//  //reference event manager
//  this.eventManager = OregonH.Event;
// 
//  //setup caravan
//  this.caravan = OregonH.Caravan;
//  this.caravan.init({
//    day: 0,
//    distance: 0,
//    crew: 30,
//    food: 80,
//    oxen: 2,
//    money: 300,
//    firepower: 2
//  });
// 
//  //pass references
//  this.caravan.ui = this.ui;
//  this.caravan.eventManager = this.eventManager;
// 
//  this.ui.game = this;
//  this.ui.caravan = this.caravan;
//  this.ui.eventManager = this.eventManager;
// 
//  this.eventManager.game = this;
//  this.eventManager.caravan = this.caravan;
//  this.eventManager.ui = this.ui;
// 
//  //begin adventure!
//  this.startJourney();
//};
// 
////start the journey and time starts running
//OregonH.Game.startJourney = function() {
//  this.gameActive = true;
//  this.previousTime = null;
//  this.ui.notify('A great adventure begins', 'positive');
// 
//  this.step();
//};
// 
////game loop
//OregonH.Game.step = function(timestamp) {
// 
//  //starting, setup the previous time for the first time
//  if(!this.previousTime){
//    this.previousTime = timestamp;
//    this.updateGame();
//  }
// 
//  //time difference
//  var progress = timestamp - this.previousTime;
// 
//  //game update
//  if(progress >= OregonH.GAME_SPEED) {
//    this.previousTime = timestamp;
//    this.updateGame();
//  }
//  
//  //we use "bind" so that we can refer to the context "this" inside of the step method
//  if(this.gameActive) window.requestAnimationFrame(this.step.bind(this));
//};
// 
////update game stats
//OregonH.Game.updateGame = function() {
//  //day update
//  this.caravan.day += OregonH.DAY_PER_STEP;
// 
//  //food consumption
//  this.caravan.consumeFood();
//  
//  //game over no food
//  if(this.caravan.food === 0) {
//    this.ui.notify('Your caravan starved to death', 'negative');
//    this.gameActive = false;
//    return;
//  }
// 
//  //update weight
//  this.caravan.updateWeight();
// 
//  //update progress
//  this.caravan.updateDistance();
// 
//  //show stats
//  this.ui.refreshStats();
// 
//  //check if everyone died
//  if(this.caravan.crew <= 0) {
//    this.caravan.crew = 0;
//    this.ui.notify('Everyone died', 'negative');
//    this.gameActive = false;
//    return;
//  }
// 
//  //check win game
//  if(this.caravan.distance >= OregonH.FINAL_DISTANCE) {
//    this.ui.notify('You have returned home!', 'positive');
//    this.gameActive = false;
//    return;
//  }
//
//  //random events
//  if(Math.random() <= OregonH.EVENT_PROBABILITY) {
//    this.eventManager.generateEvent();
//  }
//  
//};
// 
//// pause the journey
//OregonH.Game.pauseJourney = function() {
//  this.gameActive = false;
//};
// 
//// resume the journey
//OregonH.Game.resumeJourney = function() {
//  this.gameActive = true;
//  this.step();
//};
// 
// 
////init game
//OregonH.Game.init();