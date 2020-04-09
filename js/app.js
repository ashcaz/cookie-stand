'use strict';

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
    var randomNumber = Math.floor(Math.random() * (65-23)) + 23;
    return randomNumber;
  }
};

//Create an Array with store hours
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//Create array to store simulated cookies per hour
seattleStore.cookiesPerHourArray = [];

//create a for loop to generate cookies sold per hour
for(var i = 0; i < storeHours.length; i++){
  seattleStore.cookiesPerHourArray.push(Math.round(seattleStore.customersPerHour()*seattleStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
}

console.log(seattleStore.cookiesPerHourArray);

