let defaultText = `
    <h1>Hello, I'm Andrew Xue</h1>
`
let education = `
    I'm a computer science student at the University of Waterloo. I am currently looking for 2021 spring internships for my 1C term. I graduate in 2025.
`

let programming = `
    My programming knowledge largely consists of algorithms and data structures as I was mainly a competitive programmer, but I am looking to expand my horizons 
    by delving into web development and software.
`

let hobbies = `
    In my spare time, I enjoy playing sports (mainly badminton and chess), binging anime and manga, and working on side projects.    
`

let accomplishments = `
    <div>
        <h3> My Accomplishments </h3>
        <ul> 
            <li> CCO 2020 bronze medalist </li>
            <li> ... thats pretty much it (for now!) </li>
        </ul>
    </div>
`

let oraText = 'A fully functional music player and playlist builder with ability to recommend songs based on user\'s mood. MacOS app built using Swift.';

let pwText = 'A web app that calculates the \'worthiness\' of a present based on parameters specified by the user. Built using Node.js and Javascript.';

let dpText = 'My implementations of simple neural networks in Python, vectorized using NumPy. Trained and tested for 80% accuracy on binary classification datasets (e.g cat or not).';

document.getElementById("oraText1").innerHTML = document.getElementById("oraText2").innerHTML = oraText;
document.getElementById("pwText1").innerHTML = document.getElementById("pwText2").innerHTML = pwText;
document.getElementById("dlText1").innerHTML = document.getElementById("dlText2").innerHTML = dpText;
