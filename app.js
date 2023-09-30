/* const cursorDot = document.querySelector("[data-cursot-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.syle.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;
}); */

const cursor = document.querySelector('[data-cursor-dot]'); 
let mouseX = 0;
let mouseY = 0;
const maxVelocity = 20;

function updateCursor() {
  const dx = mouseX - (cursor.offsetWidth / 2);
  const dy = mouseY - (cursor.offsetHeight / 2);

  const distance = Math.sqrt(dx * dx + dy * dy);
  const smoothingFactor = 0.2;
  const velocity = Math.min(distance * smoothingFactor, maxVelocity);

  cursor.style.left = mouseX - (cursor.offsetWidth / 2) + "px";
  cursor.style.top = mouseY - (cursor.offsetHeight / 2) + "px";

  requestAnimationFrame(updateCursor);
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (cursor.style.display === 'none') {
    cursor.style.display = 'block';
  }

  clearTimeout(cursorTimeout);

  cursorTimeout = setTimeout(() => {
    cursor.style.display = 'none';
  }, 300);

  requestAnimationFrame(updateCursor);
});







// Gérer l'agrandissement du curseur lorsqu'il survole les boutons et les liens href
const buttonsAndLinks = document.querySelectorAll('a.boutonproduits, a.logo, ul li a');
buttonsAndLinks.forEach((el) => {
  el.addEventListener('mouseover', () => {
    cursor.style.transform = 'scale(10)'; // Agrandir le curseur de 30%
  });
  el.addEventListener('mouseout', () => {
    cursor.style.transform = 'scale(1)'; // Réinitialiser la taille du curseur
  });
});



/* const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
}); */                                                                  //truc bien fait par chatgpt




            /*const pos = document.documentElement;
            pos.addEventListener("mousemove", e=> {
                pos.style.setProperty('--x', e.clientX +"px");
                pos.style.setProperty('--y', e.clientY +"px");
            });*/

/* Sticky Navbar */
