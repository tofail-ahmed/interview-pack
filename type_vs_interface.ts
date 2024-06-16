type myNumber1=number //* ✔
interface myNumber2=number //! ❌


type TMyUnion=number|string; //* ✔
interface IMyUnion=number|string; //! ❌


type MyFunctionType = (arg1: number, arg2: string) => boolean; //* ✔
interface MyFunctionInterface {
      (arg1: number, arg2: string): boolean;
    } //* ✔


{
      
interface Person {
      name: string;
    }
    
    interface Person {
      age: number;
    }
    
    const person1:Person={
          name:"John",
          age:100
    }  //*------------------------------//* ✔


    type Person ={
      name: string;
    }  
    
    type Person ={
      age: number;
    }   //!------------------//! ❌
    
    const person1:Person={
          name:"John",
          age:100
    }   //!----------------//! ❌
}

{
      interface A{
            propA:number
      }
      interface B extends A{
            propB:string
      }
      const AB:B={
            propA:23,
            propB:"23"
      } //*------------------------------//* ✔


      type X={
            propX:string
      }
      type Y ={
            propY:number
      } & X

      const XY:Y={
propX:"23",
propY:23
      }   //*------------------------------//* ✔
}

{
      type myTuple1=[number,string,boolean]
      const tuple1:myTuple1=[27,"Sayem",true]

      interface myTuple2{
            0:number;
            1:string;
            2:boolean;
      }
      const tuple2:myTuple2=[27,"Sayem",true]
}