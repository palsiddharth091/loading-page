let body = document.querySelector('body');
let btn = document.querySelector('.btn');
let hdg = document.querySelector('.loader-heading');
let container = document.querySelector('.container');
let chb = document.createElement('div');
let hdg1 = document.createElement('h1');
let hdg2 = document.createElement('h1');
let img = document.createElement('img');
img.src='hello.gif'
img.className='image'
chb.id = 'myProgress';
hdg1.className = 'loader-heading';
hdg2.className = 'loader-heading';
hdg1.innerText = 'Your Page is Loading ....';
hdg2.innerText = 'Welcome !';
chb.innerHTML = `<div id="myBar"><span id="txt">0%</span></div>`; 
var i = 0;
btn.addEventListener('click', function move() {
container.replaceChild(chb,btn);
    body.replaceChild(hdg1,hdg);
    if (i == 0) {
        i = 0;
        var elem = document.getElementById("myBar");
        var elem1 = document.getElementById("txt");
            var width = 0;
        var id = setInterval(frame, 20 );
        function frame() {
            if (width >= 100) {
                if (width === 100) {
                    container.replaceChild(img,chb);
                    body.replaceChild(hdg2,hdg1);
                    clearInterval(id);
                    i = 0;
                }
                else {
                    clearInterval(id);
                    i = 0;
                }
            } else {
                width++;
                elem.style.width = width + "%";
                elem1.innerText = `${width}%`;
            }
        }
    }
}
)