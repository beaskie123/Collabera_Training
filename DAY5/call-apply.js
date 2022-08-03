// call() apply () methods


var car = {
    registrationNumber: "FT1234",
    brand: "Benz",
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + "  " + this.brand)
}

displayDetails.apply(car, ["Bea"])

displayDetails.call(car, "Bea")

// Note that when using the apply() function the parameter must be place in an array. 