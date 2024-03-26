export const menuRule = () => {
  const ruleWin = document.querySelector("#rule-win");
  const ruleLose = document.querySelector("#rule-lose");
  const ruleSpeedFix = document.querySelector("#rule-speed-fix");
  const ruleSpeedScalable = document.querySelector("#rule-speed-scalable");

  ruleWin.innerHTML = `
    <ul>
        Vous <span>gagnez</span> la partie :
        <li>Si vous mangez <span>120</span> fruits</li>
    </ul>
  `;

  ruleLose.innerHTML = `
    <ul>
        Vous <span>perdez</span> la partie : 
        <li>Si le serpent se heurte contre lui-même</li>
        <li>En mode bordure <span>fermée</span> : si le serpent fait collision avec la bordure </li>
    </ul>
`;

  ruleSpeedFix.innerHTML = `
    <ul>
        Pour les vitesses <span>lente</span>, <span>moyenne</span> et <span>rapide</span> : 
        <li>La vitesse de déplacement du serpent reste fixe tout au long de la partie</li>
    </ul>
`;

  ruleSpeedScalable.innerHTML = `
  <ul>
      Pour la vitesses <span>évolutive</span> : 
      <li>La vitesse de déplacement du serpent augmente à chaque fruit mangé</li>
      <li>Après avoir mangé <span>100</span> fruits, la vitesse maxiamale sera atteinte </li> 
  </ul>
`;
};
