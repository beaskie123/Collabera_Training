function longestString(str) {
var max = str[0].length;
str.map( v => max = Math.max(max, v.length))
result = str.filter(v => v.length == max);
return result
}

console.log(longestString('abc',"dvsfhddghhet","dvdfbf"))

// REDO LATER