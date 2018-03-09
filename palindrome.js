function getPali(form){
    let n = form.pali.value;
    n = n.split("").reverse().join("");
    //document.getElementById("out").innerHTML = n;
    alert(n);
}