

function maxmin(...arr) {

    const max=  Math.max(...arr);
    const  index= arr.indexOf(max);
  
  
    const min= Math.min(...arr);
    const  index1= arr.indexOf(min);
  
    console.log("max number in arr is : ",arr[index]);
    console.log("min number in arr is : ",arr[index1]);
  }
  
  maxmin(50,80,120,500,700,40,12,45,67,800)
  