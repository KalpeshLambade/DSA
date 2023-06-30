let array = [10, 5, 2, 4, 20, 15, 8, 13, 11];

const bubble = (array) => {
    for(let i=0; i<array.length; i++){
        for( j=0; j<(array.length-i-1); j++){
            if(array[j] > array [j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]]
            }
        }
    }
    return array;
};

let answer = bubble(array);
console.log(answer);

//In bubble sort we compare adjusant two elements if first is greater than second then swap them
//for that we use two for loops
//first iterate from starting to end and second from staring but get reduced from end 
//then swap two elements if needed
