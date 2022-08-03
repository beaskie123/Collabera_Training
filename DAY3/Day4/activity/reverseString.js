const newString = (data) => {
    let dataSplit = data.split("")
    let temp = "";
    for(i = dataSplit.length-1;i >=0; i--)
    {
       temp += dataSplit[i]
    }
    console.log(temp)
    
}

newString('ABCDEF')