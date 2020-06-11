
function about() {
    document.getElementById("info").innerHTML = '<div class="me" style="width: 60%; height: 200px; display: inline-block;"> <img class="andrewxue" src="./andrewxue.png" alt="Andrew Xue" style="width: 25%; height: 200px; float: left;"> <p style="margin-left: 25%; height: 200px; font-family: \'Balsamiq Sans\'">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>';
    document.getElementById("code").innerHTML = "";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn2").style.color = "gray";
}

function solutions() {
    document.getElementById("info").innerHTML = '<input type="Find a Problem" id="search-box" style="outline: none; width: 200px; height: 25px;"><input type="image" src="/imgs/search.png" onclick="find()" style="width: 30px; height: 30px;">';
    document.getElementById("btn1").style.color = "gray";
    document.getElementById("btn2").style.color = "black";
}

function find(){
    var prob = document.getElementById("search-box").value.toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById("code").innerHTML = "<p>"+window.store[key].content+"</p>";
            return;
        }
    }
    document.getElementById("code").innerHTML = "<h1>NOT FOUND</h1>";
}
