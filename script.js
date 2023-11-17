window.onload = () => {
      let alienAppendMaxTimes = 5;
let alienAppend = () =>{
    let alien_container = document.querySelector(".game-container .game .al-container")
    let alien = document.createElement("img")
    alien.src = "alien.png";
    alien_container.appendChild(alien)
    alienAppendMaxTimes--;
    if(alienAppendMaxTimes > 0)
    setTimeout(alienAppend,1200)
}
setTimeout(alienAppend,1200)
let bulletAppendMaxTimes = 4;
let bulletAppend = () =>{
    let bullet_container = document.querySelector(".game-container .game")
    let bullet = document.createElement("img")
    bullet.src = "bullet.png";
    bullet.classList.add("bullet")
    bullet_container.appendChild(bullet)
    bulletAppendMaxTimes--;
    if(bulletAppendMaxTimes > 0)
    setTimeout(bulletAppend,500)
}
bulletAppend()

let planeMovement = () => {
    let controlValue = Number.parseInt(document.getElementById("p-c-val").value);
    let plane = document.querySelector(".game-container .game #plane");
    plane.style.left = `${controlValue}px`
    let bullets = document.querySelectorAll(".game-container .game .bullet");
    Array.from(bullets).forEach((bullet)=>{
        let bulletY =Number.parseInt( window.getComputedStyle(bullet,null).getPropertyValue('bottom'));
        if(bulletY<50)
            bullet.style.left =  `${controlValue+26}px`;
    })
}
setInterval(planeMovement,0)
let score = document.querySelector(".game-container .labels #g-score");
let attacked = () => {
    let bullets = document.querySelectorAll(".game-container .game .bullet");
    let aliens = document.querySelectorAll(".game-container .game .al-container img");
    Array.from(bullets).forEach((bullet,index)=>{
        let bulletY =Number.parseInt( window.getComputedStyle(bullet,null).getPropertyValue('bottom')) + 20;
        let bulletX = Number.parseInt(window.getComputedStyle(bullet,null).getPropertyValue('left'));
        bulletX = bulletX-26;
        Array.from(aliens).forEach((alien,index)=>{
            let aliegnY  = Number.parseInt( window.getComputedStyle(alien,null).getPropertyValue('bottom'));
            let aliegnX = Number.parseInt( window.getComputedStyle(alien,null).getPropertyValue('left'));
           if(Math.abs(aliegnY - bulletY) < 5 && (Math.abs(aliegnX - bulletX) < 30))
           {
            aliens[index].style.display = "none";
            score.innerHTML = Number.parseInt(score.innerHTML) + 1;
           }
           if(aliegnY == 400)
           {
            aliens[index].style.display = "unset"
           }
           if(aliegnY == 0)
           {
            let end_score = document.querySelector(".game-container .end-display div span #g-score-end");
            let end_display = document.querySelector(".game-container .end-display");
            end_display.classList.add("end-display-block")
            let d_blocks = document.querySelectorAll(".game-container .d-block");
            Array.from(d_blocks).forEach((d_block)=>{
                d_block.style.display = "none"
            })
            end_score.innerHTML = score.innerHTML;
           }
        })
    })
}
setInterval(attacked,0)
}




