document.getElementById('testButton').addEventListener('click', function() {
    let output = document.getElementById('output');
    if (output.innerText === 'Button was clicked!') {
        output.innerText = '';
    } else {
        output.innerText = 'Button was clicked!';
    }
});
