function getAr(form){
    let n = form.vAr.value;
    for(let i=0;i<form.length;i++){
        console.log(n);
    }
    document.getElementById("outa").innerHTML = n;
}