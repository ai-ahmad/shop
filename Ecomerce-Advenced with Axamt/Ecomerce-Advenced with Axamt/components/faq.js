const openbtn = document.querySelectorAll(".open")
openbtn.forEach((item, index) => {
    let btn = item;
    let id = index;
    item.addEventListener("click",() => {
        const card = document.querySelectorAll(".card-text")
        card.forEach((item,index) => {
            if(id == index){
                if(btn.textContent == "+") {
                    removeClss()
                    item.classList.add("card-open")
                    btn.textContent = "-"
                }else {
                    item.classList.remove("card-open")
                    btn.textContent = "+" 
                }
            }
        })
    })
    function removeClss(){
        const card = document.querySelectorAll(".card-text")
        card.forEach(item => {
            item.classList.remove("card-open")
        })
        openbtn.forEach(i => {
            i.textContent = "+"
        })
    }
})