
// Chapter 3
// 
var myFruitArray = ["Apple","Banana","Coconut","Divine Fruit", "Earlobe Grapes", "Figs"]

//call it
myFruitArray

// call an "element" by it's next 
myFruitArray[2]


//  Write over
myFruitArray[0] = "Pinapple"

myFruitArray

// Add a Big Number
myFruitArray[10] = "Zookeyknee"
"Zookeyknee"

// See What happens
myFruitArray

myFruitArray[20]
undefined
myFruitArray

var myFruitArray = ["Apple","Banana","Coconut","Divine Fruit", "Earlobe Grapes", "Figs"]

undefined
myFruitArray[2]
"Coconut"

// Call Last Element In Array
var lastElementInArray =  myFruitArray[myFruitArray.length-1]
undefined
lastElementInArray
"Figs"

// 
// Not All Array Elements Need To Be of Same Type
// Let's nest and array into an array

var myNestArrayOfFruit = []

myNestArrayOfFruit

myNestArrayOfFruit = ["","",""]

myNestArrayOfFruit = [["","",""],["","",""],["","","]]

myNestArrayOfFruit = [["Apple","Red","Worm"],["Banana","Yellow","Bruise"],["Cucumber","Green","Freezer Burn"]]

//Calling Elements
myNestArrayOfFruit[0][0]

myNestArrayOfFruit[0]

myNestArrayOfFruit[0][1]

//Changing Elements
myNestArrayOfFruit[2][2] = "Crispy"

myNestArrayOfFruit


// .push adds Elements to END of Array
var mySimpleFruitArray = []
undefined
mySimpleFruitArray.push("Apple")
mySimpleFruitArray.push("Banana")
mySimpleFruitArray.push("Carrot")
3
mySimpleFruitArray

mySimpleFruitArray[3] = ["Secret","Data","Hidden In Here"]

mySimpleFruitArray

mySimpleFruitArray[3][2] = "Or is It?"

mySimpleFruitArray

mySimpleFruitArray[3].push = "Well Now It Over Here"

mySimpleFruitArray



// ADD ELEMENT TO Front, Shift it All Down
var colorArray = ["Red","Green","Blue"]

colorArray.unshift("Yellow")

colorArray

colorArray.unshift("Gray")

colorArray

// .pop REMOVING Elements From END An Array
colorArray

colorArray.pop

colorArray

colorArray

colorArray.pop()

var lastColorRemoved = colorArray.pop()

lastColorRemoved

colorArray

// Concatenate, or Attached, 2 Arrays 
var ledColorArray = ["Red","Green","Blue"]
var grayscaleArray = ["White","Gray","Black"]
var myLargeColorArray = ledColorArray.concat(grayscaleArray)

myLargeColorArray


//get indexOf and Element
myLargeColorArray.indexOf("blue")
-1
myLargeColorArray.indexOf("Blue")
2

//  Array As String 


var ledColorArray = ["Red","Green","Blue"]
var grayscaleArray = ["White","Gray","Black"]
var myLargeColorArray = ledColorArray.concat(grayscaleArray)
myLargeColorArray

myLargeColorArray.join(" is Prettier than ")
myLargeColorArray


Math.random()
0.
Math.random()
0.8136751191539822
Math.random()
0.5734336545313281
Math.random() * 10
7.424817178733816
Math.random() * 10
4.307165405948091
Math.floor(4.999)
4
// Make a random number between 0-10
undefined
var randomOneAndTen = Math.floor(Math.random()*10)
undefined
randomOneAndTen
1
// random between 0-1
Math.floor(Math.random()*4)
2
Math.floor(Math.random()*4)
3
// random number between 0-100
undefined
Math.floor(Math.random()*100)
0
Math.floor(Math.random()*100)
36
Math.floor(Math.random()*100)
75




//
//  Gym Trainer Code (run code a few times)
//
var pepTalkPhrase = ["Yes", "Keep Going", "You Are Doing It","Keep It Up", "Go!"]
var gymActivties = ["Lift","Bike","Jump","Run","Zuma"]
var randomPep = pepTalkPhrase[Math.floor(Math.random()*4)]
var randomAction = gymActivties[Math.floor(Math.random()*4)]

var fullTrainerPhrase = randomPep + " with your " + randomAction + " action!!!"

fullTrainerPhrase




