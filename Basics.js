console.log("Hello, World!");

let a=4;
console.log(a);

console.log(typeof(a))


let i=0;
while(i<5){
    console.log(i);
    i++
}


for(let j=0; j<10; j++){
    if(j%2==0)  
    console.log(j);
}   


let mark=[90,80,70,60,50];
for(let k=0; k<mark.length; k++){
    console.log(mark[k]);
}
// add a numbet at the end of an array
console.log(mark.push(40));
console.log(mark);

//delete the last element of an array
console.log(mark.pop());
console.log(mark);  

//add element in the beginning of a array
console.log(mark.unshift(100));
console.log(mark);

//subarray of an array
let subarray=mark.slice(1,4);
console.log(subarray);

//index of an elelemnt in an array
console.log(mark.indexOf(70));  

//mark array is sorted in ascending order
mark.sort(function(a,b){return a-b});   
console.log(mark);

//check for exitence of an elemnt in an array
console.log(mark.includes(80)); 

//join all the elements of an array into a string
let markString=mark.join(", ");
console.log(markString);

//split a string into an array
let markArray=markString.split(", ");
console.log(markArray); 

//reverse an array
mark.reverse();
console.log(mark);  

//concatenate two arrays
let mark2=[30,20,10];
let combinedMark=mark.concat(mark2);
console.log(combinedMark);  

//filter an array
let filteredMark=combinedMark.filter(function(value){
    return value>=50;
});
console.log(filteredMark);

//map an array
let mappedMark=combinedMark.map(function(value){
    return value*2;
});
console.log(mappedMark);

//reduce an array
let reducedMark=combinedMark.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
},0);
console.log(reducedMark);

//reduce is like sum all elements of an array
let total=combinedMark.reduce((sum,marks)=>sum+marks,0);
console.log(total);


