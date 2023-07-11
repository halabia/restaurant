export function menu() {
    var div = document.getElementById('content');
    var header = document.createElement('h1');
    header.style.color = 'black';
    header.textContent = 'Menu';
    div.appendChild(header);
    
    var pic = document.createElement('img');
    pic.src = 'https://www.merchantsmarket.com/wp-content/uploads/2018/01/menu.png';
    div.appendChild(pic);
    
    var desc = document.createElement('p');
    desc.textContent = 'Very nice menu';
    div.appendChild(desc);
}