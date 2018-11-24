// Calculate the cost of registering a vehicle if the tariff is:
// 3000 denars for vehicles that have less or equal than 85 bhp
// 5000 denars for vehicles above 85 bhp but less or equal than150 bhp
// 15000 denars for vehicles above 150 bhp

function vehicleRegistrationCost(bhp) {
    var result;
    if(bhp <= 85) { 
        result = "Your cost is 3000den";
    } else if (bhp <= 150){
        result = "Your cost is 5000den";
    } else { 
        result = "You cost is 15000den";
    }

    console.log(result);
    return(result);
}