var p;

window.onload = function() {

    // Initialize canvas
    canvas.init();
    canvas.setSize(800, 600);

    // Draw things on the canvas
    canvas.ctx.fillStyle = 'red';
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.ctx.strokeStyle = 'blue';
    for (var i = 0; i < 10; i++) {
        canvas.ctx.moveTo(Math.floor(i * (canvas.width / 10)), 0);
        canvas.ctx.lineTo(Math.floor(i * (canvas.width / 10)), canvas.height);
    }
    canvas.ctx.stroke();

    // Render the canvas to the screen
    canvas.draw();



    p = document.getElementById("paragraph");

    document.addEventListener('keydown', handleKeyboard);
}

function handleKeyboard(e) {
    p.innerHTML += keyboard.getChar(e);
}
