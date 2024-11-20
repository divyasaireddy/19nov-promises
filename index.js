

// Task :1) created promise chaining scenario where you need to enter bookmyshow app,
//  after select date and after select theatre, after select movie and after that select seat and 
//  need to go to phone pay and after that paying money



const bookMyShow=new Promise((resolve,reject)=>{
      const show=true;
      if(show){
        resolve("open the bookMyShow app")
      }else{
        reject("Falied to open")
      }
})

const date=new Promise((resolve,reject)=>{
    const showDate=true;
    if(showDate){
        resolve("select the date")
    }else{
        reject("date not selected")
    }
})

const theatre=new Promise((resolve,reject)=>{
    const showTheatre=true;
    if(showTheatre){
        resolve("select the theatre")
    }else{
        reject("no theatre selected")
    }
})

const movie=new Promise((resolve,reject)=>{
    const showmovie=true;
    if(!showmovie){
        resolve("select the movie")
    }else{
        reject("failed to select the movie")
    }
})

const seat=new Promise((resolve,reject)=>{
    const showSeat=true;
    if(showSeat){
        resolve("select the seat number")
    }else{
        reject("failed to select the seat number")
    }
})

const payment=new Promise((resolve,reject)=>{
    const showpayment=true;
    if(showpayment){
        resolve("select the payment options")
    }else{
        reject("failed to select the payment options")
    }
})

const paymentSuccess=new Promise((resolve,reject)=>{
    const showPaymentSuccess=true;
    if(showPaymentSuccess){
        resolve("payment was successfull")
    }else{
        reject("payment failed")
    }
})


bookMyShow.then((res)=>{
    console.log(res)
    return date
})
.then((res)=>{
    console.log(res)
    return theatre
})
.then((res=>{
    console.log(res)
    return movie
}))
.then((res)=>{
    console.log(res);
    return seat   
})
.then((res)=>{
    console.log(res)
    return payment
})
.then((res)=>{
    console.log(res)
    return paymentSuccess
})
.catch((error)=>{
    console.error("Error:",error)
});

// bookMyShow.then(res=>{
//     alert(res)
//     date.then(res=>{
//         alert(res)
//         theatre.then(res=>{
//             alert(res)
//             movie.then(res=>{
//                 alert(res)
//                 seat.then(res=>{
//                     console.log(res)
//                     payment.then(res=>{
//                         console.log(res)
//                         paymentSuccess.then(res=>{
//                             console.log(res)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }).catch((error)=>{
//     console.log(error)
// });







// 2) promise chaining in uber booking, rider coming, 
// reached to pick up point, pick you, 15 mins journey, drop


let uberBooking=new Promise((resolve,reject)=>{
    const bookingStatus=true;
    setTimeout(()=>{
        if(bookingStatus){
            resolve("Your Ride Confirmed")
        }else{
            reject("Your Ride not confirmed")
        }
    },2000)
})

let riderComing=new Promise((resolve,reject)=>{
    let riderStatus=true;
    setTimeout(()=>{
        if(riderStatus){
            resolve("Your rider is on the way..!")
        }else{
            reject("No Available riders to pickUp you")
        }
    },3000)
})

let riderReached=new Promise((resolve,reject)=>{
    let reachedStatus=true
    setTimeout(()=>{
        if(!reachedStatus){
            resolve("rider is 100m to your pickUp point")
        }else{
            reject("no available riders")
        }
    },4000)
})

let riderPicked=new Promise((resolve,reject)=>{
    let pickedStatus=true
    setTimeout(()=>{
        if(pickedStatus){
            resolve("PickUp done")
        }else{
        reject("No rider available")
        }
    },5000)
})

let riderJourney=new Promise((resolve,reject)=>{
    let journeyStatus=true
    setTimeout(()=>{
        if(journeyStatus){
            resolve("You are 100m far to reach your destination")
        }else{
            reject("not reached destination")
        }
    },6000)
})

let riderDrop=new Promise((resolve,reject)=>{
    let dropStatus=true
    setTimeout(()=>{
        if(dropStatus){
            resolve("Reached to your destination")
        }else{
            reject("You are not at your destination")
        }
    },7000)
})

uberBooking.then((res)=>{
    console.log(res)
      return  riderComing.then((res)=>{
        console.log(res)
        return riderReached.then((res)=>{
            console.log(res)
            return  riderPicked.then((res)=>{
                console.log(res)
            return  riderJourney.then((res)=>{
                    console.log(res)
            return   riderDrop.then((res)=>{
                        console.log(res)
                    })
                })
            })
        })
    })
}).catch((error)=>{
    console.log("Error:",error)
})