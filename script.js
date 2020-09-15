const songs = [
    "01. G (feat. Anchorman).mp3",
    "02. A.mp3",
    "03. R (feat. Mr Murph).mp3",
    "04. B.mp3",
    "05. A.mp3"
];

function createSongList() {
    const list = document.createElement('ol');
    for(let i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

document.getElementById('songList').appendChild(createSongList());