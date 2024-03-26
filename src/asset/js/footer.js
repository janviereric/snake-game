import imageJE from "/asset/img/je.jpg";
const imgJE = imageJE;

export const footer = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
      <p>
        <img src="${imgJE}" alt="JANVIER Eric" />
        copyright <i class="fa-regular fa-copyright"></i>
        2021 - <span id="year"></span>, <span class="j">J</span>anvier<span class="e">E</span>ric
      </p>
  `;
  // get the current year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // find the element with the id "currentYear"
  const year = footer.querySelector("#year");

  // update the content of the year with the current year
  year.textContent = currentYear;
};
