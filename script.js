// const delay = ms => new Promise(res => setTimeout(res, ms));
// const getFruit = async (name) => {
//     fruits = {
//         "a":"apple",
//         "b":"Mango",
//         "c":"Banana"
//     }
   
//     await delay(3000)
//     return fruits[name]
// }

// console.log(getFruit("a"));

// async function getFruits(){
//     const a = await getFruit("a");
//     console.log(a);

//     const b = await getFruit("b");
//     console.log(b);

// }

// console.log(getFruits());


// ----------CALLBACK FUNCTIONS -----------

// function called(name,calledCallBack){
//     setTimeout(()=>{
//         console.log(name);
//         if(calledCallBack) calledCallBack();
//     },2000)
// }

// called("data is being retrived",()=>{
//     called("still retriving data",() => {
//         called("Timeout")
//     });
// })


// --------------- PROMISES -------------

// const testpromise = new Promise((res,rej)=>{
//     console.log("hi");
// })


async function addFive(a){
    return new Promise((res,rej) => {
        setTimeout(()=>{
            if(a){
                if(Number.isInteger(a)) res(a+5)
                else rej("a is not an integer")
            }
            else{
                rej("this function takes an integer arguement")
            }
        },2000)
    })
}

// const pr =  addFive(8);


// this thing runs for resolve
// pr.then((res) => console.log(res,"this is res"))
// this thing runs when there is reject returned ie. ERROR
// pr.catch((err) => console.log("ERROR: ",err))

//--------------await--------------

async function sample(){
    await addFive(7).then((res)=>{
        console.log("lol");
    });
    console.log("getting next number");
    await addFive().then((res)=>{
         console.log(res,"is the number")
    }).catch((rej)=>{
        console.log("Error:",rej);
    })
    console.log("getting next number");
    await addFive("dt").then((res)=>{
        console.log("Good")
    }).catch((err)=>{
        console.log("Error:",err)
    })
    console.log("success");
}

sample();


// -------------------IIFE (immediately invoked function expression)-----------------
// this function runs only once --> can't run once more cause there's no name to it
// the fun fact is that the sentence or command or code before the iife function should end with a  ";" colon // otherwise it will show an error
(
    () => {
        console.log("This is an IIFE Function");
    }
)();