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

function addElement(element, content, parent) {
  var newEl = document.createElement(element);
  newEl.textContent = content;
  parent.appendChild(newEl);
}

function renderStoreHours(){
  //Create child element
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var eTh = document.createElement('th');
  trEl.appendChild(eTh);

  for(var i = 0; i < storeHours.length; i++){
    //Create a child element of the child above
    thEl = document.createElement('th');

    addElement('td',storeHours[i],thEl);

    //Append to table
    trEl.appendChild(thEl);
  }
  var totalEl = document.createElement('th');
  addElement('td','Total',totalEl);
  trEl.appendChild(totalEl);
  pEl.appendChild(trEl);
}

renderStoreHours();


function renderCookieData(){
  for (var i = 0; i < storesArr.length; i++){
    var trEl = document.createElement('tr');
    pEl.appendChild(trEl);

    addElement('td', storesArr[i].name, trEl);
    var total = 0;
    for(var j =0; j< storesArr[i].cookiesPerHourArray.length; j++){
      addElement('td', storesArr[i].cookiesPerHourArray[j], trEl);
      total += storesArr[i].cookiesPerHourArray[j];
    }
    addElement('tdTotal', total,trEl);
  }
}

renderCookieData();

function renderFooterTotal(){
  var trEl = document.createElement('tr');
  addElement('td','Totals',trEl);

  var runningTotal = 0;

  pEl.appendChild(trEl);

  for(var i = 0; i < storeHours.length;i++){
    var total = 0;

    for(var j = 0; j < storesArr.length; j++){
      total += storesArr[j].cookiesPerHourArray[i];
    }

    addElement('td',total,trEl);
    runningTotal += total;
  }
  addElement('td', runningTotal, trEl);
}

renderFooterTotal();

//ADDING FORM TO TABLE
//
//
//

var newStoreForm = document.getElementById('newStoreForm');

function addNewStore(){
  var lastElement = storesArr.length - 1;

  var trEl = document.createElement('tr');
  addElement('td', storesArr[lastElement].name,trEl);
  var total = 0;

  for(var i = 0; i < storesArr[lastElement].cookiesPerHourArray.length; i++){

    addElement('td', storesArr[lastElement].cookiesPerHourArray[i],trEl);

    total += storesArr[lastElement].cookiesPerHourArray[i];
  }
  addElement('td', total, trEl);

  pEl.appendChild(trEl);
}

function handleSubmit(event){

  event.preventDefault();

  var name = event.target.name.value;

  var minCustomersPerHour = Number(event.target.minCustomersPerHour.value);

  var maxCustomersPerHour = Number(event.target.maxCustomersPerHour.value);

  var avgCookiesPerCustomer = Number(event.target.avgCookiesPerCustomer.value);

  new Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer);

  //remove totals row form table
  //the parent element (id = table) is just an array with each table row being its own element in that array. I accessed the array by putting table.childNodes into the console log to find which one was the footer totals
  pEl.removeChild(pEl.childNodes[7]);

  //created a funtion that only add new store data
  addNewStore();

  //rerun the render footer function to readd all store hourly totals
  renderFooterTotal();


  event.target.name.value = null;
  event.target.minCustomersPerHour.value = null;
  event.target.maxCustomersPerHour.value = null;
  event.target.avgCookiesPerCustomer.value = null;
}

newStoreForm.addEventListener('submit', handleSubmit);
