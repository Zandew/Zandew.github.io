function about() {
    document.getElementById("info").innerHTML = `
    <div id="about"> 
        <img id="andrewxue" src="/imgs/andrewxue.png" alt="Andrew Xue"> 
        <p id="bio">${aboutText}</p>
    </div>
    `;
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "gray";
    document.getElementById("btn3").style.color = "gray";
}

function solutions() {
    document.getElementById("info").innerHTML = `
    <input type="text" placeholder="Find a Problem" id="search-box"><input type="image" src="/imgs/search.png" id="search-btn" onclick="find()">
    `;
    document.getElementById("info").innerHTML += `
    <h2 id="tip"> Enter a DMOJ or Codeforces problem code (e.g. ccc20s5 or 1234A) </h2>
    `;
    document.getElementById("search-box").onkeypress = function(event){
        if (event.keyCode == 13 || event.which == 13){
            document.getElementById("search-btn").click();
        }
    };
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "gray";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn3").style.color = "gray";
}

function projects() {
    document.getElementById("info").innerHTML = `
    <div class="proj-container">
        <div class="proj">
            <div class="proj-header">
                <h2>MiniMusicWidget</h2>
            </div>
            <div class="proj-body">
                <p class="proj-text">
                Hello
                </p>
            </div>
        </div>
        <div class="proj">
            <div class="proj-header">
                <h2>Present Worthy</h2>
            </div>
            <div class="proj-body">
                <p class="proj-text">
                Hi
                </p>
            </div>
        </div>
    </div>
    `;
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "gray";
    document.getElementById("btn2").style.color = "gray";
    document.getElementById("btn3").style.color = "black";
}

function find(){
    var prob = document.getElementById("search-box").value.trim().toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById("code").innerHTML = '<div id="code-ctn"><pre class="prettyprint lang-cpp">'+window.store[key].content+'</pre></div>';
            return;
        }
    }
    document.getElementById("code").innerHTML = '<div id="error"><h1>NOT FOUND</h1></div>';
}


