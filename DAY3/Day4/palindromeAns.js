function isPalindrome(N)
{
    str = "" + N;
    len = str.length;
    for (var i = 0 ; i < len / 2 ; i ++){
        if (str[i] != str[len -1 -i])
        return false;
    }
    return true;
    
}

function isPalinArray (arr , n) 
{
    var counter = 0 ;
    for (var i= 0; i < n; i++)
    {
        ans = isPalindrome(arr[i])
        if(ans == true)
        counter++;
    }
    console.log("Number of Palindrome in the Array: " +counter)
}
arr = [123,121,213,666,404,208];
n= arr.length

res = isPalinArray(arr, n)