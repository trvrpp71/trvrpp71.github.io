function updateRating(rating){
    document.getElementById('ratingvalue').innerHTML = rating;

    if (rating<=3) {
        var bckgrnd = document.getElementById('ratingvalue');
        bckgrnd.style.backgroundColor = '#8FBC8F';
    } else if (rating>3 && rating<8) {
    var bckgrnd = document.getElementById('ratingvalue');
        bckgrnd.style.backgroundColor = '#ffA500'
    } else {
    var bckgrnd = document.getElementById('ratingvalue');
        bckgrnd.style.backgroundColor = '#ff4c4c';
    }
}