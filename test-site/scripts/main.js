let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Hnust.png') {
      myImage.setAttribute('src', 'images/hnust2.png');
    } else {
      myImage.setAttribute('src', 'images/Hnust.png');
    }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hnuster--' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hnuster--' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 };