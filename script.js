//top pop up navigation
function showNav() {
    document.getElementById('drop-down-nav').style.display = 'flex';
}

function hideNav() {
    document.getElementById('drop-down-nav').style.display = 'none';
}

//content on card hover
function showContent(index) {
    var details = document.getElementsByClassName('details');
    details[index].style.height = '70%';
}

function hideContent(index) {
    var details = document.getElementsByClassName('details');
    details[index].style.height = '0px';
}