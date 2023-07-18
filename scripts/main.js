let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpeg') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/cat.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName(){
    let myName =  prompt("input your name!");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = '欢迎捏,' + myName;
    }
    
    
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎捏，' + storedName;
}
myButton.onclick = function(){
    setUserName();
}