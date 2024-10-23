document.getElementById('rotateButton').addEventListener('click', function() {
    document.body.classList.add('rotated');
    setTimeout(function() {
        document.body.classList.remove('rotated');
    }, 2000);
});

document.getElementById('showParagraphButton').addEventListener('click', function() {

    const newParagraph = document.createElement('p');
    newParagraph.classList.add('troll');
    newParagraph.textContent = 'RESPIRACIÓN AUTOMÁTICA DESACTIVADA';


    document.getElementById('container').appendChild(newParagraph);
});