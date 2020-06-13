function about() {
    document.getElementById("info").innerHTML = '<div id="about"> <img class="andrewxue" src="./andrewxue.png" alt="Andrew Xue" id="me"> <p id="bio">Hello, my name is Andrew Xue and I\'m an incoming student at the University of Waterloo Computer Science program.\n\nI am a (now retired) competitive programmer who peaked in 2020 when I scored 69 on the Canadian Computing Competition and qualified for the Candian Computing Olympiad. Despite my decent score on the CCC, I only managed to clinch a bronze medal due to my poor performance at the CCO.</em id="note"> If you think bronze is a good result, you probably don\'t know how OI contests are run.</em>\n\nIn my spare time, I enjoy playing sports such as badminton and chess, binging anime and manga, and working on programming side projects.\n\n While browsing through my solutions, please note that these programs were written solely for the purpose of AC\'ing the problem, and therefore may lack proper formatting and comments.</p></div>';
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "gray";
}

function solutions() {
    document.getElementById("info").innerHTML = '<input type="text" placeholder="Find a Problem" id="search-box"><input type="image" src="/imgs/search.png" id="search-btn" onclick="find()">';
    document.getElementById("info").innerHTML += '<h2 id="tip"> Enter a DMOJ or Codeforces problem code (e.g. ccc20s5 or 1234A) </h2>';
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


