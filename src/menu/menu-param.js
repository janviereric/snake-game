import {
  data,
  menuDetailFruit,
  menuDetailSnake,
  menuDetailLand,
  menuDetailSpeed,
  menuDetailMode,
  menuDetailScreen,
} from "../index.js";

export const menuParam = () => {
  const tabOption = document.querySelector("#tab-option");
  const tabDetail = document.querySelector("#tab-detail");
  const tabRule = document.querySelector("#tab-rule");
  const tabCommand = document.querySelector("#tab-command");
  const optionBody = document.querySelector("#option-body");
  const detailBody = document.querySelector("#detail-body");
  const ruleBody = document.querySelector("#rule-body");
  const commandBody = document.querySelector("#command-body");

  // selects the default option tab start
  if (data.isTabOptionActive) {
    optionBody.style.display = "";
    detailBody.style.display = "none";
    ruleBody.style.display = "none";
    commandBody.style.display = "none";
    tabOption.style.color = "#f5f6fa";
    tabOption.style.fontWeight = "bold";
    tabOption.style.border = "2px solid #2ecc71";
    tabOption.style.backgroundColor = "#2ecc71";
    tabDetail.style.color = "";
    tabDetail.style.fontWeight = "";
    tabDetail.style.border = "2px solid #2ecc71";
    tabDetail.style.backgroundColor = "#f5f6fa";
    tabRule.style.color = "";
    tabRule.style.fontWeight = "";
    tabRule.style.border = "2px solid #2ecc71";
    tabRule.style.backgroundColor = "#f5f6fa";
    tabCommand.style.color = "";
    tabCommand.style.fontWeight = "";
    tabCommand.style.border = "2px solid #2ecc71";
    tabCommand.style.backgroundColor = "#f5f6fa";
  }
  // selects the default option tab end

  // selects another tab start
  tabOption.addEventListener("click", (e) => {
    e.stopPropagation();
    data.isTabOptionActive = true;
    data.isTabDetailActive = false;
    data.isTabRuleActive = false;
    data.isTabCommandActive = false;
    optionBody.style.display = "";
    detailBody.style.display = "none";
    ruleBody.style.display = "none";
    commandBody.style.display = "none";
    tabOption.style.color = "#f5f6fa";
    tabOption.style.fontWeight = "bold";
    tabOption.style.border = "2px solid #2ecc71";
    tabOption.style.backgroundColor = "#2ecc71";
    tabDetail.style.color = "";
    tabDetail.style.fontWeight = "";
    tabDetail.style.border = "2px solid #2ecc71";
    tabDetail.style.backgroundColor = "#f5f6fa";
    tabRule.style.color = "";
    tabRule.style.fontWeight = "";
    tabRule.style.border = "2px solid #2ecc71";
    tabRule.style.backgroundColor = "#f5f6fa";
    tabCommand.style.color = "";
    tabCommand.style.fontWeight = "";
    tabCommand.style.border = "2px solid #2ecc71";
    tabCommand.style.backgroundColor = "#f5f6fa";
  });

  tabDetail.addEventListener("click", (e) => {
    e.stopPropagation();
    data.isTabOptionActive = false;
    data.isTabDetailActive = true;
    data.isTabRuleActive = false;
    data.isTabCommandActive = false;
    optionBody.style.display = "none";
    detailBody.style.display = "";
    ruleBody.style.display = "none";
    commandBody.style.display = "none";
    tabOption.style.color = "";
    tabOption.style.fontWeight = "";
    tabOption.style.border = "2px solid #2ecc71";
    tabOption.style.backgroundColor = "#f5f6fa";
    tabDetail.style.color = "#f5f6fa";
    tabDetail.style.fontWeight = "bold";
    tabDetail.style.border = "2px solid #2ecc71";
    tabDetail.style.backgroundColor = "#2ecc71";
    tabRule.style.color = "";
    tabRule.style.fontWeight = "";
    tabRule.style.border = "2px solid #2ecc71";
    tabRule.style.backgroundColor = "#f5f6fa";
    tabCommand.style.color = "";
    tabCommand.style.fontWeight = "";
    tabCommand.style.border = "2px solid #2ecc71";
    tabCommand.style.backgroundColor = "#f5f6fa";
  });

  tabRule.addEventListener("click", (e) => {
    e.stopPropagation();
    data.isTabOptionActive = false;
    data.isTabDetailActive = false;
    data.isTabRuleActive = true;
    data.isTabCommandActive = false;
    optionBody.style.display = "none";
    detailBody.style.display = "none";
    ruleBody.style.display = "";
    commandBody.style.display = "none";
    tabOption.style.color = "";
    tabOption.style.fontWeight = "";
    tabOption.style.border = "2px solid #2ecc71";
    tabOption.style.backgroundColor = "#f5f6fa";
    tabDetail.style.color = "";
    tabDetail.style.fontWeight = "";
    tabDetail.style.border = "2px solid #2ecc71";
    tabDetail.style.backgroundColor = "#f5f6fa";
    tabRule.style.color = "#f5f6fa";
    tabRule.style.fontWeight = "bold";
    tabRule.style.border = "2px solid #2ecc71";
    tabRule.style.backgroundColor = "#2ecc71";
    tabCommand.style.color = "";
    tabCommand.style.fontWeight = "";
    tabCommand.style.border = "2px solid #2ecc71";
    tabCommand.style.backgroundColor = "#f5f6fa";
  });

  tabCommand.addEventListener("click", (e) => {
    e.stopPropagation();
    data.isTabOptionActive = false;
    data.isTabDetailActive = false;
    data.isTabRuleActive = false;
    data.isTabCommandActive = true;
    optionBody.style.display = "none";
    detailBody.style.display = "none";
    ruleBody.style.display = "none";
    commandBody.style.display = "";
    tabOption.style.color = "";
    tabOption.style.fontWeight = "";
    tabOption.style.border = "2px solid #2ecc71";
    tabOption.style.backgroundColor = "#f5f6fa";
    tabDetail.style.color = "";
    tabDetail.style.fontWeight = "";
    tabDetail.style.border = "2px solid #2ecc71";
    tabDetail.style.backgroundColor = "#f5f6fa";
    tabRule.style.color = "";
    tabRule.style.fontWeight = "";
    tabRule.style.border = "2px solid #2ecc71";
    tabRule.style.backgroundColor = "#f5f6fa";
    tabCommand.style.color = "#f5f6fa";
    tabCommand.style.fontWeight = "bold";
    tabCommand.style.border = "2px solid #2ecc71";
    tabCommand.style.backgroundColor = "#2ecc71";
  });
  // selects another tab end

  // shows icons before changing option
  menuDetailFruit();
  menuDetailSnake();
  menuDetailLand();
  menuDetailSpeed();
  menuDetailMode();
  menuDetailScreen();
};
