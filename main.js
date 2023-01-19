const firstName = "Jack ' ' "

const lastName = 'Brazeau'
console.log(firstName + lastName)

const pet= 'dogs' //Template Literal

const number= "2"

console.log(`I have ${number} ${pet}.`)

let points = 5
let bullets = -3.5
console.log(points + bullets)

let isAdmin = true //Boolean
isAdmin = false
console.log(isAdmin)

//Arrays
const simplelist = [
    "Dav",
     5,
    false,
    [1,2,3]
]
console.log(simplelist[0])

//Objects
const listObj = {
    name: "Alan",
    lastName: "Brazeau"
}
const students = [
    {
        name:"Alan",
        lastName:"Brazeau"
    },
    {
        name:"Jackson",
        lastName:"Braze"
    },
    {
        name:"Johnny",
        lastName:"Braz"
    }

]
console.log( students[0].name, lastName )

//Opperators and expresions

console.log("Points: " + points)
points += 10
console.log("Points++: " + points)