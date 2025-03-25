image = document.getElementById("ig");
image.addEventListener("click", (e)=>{
    console.log(e, "was clicked");
    document.getElementsByClassName("ar").innerHtml = "Clicked";
})
