// Caravan.js

var OregonH = OregonH || {};

// constants
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

OregonH.Game = {};
OregonH.Caravan = {};

// ---------------------------------------------------------
// Caravan

class Caravan {
  constructor() {
    
  }

  init({ day, distance, crew, food, oxen, money, firepower }) {
    this.day = day;
    this.distance = distance;
    this.crew = crew;
    this.food = food;
    this.oxen = oxen;
    this.money = money;
    this.firepower = firepower;
  }
  
  // update weight and capacity
  updateWeight () {
    var droppedFood = 0;
    var droppedGuns = 0;

    // how much can the caravan carry
    this.capacity = this.oxen * OregonH.WEIGHT_PER_OX + this.crew * OregonH.WEIGHT_PER_PERSON;

    // how much weight do we currently have
    this.weight = this.food * OregonH.FOOD_WEIGHT + this.firepower * OregonH.FIREPOWER_WEIGHT;

    // drop things behind if it's too much weight
    // assume guns get dropped before food
    while (this.firepower && this.capacity <= this.weight) {
      this.firepower--;
      this.weight -= OregonH.FIREPOWER_WEIGHT;
      droppedGuns++;
    }

    if (droppedGuns) {
      this.ui.notify('Left ' + droppedGuns + ' guns behind', 'negative');
    }

    while (this.food && this.capacity <= this.weight) {
      this.food--;
      this.weight -= OregonH.FOOD_WEIGHT;
      droppedFood++;
    }

    if (droppedFood) {
      this.ui.notify('Left ' + droppedFood + ' food provisions behind', 'negative');
    }
  }


}


// ---------------------------------------------------------
// Game 

class Game {
  constructor() {
    this.ui = new UI();
    this.caravan = new Caravan(this.ui);
    
    this.caravan.init({
      day: 0,
      distance: 0,
      crew: 30,
      food: 80,
      oxen: 2,
      money: 300,
      firepower: 2
    })
  }
  
}


// --------------------------------------------------------
// UI 

class UI {
  constructor() {
    
  }
}





OregonH.Caravan.init = function (stats) {
  this.day = stats.day;
  this.distance = stats.distance;
  this.crew = stats.crew;
  this.food = stats.food;
  this.oxen = stats.oxen;
  this.money = stats.money;
  this.firepower = stats.firepower;
};

// initiate the game
OregonH.Game.init = function () {
  // setup caravan
  this.caravan = OregonH.Caravan;
  this.caravan.init({
    day: 0,
    distance: 0,
    crew: 30,
    food: 80,
    oxen: 2,
    money: 300,
    firepower: 2
  });
};

// init game
OregonH.Game.init();

// update weight and capacity
OregonH.Caravan.updateWeight = function () {
  var droppedFood = 0;
  var droppedGuns = 0;

  // how much can the caravan carry
  this.capacity = this.oxen * OregonH.WEIGHT_PER_OX + this.crew * OregonH.WEIGHT_PER_PERSON;

  // how much weight do we currently have
  this.weight = this.food * OregonH.FOOD_WEIGHT + this.firepower * OregonH.FIREPOWER_WEIGHT;

  // drop things behind if it's too much weight
  // assume guns get dropped before food
  while (this.firepower && this.capacity <= this.weight) {
    this.firepower--;
    this.weight -= OregonH.FIREPOWER_WEIGHT;
    droppedGuns++;
  }

  if (droppedGuns) {
    this.ui.notify('Left ' + droppedGuns + ' guns behind', 'negative');
  }

  while (this.food && this.capacity <= this.weight) {
    this.food--;
    this.weight -= OregonH.FOOD_WEIGHT;
    droppedFood++;
  }

  if (droppedFood) {
    this.ui.notify('Left ' + droppedFood + ' food provisions behind', 'negative');
  }
};

// update covered distance
OregonH.Caravan.updateDistance = function () {
  // the closer to capacity, the slower
  var diff = this.capacity - this.weight;
  var speed = OregonH.SLOW_SPEED + diff / this.capacity * OregonH.FULL_SPEED;
  this.distance += speed;
};

// food consumption
OregonH.Caravan.consumeFood = function () {
  this.food -= this.crew * OregonH.FOOD_PER_PERSON;

  if (this.food < 0) {
    this.food = 0;
  }
};
