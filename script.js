console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



// album
document.getElementById("about").style.display="none"
document.getElementsByClassName("back")[0].style.display="none";
document.getElementsByClassName("songItemContainer")[0].style.display="none";

document.getElementById("bolly").addEventListener('click',()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block";
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementsByClassName("back")[0].style.display="block";
    document.getElementById("about").style.display="none"


})
document.getElementById("punjab").addEventListener('click',()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block";
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementsByClassName("back")[0].style.display="block";
    document.getElementById("about").style.display="none"


})
document.getElementById("holly").addEventListener('click',()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block";
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementsByClassName("back")[0].style.display="block";
    document.getElementById("about").style.display="none"

})
document.getElementById("devotional").addEventListener('click',()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block";
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementsByClassName("back")[0].style.display="block";
    document.getElementById("about").style.display="none"
})


// back button 

document.getElementsByClassName("back")[0].addEventListener("click",()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="none"
    document.getElementById("bolly").style.display="block"
    document.getElementById("punjab").style.display="block"
    document.getElementById("holly").style.display="block"
    document.getElementById("devotional").style.display="block"
    document.getElementsByClassName("back")[0].style.display="none";
    document.getElementById("about").style.display="none"

})
document.getElementsByClassName("home")[0].addEventListener("click",()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block"
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementById("about").style.display="none"
})

document.getElementsByClassName("Album")[0].addEventListener("click",()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="none"
    document.getElementById("bolly").style.display="block"
    document.getElementById("punjab").style.display="block"
    document.getElementById("holly").style.display="block"
    document.getElementById("devotional").style.display="block"
    document.getElementById("about").style.display="none"

})

document.getElementsByClassName("brand")[0].addEventListener("click",()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="block"
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementById("about").style.display="none"

})

document.getElementsByClassName("about")[0].addEventListener("click",()=>{
    document.getElementsByClassName("songItemContainer")[0].style.display="none"
    document.getElementById("about").style.display="block"
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"

})

document.getElementById("signup").addEventListener("click",()=>{
    document.getElementById("bolly").style.display="none"
    document.getElementById("punjab").style.display="none"
    document.getElementById("holly").style.display="none"
    document.getElementById("devotional").style.display="none"
    document.getElementById("about").style.display="none"
    document.getElementsByClassName("songItemContainer")[0].style.display="none"
})


// login
document.getElementById("myForm").style.display = "none";

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  
 setTimeout(start, 10000)
function start(){
    document.getElementsByClassName('form')[0].style.display ="block";
}
//  /login
 

// signup

// document.getElementsByClassName("div")[0].style.display = "none";

document.getElementById("signup").addEventListener("click",newuser)

function newuser(){
    document.getElementsByClassName("div")[0].style.display ="block";
    document.getElementById("myForm").style.display ="none";
}

document.getElementById("submit").addEventListener("click",user)
function user(){
  document.getElementsByClassName("div")[0].style.display ="none";
  document.getElementById("myForm").style.display ="none";

}


document.getElementById("think").style.display ="block";
// / singup 