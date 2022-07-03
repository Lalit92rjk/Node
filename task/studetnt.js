/*const student={
    name : 'Lalit',
    Age :30,
    greet(){
        console.log('Hi I am '+ this.name)
    }


}*/
//student.greet()
/*const printName = ({name})=>{
    console.log(name)
}
printName(student)


const {name,Age} = student;
console.log(name,Age)*/
/*const fruits = ['apple','oranges',"'mango'",'lemon'] 



console.log(fruits.map(fruit=>fruit).toString())**/

/*const obj1 = {'key1': 1}

const obj2 = { ...obj1}

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different objects')

}*/

/*const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)*/

/*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	const { key1, key3}  = { ...obj1}

	

	console.log(key1, key3)*/

 /*const arr1 = ['value1', 'value2']

	const [ val1, val2 ] = arr1



	console.log(val1)

	console.log(val2)*/

  const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1

	

	key1 = 20;

	key3 = 123

	console.log(obj1.key1, obj1.key3)