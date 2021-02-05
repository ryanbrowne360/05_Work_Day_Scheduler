var currentHour = moment().format("H")
var time9 = document.getElementById("ninetime")
var time10 = document.getElementById("tentime")
var time11 = document.getElementById("eleventime")
var time12 = document.getElementById("twelvetime")
var time13 = document.getElementById("thirteentime")
var time14 = document.getElementById("fourteentime")
var time15 = document.getElementById("fifteentime")
var time16 = document.getElementById("sixteentime")
var time17 = document.getElementById("seventeentime")

var save9 = document.getElementById("ninesave")
var save10 = document.getElementById("tensave")
var save11 = document.getElementById("elevensave")
var save12 = document.getElementById("twelvesave")
var save13 = document.getElementById("thirteensave")
var save14 = document.getElementById("fourteensave")
var save15 = document.getElementById("fifteensave")
var save16 = document.getElementById("sixteensave")
var save17 = document.getElementById("seventeensave")

var input9 = document.getElementById("nineinput")
var input10 = document.getElementById("teninput")
var input11 = document.getElementById("eleveninput")
var input12 = document.getElementById("twelveinput")
var input13 = document.getElementById("thirteeninput")
var input14 = document.getElementById("fourteeninput")
var input15 = document.getElementById("fifteeninput")
var input16 = document.getElementById("sixteeninput")
var input17 = document.getElementById("seventeeninput")


// Getting date and time info from moment js and displaying at top of page.

document.getElementById("dayAndTime").innerHTML = moment().format("dddd, MMMM Do YYYY, H:mm");

// Changing style of the input field based on past, present, and future.

changeColor(time9, input9)
changeColor(time10, input10)
changeColor(time11, input11)
changeColor(time12, input12)
changeColor(time13, input13)
changeColor(time14, input14)
changeColor(time15, input15)
changeColor(time16, input16)
changeColor(time17, input17)

     function changeColor(time, input){
    if (time.innerHTML == currentHour) {
        input.style = "background-color: #ff6961"
    }
    else if (time.innerHTML > currentHour) {
        input.style = "background-color: #77dd77"
    }
    else { input.style = "background-color: #d3d3d3" }
}  
    // Saving the value of the input field to local storage

    save9.onclick= function(){
        localStorage.setItem("9", input9.value)
    }
    save10.onclick= function(){
        localStorage.setItem("10", input10.value)
    }
    save11.onclick= function(){
        localStorage.setItem("11", input11.value)
    }
    save12.onclick= function(){
        localStorage.setItem("12", input12.value)
    }
    save13.onclick= function(){
        localStorage.setItem("13", input13.value)
    }
    save14.onclick= function(){
        localStorage.setItem("14", input14.value)
    }
    save15.onclick= function(){
        localStorage.setItem("15", input15.value)
    }
    save16.onclick= function(){
        localStorage.setItem("16", input16.value)
    }
    save17.onclick= function(){
        localStorage.setItem("17", input17.value)
    }

    // Geting local storage data onload and on refresh

    input9.value=localStorage.getItem("9")
    input10.value=localStorage.getItem("10")
    input11.value=localStorage.getItem("11")
    input12.value=localStorage.getItem("12")
    input13.value=localStorage.getItem("13")
    input14.value=localStorage.getItem("14")
    input15.value=localStorage.getItem("15")
    input16.value=localStorage.getItem("16")
    input17.value=localStorage.getItem("17")
    
    
    

  




