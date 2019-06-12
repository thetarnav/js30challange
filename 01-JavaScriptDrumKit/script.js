window.addEventListener('keypress', e => {
    var keyButtons = document.getElementsByClassName('key'),
        audioGroup = document.getElementsByTagName('audio');

    [...keyButtons].forEach(button => {        
        if (e.code === button.attributes['data-key'].value) {
            button.classList.add('playing');
            setTimeout(() => {
                button.classList.remove('playing');
                void button.offsetWidth;
            }, 200);
        }
    });

    [...audioGroup].forEach(audio => {
        if (e.code === audio.attributes['data-key'].value) {
            audio.currentTime = 0;
            audio.play();
        }
    });
});

// OR:

window.addEventListener('keypress', e => {
    var button = document.querySelector(`.key[data-key="${e.code}"]`);
    var audio = document.querySelector(`audio[data-key="${e.code}"]`);

    if (button) {
        button.classList.add('playing');
        setTimeout(() => {
            button.classList.remove('playing');
            void button.offsetWidth;
        }, 200);
    }

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
});