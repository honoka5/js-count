console.log("Hello World")
window.addEventListener("load",function(){
    let count = 0 
    const plus_button = document.getElementById('plus-button')
    const countpreview =document.getElementById('count-preview')
    const reduce_button = document.getElementById('reduce-button')
    console.log(plus_button)

    plus_button.addEventListener("click",function(){
        console.log("click")
        count++
        //console.log
        countpreview.innerHTML=count
        console.dir(countpreview)
    })

    reduce_button.addEventListener("click",function(){
        if(count===0){
            return
        }
        count--
        countpreview.innerHTML=count
        console.dir(reduce_button)
    })
    
})  