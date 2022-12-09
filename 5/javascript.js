
var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 


fruits.forEach(function (x) {

 if(isNaN(x)){
    console.log("done")
 }else{  console.log("no a string")}
        
    });

//////////////////////////////////////////////////////////////////////////////////////

    fruits.forEach(function (x) {
       
        if(x.indexOf("a",0)==0)
        {
           console.log("done :",x , "starts with a")
        }
        else {  console.log(x , " donot starts with a")}
               

           }
           
    )
//////////////////////////////////////////////////////////////////////////////////////
var filtered=[];

    fruits.forEach(function (x) {
        if(x.indexOf("b",0)==0 || x.indexOf("s",0)==0 )
{
    filtered.push(x)
}

    })
    console.log(filtered)
//////////////////////////////////////////////////////////////////////////////////////
var i=0;

    fruits.forEach(function (x) {

    for(i=0;i<filtered.length;i++)
    {
        if(filtered[i]==x){
            console.log (x)
        }
    }

}    )