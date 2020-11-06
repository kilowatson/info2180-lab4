
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/info2180-lab4/superheroes.php", true);
    //xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {



            alert(xhttp.responseText);
        }
    };

    xhttp.send();
}
