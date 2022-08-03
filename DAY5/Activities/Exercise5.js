const newArr = (data) => {
    counter = 0 ;

    for(i = 0; i < data.length; i++){
        let a = data[i].split('')
        console.log(a.length)
    }
}
newArr(['hello', 'world'])