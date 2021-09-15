var random_number = Math.floor(Math.random() * 100);
console.log(random_number);

var array = [39, 69, 96, 93, 63];
var largest = array[0];
for (var i = 0; i < array.length; i++) {
    if (largest < array[i] ) {
        largest = array[i];
    }
}
console.log(largest);

var array = [39, 69, 96, 93, 63];
var smallest = array[0];
for(var i=1; i<array.length; i++){
    if(array[i] < smallest){
        smallest = array[i];   
    }
}
console.log(smallest);

//Minu mõistus lõppeb siin//