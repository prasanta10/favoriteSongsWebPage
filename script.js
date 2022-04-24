//Initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/song1.mp3');
let masterPlay =document.getElementById('masterPlay');
let Progressbar = document.getElementById('Progressbar');
let gif=document.getElementById('gif'); 
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName: "Nyano Ghar - Dibesh Pokhrayal", filePath: "/songs/song1.mp3", coverpath: "cover/cover1.jpg"},
    {songName: "Chop Suey - System of a Down", filePath: "/songs/song2.mp3", coverpath: "cover/cover2.jpg"},
    {songName: "Fly away with me - Tom Walker", filePath: "/songs/song3.mp3", coverpath: "cover/cover3.jpg"},
    {songName: "Thunderstruck - ACDC", filePath: "/songs/song4.mp3", coverpath: "cover/cover4.png"},
    {songName: "Dear God - Avenged Sevenfold", filePath: "/songs/song5.mp3", coverpath: "cover/cover5.jpg"},
    {songName: "Never Gonnna GIve You UP - Rick Astley", filePath: "/songs/song6.mp3", coverpath: "cover/cover6.png"},
    {songName: "Wish you were here - Pink FLoyd", filePath: "/songs/song7.mp3", coverpath: "cover/cover7.png"},
    {songName: "Living the Dream - Me Nd Adam ", filePath: "/songs/song8.mp3", coverpath: "cover/cover8.jpg"},
    {songName: "Save your Tears - The Weeknd", filePath: "/songs/song9.mp3", coverpath: "cover/cover9.png"},
    {songName: "Shotgun - George Ezra", filePath: "/songs/song10.mp3", coverpath: "cover/cover10.jpg"},
]

songItems.forEach((element,i)=>{
    element.querySelectorAll('img')[0].src=songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

//Handle play and pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    Progressbar.value=progress;
})

Progressbar.addEventListener('change',()=>{
    audioElement.currentTime=((Progressbar.value*audioElement.duration)/100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    }
    )}
 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.src=`songs/song${songIndex + 1}.mp3`; 
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9)
    songIndex=0;
    else
    songIndex+=1;
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.src=`songs/song${songIndex + 1}.mp3`; 
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");    
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0)
    songIndex=9;
    else
    songIndex-=1;
    audioElement.src=`songs/song${songIndex + 1}.mp3`; 
    masterSongName.innerText= songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
})

