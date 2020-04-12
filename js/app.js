'use strict';

//Create an Array with store hours
var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var storesArr = [];

function Store (city, minCustomersPerHour, maxCustomersPerHour,avgCookiesPerCustomer){
  this.city = city;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomerPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  storesArr.push(this);
}

new Store ('Seattle',23,65,6.3);
new Store ('Tokyo',3,24,1.2);
new Store ('Dubai', 11,38,3.7);
new Store ('Paris',20,38,2.3);
new Store ('Lima',2,16,4.6);

Store.prototype.customersPerHour = function (){
  var randomNumber = Math.floor(Math.random() * (this.maxCustomerPerHour-this.minCustomersPerHour)) + this.minCustomersPerHour;
  return randomNumber;
};


//nested for loop to get customers per hour for every store
for(var i = 0; i < storesArr.length; i++){
  var customersPerHourArray = [];
  storesArr[i].customersPerHourArray = customersPerHourArray;
  for (var j = 0; j < storeHours.length; j++){
    storesArr[i].customersPerHourArray.push(storesArr[i].customersPerHour());
  }
}

//nested for loop to get cookies per hour for every store
for(i = 0; i < storesArr.length; i++){
  var cookiesPerHourArray = [];
  storesArr[i].cookiesPerHourArray = cookiesPerHourArray;
  for(j = 0; j < storeHours.length; j++){
    storesArr[i].cookiesPerHourArray.push(Math. round(storesArr[i].customersPerHourArray[j] * storesArr[i].avgCookiesPerCustomer));
  }
}


//for loop to get totals for cookies sold for every store
for(i = 0; i < storesArr.length; i++){
  var totalCookies = 0;
  for(j = 0; j < storesArr[i].cookiesPerHourArray.length; j++){

    totalCookies = totalCookies + storesArr[i].cookiesPerHourArray[j];
  }
  storesArr[i].totalCookies = totalCookies;
}
console.log(storesArr[1]);

// // // //create a for loop to generate cookies sold per hour
// for(i = 0; i < storesArr.length; i++){
//   storesArr[i].cookiesPerHour();
// }
// console.log(storesArr[0]);
//pushes each number into cookiePerHourArray to store
// }

// // console.log(seattleStore.cookiesPerHourArray);

// //anchor data to parent element
// var pEl = document.getElementById('store1');

// //created a for loop for hour by hour cookie sales
// for(i = 0; i < seattleStore.cookiesPerHourArray.length; i++){
//   //create a new element
//   var liEl = document.createElement('li');
//   //Give it content
//   liEl.textContent = `${storeHours[i]} : ${seattleStore.cookiesPerHourArray[i]}`;
//   //Append the child element to the parent element
//   pEl.appendChild(liEl);
// }

// //for loop for cookie total/
// var totalCookies = 0;
// for(i = 0; i < seattleStore.cookiesPerHourArray.length; i++){
//   totalCookies= totalCookies + seattleStore.cookiesPerHourArray[i];
// }

// // create a new element
// liEl = document.createElement('li');
// //Give it content
// liEl.textContent = `Total : ${totalCookies}`;
// //Append the child element to the parent element
// pEl.appendChild(liEl);


// //Create array to store simulated cookies per hour
// tokyoStore.cookiesPerHourArray = [];

// //create a for loop to generate cookies sold per hour
// for(i = 0; i < storeHours.length; i++){
//   tokyoStore.cookiesPerHourArray.push(Math.round(tokyoStore.customersPerHour()*tokyoStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
// }

// // console.log(tokyoStore.cookiesPerHourArray);

// //anchor data to parent element
// pEl = document.getElementById('store2');

// for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
//   //create a new element
//   liEl = document.createElement('li');
//   //Give it content
//   liEl.textContent = `${storeHours[i]} : ${tokyoStore.cookiesPerHourArray[i]}`;
//   //Append the child element to the parent element
//   pEl.appendChild(liEl);
// }

