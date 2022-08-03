function myFun (a ,b,c, ...manyMoreArgs) {
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("manyMoreArgs",manyMoreArgs)

}

myFun("one", "two", "three", "four","five","six")

function fun1( ...theArgs){
    console.log(theArgs.length)
}

fun1()
fun1(5)
fun1(5,6,7,8)