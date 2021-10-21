const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
const score = document.getElementById('score')
let isJump = false;
let position = 0;
let total =0
function handKeyUp(event){
    if(event.keyCode === 32){
        if(!isJump){
            jump()
        }
        
    };
}

function jump(){
    isJump =true;
    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval)
           
            let donwInterval =setInterval(()=>{
                if(position <= 0){
                    clearInterval(donwInterval)
                    isJump = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position +"px"
                }},20); 
                
            }else{
            position += 20;
            dino.style.bottom= position +"px";
        }
    },20);  
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition =1000;
    let randomTime = Math.random() * 6000;
    let scoretotal = 0
    cactus.classList.add('cactus');
    cactus.style.left= 1000 +'px'
    background.appendChild(cactus);
    let leftInterval = setInterval(()=>{
        if(cactusPosition == -60){
            clearInterval(leftInterval);
            background.removeChild(cactus)
            total += 10
            score.innerText = `SCORE ${total}`;
        }else if(cactusPosition > 150 && cactusPosition < 210 && position < 60){
            //game over
            clearInterval(leftInterval)
            document.body.innerHTML= `<h1 class= game-over>GAME OVER</h1><br><br><h2 class= game-over>Score ${total}</h2>`

        }else{
            cactusPosition -= 10;
            cactus.style.left= cactusPosition +'px'
            
        }
    }, 20)

    setTimeout(createCactus, randomTime)
}
createCactus();
document.addEventListener('keyup', handKeyUp)