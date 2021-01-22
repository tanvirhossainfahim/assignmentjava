
// kilometerToMeter

function kilometerToMeter(km){
    if(km < 0){
        console.error('Kilometer never be negative');
        return;
    }else if(typeof km != 'number'){
        console.error('Only allowed number but '+ typeof km + ' passed');
        return;
    }
    var meter = km*1000;
    return meter;
}

// console.log(kilometerToMeter(['20']));

// budgetCalculator

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop){

    // check if quantity is valid or not
    if(numberOfWatch < 0 || numberOfPhone < 0 || numberOfLaptop < 0){
        console.error('Quantity can not be negative');
        return;
    }

    // if quantity is valid
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    var totalCost = watchPrice*numberOfWatch + phonePrice*numberOfPhone + laptopPrice*numberOfLaptop;
    return totalCost;
}

//console.log(budgetCalculator(-10, 8, 6));

/*
    1-10 = 100
    11-20 = 80 
    20 + = 50
*/

function hotelCost(days){
    // validation perameter
    if(days < 0 || typeof days != 'number'){
        console.error('Days should be positive integer number');
        return;
    }

    // if perameter is valid
    var totalCost = 0;
    var bills = {
        firstTenDays : 100,
        secondTenDays : 80,
        afterAllDays : 50
    };

    for(var i = 1; i <= days; i++){
        if(i <= 10){
            var cost = bills.firstTenDays;
            totalCost = totalCost + cost;
        } else if(i > 10 && i <= 20){
            var cost = bills.secondTenDays;
            totalCost = totalCost + cost;
        } else if(i > 20){
            var cost = bills.afterAllDays;
            totalCost = totalCost + cost;
        }
    }
    return totalCost;
}

//console.log(hotelCost(12));

//megaFriend

function megaFriend(friends){
    if(!Array.isArray(friends)){
        console.error('Unexpected peremeter. only allow array but ' + typeof friends + ' passed');
    }else if(friends.length < 2 ){
        console.error('Array must contains minimum two friends');        
    }else{
        var friendsLength = [];

        for(var i = 0; i < friends.length; i++){
            friendsLength.push(friends[i].length);
        }

        var maximumLength = Math.max(...friendsLength);
        var index = friendsLength.indexOf(maximumLength);
        return friends[index];

    }
}

// var friends = ['Fahim', 'Robin', 'Babu', 'Tanvir', 'A.B. Siddik'];
// console.log(megaFriend(friends));