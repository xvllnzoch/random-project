const audio =

audio.addeventlistener('play', ()) => {
    body.classList.add('play-music');
};

audio.addeventlistener('pause', () => {
    body.classList.remove('play-music');
});
