class User {
    name = " ";
    constructor(name)
    {
        this.name = name
;    }
sayHi()
{
    console.log(this.name)
}

}

var user = new User("bea")
user.sayHi();