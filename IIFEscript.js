//1. Do the below programs in IIFE

//a. Print odd numbers in an array
//Using IIFE
(function(num){
    let result = [];
    for(let i = 0; i<num.length; i++){
        if(num[i]%2==1){
            result.push(num[i]);        
        }
    }
    console.log(result.join(' '));
})([1,2,3,4,5,6,7,8,9,10]);

//output
//1 3 5 7 9

//--------------------------------------------------------------------

//b. Convert all the strings to title caps in a string array
// Using  IIFE
(function (str){
    for (let i = 0; i < str.length; i++) {
	    str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
})(['i','aM','a','full','stAck', 'developer']);

//output
//I Am A Full Stack Developer.

//--------------------------------------------------------------------

//c.Sum of all numbers in an array
//Using IIFE
let n= [1,2,3,4,5,6,7,8,9,10];
(function (){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    } 
    console.log(sum);
})(n);

//output
//55

//--------------------------------------------------------------------

//d. Return all the prime numbers in an array
//Using IIFE
(function(arr){
    let result = [];
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=1; j<=arr[i]; j++){
            if(arr[i] % j == 0) count++;
        }
        if(count == 2)  result.push(arr[i]);
    }
    console.log(result.join(' '));
})
([1,2,3,4,5,6,7,8,9,10]);

//output
//2 3 5 7

//--------------------------------------------------------------------

//e. Return all the palindromes in an array
//Using IIFE
(function(s){
    //var arr1 =;
    let output =[];
    for(let i=0;i<s.length;i++){
        let final = s[i];
        let str = final.split('').reverse().join('');
        if(str == s[i]) output.push(s[i]);
    }
    console.log(output.join(', '));
   
})(["abc", "mom", "dad", "teacher", "madam"]); 
//output
//mom, dad, madam

//f. Return median of two sorted arrays of the same size.
//Using IIFE
var ar1 = [3,2,1,4,5];
var ar2 = [8,6,7,9,10];
(function (){
    let arr = [...ar1, ...ar2];
    
    arr.sort((a,b) => a-b);
    let len = arr.length;
  
    if(len%2!==0){
        let ans = arr[Math.round(len/2)-1];
        let final = ans;
    }
    else{
        ans = arr[Math.round(len/2)-1]+arr[Math.round(len/2)];
        final = ans;
    }
    console.log(final);
})(ar1,ar2);
//output
//11

//--------------------------------------------------------------------

//g. Remove duplicates from an array.
//Using IIFE
(function (arr){
    let frequency = {};
    
    for(let i = 0; i < arr.length; i++){
        if(frequency[arr[i]])
            frequency[arr[i]] = frequency[arr[i]] + 1;
        else
            frequency[arr[i]] = 1;
    }
    let final = [];
    for(let x in frequency){
        if(frequency[x] == 1)
            final.push(x);
    }
    console.log(final.join(' '));

})([1,2,3,4,2,5,6,7,3]);
  
//output
//1 4 5 6 7

//--------------------------------------------------------------------

//h. Rotate an array by k times.
//Using IIFE