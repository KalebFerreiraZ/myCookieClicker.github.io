const cookie = document.getElementById("cookie")
const contCookie = document.getElementById("contCookie")
const perSecond = document.getElementById("perSecond")
const upgrades = document.querySelectorAll(".up")
const load = document.getElementById("load")
const deleteSave = document.getElementById("deleteSave")
const info = document.getElementById("info")
const totContent = document.querySelector(".allContent")
const menu = document.getElementById("config")
let comparador = 0
let totCookie = 0
let cont = 0
let cursorCookie = 1
//TAXA DE ATUALIZACAO
menu.classList.add("none")
totContent.classList.add("flex")

 setInterval(()=>{
    totCookie = totCookie + cont
               contCookie.textContent = "Cookies:"+totCookie.toFixed(0)
               perSecond.textContent = "perSecond:" + cont.toFixed(1)
            },1000)
//TAXA DE ATUALIZACAO DO SAVE
            setInterval(()=>{
                localStorage.setItem("cookies", JSON.stringify(totCookie))
                localStorage.setItem("second", JSON.stringify(cont))
            },30000)

//DELETAR SAVE
            deleteSave.addEventListener("click",()=>{
                localStorage.removeItem("cookies")
                localStorage.removeItem("second")
                totCookie = 0
                cont = 0
            })
//CARREGAR SAVE
load.addEventListener("click",()=>{
    totCookie = JSON.parse(localStorage.getItem("cookies"))
    cont = JSON.parse(localStorage.getItem("second"))
})
//Opcoes
info.addEventListener("click",()=>{
   if(comparador == 0){
    menu.classList.add("flex")
    totContent.classList.remove("flex")
    totContent.classList.add("none")
    comparador = 1
    
   }
   else{
        menu.classList.remove("flex")
        menu.classList.add("none")
        totContent.classList.remove("none")
        totContent.classList.add("flex")
        
        comparador = 0
   }
    
})
//CLICK DO COOKIE
cookie.addEventListener("click",()=>{
    totCookie = totCookie +  cursorCookie
    contCookie.textContent = "Cookies:"+totCookie.toFixed(0)
})
//UPGRADES DE CONSTRUCAO
upgrades.forEach(element=>{
    element.addEventListener("click",()=>{
        if(element.classList.contains("up1")){
            if(totCookie >= 25){
                totCookie = totCookie - 25
                cont = cont + 0.1
            } 
        }

         if(element.classList.contains("up2")){
            if(totCookie >= 550){
                totCookie = totCookie - 550
                cont = cont + 5
            }
        }

        if(element.classList.contains("up3")){
            if(totCookie >= 2500){
                totCookie = totCookie - 2500
                cont = cont + 25
            }
        }

        if(element.classList.contains("up4")){
            if(totCookie >= 13500){
                totCookie = totCookie - 13500
                cont = cont + 300
            }
        }

        if(element.classList.contains("up5")){
             if(totCookie >= 145000){
                totCookie = totCookie - 145000
                cont = cont + 4500
            }
        }

    })
})

