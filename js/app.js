'use strict';

//Create an Array with store hours
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var storesArr = [];

function Store (name, minCustomersPerHour, maxCustomersPerHour,avgCookiesPerCustomer){
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomerPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.cookiesPerHourArray = [];

  this.cookiesPerHour();

  storesArr.push(this);

}

console.log(storesArr);
Store.prototype.randomCustomers = function (){
  var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
  return randomNumber;
};

Store.prototype.cookiesPerHour = function(){
  for (var i = 0; i < storeHours.length; i++){
    var cookieCalc = Math.round(this.avgCookiesPerCustomer * this.randomCustomers());
    this.cookiesPerHourArray.push(cookieCalc);
  }
};

new Store ('Seattle',23,65,6.3);
new Store ('Tokyo',3,24,1.2);
new Store ('Dubai', 11,38,3.7);
new Store ('Paris',20,38,2.3);
new Store ('Lima',2,16,4.6);

//Declare parent element
var pEl = document.getElementById('table');

function renderHeader(){
  //Create child element
  var cEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var eTh = document.createElement('th');
  cEl.appendChild(eTh);

  for(var i = 0; i < storeHours.length; i++){
    //Create a child element of the child above
    thEl = document.createElement('th');

    //  Add in a table data for head
    var tdEl = document.createElement('td');

    //Add text in table
    tdEl.textContent = storeHours[i];

    //Append children to parents
    thEl.appendChild(tdEl);

    //Append to table
    cEl.appendChild(thEl);
  }
  var totalEl = document.createElement('th');
  var totalTd = document.createElement('td');

  totalTd.textContent = 'Total';
  totalEl.appendChild(totalTd);
  cEl.appendChild(totalEl);
  pEl.appendChild(cEl);
}

renderHeader();

function renderStoreNumbers(){
  for(var i = 0; i < storesArr.length; i++){
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = storesArr[i].name;

    trEl.appendChild(tdEl);
    var total = 0;
    for(var j = 0; j < storesArr[i].cookiesPerHourArray.length; j++){
      var tdEl2 = document.createElement('td');
      tdEl2.textContent = storesArr[i].cookiesPerHourArray[j];
      trEl.appendChild(tdEl2);
      total += storesArr[i].cookiesPerHourArray[j];
    }
    var tdTotal = document.createElement('td');
    tdTotal.textContent = total;
    trEl.appendChild(tdTotal);
    pEl.appendChild(trEl);
  }
}

renderStoreNumbers();

function renderFooterTotal(){

}