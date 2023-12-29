//a. Print odd numbers in an array
//using arrow function

let num = [1,2,3,4,5,6,7,8,9,10];

let oddnumber = num.filter((x) => {
    return x % 2 !== 0;
});
console.log(oddnumber.join(' '));

//output
//1 3 5 7 9

//--------------------------------------------------------------------

//b. Convert all the strings to title caps in a string array
//using arrow function
let s = ['i','aM','a','full','stAck', 'developer'];
let strCaps = s.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
});
console.log(strCaps.join(' '));

//output
//I Am A Full Stack Developer.

//--------------------------------------------------------------------

//c.Sum of all numbers in an array
//Using arrow function
let arr = [1,2,3,4,5,6,7,8,9,10];
const add1=arr.reduce((a,b)=>a+b);
console.log(add1);
//output:
//55

//--------------------------------------------------------------------

//d. Return all the prime numbers in an array
//using arrow function
let prime1 = (a) => {
    return a.filter((n) => {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) return false;
        }
        return n > 1;
    });
};
let result = prime1(num)
console.log(result.join(' '));
//output
//2 3 5 7

//--------------------------------------------------------------------

//e. Return all the palindromes in an array
//using arrow function
//using arrow function
let Str =["abc", "mom", "dad", "teacher", "madam"];
const out = Str.filter((Pstr) =>{
    for (let i = 0; i<Pstr.length / 2; i++){
        if (Pstr[i] == Pstr[len - i - 1]){
            return true;
        }
        else{
            return false;
        }
    }
});
console.log(out.join(' '));

//output
//mom, dad, madam