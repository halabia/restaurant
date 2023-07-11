export function contact() {
    var div = document.getElementById('content');
    var header = document.createElement('h1');
    header.style.color = 'black';
    header.textContent = 'Contact';
    div.appendChild(header);
    
    var pic = document.createElement('img');
    pic.src = 'https://static.vecteezy.com/system/resources/previews/008/506/400/original/telephone-contact-icon-in-black-circle-shape-free-png.png';
    div.appendChild(pic);
    
    var desc = document.createElement('p');
    desc.textContent = 'Call us';
    div.appendChild(desc);
}