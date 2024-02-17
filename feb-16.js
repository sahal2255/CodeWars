// var maximu = function(list){
//     var list = Array.from(arguments)
//     const maximum = Math.max(...list)
//     const minimum = Math.min(...list)
//     console.log("Maximum:",maximum);
//     console.log('Minimum:',minimum);
//   }
  
//   maximu(4,6,2,1,9,63,-134,566)

// function max(list){
//     return Math.max(...list)
// }
// function min(list){
//     return Math.min(...list)
// }
// console.log(max([4,6,2,1,9,63,-134,566]));
// console.log(min([4,6,2,1,9,63,-134,566]));




// function fetchData(callback) {
//     setTimeout(function() {
//       const data = "Some data";
//       callback(null, data); 
//     }, 1000);
//   }
//   fetchData(function(error, data) {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log("Data:", data);
//     }
//   });




// promise.then using  a asynchronous operation

// const promise = new Promise ((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('result')
//     },1000)

// })
// promise.then((res)=>{
//     console.log(res);
// },(err)=>{
//     alert(err)
// })




// const promise = new Promise((resolve, reject) => {  
//     setTimeout(() => {
//       resolve('*');
//     }, 1000);
//   });
  
//   const twoStars = (star) => {  
//     return (star + star);
//   };
  
//   const oneDot = (star) => {  
//     return (star + '.');
//   };
  
//   const print = (val) => {
//     console.log(val);
//   };
  
//   // Chaining them all together
//   promise.then(twoStars).then(oneDot).then(print);




const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  
  Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
  });