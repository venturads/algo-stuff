const myFm = function(){
    let nm = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML = "Welcome: " + nm;
}
document.getElementById("btn").addEventListener("click", myFm);
