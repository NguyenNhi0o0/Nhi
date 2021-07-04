// console.log(1);
// let promise1 = new Promise(function(res, rej) {
//     setTimeout(function(){
//         let a = 2;  
//         if (a){ // (a): a khac 0
//             res(a)
//         }else{
//             rej('that bai')
//         }
//     },3000)
// })
// // x.then(function(res) {
// //     console.log(13,res);
// // }).catch(function(rej){
// //     console.log(15,rej);
// // })
// // let promise2 = new Promise(function(res, rej){
// //     promise1.then(function (data){
// //         res(data * 2);
// //     }).catch(function(err){
// //         rej(err);
// //     });
// // });
// // promise2.then(function(res){
// //     console.log(25,res);
// // }).catch(function(rej){
// //     console.log(27,rej);
// // })

// let promise2 = new Promise(function(res, rej){
//     setTimeout(function(){
//         let a = 20;
//         if (a){ // (a): a khac 0
//             res(a)
//         }else{
//             rej("that bai")
//         }
//     },5000)

// });
// let promise3 =  new Promise(function(res, rej){
//     setTimeout(function(){
//         let a = 0;
//         if (a){ // (a): a khac 0
//             res(a)
//         }else{
//             rej("that bai")
//         }
//     },5000)

// });
// Promise.all([promise1, promise2, promise3])
//     .then(function(data){
//         console.log(data);
//         let tong = 0;
//         for (let i = 0; i < data.length; i++) {
//             tong = tong + data[i];
//         }
//         console.log(tong);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// console.log(2);





// let promise1 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 845;
//         if (a) {
//             res(a)
//         } else {
//             rej("that bai")
//         }
//     }, 3000)
// });
// let promise2 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 842;
//         if (a) {
//             res(a)
//         } else {
//             rej("that bai")
//         }
//     }, 2000)
// });
// let promise3 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 87;
//         if (a) {
//             res(a)
//         } else {
//             rej("that bai")
//         }
//     }, 2000)
// });
// Promise.all([promise1, promise2, promise3])
//     .then(function (data) {
//         console.log(data);
//         // let tong = 0;
//         // for (let i = 0; i < data.length; i++) {
//         //     tong = tong + data[i];
//         // }
//         // console.log(tong);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })




// // // bai6
// let promise1 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 25;
//         if (a) {
//             res(a)
//         } else {
//             rej("that bai")
//         }
//     }, 2000)
// });
// // promise1.then(function (res) {
// //     console.log(res);
// // }).catch(function (rej) {
// //     console.log(rej);
// // })
// let promise2 = new Promise(function (res, rej) {
//     promise1.then(function (data) {
//         console.log(data * 3);
//         res(data * 3);
//     }).catch(function (err) {
//         rej(err);
//     });
// });
// // promise2.then(function (res) {
// //     console.log(res);
// // }).catch(function (rej) {
// //     console.log(rej);
// // })
// let promise3 = new Promise(function (res, rej) {
//     promise2.then (function (data){
//         if (data > 10){
//             console.log(data);
//             res (true);
//         } else rej (false);
//     })
// });
// promise3.then(function (res) {
//     console.log(res);
// }).catch(function (rej) {
//     console.log(rej);
// });




// // bt1
// let promise1 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 3;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 3000)
// });
// let promise2 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 10;
//         if (a) {
//             res(a)
//         } else {
//             rej("that bai")
//         }
//     }, 2000)
// });
// let promise3 = new Promise(function (res, rej) {

//     Promise.all([promise1, promise2])
//     .then(function (data) {
//         let tong = 0;
//         for (let i = 0; i < data.length; i++) {
//             tong = tong + data[i];
//         }
//         res(tong);
        
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// });
// let promise4 = new Promise(function (res, rej) {
//     promise3.then(function (data) {
//         ketqua= 0;
//         for(let i = 0; i < data.length; i++){
//             ketqua = data[i]*3;
//             if (ketqua > 25){
//                 console.log(data);
//             };
//         };
//         res(true);
//     }).catch(function (err) {
//         rej(err);
//     });
// });
// promise4.then(function (res) {
//     console.log(res);
// }).catch(function (rej) {
//     console.log(rej);
// });




// bt2
// let promise1 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 11;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 2000)
// });
// let promise2 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 10;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 3000)
// });
// let promise3 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 15;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 4000)
// });
// let promise4 = new Promise(function (res, rej) {

//     Promise.all([promise1, promise2])
//     .then(function (data) {
//         let tong = 0;
//         for (let i = 0; i < data.length; i++) {
//             tong = tong + data[i];
//         }
//         res(tong);
        
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// });
// // promise4.then(function (res) {
// //     console.log(res);
// // }).catch(function (rej) {
// //     console.log(rej);
// // });
// let promise5 = new Promise(function (res, rej) {

//     Promise.all([promise2, promise3])
//     .then(function (data) {
//         let tong = 0;
//         for (let i = 0; i < data.length; i++) {
//             tong = tong + data[i];
//         }
//         res(tong);
        
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// });
// // promise5.then(function (res) {
// //     console.log(res);
// // }).catch(function (rej) {
// //     console.log(rej);
// // });
// let promise6 = new Promise(function (res, rej) {

//     Promise.all([promise4, promise5])
//     .then(function (data) {
//         if (promise4 > promise5) {
//             res(true);
            
//         } else {
//             rej(false);
//         };
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
// });
// promise6.then(function (res) {
//     console.log(res);
// }).catch(function (rej) {
//     console.log(rej);
// });




// bt7
// let promise1 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 3;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 2000)
// });
// let promise2 = new Promise(function (res, rej) {
//     setTimeout(function () {
//         let a = 7;
//         if (a) {
//             res(a)
//         } else {
//             rej("f")
//         }
//     }, 5000)
// });

// Promise.all([promise1, promise2])
//     .then(function (data) {
//         let tong = data.reduce((total, el) => total + el, 0);
//         console.log(tong);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });





let promise1 = new Promise(function (res, rej) {
        setTimeout(function () {
            let a = [1,9,3,8,2,11];
            if (a) {
                res(a)
            } else {
                rej("f")
            }
        }, 2000)
    });
let promise2 = new Promise(function (res, rej) {
        setTimeout(function () {
            let a = [1,9,3,8,2,11];
            if (a) {
                res(a)
            } else {
                rej("f")
            }
        }, 3000)
    });
let promise3 = new Promise(function (res, rej) {
    setTimeout(function () {
    Promise.all([promise1, promise2])
    .then(function (data) {
        if (equar(data[0], data[1])) {
            data[0].sort(function(a, b) {
                return a - b;
            });
            console.log(data[0]);
        };
    })
    .catch(function (err) {
        console.log(err);
    });
}, 4000)
});
// promise3.then(function (res) {
//     console.log(res);
// }).catch(function (rej) {
//     console.log(rej);
// });

function equar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true;
    }
};