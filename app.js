


document.addEventListener('DOMContentLoaded', function() {

[...document.getElementsByClassName("hover-border")].forEach(hoverimg =>{
    hoverimg.addEventListener("mouseover",()=>{
        hoverimg.style.border = '20px solid white'
    })
    hoverimg.addEventListener("mouseout", ()=> {
        hoverimg.style.border = 'none'
    
    })
})

// var artistImg = document.getElementById("artist-img")
// function largeImg() {

// }

})


