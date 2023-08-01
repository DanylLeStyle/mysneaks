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


const cursor = document.querySelector('[data-cursor-dot]'); // Sélectionner l'élément du curseur personnalisé
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const maxVelocity = 20; // Définir la vitesse maximale en pixels par frame

    function updateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;

      // Calculer la distance entre le curseur et la position de la souris
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Calculer la vitesse en fonction de la distance et du smoothingFactor
      const smoothingFactor = 0.2; // Plus la valeur est grande, moins le lissage est important
      const velocity = Math.min(distance * smoothingFactor, maxVelocity);

      // Mettre à jour la position du curseur personnalisé
      cursorX += (dx / distance) * velocity;
      cursorY += (dy / distance) * velocity;
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";

      requestAnimationFrame(updateCursor);
    }

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Appliquer le délai de suivi en millisecondes (par exemple, 100ms)
      setTimeout(() => {
        requestAnimationFrame(updateCursor);
      }, 100);
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