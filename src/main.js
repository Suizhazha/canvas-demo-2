let canvas=document.getElementById('canvas')

//js获取屏幕宽高

let documentHeight=document.documentElement.clientHeight
let documentWidth =document.documentElement.clientWidth
canvas.width=documentWidth
canvas.height=documentHeight


//画线
    let ctx=canvas.getContext('2d')

//默认不画，鼠标按下时开始画
let padding=false
canvas.onmousedown=()=>{
  padding=true
}


canvas.onmousemove=(e)=>{
  if (padding){
    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill()
    ctx.fillStyle="black"
    ctx.strokeStyle='none'
  }else {
    console.log('什么都不做');
  }
}
canvas.onmouseup=()=>{
  padding=false
}


