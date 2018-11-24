// Write a JavaScript program that will calculate the price of 30 iPhones brought in from USA, where the price of one iPhone is $899.95, the customs rate is 5% and the tax rate is 18%.


function iphonePrice(number) { 
    var price = 899.95;
    var customs = (price * 0.05)/100;
    var tax = (price * 0.18) /100;
    var totalPrice = price + customs + tax;
    var realDeal = number * totalPrice;
    console.log(realDeal);
    return realDeal;
}

iphonePrice (30);
