
function about() {
    document.getElementById("info").innerHTML = '<div id="about"> <img class="andrewxue" src="./andrewxue.png" alt="Andrew Xue" id="me"> <p id="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>';
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "gray";
}

function solutions() {
    document.getElementById("info").innerHTML = '<input type="text" placeholder="Find a Problem" id="search-box"><input type="image" src="/imgs/search.png" id="search-btn" onclick="find()">';
    document.getElementById("code").innerHTML = '<h2 id="tip"> Enter a DMOJ or Codeforces problem code (e.g. ccc20s5 or 1234A) </h2>'; 
    document.getElementById("btn1").style.color = "gray";
    document.getElementById("btn2").style.color = "black";
}

function find(){
    var prob = document.getElementById("search-box").value.trim().toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById("code").innerHTML = '<div id="code-ctn"><pre class="prettyprint lang-cpp" style="float: left">'+window.store[key].content+'</pre></div>';
            return;
        }
    }
    document.getElementById("code").innerHTML = "<h1>NOT FOUND</h1>";
}
