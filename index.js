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


let addCat = [...cats , "Broom"]
    
addCat;
 