
interface personMale{
      gender:"male";
      salary:number;
}
interface personFemale{
      gender:"female";
      weight:number
}
type person={
      name:string;
      age:number;

}&(personMale|personFemale)

const person1:person={
      name:"Sayem",
      age:27,
      gender:"male",
      salary:0
}
const person2:person={
      name:"Setara",
      age:24,
      gender:"female",
      weight:55
}