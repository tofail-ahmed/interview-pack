const twit={
      name:"Proful",
      follower:4817,
     
}

// console.log(twit.follower) //* 4817
// console.log(twit['follower']) //* 4817

const {name,follower}=twit;
// console.log(name) //* Proful
// console.log(follower) //* 4817

const linkedin={name}
// console.log(linkedin) //* { name: 'Proful' }

// const person={}
// const person=new Object()

function change(insta){
      insta.name="steve"
}
// change(twit)
// console.log(twit.name) //* steve


// delete twit.name
// console.log(twit)  //* { follower: 4817 }


for(let key in twit){
      // console.log(key) //* name follower
}

for(let value in twit){
      // console.log(value) //* name follower
}

const viber={
      name:"Tofail",
      get profile(){
            return `hi ${this.name.toLocaleLowerCase()}`
      },
      set profile(prof){
            this.name='Mr '+ prof
      }
}

// console.log(viber.profile) //* hi tofail

viber.profile="Kawsar"
// console.log(viber.name) //* Mr Kawsar


const twitX={
      name:"Setara",
      hi(){
            // console.log(`Hi ${this.name}`) //*Hi Setara
      },
      hello:()=>{
            // console.log(`Hello ${twitX.name}`) //* Hello Setara
      }
}
twitX.hi()
twitX.hello()

















































//! https://forms.gle/EGJQwHNKRjVsmrMx7