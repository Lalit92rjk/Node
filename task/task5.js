/*console.log('a');

console.log('b');

setTimeout(() =>{ console.log('c')}, 3000)

console.log('d');*/

/*console.log('a');

console.log('b');

setTimeout(() => console.log('c'), 3000)

setTimeout(() => console.log('d'), 0)

console.log('e');*/

async function print(){

    console.log('a');

    console.log('b');

    const message = await new Promise((res,rej)=>{
        setTimeout(()=>{
            res('c')
        },1000)
    })
    console.log(message)

    const message2  =  await new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('d')
            res('d')
        },0)
    })

    console.log(message2);
    console.log('e');

}

print();

