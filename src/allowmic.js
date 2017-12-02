var micAccess = document.getElementById("micAccess");
var backgroundChange = document.getElementById("backgroundChange");
var backUrl = document.getElementById("backUrl");
var black = document.getElementById("black");
var pink = document.getElementById("pink"); 
var green = document.getElementById("green") ; 
var brown = document.getElementById("brown") ;
var submit = document.getElementById("submit");
var theme;
var theValue;
black.addEventListener("click" , () => {
    theme="black";
    console.log(theme);
});
pink.addEventListener("click",() => {
    theme="deeppink";
    console.log(theme);
});
green.addEventListener("click",() => {
    theme="chartreuse";
    console.log(theme);
});
brown.addEventListener("click",() => {
   theme="brown"; 
   console.log(theme);
});

submit.addEventListener("click",()=>{
    localStorage.setItem("theme",theme);
    console.log("success");
});
micAccess.addEventListener("click", () => {
    navigator.webkitGetUserMedia({
        audio: true
    }, function (stream) {
        stream.stop();
    }, function () {
        console.log("no access");
    });
});

backgroundChange.addEventListener("submit", (e) => {
    e.preventDefault();
    theValue = backUrl.value;
    if (!theValue) {
        alert("Error: No value specified");
    } else {
        localStorage.setItem("theValue", theValue);
        alert("Successfully stored");
    }
});
