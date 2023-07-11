import { about } from "./about";
import { contact } from "./contact";
import { menu } from "./menu";

var aboutButton = document.getElementById('aboutButton');
aboutButton.addEventListener("click", about);
var contactButton = document.getElementById('contactButton');
contactButton.addEventListener("click", contact);
var menuButton = document.getElementById('menuButton');
menuButton.addEventListener("click", menu);