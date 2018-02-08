
var myText = "It is not my purpose here to inventory all of the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
undefined
myText
"It is not my purpose here to inventory all of the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.indexOf("survey")
98
myText.replace("But","Butt!")
"It is not my purpose here to inventory all of the official untruths of the past year. Butt! a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.replace("was","was not")
"It is not my purpose here to inventory all of the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.replace("was","🤓")
"It is not my purpose here to inventory all of the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.replace("of","🤓")
"It is not my purpose here to inventory all 🤓 the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.replace(".","🤓")
"It is not my purpose here to inventory all of the official untruths of the past year🤓 But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
myText.replace("o","🤓")
"It is n🤓t my purpose here to inventory all of the official untruths of the past year. But a brief survey is in order. Some untruths are trivial -- such as the bizarre contention regarding the crowd size at last year's inaugural."
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
undefined
console.log(newstr);
VM150:1 Twas the night before Christmas...
undefined
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/before/i, 'after');
undefined
str
"Twas the night before Xmas..."
str
"Twas the night before Xmas..."
newstr
"Twas the night after Xmas..."
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/before/i, 'after');
undefined
newstr
"Twas the night after Xmas..."
var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');
undefined
newstr
"Twas the night before Christmas..."
var str = 'Twas the night before Xmas...';
var newstr2 = str.replace(/before/i, 'After');
undefined
newstr2
"Twas the night After Xmas..."
var newstr2 = str.replace(/before/i, 'After');



undefined
newstr = newstr + newstr2 + newstr2
"Twas the night before Christmas...Twas the night After Xmas...Twas the night After Xmas..."
var newstr2 = str.replace(/twas/i, 'We saw in the sky');



undefined
newstr2
"We saw in the sky the night before Xmas..."
newstr5 = newstr2.replace(/e/i,"HELLO")
"WHELLO saw in the sky the night before Xmas..."


