//1. Do the below programs in anonymous function
//a. Print odd numbers in an array
//Using anonymous function

const odd = function (num){
    let result = [];
    for(let i = 0; i<num.length; i++){
        if(num[i]%2==1)
            result.push(num[i]);
    }
    console.log(result.join(' '));    
};

odd([1,2,3,4,5,6,7,8,9,10]);

//output
//1 3 5 7 9

//--------------------------------------------------------------------

//b. Convert all the strings to title caps in a string array
// Using  anonymous function

const titlecaps = function(str){
    for(let i = 0; i < str.length; i++){
        str[i] = str[i].toLowerCase();
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	console.log(str.join(' '));
}

let str = ['i','aM','a','full','stAck', 'developer'];
titlecaps(str);

//output
//I Am A Full Stack Developer.

//--------------------------------------------------------------------

//c.Sum of all numbers in an array
//Using anonymous function
const add = function (n){
    let sum = 0;
    for(let i = 0; i<n.length; i++){
        sum+=n[i];
    }
    console.log(sum);
};
add([1,2,3,4,5,6,7,8,9,10]);

//output
//55

//--------------------------------------------------------------------

//d. Return all the prime numbers in an array
//Using anonymous function
const prime = function (a){
    let result = [];
    for(let i=0; i < a.length; i++){
        let count=0;
        for(let j=1;j <= a[i]; j++){
            if(a[i] % j == 0)   count++;
        }
        if(count == 2)  result.push(a[i]);
    }
    console.log(result.join(' '));
};
let num1 = [1,2,3,4,5,6,7,8,9,10]; 
prime(num1);

//output
//2 3 5 7

//--------------------------------------------------------------------

//e. Return all the palindromes in an array
//Using anonymous function
const palindrome = function (s){
    let answer = [];
    for(let i=0; i<s.length; i++){
        let final = s[i];
        let str1 = final.split('').reverse().join('');
        if(str1 == s[i]) answer.push(s[i]);
    }
    console.log(answer.join(', '));
};
let strarr =["abc", "mom", "dad", "teacher", "madam"];
palindrome(strarr);

//output
//mom, dad, madam

//--------------------------------------------------------------------

//f. Return median of two sorted arrays of the same size.
//Using anonymous function
const median = function (array1,array2){
    let arr = [...array1, ...array2];
    
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
};
let array1 = [3,2,1,4,5];
let array2 = [8,6,7,9,10];
median(array1,array2);
//output
//11

//--------------------------------------------------------------------

//g. Remove duplicates from an array.
//Using anonymous function
const dup=function(inpArr){
    let frequency = {};
       
    for(let i = 0; i < inpArr.length; i++){
        if(frequency[inpArr[i]])
            frequency[inpArr[i]] = frequency[inpArr[i]] + 1;
        else
            frequency[inpArr[i]] = 1;
    }
    let final = [];
    for(let x in frequency){
        if(frequency[x] == 1)
            final.push(x);
    }
    console.log(final.join(' ')); 
};
dup([1,2,3,4,2,5,6,7,3]);
//output
//1 4 5 6 7

//--------------------------------------------------------------------

//h. Rotate an array by k times.
//Using anonymous function

// let rotation = function (input,n,d){
//     let p = 1;
//     while (p <= k){
//         let last = input[0];
        
//         for (let i = 0; i < n - 1; i++)
//             input[i] = input[i + 1];
            
//         input[n - 1] = last;
//         p++;        
//     }
//     let resarr = [];
//     for (let i = 0; i < n; i++)
//            resarr.push(input[i]);
            
//     console.log(resarr.join(' '));
// };
// var inp =[4,5,6,1,2,3];
// var n = inp.length;
// var k = 3;

// rotation(inp, n,k);