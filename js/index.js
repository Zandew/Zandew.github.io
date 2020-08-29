function move(index) {
    document.getElementById("main").style.transform = `translateX(calc(-100%/3*${index}))`;
    document.getElementById("btn"+index).style.color = "black";
    document.getElementById("btn"+(index+1)%3).style.color = "gray";
    document.getElementById("btn"+(index+2)%3).style.color = "gray";
}


function find(){
    console.log("SEARCHED");
    var prob = document.getElementById("search-box").value.trim().toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById("code").innerHTML = '<div id="code-ctn"><pre id="prettyprint" class="prettyprint lang-cpp">'+window.store[key].content+'</pre></div>';
            document.getElementById("error").innerHTML = "";
            return;
        }
    }
    document.getElementById("code").innerHTML = "";
    document.getElementById("error").innerHTML = "No File Found.";
}

function showText(idx) {
    if (idx==0) {
        document.getElementById('about-main').innerHTML = education;
    }else if (idx==1) {
        document.getElementById('about-main').innerHTML = programming;
    }else if (idx==2) {
        document.getElementById('about-main').innerHTML = hobbies;
    }else if (idx==3) {
        document.getElementById('about-main').innerHTML = accomplishments;
    }
}

window.onbeforeunload = () => {   
    document.activeElement.blur();  
};

document.onkeydown = function (t) {
    if(t.which == 9){
        return false;
    }
}

let iconName = ['education', 'programming', 'hobbies', 'accomplishments'];
let aboutIcons = ['/imgs/education.png', '/imgs/programming.png', '/imgs/hobbies.png', '/imgs/accomplishments.png'];
let aboutLightIcons = ['/imgs/educationLight.png', '/imgs/programmingLight.png', '/imgs/hobbiesLight.png', '/imgs/accomplishmentsLight.png'];

function push(positions) {
    let cx = window.innerWidth/2;
    let cy = 125;
    for (let i=0; i<4; i++){
        let dx = positions[i].x*window.innerWidth*3/100-cx;
        let dy = positions[i].y-cy;
        setTimeout(() => {
            document.getElementById(`about-item${i}`).style.transform = `translate(${dx}px, ${dy}px)`;
        }, i*500);
    }
}

window.onload = () => {
    let positions = [];
    let rad = 25;
    let radBig = 175;
    let eps = 75;
    let lim = 300;
    console.log(window.innerWidth);
    for (let i=0; i<4; i++){
        let farEnough = false;
        console.log(i);
        console.log(positions);
        while (!farEnough) {
            let x = Math.floor(Math.random() * 20)+6.5;
            let y = Math.floor(Math.random() * 350);  
            
            farEnough = true;  
            console.log(i);
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
    document.getElementById('about').innerHTML = `<div id="about-main" class="about-main">${defaultText}</div>`;
    for (let i=0; i<4; i++){
        document.getElementById('about').innerHTML += `
            <div id="about-item${i}" class="about-item" onclick="showText(${i})">
                <img id="${iconName[i]}" class="about-icon"></img>
            </div>
        `;
    }
    setTimeout(() => push(positions), 0);
}