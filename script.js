const songs = [
    "01. G (feat. Anchorman).mp3",
    "02. A.mp3",
    "03. R (feat. Mr Murph).mp3",
    "04. B.mp3",
    "05. A.mp3"
];

const player = document.getElementById('player');

function createSongList() {
    const list = document.createElement('ol');
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

const songList = document.getElementById('songList');
songList.appendChild(createSongList());

songList.onclick = function (e) {
    
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
};

function playAudio() {
    if(player.readyState) {
        player.play();
    }
};

function pauseAudio() {
    player.pause();
}