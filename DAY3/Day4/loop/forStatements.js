let str = '' ;

for( i = 0; i < 9 ; i ++) {
    str = str + i;
}

console.log(str);

// valid Syntax

var i = 0;
for(; i < 9; i++){
    console.log(i)
}

for(i = 0; ; i ++) {
    console.log(i);
    if(i > 3) break;
}

var i = 0;

for(;;) {
    if(i > 3) break;
    console.log(i);
    i++
}