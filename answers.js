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
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
const findMovieIndex = (x) => {
    for (let i=0; i < favMovies.length+1; i++) {
        if (favMovies[i] == x){
            console.log(i)
            return i
        }
    }
}
findMovieIndex("Titanic")
favMovies.sort() //Alphabetical order, permanent alter
favMovies.pop()
favMovies.push("Guardians of the Galaxy")
favMovies.reverse()
favMovies.shift()
favMovies.unshift() // returns the array length
favMovies.splice(findMovieIndex("Django Unchained"), 1, "Avatar")
let halfFavMovies = favMovies.slice((favMovies.length + 1)/ 2)
console.log(halfFavMovies)
console.log(favMovies)
console.log(findMovieIndex("Volver")) //Volver was removed, not Fast and Furious. It returns undefined
// You use const to declare an array to avoid accidentally removing the array by redeclaring it

////////////////////////////////
// Where is Waldo
////////////////////////////////
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
whereIsWaldo.splice(1, 1)
console.log(whereIsWaldo[1][2] = "No One")
console.log(whereIsWaldo[2][1][1])

////////////////////////////////
//  Excited Kitten
////////////////////////////////
for (let i=1; i <= 20; i++){
    let kitTalk = ""
    const kitLines = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
    if (i % 2 == 0) {kitTalk = kitLines[(Math.floor(Math.random() * 3))]}
    else {kitTalk = "Love me, pet me! HSSSSSS!"}
    console.log(kitTalk)
}

////////////////////////////////
//  Find the Median
////////////////////////////////
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
const findArrayMedian = (x) => {
    let median = 0
    x.sort(function(a, b){return a - b})
    let arrayHalfPoint = Math.floor(x.length /2)
    if (x[arrayHalfPoint] !== x[arrayHalfPoint + 1]) {
        median = (x[arrayHalfPoint] + x[arrayHalfPoint+1]) / 2
    } else {
        median = x[arrayHalfPoint]
    }
    return median
}
console.log(findArrayMedian(nums))
// Expected output:
// => 15
