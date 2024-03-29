/********************************

        COOKIE clicker

********************************/

  //defaults
  let cookieCount = 0;
  let cookieCLicker = 1;
  //DOM decleration
  let cookieCounter = document.getElementById('cookie-counter');
  let cookieClicker = document.getElementById('cookie-clicker');


  //everytime a user clicks the button, their cookies are increased by the value of their clickPower.
  cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount()
  })

  //refresh cookies
  let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
  }





  /********************************

          Click Power

  ********************************/

//declare default variables
  let clickPower = 1;
  let clickPowerPriceAmount = 50;
  let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');


//Buy click power
buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    //subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()

    //Upgrade power level
    clickPowerLevelNumber += 1;

    //Update click price
    clickPowerPriceAmount = Math.floor(parseInt(clickPowerPrice.innerHTML) * 1.33);

    // Increase the click power
      clickPower += 1 * Math.floor(parseInt(clickPowerLevelNumber) * 1.05);

    //Increase display of click power TODO

    //refresh shop item
    refreshPowerClick();
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})


let refreshPowerClick = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}





  /********************************

            Grandmas

  ********************************/

  //set default values
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');


//buy a grandma
buyGrandma.addEventListener("click", function() {

  //make sure we have enough cookies and subtract our cookies from the price
  if (cookieCount >= grandmaPriceAmount) {
     // Subtract cookies from the price of the item.
     cookieCount +=  - grandmaPriceAmount;
     refreshCookieCount()

    //upgrade power level
    grandmaLevelNumber += 1;

    //update price
    grandmaPriceAmount = Math.floor(parseInt(grandmaPrice.innerHTML) * 1.33);

    //update grandma power
    grandmaPower += 10 + Math.floor(parseInt(grandmaLevelNumber) * 1.33);

    //turn autoGrandma on!
    autoGrandma = true
    autoGrandmaStart();
    //refresh shop item
    refreshGrandma();
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}



/********************************

          Facilities

********************************/

//set default variables
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()

    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPriceAmount = Math.floor(parseInt(facilityPrice.innerHTML) * 1.33);

    //update facility power
    facilityPower += 600 + Math.floor(parseInt(facilityLevelNumber) * 1.33);;

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})



//game loop
let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}

//refresh shop
let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}



/********************************

          KID HELPERS

********************************/

//set default values
let kidsPower = 50;
let kidsPriceAmount = 1000000;
let kidsLevelNumber = 0;
let kidsAuto = false;

//declare DOM variables
let bringKids = document.getElementById('bring-kids');
let kidsPrice = document.getElementById('kids-price');
let kidsLevel = document.getElementById('kids-level');
let kidsMultiple = document.getElementById('kids-multiple');

//bring a kid
bringKids.addEventListener("click", function() {
    //set autoLoop to false
    kidsAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= kidsPriceAmount) {
      cookieCount -= kidsPriceAmount;
      refreshCookieCount()

    //upgrade power level
    kidsLevelNumber += 1;

    //update price
    kidsPriceAmount = Math.floor(parseInt(kidsPrice.innerHTML) *  1.33);

    //update kids power
    kidsPower += 10 + Math.floor(parseInt(kidsLevelNumber) * 1.01);;

    //turn autoFacility on!
    facilityAuto = true
    autoKidsStart();

    //refresh shop item
    refreshKids();
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
  }
})


//game loop
let autoKidsStart = function() {
    let kidsInt = window.setInterval(function(){
      cookieCount +=  -  kidsPower;
      refreshCookieCount();
    }, 1000);
}

//refresh shop
let refreshKids = function() {
  kidsLevel.innerHTML = kidsLevelNumber
  kidsPrice.innerHTML = kidsPriceAmount;
  kidsMultiple.innerHTML = kidsPower - 10;
}
