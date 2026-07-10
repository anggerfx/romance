// ==========================================
// FOR ALMAAAA ❤️
// Made with love by Angger
// ==========================================

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.remove();
        }, 800);

    }, 1800);

});

// ==========================================
// AOS
// ==========================================

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

// ==========================================
// MUSIC
// ==========================================

const startButton = document.getElementById("startButton");
const bgMusic = document.getElementById("bgMusic");

startButton.addEventListener("click", () => {

    document.getElementById("mainContent").scrollIntoView({
        behavior: "smooth"
    });

    bgMusic.play().catch(() => {
        console.log("Autoplay diblokir browser.");
    });

});

// ==========================================
// LOVE LETTER
// ==========================================

const loveMessage = `Hai Sayang... ❤️

Kalau hari ini dunia sedang membuatmu lelah...

Aku cuma ingin kamu tahu...

Ada seseorang yang selalu bangga memiliki kamu.

Terima kasih sudah bertahan sampai hari ini.

Terima kasih sudah menjadi rumah yang paling nyaman.

Terima kasih sudah hadir di hidupku.

Aku mungkin belum sempurna...

Tapi aku akan terus belajar menjadi seseorang yang pantas untukmu.

Aku sayang kamu...

Hari ini...

Besok...

Dan seterusnya.

❤️ - Angger`;

let typingIndex = 0;

const typingTarget = document.getElementById("typingText");

function typeLoveLetter(){

    if(!typingTarget) return;

    if(typingIndex < loveMessage.length){

        typingTarget.innerHTML += loveMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeLoveLetter,40);

    }

}

setTimeout(typeLoveLetter,2200);

// ==========================================
// FLOATING HEART
// ==========================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    const emoji=[
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘",
        "🥰"
    ];

    heart.innerHTML=emoji[Math.floor(Math.random()*emoji.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(4+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,350);

// ==========================================
// MAIN PHOTO CLICK
// ==========================================

const mainPhoto = document.querySelector(".main-photo");

if(mainPhoto){

    mainPhoto.addEventListener("click",()=>{

        alert("🥰\n\nCantiknya kebangetan ❤️\n\nAku beruntung banget bisa punya kamu.\n\n- Angger");

    });

}

// ==========================================
// PELUK VIRTUAL
// ==========================================

const hugButton = document.getElementById("hugButton");

if(hugButton){

hugButton.addEventListener("click",()=>{

document.body.style.transform="scale(1.01)";

setTimeout(()=>{
document.body.style.transform="scale(1)";
},250);

showPopup(

"🤗 PELUUUKKK!!",

`Semoga pelukan virtual ini
bisa sedikit mengurangi capekmu.

❤️❤️❤️`

);

});

}

// ==========================================
// POPUP
// ==========================================

const popup=document.getElementById("popup");

function showPopup(title,message){

popup.style.display="flex";

popup.querySelector("h2").innerHTML=title;

popup.querySelector("p").innerHTML=message.replace(/\n/g,"<br>");

}

function closePopup(){

popup.style.display="none";

}

// ==========================================
// TOMBOL NGAMBEK
// ==========================================

const runButton=document.getElementById("runButton");

if(runButton){

runButton.addEventListener("mouseover",()=>{

const x=Math.random()*(window.innerWidth-220);

const y=Math.random()*(window.innerHeight-100);

runButton.style.position="fixed";

runButton.style.left=x+"px";

runButton.style.top=y+"px";

});

}

// ==========================================
// AKU UDAH SENYUM
// ==========================================

const loveButton=document.getElementById("loveButton");

if(loveButton){

loveButton.addEventListener("click",()=>{

confettiEffect();

showPopup(

"🥳 YEEEEEY ❤️",

`Nah gitu dong...

Senyum kamu jauh lebih cantik.

Terima kasih sudah tersenyum lagi.

Aku sayang kamu.

❤️ - Angger`

);

});

}

// ==========================================
// CONFETTI
// ==========================================

function confettiEffect(){

for(let i=0;i<150;i++){

let conf=document.createElement("div");

conf.innerHTML=["🎉","💖","🌸","❤️","✨"][Math.floor(Math.random()*5)];

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-30px";

conf.style.fontSize=(20+Math.random()*20)+"px";

conf.style.transition=(3+Math.random()*3)+"s linear";

conf.style.zIndex="9999";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.top="110vh";

conf.style.transform=`rotate(${720*Math.random()}deg)`;

conf.style.opacity="0";

},50);

setTimeout(()=>{

conf.remove();

},6500);

}

}

// ==========================================
// SIAPA PALING GANTENG?
// ==========================================

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

if(yesBtn){

yesBtn.onclick=()=>{

showPopup(

"😍 Jawaban Benar",

"Terima kasih sayang 😂❤️"

);

};

}

if(noBtn){

noBtn.onmouseover=()=>{

const x=Math.random()*(window.innerWidth-180);

const y=Math.random()*(window.innerHeight-100);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

};

}

// ==========================================
// PESAN ACAK
// ==========================================

const funnyMessages=[

"🥺 Jangan ngambek lama-lama ya... nanti aku sedih.",

"🍦 Kalau udah baikan nanti aku traktir es krim.",

"❤️ Kamu cantik banget hari ini.",

"🤗 Aku kangen kamu.",

"🌸 Semoga hari kamu selalu indah.",

"💖 Aku bangga punya kamu."

];

setInterval(()=>{

const msg=funnyMessages[
Math.floor(Math.random()*funnyMessages.length)
];

console.log(msg);

},8000);

// ==========================================
// END
// ==========================================
