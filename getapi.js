let el = document.getElementById("btnapi");

let getdata = "https://codepen.io/jobs.json";
const getHtp = new XMLHttpRequest();
getHtp.open("GET", getdata);
getHtp.onreadystatechange = function(){
    let getdata = JSON.parse(getHtp.responseText);
    if(getHtp.readyState == 4){
        document.getElementById("api_out").innerHTML = "Company: " + getdata.jobs[0].company_name;
    }
};
const btnSend = function(){
    alert("test");
    getHtp.send();
}

if(el){
    el.addEventListener("click", btnSend);
}