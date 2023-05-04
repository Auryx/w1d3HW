////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 0; i < 20; i++){
    console.log(i+1)
}

////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i < 201; i+=2){
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i < 101; i++){
    let fizzBuzz = ""
    if (i % 3 == 0) {fizzBuzz += "Fizz"}
    if (i % 5 == 0) {fizzBuzz += "Buzz"}

    if (fizzBuzz == "") {fizzBuzz = i}
    console.log(fizzBuzz)
}

////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
plantee[2] += 1
wolfy[3] = "Gotham City"
dart.push("Hawkins")
wolfy[0] = "Gameboy"
console.log(plantee[2])
console.log(wolfy[3])
console.log(dart[dart.length - 1])
console.log(wolfy[0])


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase())
}

////////////////////////////////
// Methods, Revisited
////////////////////////////////


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////


