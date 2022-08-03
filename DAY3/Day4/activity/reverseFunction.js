const newArr = (data) => {
    const convert = data.split('')
    temp = '';

    for(i=convert.length-1; i >= 0 ; i--){
        temp += convert[i]
    }
    console.log(temp)
}

newArr("hello World");