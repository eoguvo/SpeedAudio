console.log('%ciniciando whatsapp web audio speeder...', 'color: #97B4FF;');

let velocity = 1;
let audios = [];

function playAudios() {
    audios.forEach(audio => {
        audio.playbackRate = velocity;
        audio.addEventListener("ratechange", e=>{
            if(audio.playbackRate != velocity) {
                audio.playbackRate = velocity;            
            }
        })
    });
}

document.addEventListener('play', (e) => {
    _audios = document.querySelectorAll("audio");
    _audios.forEach(audio=>{
        if(!audios.includes(audio)) {
            audios.push(audio);
        }
    })
    playAudios();
}, true);

const interval = setInterval(() => {
    const header = document.querySelector("header");
    if (header) {
        clearInterval(interval);

        const btn = document.createElement('button');
        btn.innerHTML = `1x`;
        btn.style = styles;

        header.appendChild(btn);

        btn.addEventListener('click', () => {
            if ((velocity += .5) >= 3.5) velocity = 1;

            btn.innerHTML = `${velocity}x`;

            playAudios();
        })
    }
}, 1000);

const styles = `
    font-size: 16px;
    font-family: Roboto, sans-serif;
    padding: 8px;
    font-weight: bold;
    color: gray;
`