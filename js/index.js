function move(index) {
    document.getElementById("main").style.left = `calc(-100%*${index})`;
    document.getElementById("btn"+index).style.color = "black";
    document.getElementById("btn"+(index+1)%3).style.color = "gray";
    document.getElementById("btn"+(index+2)%3).style.color = "gray";
}


function find(){
    var prob = document.getElementById("search-box").value.trim().toLowerCase();
    for (var key in window.store){
        if (window.store[key].title.toLowerCase() == prob){
            document.getElementById("code").innerHTML = '<div id="code-ctn"><pre id="prettyprint" class="prettyprint lang-cpp">'+window.store[key].content+'</pre></div>';
            return;
        }
    }
    document.getElementById("code").innerHTML = '<div id="error"><h1>NOT FOUND</h1></div>';
}

