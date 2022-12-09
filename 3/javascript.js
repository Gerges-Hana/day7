// class ScientificDepartment{
//     constructor( name, Location, Address ) {

//         this.name=name;
//         this.Location=Location;
//         this.Address=Addr

//     }
// }
ScientificDepartment= {
    name : "djhdj",
    loocation:"dgh",
    address:{
        City:"giza" ,
        Street :"21 dsjkf", 
        zipCode:456789
    }

}
function display(){
    console.log(ScientificDepartment);
    console.log( typeof(ScientificDepartment));

  console.log(ScientificDepartment.name);
  console.log(ScientificDepartment.loocation);
  console.log(ScientificDepartment.address.City);
  console.log(ScientificDepartment.address.Street);
  console.log(ScientificDepartment.address.zipCode);
}
display();