// totalCookies = 0;
// for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
//   totalCookies = totalCookies + tokyoStore.cookiesPerHourArray[i];
// }

// // create a new element
// liEl = document.createElement('li');
// //Give it content
// liEl.textContent = `Total : ${totalCookies}`;
// //Append the child element to the parent element
// pEl.appendChild(liEl);

// //Create array to store simulated cookies per hour
// dubaiStore.cookiesPerHourArray = [];

// //create a for loop to generate cookies sold per hour
// for(i = 0; i < storeHours.length; i++){
//   dubaiStore.cookiesPerHourArray.push(Math.round(dubaiStore.customersPerHour() * dubaiStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
// }

// // console.log(dubaiStore.cookiesPerHourArray);

// //anchor data to parent element
// pEl = document.getElementById('store3');

// for(i = 0; i < dubaiStore.cookiesPerHourArray.length; i++){
//   //create a new element
//   liEl = document.createElement('li');
//   //Give it content
//   liEl.textContent = `${storeHours[i]} : ${dubaiStore.cookiesPerHourArray[i]}`;
//   //Append the child element to the parent element
//   pEl.appendChild(liEl);
// }

// totalCookies = 0;
// for(i = 0; i < dubaiStore.cookiesPerHourArray.length; i++){
//   totalCookies = totalCookies + dubaiStore.cookiesPerHourArray[i];
// }

// // create a new element
// liEl = document.createElement('li');
// //Give it content
// liEl.textContent = `Total : ${totalCookies}`;
// //Append the child element to the parent element
// pEl.appendChild(liEl);

// //Create array to store simulated cookies per hour
// parisStore.cookiesPerHourArray = [];

// //create a for loop to generate cookies sold per hour
// for(i = 0; i < storeHours.length; i++){
//   parisStore.cookiesPerHourArray.push(Math.round(parisStore.customersPerHour()*parisStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
// }

// //anchor data to parent element
// pEl = document.getElementById('store4');

// for(i = 0; i < tokyoStore.cookiesPerHourArray.length; i++){
//   //create a new element
//   liEl = document.createElement('li');
//   //Give it content
//   liEl.textContent = `${storeHours[i]} : ${tokyoStore.cookiesPerHourArray[i]}`;
//   //Append the child element to the parent element
//   pEl.appendChild(liEl);
// }

// totalCookies = 0;
// for(i = 0; i < parisStore.cookiesPerHourArray.length; i++){
//   totalCookies = totalCookies + parisStore.cookiesPerHourArray[i];
// }

// // create a new element
// liEl = document.createElement('li');
// //Give it content
// liEl.textContent = `Total : ${totalCookies}`;
// //Append the child element to the parent element
// pEl.appendChild(liEl);

// //Create array to store simulated cookies per hour
// limaStore.cookiesPerHourArray = [];

// //create a for loop to generate cookies sold per hour
// for(i = 0; i < storeHours.length; i++){
//   limaStore.cookiesPerHourArray.push(Math.round(limaStore.customersPerHour()*limaStore.avgCookiesPerCustomer));//pushes each number into cookiePerHourArray to store
// }

// //anchor data to parent element
// pEl = document.getElementById('store5');

// for(i = 0; i < limaStore.cookiesPerHourArray.length; i++){
//   //create a new element
//   liEl = document.createElement('li');
//   //Give it content
//   liEl.textContent = `${storeHours[i]} : ${limaStore.cookiesPerHourArray[i]}`;
//   //Append the child element to the parent element
//   pEl.appendChild(liEl);
// }

// totalCookies = 0;
// for(i = 0; i < limaStore.cookiesPerHourArray.length; i++){
//   totalCookies = totalCookies + limaStore.cookiesPerHourArray[i];
// }

// // create a new element
// liEl = document.createElement('li');
// //Give it content
// liEl.textContent = `Total : ${totalCookies}`;
// //Append the child element to the parent element
// pEl.appendChild(liEl);