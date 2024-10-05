window.onload = function() {
    var img = document.getElementById('popcat1');
    var count = document.getElementById('score');
    var score = 0;
    var audio = new Audio('pop.wav');

    img.addEventListener('mousedown', function() {
        increaseScore();
        img.src = 'Popcat Wow png.png';
    });

    img.addEventListener('mouseup', function() {
        img.src = 'Popcat png.png';
        count.innerHTML = score;
        audio.play();
    });

    function increaseScore() {
        score++;
        count.innerHTML = score;
    }
}