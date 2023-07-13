// // document
const cardwrapper = document.querySelector(".wrapper-card")

// // fetch backend 
// fetch("http://127.0.0.1:5500/Ecomerce-Advenced%20with%20Axamt/mockdata/projects.json")
//     .then(result => result.json())
//     .then(data => {
//         data.forEach(element => {
//             const card = document.createElement("div")
//             card.classList.add("card")
//             const cardappend1 = document.createElement("div")
//             card.appendChild(cardappend1)
//             cardappend1.classList.add("img-card")
//             const cardappend1Img = document.createElement("img")
//             cardappend1Img.src = element.img
//             cardappend1.appendChild(cardappend1Img)
//             const cardappend1Text = document.createElement("h3")
//             cardappend1.appendChild(cardappend1Text)
//             cardappend1Text.textContent = element.name
//             const cardappend2 = document.createElement("div")
//             card.appendChild(cardappend2)
//             cardappend2.classList.add("card-text1")
//             const cardappend2Text = document.createElement("h3")
//             cardappend2.appendChild(cardappend2Text)
//             cardappend2Text.textContent = element.description
//             const cardappend3 = document.createElement("div")
//             cardappend3.classList.add("price-card")
//             card.appendChild(cardappend3)
//             const cardappend3Text = document.createElement("h2")
//             cardappend3.appendChild(cardappend3Text)
//             cardappend3Text.textContent = `$ ${element.price}`
//             const btnadd = document.createElement("button")
//             cardappend3.appendChild(btnadd)
//             const icon = document.createElement("i")
//             icon.classList.add("bi")
//             icon.classList.add("bi-cart")
//             btnadd.appendChild(icon)

//             cardwrapper.appendChild(card)
//         });
//     })


fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                data.forEach(element => {
                    console.log(element)
                    const card = document.createElement("div")
                    card.classList.add("card")
                    const cardappend1 = document.createElement("div")
                    card.appendChild(cardappend1)
                    cardappend1.classList.add("img-card")
                    const cardappend1Img = document.createElement("img")
                    cardappend1Img.src = element.image  
                    cardappend1.appendChild(cardappend1Img)
                    const cardappend1Text = document.createElement("h3")
                    cardappend1.appendChild(cardappend1Text)
                    cardappend1Text.textContent = element.name
                    const cardappend2 = document.createElement("div")
                    card.appendChild(cardappend2)
                    cardappend2.classList.add("card-text1")
                    const cardappend2Text = document.createElement("h3")
                    cardappend2.appendChild(cardappend2Text)
                    cardappend2Text.textContent = element.description
                    const cardappend3 = document.createElement("div")
                    cardappend3.classList.add("price-card")
                    card.appendChild(cardappend3)
                    const cardappend3Text = document.createElement("h2")
                    cardappend3.appendChild(cardappend3Text)
                    cardappend3Text.textContent = `$ ${element.price}`
                    const btnadd = document.createElement("button")
                    cardappend3.appendChild(btnadd)
                    const icon = document.createElement("i")
                    icon.classList.add("bi")
                    icon.classList.add("bi-cart")
                    btnadd.appendChild(icon)
        
                    cardwrapper.appendChild(card)
                });
            })