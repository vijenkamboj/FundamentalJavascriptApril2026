let expenses=[100,200,300,400,500];
let total=expenses.reduce((acc, curr) => acc + curr, 0);
console.log(total); //1500sNAME

let studentsName    =["Alice","Bob","Charlie","David"];
let studentsNameLength=studentsName.map(name=>name.length);
console.log(studentsNameLength); //[5,3,7,5]    
console.log(studentsName.unshift("Eve")); //5
console.log(studentsName); //["Eve","Alice","Bob","Charlie","David"]


//product
let productPrices=[10,20,30,40,50];
let totalProductPrice=productPrices.reduce((acc, curr) => acc * curr, 1);       
console.log(totalProductPrice); //12000000

let discountedPrices=productPrices.map(price=>price*.1);
console.log(discountedPrices); //[1,2,3,4,5]

let affordableProducts=productPrices.filter(price=>price<=30);
console.log(affordableProducts); //[]

let sortedProducts=productPrices.sort((a,b)=>b-a);
console.log(sortedProducts); //[50,40,30,20,10] 
console.log(affordableProducts.reduce((a,b)=>a+b,0)); //0   
            