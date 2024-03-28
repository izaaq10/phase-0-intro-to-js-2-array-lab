// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
    



function destructivelyAppendCat(){
    console.log(cats.push("Ralph"))
}``
function destructivelyPrependCat(){
    console.log(cats.unshift("Bob"))
}

function destructivelyRemoveFirstCat(){
      console.log(cats.shift())
}
``
function destructivelyRemoveLastCat(){
       console.log(cats.pop())
}


let addCat = [...cats, "Broom"]
    
function appendCat() {
    return addCat
}

addCat;
 
let addKitty = ["Arnold", ...cats]

function prependCat()
{
    return addKitty
}
console.log(addKitty)



function removeFirstCat(){
    return cats.slice(1)
}
console.log(cats.slice(1));

function removeLastCat(){
    return cats.slice(0,2)
}
