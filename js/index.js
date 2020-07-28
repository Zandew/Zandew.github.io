function about() {
    document.getElementById("info").src = `
    <div id="about"> 
        <img id="andrewxue" src="/imgs/andrewxue.png" alt="Andrew Xue"> 
        <p id="bio">Hello! I\'m a graduate from Earl Haig SS and also an incoming Computer Science student at the University of Waterloo.<br><br>I enjoy coding and am a (now retired) competitive programmer. Not that I\'ve had much of a career, but I peaked in 2020 when I scored 69 on the Canadian Computing Competition and qualified for the Candian Computing Olympiad. Despite my decent score on the CCC, I only managed to come out with a bronze medal due to my poor performance at the CCO.<br><br><em id="note"> If you think bronze is a good result, you\'re probably not familiar with how OI contests are run.</em><br><br>Some of my hobbies include playing sports such as badminton and chess, binging anime and manga, and working on side projects.<br><br> While browsing through my solutions, please note that these programs were written solely for the purpose of AC\'ing the problem, and therefore may lack proper formatting and comments.</p>
    </div>
    `;
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "gray";
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


