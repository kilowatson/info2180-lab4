

function loadDoc() {

    var q = document.forms["myForm"]["fname"].value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/info2180-lab4/superheroes.php?query=" + q, true);


    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {



            document.getElementById("result").innerHTML = xhttp.responseText;
        }
    };

    xhttp.send();
}

