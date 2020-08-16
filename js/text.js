let aboutText = `
    Hello! I\'m a graduate from Earl Haig SS and also an incoming Computer Science student at the University of Waterloo.<br>
    <br>I enjoy coding and am a (now retired) competitive programmer. Not that I\'ve had much of a career,
     but I peaked in 2020 when I scored 69 on the Canadian Computing Competition and qualified for the Candian Computing Olympiad. 
     Despite my decent score on the CCC, I only managed to come out with a bronze medal due to my subpar performance at the CCO.<br>
     <br>Some of my hobbies include playing sports such as badminton and chess, binging anime and manga, and working on side projects.<br>
     <br> While browsing through my DMOJ solutions, please note that these programs were written solely for the purpose of AC\'ing the problem, 
     and therefore may lack proper formatting and comments. If you can\'t find a problem when I\'ve clearly solved it on DMOJ, 
     it means I have been lazy and haven\'t uploaded it yet.;
`
let oraText = 'A fully functional music player and playlist builder with ability to recommend songs based on user\'s mood. MacOS app built using Swift.';

let pwText = 'A web app that calculates the \'worthiness\' of a present based on parameters specified by the user. Built using Node.js and Javascript.';

let dpText = 'My implementations of simple neural networks in Python, vectorized using the NumPy module. Ability to perform binary classification (e.g cat or not).';

document.getElementById("bio").innerHTML = aboutText;
document.getElementById("oraText1").innerHTML = document.getElementById("oraText2").innerHTML = oraText;
document.getElementById("pwText1").innerHTML = document.getElementById("pwText2").innerHTML = pwText;
document.getElementById("dlText1").innerHTML = document.getElementById("dlText2").innerHTML = dpText;
