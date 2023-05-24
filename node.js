const boxes=document.querySelectorAll('.water')
const empty=document.querySelector('.empty')
const full=document.querySelector('.full')
const text=document.querySelector('.empty h2')
const title=document.querySelector('.empty p')
boxes.forEach((box,idx)=>{
    box.addEventListener('click',()=>{
        for(let i=0;i<=idx;i++){
            boxes[i].classList.add('active')
        }
        for(let i=idx+1;i<=7;i++){
            boxes[i].classList.remove('active')
        }
        let fh=(250*(idx+1)*100)/2000
        let eh=100-fh
        let l=(2*eh)/100
        // console.log(fh)
        // console.log(eh)
        // console.log(l)
        full.innerText=`${fh}%`
        full.classList.add('active')
        full.style.height=`${fh}%`
        empty.style.height=`${eh}%`
        empty.classList.add('active')
        text.innerText=`${l}L`
        title.innerText=`Required`
        if(idx==7){
            text.innerText=``
            title.innerText=``
        }
    })
})