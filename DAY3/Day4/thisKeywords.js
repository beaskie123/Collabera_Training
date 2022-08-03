'use strict'

function printThis() {
    console.log(this)
}

printThis()

const india = {
    name: 'the Country India',
    independencies: 1947,

    describe() {
        console.log(`${this.name} got its independencies on ${this.independencies}`)
    },
}

india.describe()


// In a nested object, this refers to the current object scope of the method,
//this.symbol within the details object refers to details.symbol
const india1 = {
    name: 'the Country India',
    independencies: 1947,

    details: {
        
        flag: 'tricolored',
        currency: 'INR',
        printDetails(){
            console.log(`the flag is ${this.flag} and the currency is  ${this.currency}`)
        }
        }
    }
    
    india1.details.printDetails()


    function Country (name , independenciesOn) {
        this.name = name;
        this.independenciesOn = independenciesOn;

        this.describe = function() {
            console.log(`${this.name} got its dependencies on ${this.independenciesOn}`)
        }
    }

    const india3 = new Country ('The Country India', 1947)

    india3.describe()


    // this in the describe method refers to the insance of country , which is india

    class Countrys {
        constructor(name, independenceOn){
            this.name = name;
            this.independenceOn = independenceOn
        }
        describe() {
            console.log(`${this.name} got its dependencies on ${this.independenceOn}.`)
        }
    }

    const india4 = new Countrys('the Country India', 1947)

    india4.describe()

    // ARROW FUNCTION

    const myNameIs = {
        name: 'Bea Andrea',
        regularFunction: function() {
            console.log(this.name)
        },

        arrowFunction: () => {
            console.log(this.name)
        }
    }

    myNameIs.regularFunction()
    myNameIs.arrowFunction()