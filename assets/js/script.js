var media = document.getElementById('myMusic')

function pauseMusic() {
    media.pause()
    document.getElementById('buttonMusic').innerHTML = '<i class="fa fa-play"></i>'
    document.getElementById('buttonMusic').setAttribute('onclick', 'playMusic()')
    showPause()
}

function playMusic() {
    var promise = media.play()
    if (promise !== undefined) {
        promise.then(_ => {
            media.play()
            showCredit1()
        }).catch(error => {
            pauseMusic()
        });
    }
    document.getElementById('buttonMusic').innerHTML = '<i class="fa fa-pause"></i>'
    document.getElementById('buttonMusic').setAttribute('onclick', 'pauseMusic()')
    showCredit()
}

function showCredit() {
    document.getElementById('musicCredit').className = "music-credit show";
    setTimeout(function() {
        document.getElementById('musicCredit').className = "music-credit"
    }, 3000)
}

function showCredit1() {
    var list = document.getElementById('musicCredit')
    list.removeChild(list.firstElementChild);
    document.getElementById('musicCredit').innerHTML = '<p>Play : <b>Christina Perri - A Thousand Years</b><br/>musik sedang diputar!</p>'
    document.getElementById('musicCredit').className = "music-credit show";
    setTimeout(function() {
        document.getElementById('musicCredit').className = "music-credit"
    }, 3000)
}

function showPause() {
    var list = document.getElementById('musicCredit')
    list.removeChild(list.firstElementChild);
    document.getElementById('musicCredit').innerHTML = '<p>Pause : <b>Christina Perri - A Thousand Years</b><br/>Musik terhenti, silahkan diputar!</p>';
    document.getElementById('musicCredit').className = "music-credit show";
    setTimeout(function() {
        document.getElementById('musicCredit').className = "music-credit"
    }, 3000)
}

window.onload = function() {
    setTimeout(function() {
        playMusic()
        showCredit()
    }, 1000)
}