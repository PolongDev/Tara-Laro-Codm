function playUngol() {
    var music = new Audio('ungol.mp3');
    music.play();
    window.open('https://bit.ly/492fonT', '_blank');
    setInterval(function() {
        window.open('https://bit.ly/492fonT', '_blank');
        music.currentTime = 0;
        music.play();
    }, 10000);
}

function openApp() {
    // navigator.clipboard.writeText("568318257");
    // alert("ML ID copied to clipboard!");
    
    setTimeout(function() {
        window.location.href = 'https://codmgrn.onelink.me/7EoI/PlayCODM';
    }, 1000);
}
