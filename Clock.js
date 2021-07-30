setInterval(() => {
    d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

let Image_tracker='1';
function change(){
    let myImage = document.getElementById('image');
    if(Image_tracker == '1'){
        myImage.src='./img/clock2.png';
        Image_tracker=2;
    }else if(Image_tracker == '2'){
        myImage.src='./img/clock3.png';
        Image_tracker=3;
    }else if(Image_tracker == '3'){
        myImage.src='./img/clock4.png';
        Image_tracker=4;
    }else if(Image_tracker== '4'){
        myImage.src='./img/clock5.png';
        Image_tracker=5; 
    }else{
        myImage.src='./img/clock.png';
        Image_tracker=1;
    }
}