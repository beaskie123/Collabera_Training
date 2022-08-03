function choice() {
    if(document.getElementById('male').checked == true) {   
        document.getElementById("result").innerHTML ="Gender: Male";   
    }
    else if (document.getElementById('female').checked == true) 
    {   
        document.getElementById("result").innerHTML ="Gender: Female";   
    }
    else if(document.getElementById('other').checked == true) {   
        document.getElementById("result").innerHTML ="Gender: other";   
    }

}

