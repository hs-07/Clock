
// ANALOG SETINTERVAL

setInterval(() => {
    d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();
    let stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


// DIGITAL SETINTERVAL

setInterval(() => {
    let hour = document.getElementById('hour-2');
    let minute = document.getElementById('minute-2');
    let second = document.getElementById('second-2');
    let ampm = document.getElementById('ampm');
    d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    var am = 'AM';

    if (h>12){
        h=h-12;
        var am = 'PM';
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;
}, 1000);


let Image_tracker = '1';
function change() {
    let myImage = document.getElementById('image');
    if (Image_tracker == '1') {
        myImage.src = './img/clock2.png';
        Image_tracker = 2;
    } else if (Image_tracker == '2') {
        myImage.src = './img/clock3.png';
        Image_tracker = 3;
    } else if (Image_tracker == '3') {
        myImage.src = './img/clock4.png';
        Image_tracker = 4;
    } else if (Image_tracker == '4') {
        myImage.src = './img/clock5.png';
        Image_tracker = 5;
    } else {
        myImage.src = './img/clock.png';
        Image_tracker = 1;
    }
}

// let hideNshow = '1';
function hide() {

     let analog = document.getElementById('container');
     let digital = document.getElementById('digital');

    if(analog.style.display === 'flex'){
        analog.style.display = 'none';
        digital.style.display = 'flex';
    }else {
        analog.style.display = 'flex';
        digital.style.display = 'none';
    }

}


