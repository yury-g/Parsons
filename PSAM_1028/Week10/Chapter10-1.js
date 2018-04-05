var counter = 1
 
 var printMessage = function(){
 	console.log("You have been staring at the screen for" + counter + " seconds")
 	counter++
 }

 var intervalID = setInterval(printMessage, 1000)

 clearInterval(intervalID)

 