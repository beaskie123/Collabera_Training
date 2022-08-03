var car = {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function () {
        console.log(this.registrationNumber + " " + this.brand);
    }
}
car.displayDetails();

// Use bind method if you want to copy a method from a class
var myCarDetails = car.displayDetails.bind(car);
myCarDetails();

var car1= {
    registrationNumber: "FT1234",
    brand: "Benz",

    displayDetails: function (ownerName) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}
//Example of passing argumenst with bind ()
var myCarDetails1 = car1.displayDetails.bind(car, "bea");
myCarDetails1()


