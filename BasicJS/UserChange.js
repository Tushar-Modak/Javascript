let myButton=document.querySelector('Button');
let myHeading=document.querySelector('h1');

function setUserName() {
  let myName=prompt('Please Enter Your Name');
  if (!myName) {
    setUserName();
  }
  else {
    localStorage.setItem('name',myName);
    myHeading.textContent="Your name is "+myName;
  }

}

  if(!localStorage.getItem('name'))
    setUserName();
  else {
    let storedName=localStorage.getItem('name');
    myHeading.textContent="Your name is "+storedName;
  }
  myButton.onclick=function () {
    setUserName();
  }
