This is my code snippet:


```rudy

var firstName = "Yury" 
undefined
var lastName = "Gitman"
undefined
var fullName = firstName + lastName
undefined
fullName
"YuryGitman"
var firstLetter = firstName.slice(0.1)
undefined
var lastLetter = lastName.slice(0.1)
undefined
var lastLetter = lastName.slice(0,1)
undefined
la
VM578:1 Uncaught ReferenceError: la is not defined
    at <anonymous>:1:1
(anonymous) @ VM578:1
lastLetter
"G"

```

## And Then we did this:

```ruby
var secondsInAMinute = 60 
undefined
var mintuesInAnHour = 60
undefined
secondsInAHour = secondsInAMinute + mintuesInAnHour
120
secondsInAHour = secondsInAMinute * mintuesInAnHour
3600
var hoursInADay = 24
undefined
var secondsInADay = sec
VM796:1 Uncaught ReferenceError: sec is not defined
    at <anonymous>:1:21
(anonymous) @ VM796:1
var secondsInADay = secondsInAHour * hoursInADay
undefined
secondsInADay
86400
mintuesInAnHour
60
var daysInAYear =  365
undefined
var secondsInAYear = secondsInADay * daysInAYear
undefined
secondsInAYear
31536000
var theirAge = 77
undefined
theirAge * secondsInAYear
2428272000
```


## and Booleans

```ruby
var isAlive = true
undefined
var isDead = true
undefined
var redEvilEyes = false
undefined
var ableToSpeak = true 
undefined
is
VM1250:1 Uncaught ReferenceError: is is not defined
    at <anonymous>:1:1
(anonymous) @ VM1250:1
isAlive
true
isAlive = false
false
isAlive
false
isAlive
false
var isAlive = true
undefined
beard
VM1290:1 Uncaught ReferenceError: beard is not defined
    at <anonymous>:1:1
(anonymous) @ VM1290:1
"bread"
"bread"
```
