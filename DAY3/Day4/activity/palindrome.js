const checkWord = (data) => {
    const convert = data.split("")
    let temp = ''
    
    for(i=convert.length-1; i >= 0 ;i--)
    {
        temp += convert[i]
    }
    if (temp === data) {
        console.log(`${data} is a palindrome`)
    }
    else {
        console.log(`${data} is not a palindrome`)
    }
}

checkWord('dog')