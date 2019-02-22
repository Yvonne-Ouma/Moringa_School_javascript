function myFunction() {
    var y = document.getElementById('test').childNodes;
    var yvonne = "";
    var e;
    for (e = 0; e < y.length; e++) {
     yvonne = yvonne + y[e].nodeName + "<br>";
    }

    document.getElementById("demo").innerHTML = yvonne;
}