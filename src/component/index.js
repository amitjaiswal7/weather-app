// // let b = [1,2,3,3,4,5,6,5,4,4,4,2];
// // let w =  []
// // for(var i = 0; i<b.length; i++){
 
// //     let found = false;
// //     for(var j =i+1; j<b.length+1;j++){
    

// //       if(b[i] === b[j]){
// //           found = true
// //           break;
// //       }

        
// //     }
// //     if(!found){
// //         w.push(b[i])
// //     }


// // }

// // console.log(w)


//  let b = [1,7,2,0,8,5,6,4,2];
// let w =  []

// for(var i = 0; i<b.length; i++){
 
//     let found = false;
//     for(var j =i+1; j<b.length+1;j++){
    

//       if(b[i]>b[j]){
//         w[i] =   j[j]
//       j[i]   =  b[i]
//          b[i]  = w[i]
 
//       }
        
//     }
//     if(!found){
//         w.push(b[i])
//     }


// }
// console.log(w)

// export const fetch_data = (city) => {
  

//   return async (dispatch) => {

//     dispatch(fetch_pending());

//     try {

//       const response = await axios(
//         `https://api.open-meteo.com/v1/${city}`
//       );

//       dispatch(fetch_current(response.data));

//       const res = await axios(
//         `https://api.open-meteo.com/v1/forecast?${city}`
//       );

//       dispatch(fetch_forecast(res.data));

//     } catch (error) {

//       dispatch(fetch_error(error.message));

//     }

//   };
// };