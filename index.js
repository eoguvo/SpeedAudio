console.log('iniciando whatsapp web audio speeder...');
const interval = setInterval(() => {
    const header = document.querySelector("header");
    let velocity = 1
    if(header) {
        clearInterval(interval)

        const btn = document.createElement('button')
        btn.innerHTML = `1x`
        btn.setAttribute('class', 'audioTime')
        btn.style = styles

        header.appendChild(btn)
        
        btn.addEventListener('click', ()=>{
            velocity += .5
            const audios = document.querySelectorAll('audio');            
            if (audios.length ===0) {
                velocity = 1 
                window.alert(`nenhum audio detectado, reinicie o "${velocity}x"`)
            }            

            if (velocity >= 3.5) velocity = 1            
            btn.innerHTML = `${velocity}x`      

            audios.forEach(audio => {
                audio.playbackRate = velocity;
            });
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