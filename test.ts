//SRP
// a class should not have more than one reason to change
class Wrap{
  
  //Dependency Injection. Constructor injection
  constructor(v:Veggies,b:Bread,s:Sausages){
    
  }

  prepare(){

  }
 }
 
 enum Type{
   footLong,
   sixInch
 }
 
 class Bread{
 
 constructor(param:number,param2:any,param3:any){
 }
 
 }
 
 
 class Veggies{
 
 }
 
 
 class Sausages{
  constructor(type:Type){}
 }
