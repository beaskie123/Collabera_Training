const num = (data) => {

    if (data.length !== 13) {
        return ('Invald Number')
    }
    let temp = '';
    for(i = 0 ; i <= data.length-1; i ++) {
        temp += data[i]
        if(i == 2) {
            temp += " ";
        }
    }

    return temp;

}

console.log(num('+919911567974'))