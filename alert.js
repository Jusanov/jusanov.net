var archivealert = document.getElementById("archive-alert");

archivealert.onclick = function() {
    console.log(event.srcElement.className == "closebtn");
    if (event.srcElement.className != "closebtn") location.href="archive.html";
}