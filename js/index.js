function move(index) {
    document.getElementById('main').style.transform = `translateX(calc(-100%/3*${index}))`;
    document.getElementById('btn'+index).style.color = 'black';
    document.getElementById('btn'+(index+1)%3).style.color = 'gray';
    document.getElementById('btn'+(index+2)%3).style.color = 'gray';
}


function find(){
    console.log('SEARCHED');
    var prob = document.getElementById('search-box').value.trim().toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById('code').innerHTML = `<div id='code-ctn'><pre id='prettyprint' class='prettyprint lang-cpp'>'+${window.store[key].content}+'</pre></div>`;
            document.getElementById('error').innerHTML = ``;
            return;
        }
    }
    document.getElementById('code').innerHTML = '';
    document.getElementById('error').innerHTML = 'No File Found.';
}

function showText(idx) {
    document.getElementById('about-main').innerHTML = aboutList[idx];
}

row = 0;

function showButtons() {
    let panel = document.querySelector('.panel-outer');
    let style = getComputedStyle(panel);
    let w = parseInt(style.width.substring(0, style.width.length-2));
    let m = parseInt(style.margin.substring(0, style.margin.length-2));
    let eachRow = Math.floor(width/(w+2*m));
    let totalRows = Math.ceil(4/eachRow);
    if (row >= totalRows) up();
    if (row==0) {
        document.getElementById('up').style.opacity = '0';
        document.getElementById('up').onclick = null;
    }else {
        document.getElementById('up').style.opacity = '1';
        document.getElementById('up').onclick = up;
    }
    if (row==totalRows-1) {
        document.getElementById('down').style.opacity = '0';
        document.getElementById('down').onclick = null;
    }else{
        document.getElementById('down').style.opacity = '1';
        document.getElementById('down').onclick = down;
    }
}

function toRow() {
    let dist = 330*row;
    document.getElementById('panels').style.transform = `translateY(-${dist}px)`;
    showButtons();
}

function up() {
    row -= 1;
    toRow();
}

function down() {
    row += 1;
    toRow();
}

window.onbeforeunload = () => {   
    document.activeElement.blur();  
};

document.onkeydown = function (t) {
    if(t.which == 9){
        return false;
    }
}

const iconName = ['education', 'programming', 'hobbies', 'accomplishments', 'techstack'];
const aboutIcons = ['/imgs/education.png', '/imgs/programming.png', '/imgs/hobbies.png', '/imgs/accomplishments.png', '/imgs/techstack.png'];
const aboutLightIcons = ['/imgs/educationLight.png', '/imgs/programmingLight.png', '/imgs/hobbiesLight.png', '/imgs/accomplishmentsLight.png', '/imgs/techstackLight.png'];

function push(positions) {
    const cx = window.innerWidth/2;
    const cy = 125;
    for (let i=0; i<5; i++){
        let dx = positions[i].x*window.innerWidth*3/100-cx;
        let dy = positions[i].y-cy;
        setTimeout(() => {
            document.getElementById(`${iconName[i]}`).style.transform = `translate(${dx}px, ${dy}px)`;
        }, i*500);
    }
}

function reset() {
    for (let i=0; i<5; i++){
        document.getElementById(`${iconName[i]}`).style.transform = `translate(0, 0)`;
    }
}

function pushOut() {
    let positions = [];
    const rad = 30;
    const radBig = 175;
    const eps = 50;
    const lim = 300;
    if (window.innerWidth < 850) {
        let margin = 50;
        let left = (window.innerWidth-5*rad-4*margin)/2;
        for (let i=0; i<5; i++){
            positions.push({ x: left*100/(3*window.innerWidth), y: 400 });    
            left += rad+margin;
        }
    }else {
        for (let i=0; i<5; i++){
            let farEnough = false;
            while (!farEnough) {
                let x = Math.floor(Math.random() * 20)+6.5;
                let y = Math.floor(Math.random() * 350);  
                
                farEnough = true;  
                for (let j=0; j<i; j++){
                    let dist = Math.sqrt(Math.pow(x*window.innerWidth*3/100-positions[j].x*window.innerWidth*3/100, 2)+Math.pow(y-positions[j].y, 2));
                    if (dist<rad*2+eps) {
                        farEnough = false;
                    }
                }
                let dist = Math.sqrt(Math.pow(x*window.innerWidth*3/100-window.innerWidth/2, 2)+Math.pow(y-radBig, 2));
                if (farEnough && dist > rad+radBig+eps && dist < lim) {
                    positions.push({ x, y });
                }else farEnough = false;
            }
        } 
    }
    push(positions);
}

let width;

window.onload = () => {
    width = window.innerWidth;
    document.getElementById('about').innerHTML = `<div id='about-main' class='about-main'>${defaultText}</div>`;
    for (let i=0; i<5; i++){
        document.getElementById('about').innerHTML += `
            <a id='${iconName[i]}' class='about-item' href='#${iconName[i]}' onclick='showText(${i})'>
                <img id='${iconName[i]}Img' class='about-icon'></img>
            </a>
        `;
    }
    pushOut();
    showButtons();
}

let last;

window.onresize = () => {
    if (window.innerWidth != width) {
        width = window.innerWidth;
        reset();
        let key = Math.random().toString(36).substr(2, 15);
        last = key;
        setTimeout(() => {
            if (last === key) {
                pushOut();
            }
        }, 750);
        showButtons();
    } 
}