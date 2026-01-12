const images=[
 "img1.jpeg",
 "img2.jpeg",
 "img3.jpeg",
 "img4.jpeg",
 "img5.jpeg"
];

let i=0;
const slide=document.getElementById("slide");
setInterval(()=>{
    i=(i+1)%images.length;
    slide.src=images[i];
},1800);

const btn=document.getElementById("btn");
const box=document.getElementById("box");
const card=document.getElementById("card");

btn.onclick=()=>{
    document.querySelector(".slideshow-container").style.display="none";
    btn.style.display="none";
    box.classList.remove("hidden");

    setTimeout(()=>box.classList.add("open"),200);
    setTimeout(()=>card.classList.add("show-card"),1000);
};

/* FIREWORKS */
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=[];
function firework(){
    for(let i=0;i<60;i++){
        particles.push({
            x:Math.random()*canvas.width,
            y:canvas.height,
            vx:(Math.random()-.5)*6,
            vy:-Math.random()*8-4,
            life:80
        });
    }
}

setInterval(firework,900);

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach((p,i)=>{
        p.x+=p.vx;
        p.y+=p.vy;
        p.vy+=.15;
        p.life--;
        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
        ctx.fillRect(p.x,p.y,3,3);
        if(p.life<=0)particles.splice(i,1);
    });
    requestAnimationFrame(animate);
}

animate();
