
let container = document.getElementById("container")

fetch("https://coffee.alexflipnote.dev/random.json")
.then(res => res.json())
.then(data => {
    console.log(data)
    let img = document.createElement("img")
    container.appendChild(img)
    img.setAttribute("src",data.file)

})

setInterval(()=>{
    container.innerHTML=""
    fetch("https://coffee.alexflipnote.dev/random.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let img = document.createElement("img")
        container.appendChild(img)
        img.setAttribute("src",data.file)
    
    })
}, 3000)