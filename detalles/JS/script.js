window.onload = () =>{
    let imgGaleria = document.querySelector("#main-product-img")
    let imgs = document.querySelectorAll(".thumb")
    let btn = document.querySelectorAll(".size-btn")
    for(let i=0;i<imgs.length;i++){
        imgs[i].addEventListener('click', (evt) =>{
            console.log(evt.target)
            imgGaleria.src = evt.target.src.replace("thumbs/","")
            imgs.forEach(item=>{
                item.classList.remove('active')
            })
             evt.target.classList.add('active')

        })
    }
    btn.forEach(button => {
        button.addEventListener('click', (evt) =>{
            btn.forEach(item =>{
                item.classList.remove('active')
            })
            evt.target.classList.add('active')
            let selectSize = evt.target.textContent;
            if(selectSize == '50ml'){
                price = 15.00
            }else if(selectSize == '100ml'){
                price = 20.00
            }
            calculate()
        })
    })
    let decrease = document.getElementById("decrease")
    let increase = document.getElementById("increase")
    let quantity = document.getElementById("quantity")
    let min = 1
    let max = 15
    quantity.min = min
    quantity.max = max
    decrease.addEventListener('click', () => {
        let num = parseInt(quantity.value)
        if(num > min){
            quantity.value = num -1
            calculate
        }
    })
    increase.addEventListener('click',() => {
        let num = parseInt(quantity.value)
        if(num < max){
            quantity.value = num + 1;
            calculate()
        }
    })
    let discount = document.querySelector('.discount')
    let total = document.querySelector('.current')
    let price = 20.00

    function calculate(){
        let num = parseInt(quantity.value)
        if(isNaN(num) || num < 1){
            num = 1
            quantity.value = 1
        }
        let dPercent = 0
        let dOperacion = 1
        if(num >10){
            dPercent = 20
            dOperacion = 0.80
        }else if (num > 5){
            dPercent = 10
            dOperacion = 0.90
        }
        let sTotal = num * price
        let totalD = sTotal * dOperacion
        if(dPercent > 0){
            discount.textContent = `${dPercent}% OFF`
            discount.style.display = 'inline'
        }else{
            discount.style.display = 'none'
        }
        if(total){
            total.textContent = `$${totalD.toFixed(2)}`
        }
    }
    quantity.addEventListener('input', calculate)
}