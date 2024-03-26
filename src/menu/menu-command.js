export const menuCommand = () => {
  const commandRight = document.querySelector("#command-right");
  const commandLeft = document.querySelector("#command-left");
  const commandTop = document.querySelector("#command-top");
  const commandBottom = document.querySelector("#command-bottom");
  const commandTimeout = document.querySelector("#command-timeout");

  commandRight.innerHTML = `
    <ul>
        Les touches <span>⮕</span>, <span>d</span> et <span>D</span> :
        <li>Permettent de déplacer le serpent à <span>droite</span>
    </ul>
    `;

  commandLeft.innerHTML = `
    <ul>
        Les touches <span>⬅</span>, <span>q</span>, <span>a</span>, <span>Q</span> et <span>A</span> :
        <li>Permettent de déplacer le serpent à <span>gauche</span>
    </ul>
  `;

  commandTop.innerHTML = `
    <ul>
        Les touches <span>⬆</span>, <span>z</span>, <span>w</span>, <span>Z</span> et <span>W</span> :
        <li>Permettent de déplacer le serpent en <span>haut</span>
    </ul>
  `;

  commandBottom.innerHTML = `
    <ul>
        Les touches <span>⬇</span>, <span>s</span> et <span>S</span> : 
        <li>Permettent de déplacer le serpent en <span>bas</span>
    </ul>
  `;

  commandTimeout.innerHTML = `
  <ul>
      La touche <span>espace</span> : 
      <li>Permet de faire <span>pause</span> ou de <span>reprendre</span> la partie en cours
  </ul>
  `;
};
