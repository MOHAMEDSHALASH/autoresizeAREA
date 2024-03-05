
const textArea=document.querySelectorAll("textarea")
textArea.forEach((text)=>{
  text.addEventListener('keyup',(eo)=>{
    let ScHeight = eo.target.scrollHeight;
    text.style.height='auto'
    text.style.height=`${ScHeight}px`
  })
})
