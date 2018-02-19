let myButton = document.getElementById("clickButton");
let myText = document.getElementById("helloText");
let title = document.getElementById("test");

//myButton.addEventListener('click', doSomething, false)

//function doSomething() {
//	myText.textContent = "hello, world!";
//	title.textContent = "new title";
//}

// Enter info form
function getForm(form){
    let fvar = form.fname.value;
    document.getElementById('test').innerHTML = (fvar);
}