<h2>3/20/2022</h2>

***const and let***
>const: create an immutable variable <br> let: create an mutable variable
----
***true, false, null, undefined***
>true(on) false(off) null(nothing) undefined(not value)
---
***How to add Array***
>name.push();
---
***Object + function***
```javascript
const player = {
    name: "Your name",
    age: Your age
    add: function(a,b) {
        return a+b;
    },
};
console.log(player.age);
player.add(a,b);
```
***parseInt(), prompt(), isNaN()***
>pareInt(): string -> number <br> prompt(): user input message(string) <br> isNaN(): is Not a Number (Output: true or false) 

***Conditional***
>if<br>else if<br>else

***getElementById(), querySelector(), createElemnet()***
>getElementById(Element Id): get your Element Id <br> document.querySelector(".className Element"): CSS Selector <br> createElement(): create element

***Events***
>Class.addEventListener("Event", Function);

***ClassList***
>toggle(): if you have class -> remove class ,if you don't have class -> create class <br> add(): Add to class

<br>

<h1>Chrome App</h1>

<br>

***.preventDefault()***
> Control your browser is not action <br>"Hello" + Variable === `Hello ${Variable}`


***localStorage.setItem("key", value);***
>Use LocalStorage DB

***setInterval(), setTimeout()***
>setInterval(Function, Time); : Time interval to happen <br> setTimeout(Function, Time): After time to happen at once

***padStart(), padEnd()***
>(String).padStart(Text.length, "What to Add in front of text") <br> (String).padEnd(Text.length, "What to Add behind of text")


***Math.random(), round(), ceil(), floor()***
>Math.random(): 1.XXXXX ~ 9.XXXXX, round() -> 1.xxxx -> 1, ceil(): 1.XXXX -> 2, floor(): 1.xxxx -> 1

***appenChild()***
>appenChild(): Add element append of body of document

***event.target.parentElement***
>Get you event target parent element

***JSON.stringify()***
>JSON.stringify(): value -> string array <br> JSON.parse(): string array -> array

***forEach()***
>forEach((value) => ): start fucntion and return value

***.filter()***
>.fiter(): execpt conditional of Array value
```javascript
const arr = [1234, 224, 6565, 667, 8787]        
function sexyfilter(number) {return number > 500}
arr.filter(sexyfilter)
(4)??[1234, 6565, 667, 8787]
```
```javascript
const arr = [1234, 224, 6565, 667, 8787]        
arr.filter(number => number > 500)

```
