// UI.js

var OregonH = OregonH || {};
 
OregonH.UI = {};
 
// show a notification in the message area
OregonH.UI.notify = function(message, type){
  document.getElementById('updates-area').innerHTML = '<div class="update-' + type + '">Day '+ Math.ceil(this.caravan.day) + ': ' + message+'</div>' + document.getElementById('updates-area').innerHTML;
};
 
// refresh visual caravan stats
OregonH.UI.refreshStats = function() {
  // modify the dom
  document.getElementById('stat-day').innerHTML = Math.ceil(this.caravan.day);
  document.getElementById('stat-distance').innerHTML = Math.floor(this.caravan.distance);
  document.getElementById('stat-crew').innerHTML = this.caravan.crew;
  document.getElementById('stat-oxen').innerHTML = this.caravan.oxen;
  document.getElementById('stat-food').innerHTML = Math.ceil(this.caravan.food);
  document.getElementById('stat-money').innerHTML = this.caravan.money;
  document.getElementById('stat-firepower').innerHTML = this.caravan.firepower;
  document.getElementById('stat-weight').innerHTML = Math.ceil(this.caravan.weight) + '/' + this.caravan.capacity;
 
  // update caravan position
  document.getElementById('caravan').style.left = (380 * this.caravan.distance/OregonH.FINAL_DISTANCE) + 'px';
};

// show attack
OregonH.UI.showAttack = function(firepower, gold) {
  var attackDiv = document.getElementById('attack');
  attackDiv.classList.remove('hidden');
 
  // keep properties
  this.firepower = firepower;
  this.gold = gold;
 
  // show firepower
  document.getElementById('attack-description').innerHTML = 'Firepower: ' + firepower;
 
  // init once
  if(!this.attackInitiated) {
 
    // fight
    document.getElementById('fight').addEventListener('click', this.fight.bind(this));
 
    // run away
    document.getElementById('runaway').addEventListener('click', this.runaway.bind(this));
 
    this.attackInitiated = true;
  }
};
 
// fight
OregonH.UI.fight = function() {
 
  console.log('Fight!')
  
  var firepower = this.firepower;
  var gold = this.gold;
 
  // damage can be 0 to 2 * firepower
  var damage = Math.ceil(Math.max(0, firepower * 2 * Math.random() - this.caravan.firepower));
 
  // check there are survivors
  if(damage < this.caravan.crew) {
    this.caravan.crew -= damage;
    this.caravan.money += gold;
    this.notify(damage + ' people were killed fighting', 'negative');
    this.notify('Found $' + gold, 'gold');
  }
  else {
    this.caravan.crew = 0;
    this.notify('Everybody died in the fight', 'negative');
  }
 
  // resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
};
 
// runing away from enemy
OregonH.UI.runaway = function(){
  console.log('runway!')
 
  var firepower = this.firepower;
 
  // damage can be 0 to firepower / 2
  var damage = Math.ceil(Math.max(0, firepower * Math.random()/2));
 
  // check there are survivors
  if(damage < this.caravan.crew) {
    this.caravan.crew -= damage;
    this.notify(damage + ' people were killed running', 'negative');
  }
  else {
    this.caravan.crew = 0;
    this.notify('Everybody died running away', 'negative');
  }
 
  // remove event listener
  // document.getElementById('runaway').removeEventListener('click', this.runaway);
 
  //resume journey
  document.getElementById('attack').classList.add('hidden');
  this.game.resumeJourney();
 
};


//show shop
OregonH.UI.showShop = function(products){
 
  //get shop area
  var shopDiv = document.getElementById('shop');
  shopDiv.classList.remove('hidden');
 
  //init the shop just once
  if(!this.shopInitiated) {
 
    //event delegation
    shopDiv.addEventListener('click', function(e){
      //what was clicked
      var target = e.target || e.src;
 
      //exit button
      if(target.tagName == 'BUTTON') {
        //resume journey
        shopDiv.classList.add('hidden');
        OregonH.UI.game.resumeJourney();
      }
      else if(target.tagName == 'DIV' && target.className.match(/product/)) {
 
        OregonH.UI.buyProduct({
          item: target.getAttribute('data-item'),
          qty: target.getAttribute('data-qty'),
          price: target.getAttribute('data-price')
        });
 
      }
    });
 
    this.shopInitiated = true;
  }
 
  //clear existing content
  var prodsDiv = document.getElementById('prods');
  prodsDiv.innerHTML = '';
 
  //show products
  var product;
  for(var i=0; i < products.length; i++) {
    product = products[i];
    prodsDiv.innerHTML += '<div class="product" data-qty="' + product.qty + '" data-item="' + product.item + '" data-price="' + product.price + '">' + product.qty + ' ' + product.item + ' - $' + product.price + '</div>';
  }
};
 
//buy product
OregonH.UI.buyProduct = function(product) {
  //check we can afford it
  if(product.price > OregonH.UI.caravan.money) {
    OregonH.UI.notify('Not enough money', 'negative');
    return false;
  }
 
  OregonH.UI.caravan.money -= product.price;
 
  OregonH.UI.caravan[product.item] += +product.qty;
 
  OregonH.UI.notify('Bought ' + product.qty + ' x ' + product.item, 'positive');
 
  //update weight
  OregonH.UI.caravan.updateWeight();
 
  //update visuals
  OregonH.UI.refreshStats();
};