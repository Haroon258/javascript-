// arthmatic oprater
/*var a = 23;
 var b = 76;
 var c=
 document.write(a+b);
 document.write("</br>");
a--;
document.write(a+b);*/

// assignnment oprater

//  var a = 35;
//  var b = 10;
//  b *=a ;
// document.write(b);

// if property

// var a = 20;
// var b = 10;

// if(a != b){
//     document.write('send succesfully');
// }

// logical operater || && !

// var a = 30;
// var b = 10;
// if(b >= a || b<=a){
//     document.write('money transfer succesfully');
// }

// else statment

// var a = 54;
// var b = 65;

// if(b !== a){
//     document.write('succesfully send');
// }else{
//     document.write('not send succesfully');
// }

// if else if
// var time= 24 ;

// if(time >= 1 && time< 12){
//     document.write('AM');
// }else if(time >= 12 && time <= 24){
//     document.write('PM');
// }else{
//     document.write('invalid time');
// }

// terny oprater
// var a =1000;
// var b ;

// b=(100< a)? "true" : "false";
// document.write(b);

// switch case

// var day = 6;

// switch (day) {
//         case 1:
//         document.write('monday');
//         break;

//         case 2:
//         document.write('tuseday');
//         break;

//         case 3:
//         document.write('wednesday');
//         break;

//         case 4:
//         document.write('thursday');
//         break;

//         case 5:
//         document.write('friday');
//         break;

//         case 6:
//         document.write('saturday');
//         break;

//         case 7:
//         document.write('sunday');
//         break;

//     default:
//         document.write("inter the valid day")
//         break;
// }

// alert box

// var a = 49;
// var b = 867;

// if('a>b'){
//     alert('warning');
// }else{
//     alert('eror');
// }

// prompt box
//  var a = prompt("Inter Your Name");
//  document.write(a);

// parameter in function

// var a = 23;
// var b = 87;

// document.write(a+b);
//    function abc (a,b){
//     document.write(a + b);
//    }
//    abc();

// function ap (heavy, racer){
//     document.write(heavy+racer);

// }
// ap('jwdkjkcfnnkkldkmnk','hwhhihwkkii');
// ap("jmskjjowjo,jiwduijijf")
// ap("heloo,guys")

// function ob(have, has){
//     var a = ('have' + 'has');
//     return a ;
// }

// var b = ob("very", "funny");
// document.write(b);

//   var a = prompt('heavy type');
//   document.write(a);

// var a=10;
// while (a<=100) {
//     document.write("helo mr harry <br>" );
//     a=a+1;
// }

// var a=1;
// do{
//     document.write( a+"helo word <br>");
//     a=a+1;
// }while(a<=10)

// for (var a= 1; a <=10; a=a+1) {

//     if(a==8){
//         document.write("helo mr <br>");
//         break;
//     }
//     document.write("hello  word <br>");

// }

// for(var a=1; a<=100; a=a+10){

//     for( var b=a; b<a+10; b++ ){
//     document.write( b + "")

//     }
//     document.write("<br>")
// }

// for(var a = 10; a>=1; a-- ){

//         for(var b=1 ; b<=a ; b++ ){
//             document.write(a + '  ');
//         }
//         document.write('<br>');
// }

// var ary=[10,20,30,40];

// for(var a=0; a <= 3; a++ ){
// document.write(ary[a ] + '<br>');
// }


// multidimentional Array
// var ary = [
//   ["harry", "male", "bsc", 223],
//   ["mian", "male", "fsc", 786],
// ];
// for (a = 0; a < 2; a++) {
//   for (b = 0; b < 4; b++) {
//     document.write(ary[a][b] + '       ');
//   }
//   document.write('<br>'+ '        ');
// }


// var a = ['haron' , 'rehan', 'qasim', 'hamza']
// a.unshift("harry");
// document.write(a);



// var a= ['harry', 'rehan', 'faisal',  'mota', 'abdullah']
// a.splice(2, 0 ,'happy life');
// document.write(a);


// var a =['rahul', 'harry']
//  var a ='jkd';
// if (Array.isArray(a)) {
//     document.write('this is an arry');
    
// }else{
//     document.write('this is not an arry');
// }



// includes is use for find an index that exsist or not 
//  var a =['rahul', 'harry', 'naha', 'rehan']
//  var b= a.includes('harry');
//  document.write(b);



// some 
// var a = [2, 3, 17 , 20]
// document.write(a + '<br>');

// var b =a.some(age);
// function age(ages) {
//     return ages>=18;    
// }
// document.write(b);


// find
// var a =[2, 10, 19, 20];
// document.write(a+ '<br>');
// var b = a.find(checkadult);
// function checkadult(age) {
//     return age>=18;
// }
// document.write(b + '<br>');


// filter
// var a =[2, 10, 19, 20]; 
// var b= a.filter(age);
// function age(folter){
//     return folter>=18;
// }
// document.write(b);



// // Fil
// var a =[2, 10, 19, 20];
// a.fill('heyy');
// document.write(a);




// foreach loop
//  var a =["harry", 'happy', 'very', 'well'];

//  a.forEach(function(less){
//     document.write(a + '<br>');
//  });



// forEach looop
// var a =["harry", 'happy', 'very', 'well'];
// a.forEach(function(arry){
//     document.write(arry + '<br> ');
// });



// object

// var a ={
//     fname:'harryy',
//     lname : 'mr',
//    harry:function(){
//     return this.fname;
//    },
//    mr:function(){
//     return 33333333;
//    },
// }
// document.write(a.mr());




// var a = new Object();
// a.harry="very well";
// a.happy="top hell";
// a.never="well done";
// document.write(a.happy)





// var a = [
//     {name:'harry', age:'26'},
//     {name:'happy', age:'2765'},
//     {name:'horain', age:'86767'},
// ];

// for (let b = 0; b < a.length; b++) {
//     document.write(a[b].name +' ' +a[b].age+'<br>'  );
    
// }


// map
// var a = [21,34,324,34];
// var b= a.map(test);
// function test(c){
//     return c*10;
// }
// document.write(b);


// number method
// var a = 865.784767;
// var b = a.toFixed(7);
// document.write(b);




// // math method
// var a = Math.PI;
// document.write(a);






// var a = new Date('2012 6 march');
// // a.setFullYear(2020);
// // document.write(a.getMonth());

// var element;
// element=document.getElementById("head").innerText;
// console.log(element);

// var element;
// document.querySelector(".head").className="abc";
// element=document.querySelector(".head").className;
// // element=document.querySelector('.head').style.backgroundColor;
// console.log(element);

// document.getElementById("head").onclick=abc;

// function abc(){
//     document.getElementById("head").style.color="red";
// }