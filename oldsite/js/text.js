const defaultText = `
    <h1>Hello,<br>I'm Andrew Xue</h1>
`
const education = `
    I'm a computer science student at the University of Waterloo. I am currently looking for 2021 spring internships for my 1C term. I graduate in 2025.
`

const programming = `
    My programming knowledge largely consists of algorithms and data structures as I was mainly a competitive programmer, but I am looking to expand my horizons 
    by delving into web development and software.
`

const hobbies = `
    In my spare time, I enjoy playing sports (mainly badminton and chess), binging anime and manga, and working on side projects.    
`

const accomplishments = `
    <div>
        <h3> My Accomplishments </h3>
        <ul> 
            <li> CCO 2020 bronze medalist </li>
            <li> ... thats pretty much it (for now!) </li>
        </ul>
    </div>
`

const techstack = `
    <div>
        <h3> My Tech Stack </h3>
        <div style='width: 300px'>
            <img class='stack-icon' src='/imgs/python.png'></img>
            <img class='stack-icon' src='/imgs/cpp.png'></img>
            <img class='stack-icon' src='/imgs/javascript.png'></img>
            <img class='stack-icon' src='/imgs/nodejs.png'></img>
            <img class='stack-icon' src='/imgs/react.png'></img>
            <img class='stack-icon' src='/imgs/redux.png'></img>
        <div>
    </div>
`;

const aboutList = [education, programming, hobbies, accomplishments, techstack];

const oraText = 'A fully functional music player and playlist builder with ability to recommend songs based on user\'s mood. MacOS app built using Swift.';

const pwText = 'A web app that calculates the \'worthiness\' of a present based on parameters specified by the user. Built using Node.js and Javascript.';

const dpText = 'My implementations of simple neural networks in Python, vectorized using NumPy. Trained and tested for 80% accuracy on binary classification datasets (e.g cat or not).';

const pText = 'A web app that turns online study sessions into social experiences. Built using Node.js, React.js, Socket.io, and Python. Overall winner of Ignition Hacks 2020';

document.getElementById('oraText1').innerHTML = oraText;
document.getElementById('pwText1').innerHTML = pwText;
document.getElementById('dlText1').innerHTML = dpText;
document.getElementById('pText1').innerHTML = pText;
