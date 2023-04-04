function navigateToPage(sender) {
    var pageName = sender.id;
    document.getElementById('frame').src = 'pages/' + pageName + '.html';

    var buttons = document.getElementById('navbar').children;
    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.classList.remove('selected');
    }

    sender.classList.add('selected');
}