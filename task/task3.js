var arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

var arr2 = [];

/*for(var i=0;i<arr.length;i++){
    if (arr[i]===' '){
        arr2.push('empty string')
    }else{
        arr2.push(arr[i])
    }
}
console.log(arr2)
*/
var arr2 = arr.map((fruits)=>{
    if(fruits!==" "){
        return fruits
    }else{
        return "empty string"
    }
})
console.log(arr.map((fruits)=>{
    if(fruits!==" "){
        return fruits
    }else{
        return "empty string"
    }

}))