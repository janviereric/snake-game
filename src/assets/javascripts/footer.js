import janviereric from "/assets/images/janviereric.jpg";

export const footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
        <p>
        <img src="${janviereric}" alt="JanvierEric" />
        copyright <i class="fa-regular fa-copyright"></i> 2024 -
        <span class="j">J</span>anvier<span class="e">E</span>ric
        </p>
        `;
};
