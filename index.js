let text = document.querySelector("section h1")
var c =0;
text.addEventListener("click", function() {
  
    if (c ==0) {
        document.getElementById("box").style.display = "block";
        C = 1;
    } else {
        document.getElementById("box").style.display = "none";
        c = 0;
    }
});

let text2 = document.querySelector(".close")

text2.addEventListener("click", function() {
  
    if (C = 1) {
        document.getElementById("box").style.display = "none";
        c = 0;
    } 
});



//     alert("Access Denied !!!");