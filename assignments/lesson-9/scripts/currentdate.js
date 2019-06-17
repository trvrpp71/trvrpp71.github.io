function getDate() {
    var d = new Date();
    document.getElementById("site_info").innerHTML = d.toDateString();
}