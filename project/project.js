var params;
var file;
var request = new XMLHttpRequest();

function init(){
    var projectNam;
    params = new URLSearchParams(location.search);
    projectName = params.get('p');
    console.log(projectName);

    loadFile(projectName+".json");
}

function loadFile(p){
    var path = p;
    request.open('GET', path);
    request.responseType = 'json';
    request.send();
}

request.onload = function(){
    file = request.response;
    console.log(file);
    updatePage();
};

function updatePage(){
    document.getElementById('title').innerText = file.name;
    document.getElementById('project').innerText = file.name;
    document.getElementById('author').innerText = "By: " + file.author;
    document.getElementById('date').innerText = file.date;
    document.getElementById('img').src = file.img;
    document.getElementById('description').innerText = file.description;
    document.getElementById('link').href = file.link;
    document.getElementById('linkcode').href = file.linkCode;
}

