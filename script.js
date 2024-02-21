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

function called(name,calledCallBack){
    setTimeout(()=>{
        console.log(name);
        if(calledCallBack) calledCallBack();
    },2000)
}

called("data is being retrived",()=>{
    called("still retriving data",() => {
        called("Timeout")
    });
})
