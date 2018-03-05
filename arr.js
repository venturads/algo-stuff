function getAr(form){
    let n = form.vAr.value;
    for(let i=0;i<n.length;i++){
        document.getElementById("outa").innerHTML = n[i];
    }
    //document.getElementById("outa").innerHTML = n;
}