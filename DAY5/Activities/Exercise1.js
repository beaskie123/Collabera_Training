const newWord = (data) => {
    a = data.split('')
    b = data.split(' ')
    temp =  [];
    counter = 0 ;
    counter2 = 0
    

    for(i = 0; i< a.length; i++){
        if(a[i] !== ' ')
        counter ++;
    }
    for(i = 0; i < b.length; i++){
        counter2 ++;
    }
    console.log(`The Number of Words: ${counter2}`)
    console.log(`The Number of letters: ${counter}` )
}

newWord("She  Sells sea Shells on the sea shore")