let first_submit=document.getElementById("first_submit")
let name=document.getElementById("name")
let email=document.getElementById("email")
let password=document.getElementById("password")
let p=document.getElementById("p")
let first=document.getElementById("personal_info")
let container=document.getElementById("container")
let final=document.getElementById("final_submit")
let url=document.getElementById("url")
let anime_name=document.getElementById("anime_name")
let anime_type=document.getElementById("anime_type")

first_submit.addEventListener("click",function(){
    let p=document.createElement("p")
    p.innerHTML="Now You can fill the details of the test below"
    p.style.fontWeight="bold"
    p.style.fontSize="20px"
    first.appendChild(p)
})

final.addEventListener("click",function(){
    let image=document.createElement("img")
    image.src=url.value
    let text1=document.createElement("p")
    text1.innerHTML=anime_name.value
    let text2=document.createElement("p")
    text2.innerHTML=anime_type.value
    text2.style.textTransform="uppercase"
    container.appendChild(image)
    container.appendChild(text1)
    container.appendChild(text2)
    // container.appendChild(anime_type.value)
})