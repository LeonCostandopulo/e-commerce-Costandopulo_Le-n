const arraySimple = ["Home", "Productos", "Favoritos"];

let menu = `
<ul class="nav">
    <li class="nav-item"><a class="nav-link" href="#">${arraySimple[0]}</a></li>
    <li class="nav-item"><a class="nav-link" href="#">${arraySimple[1]}</a></li>
    <li class="nav-item"><a class="nav-link" href="#">${arraySimple[2]}</a></li>
</ul>
`;

document.getElementById('menu-container').innerHTML = menu;
