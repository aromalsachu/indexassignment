var a ,b 
a=3
b=5
sum=a+b;
console.log(sum);



let height = 3
let width = 3
area= height*width
console.log(area);


let age1 =19
if (age1>=18){
    console.log('eligible for voting');
}
    if (age1<=18){
        console.log('not eligible for voting');
    }


 let mark =79
 
if  ( mark  >=60 && mark <= 69 ){
    console.log('GRADE D');

}
if (mark >=70&& mark <=79) {
    console.log('GRADE C');
}



let number = 5
 
if  ( number >=1 ){
    console.log('positive');

}
if (number <=-1 ) {
    console.log('negative');
}
if (number <=0) {
    console.log('zero');
}





let age=9
 
if  ( age  >=0 && age <= 12 ){
    console.log('CHILD');

}
if (age >=13&& age <=19) {
    console.log('TEENEGER');
}
if  ( age  >=20 && age <= 59 ){
    console.log('ADULT');
}

if  ( age  >=60 ){
    console.log('SENIOR');

}






let arr = [1, 3, 9, 12, 15, 18, 21];
let square = arr.map((arr)=>{
return arr ** 2;
})
console.log(square);


let i 
let sum1 =0
for (i = 1 ; i<=10; i++) {

    if (i%3 === 0 ){
        console.log('i is an odd number');
    }
    
}