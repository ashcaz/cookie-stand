'use strict';

//Create an Array with store hours
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//create object for  store 1
var seattleStore = {
  //create properies for min hourly customers
  minCustomersPerHour: 23,
  //create property for max hourly customers
  maxCustomerPerHour: 65,
  //create property for average cookies per customer
  avgCookiesPerCustomer: 6.3,
  //create method to generate random number of customers per hour
  customersPerHour: function (){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
    return randomNumber;
  }
};

//Create array to store simulated cookies per hour
seattleStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(var i = 0; i < storeHours.length; i++){
  seattleStore.cookiesPerHourArray.push(Math.round(seattleStore.customersPerHour()*seattleStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

// console.log(seattleStore.cookiesPerHourArray);

//anchor data to parent element
var pEl = document.getElementById('store1');

//created a for loop for hour by hour cookie sales
for(i = 0; i < seattleStore.cookiesPerHourArray.length; i++){
  //create a new element
  var liEl = document.createElement('li');
  //Give it content
  liEl.textContent = `${storeHours[i]} : ${seattleStore.cookiesPerHourArray[i]}`;
  //Append the child element to the parent element
  pEl.appendChild(liEl);
}

//for loop for cookie total/
var totalCookies = 0;
for(i = 0; i < seattleStore.cookiesPerHourArray.length; i++){
  totalCookies= totalCookies + seattleStore.cookiesPerHourArray[i];
}

// create a new element
liEl = document.createElement('li');
//Give it content
liEl.textContent = `Total : ${totalCookies}`;
//Append the child element to the parent element
pEl.appendChild(liEl);


//create object for  store 2
var tokyoStore = {
  //create properies for min hourly customers
  minCustomersPerHour: 3,
  //create property for max hourly customers
  maxCustomerPerHour: 24,
  //create property for average cookies per customer
  avgCookiesPerCustomer: 1.2,
  //create method to generate random number of customers per hour
  customersPerHour: function (){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
    return randomNumber;
  }
};

//Create array to store simulated cookies per hour
tokyoStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(i = 0; i < storeHours.length; i++){
  tokyoStore.cookiesPerHourArray.push(Math.round(tokyoStore.customersPerHour()*tokyoStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

// console.log(tokyoStore.cookiesPerHourArray);

//anchor data to parent element
pEl = document.getElementById('store2');

for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
  //create a new element
  liEl = document.createElement('li');
  //Give it content
  liEl.textContent = `${storeHours[i]} : ${tokyoStore.cookiesPerHourArray[i]}`;
  //Append the child element to the parent element
  pEl.appendChild(liEl);
}

totalCookies = 0;
for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
  totalCookies = totalCookies + tokyoStore.cookiesPerHourArray[i];
}

// create a new element
liEl = document.createElement('li');
//Give it content
liEl.textContent = `Total : ${totalCookies}`;
//Append the child element to the parent element
pEl.appendChild(liEl);



//create object for  store 3
var dubaiStore = {
  //create properies for min hourly customers
  minCustomersPerHour: 11,
  //create property for max hourly customers
  maxCustomerPerHour: 38,
  //create property for average cookies per customer
  avgCookiesPerCustomer: 3.7,
  //create method to generate random number of customers per hour
  customersPerHour: function (){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
    return randomNumber;
  }
};

//Create array to store simulated cookies per hour
dubaiStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(i = 0; i < storeHours.length; i++){
  dubaiStore.cookiesPerHourArray.push(Math.round(dubaiStore.customersPerHour() * dubaiStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

// console.log(dubaiStore.cookiesPerHourArray);

//anchor data to parent element
pEl = document.getElementById('store3');

for(i = 0; i < dubaiStore.cookiesPerHourArray.length; i++){
  //create a new element
  liEl = document.createElement('li');
  //Give it content
  liEl.textContent = `${storeHours[i]} : ${dubaiStore.cookiesPerHourArray[i]}`;
  //Append the child element to the parent element
  pEl.appendChild(liEl);
}

totalCookies = 0;
for(i = 0; i < dubaiStore.cookiesPerHourArray.length; i++){
  totalCookies = totalCookies + dubaiStore.cookiesPerHourArray[i];
}

// create a new element
liEl = document.createElement('li');
//Give it content
liEl.textContent = `Total : ${totalCookies}`;
//Append the child element to the parent element
pEl.appendChild(liEl);



//create object for  store 4
var parisStore = {
  //create properies for min hourly customers
  minCustomersPerHour: 20,
  //create property for max hourly customers
  maxCustomerPerHour: 38,
  //create property for average cookies per customer
  avgCookiesPerCustomer: 2.3,
  //create method to generate random number of customers per hour
  customersPerHour: function (){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
    return randomNumber;
  }
};

//Create array to store simulated cookies per hour
parisStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(i = 0; i < storeHours.length; i++){
  parisStore.cookiesPerHourArray.push(Math.round(parisStore.customersPerHour()*parisStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

// console.log(tokyoStore.cookiesPerHourArray);

//anchor data to parent element
pEl = document.getElementById('store4');

for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
  //create a new element
  liEl = document.createElement('li');
  //Give it content
  liEl.textContent = `${storeHours[i]} : ${tokyoStore.cookiesPerHourArray[i]}`;
  //Append the child element to the parent element
  pEl.appendChild(liEl);
}

totalCookies = 0;
for(i = 0; i < parisStore.cookiesPerHourArray.length; i++){
  totalCookies = totalCookies + parisStore.cookiesPerHourArray[i];
}

// create a new element
liEl = document.createElement('li');
//Give it content
liEl.textContent = `Total : ${totalCookies}`;
//Append the child element to the parent element
pEl.appendChild(liEl);




//create object for  store 5
var limaStore = {
  //create properies for min hourly customers
  minCustomersPerHour: 2,
  //create property for max hourly customers
  maxCustomerPerHour: 16,
  //create property for average cookies per customer
  avgCookiesPerCustomer: 4.6,
  //create method to generate random number of customers per hour
  customersPerHour: function (){
    var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
    return randomNumber;
  }
};

//Create array to store simulated cookies per hour
limaStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(i = 0; i < storeHours.length; i++){
  limaStore.cookiesPerHourArray.push(Math.round(limaStore.customersPerHour()*limaStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

// console.log(limaStore.cookiesPerHourArray);

//anchor data to parent element
pEl = document.getElementById('store5');

for(i = 0; i < limaStore.cookiesPerHourArray.length; i++){
  //create a new element
  liEl = document.createElement('li');
  //Give it content
  liEl.textContent = `${storeHours[i]} : ${limaStore.cookiesPerHourArray[i]}`;
  //Append the child element to the parent element
  pEl.appendChild(liEl);
}

totalCookies = 0;
for(i = 0; i < limaStore.cookiesPerHourArray.length; i++){
  totalCookies = totalCookies + limaStore.cookiesPerHourArray[i];
}

// create a new element
liEl = document.createElement('li');
//Give it content
liEl.textContent = `Total : ${totalCookies}`;
//Append the child element to the parent element
pEl.appendChild(liEl);
