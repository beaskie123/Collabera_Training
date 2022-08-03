function ArgCounter() {
	console.log(arguments.length)
}

ArgCounter(10); //1
ArgCounter(); //0
ArgCounter(10,20,30,40,50); //5