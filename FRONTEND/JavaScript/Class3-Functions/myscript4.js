// Calculate the tax that people need to pay for their salary. Until they reach 1000 eur, they pay 11% tax, but when they go above 1000 eur, they pay 18% for the sum above the threshold. (Example: 1300 eur salary, 1000 eur get taxed 11%, 300 eur get taxed 18%, get the total tax). Modify the function to check if the worker is a craftsman, if he is, drop the taxes to 5% and 10% respectively

function taxCalculator(salary){
    var result;
    if(salary <= 1000){
        result = salary * 0.11;
    }else if(salary > 1000){
        result =(salary - 1000) * 0.18 + (1000 * 0.11) ;
    }else { 
        Console.log("Pls input the right amount of salary!!!");
    }
    console.log("The tax for the person's salary is " + result + "$");
    return result;
}
