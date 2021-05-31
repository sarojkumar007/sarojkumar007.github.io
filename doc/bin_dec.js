function decToBin(n){
    let arr = [];
    while(n>0){
        arr.push(n%2);
        n = Math.floor(n/2);
    }
    return parseInt(arr.reverse().join(''));
}

function binToDec(n){
    let arr = [];
    let sum = 0;
    arr = n.toString().split('').reverse();
    for(let i=arr.length-1; i>=0; i--){
        sum += arr[i]*Math.pow(2,i);
    }
    return sum;
}
