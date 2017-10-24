var arr = [1,3,7, "one", 8,9, "ten"];

function numbersOnly(arr){
    var temp= [];
    for(var i=0; i<arr.length; i++){
        if(typeof arr[i]=== "number"){
            temp.push(arr[i]);
        }
        else{
            continue;
        }
    }
    return temp;
}

console.log(numbersOnly(arr));