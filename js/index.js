function move(index) {
    console.log("MOVE TO "+index);
    document.getElementById("main").style.transform = `translateX(calc(-100%/3*${index}))`;
    //document.getElementById("main").style.left = `calc(-100%*${index})`;
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

window.onbeforeunload = function(event) {   
    document.activeElement.blur();  
};