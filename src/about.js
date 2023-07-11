export function about() {
    document.getElementById('content').innerHTML = "";

    var div = document.getElementById('content');
    var header = document.createElement('h1');
    header.style.color = 'black';
    header.textContent = 'Restaurant';
    div.appendChild(header);
    
    var pic = document.createElement('img');
    pic.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/330px-Barbieri_-_ViaSophia25668.jpg';
    div.appendChild(pic);
    
    var desc = document.createElement('p');
    desc.textContent = 'Very delicious food';
    div.appendChild(desc);
}


