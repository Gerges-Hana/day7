class Person
{

    
    constructor(nameP,age)
    {
        // console.log(this.constructor)
        this.nameP=nameP; 
        this.age=age;
        // console.log(this.constructor)
    }

    // setID(x)
    // {

    //     this.#id=x;
    // }

    // getID()
    // {
    //     return this.#id;
    // }
    // getdata()
    // {
    //     console.log("make imple to this function")
    // }
// static getCount()
// {
//     return Person.#count;
// }
//     display()
//     {
//         console.log(this.name)
//     }
}


class Stuednt extends Person
{
    constructor(nameP,age,department,id)
    {
        super(nameP,age)
        this.department=department; 
        this.id=id; 
    }
}

class Emp extends Person
{
    static count=0;
    static phon;
    static HTRules="dsjdsdsdsddsdssdd"
    constructor(nameP,age,salery)
    {
        super(nameP,age)
        this.salery=salery; 
        
        Emp.count++;
        console.log(Emp.count);


    }

   static setID(phon)
    {

        this.phon=phon;
        console.log("set id");

    }

    static getID()
    {
        console.log("get id");
        return this.phon;
    }


   static numOfNumb(){
    console.log(`you have  empply${Emp.count}`)
        
    }

    static displayHTRules(){

        console.log(`company is HR  ${Emp.HTRules} `)
    }

    showSalary(){
        console.log(this.salery);
           }
    increaseSalalry(){
        this.salery +=500;
        console.log(`a7laa msaaa aleek== ${this.salery}`)
    }

}


var emp1=new Emp('gerges',44,3000)
var emp2=new Emp('gerges',44,3000)
var emp3=new Emp('gerges',44,3000)
var emp4=new Emp('gerges',44,3000)
var st1=new Stuednt('Attalla',55,"it",50)
var arr=[emp1,emp2,emp3,emp4]
Emp.numOfNumb()
Emp.displayHTRules()
Emp.setID(5)
Emp.getID()
emp1.showSalary()
for(var i in arr ){
    console.log(i);
    arr[i].showSalary()
}

emp1.increaseSalalry()
for(var i in arr ){
    console.log(i);
    arr[i].increaseSalalry()
}

