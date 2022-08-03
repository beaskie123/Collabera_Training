const newArr= (data) => {
    temp = '';
    counter = 0; 
    for(i = 0 ; i <= data.length -1; i++) {
        temp = Math.sqrt(data[i])
        console.log(temp)
    }
}

newArr([2,3,4,5])