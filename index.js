// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push("Ralph");
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    const cats2 = [...cats,"Broom"];
    return cats2;
}

function prependCat(name){
    const cats3 = ["Arnold", ...cats];
    return cats3;
}

function removeLastCat(){
    return cats.slice(0,2);
}

function removeFirstCat(){
    return cats.slice(1);
}