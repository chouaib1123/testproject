let currentLanguage = "en";

function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  document.querySelector(".succes").textContent =
    succes[currentLanguage].successMessage;

  document.querySelector(".message1").textContent =
    messages[currentLanguage].message1;
  document.querySelector(".message2").textContent =
    messages[currentLanguage].message2;
  document.querySelector(".message3").textContent =
    messages[currentLanguage].message3;
  document.querySelector(".message4").textContent =
    messages[currentLanguage].message4;
  document.querySelector(".message5").textContent =
    messages[currentLanguage].message5;

  const container_final = document.querySelector(".screen_last");
  const navbar6 = container_final.querySelector(".navbar");
  navbar6.querySelector(".frst").textContent =
    completionScreenTranslations[currentLanguage].frst;
  navbar6.querySelector(".scnd").textContent =
    completionScreenTranslations[currentLanguage].scnd;
  const container5 = document.querySelector(".screen222");
  const navbar5 = container5.querySelector(".navbar");
  navbar5.querySelector(".frst").textContent =
    joinUs2Translations[currentLanguage].frst;
  navbar5.querySelector(".scnd").textContent =
    joinUs2Translations[currentLanguage].scnd;

  const table5 = container5.querySelector(".table");
  table5.querySelector(".tit").textContent =
    joinUs5Translations[currentLanguage].tit;

  const experienceLabel = table5.querySelector(
    ".detail-inplabel:nth-child(1) .label"
  );
  experienceLabel.textContent =
    joinUs5Translations[currentLanguage].experienceLabel;

  const yesLabel = table5.querySelector(
    ".detail-inplabel:nth-child(1) .radio .t:nth-child(1) .radinpt"
  );
  yesLabel.textContent = joinUs5Translations[currentLanguage].yesLabel;
  const noLabel = table5.querySelector(
    ".detail-inplabel:nth-child(1) .radio .t:nth-child(2) .radinpt"
  );
  noLabel.textContent = joinUs5Translations[currentLanguage].noLabel;

  const networkLabel3 = table5.querySelector(
    ".detail-inplabel:nth-child(2) .label"
  );
  networkLabel3.textContent = joinUs5Translations[currentLanguage].networkLabel;
  const networkInput3 = table5.querySelector(
    ".detail-inplabel:nth-child(2) .inp input"
  );
  networkInput3.placeholder =
    joinUs5Translations[currentLanguage].networkPlaceholder;

  const budgetLabel3 = table5.querySelector(
    ".detail-inplabel:nth-child(3) .label"
  );
  budgetLabel3.textContent = joinUs5Translations[currentLanguage].budgetLabel;
  const budgetInput3 = table5.querySelector(
    ".detail-inplabel:nth-child(3) .inp input"
  );
  budgetInput3.placeholder =
    joinUs5Translations[currentLanguage].budgetPlaceholder;

  const agreeLabel = table5.querySelector(".detail-inplabel:nth-child(4) .inp");
  agreeLabel.textContent = joinUs5Translations[currentLanguage].agreeLabel;

  const joinuscontainer4 = document.querySelector(".screen22");
  const navbar3 = joinuscontainer4.querySelector(".navbar");
  navbar3.querySelector(".frst").textContent =
    joinUs2Translations[currentLanguage].frst;
  navbar3.querySelector(".scnd").textContent =
    joinUs2Translations[currentLanguage].scnd;

  const table3 = joinuscontainer4.querySelector(".table");
  table3.querySelector(".tit").textContent =
    joinUs2Translations[currentLanguage].tit;

  const companyNameLabel = table3.querySelector(
    ".detail-inplabel:nth-child(1) .label"
  );
  companyNameLabel.textContent =
    joinUs4Translations[currentLanguage].companyNameLabel;
  const companyNameInput = table3.querySelector(
    ".detail-inplabel:nth-child(1) .inp input"
  );
  companyNameInput.placeholder =
    joinUs4Translations[currentLanguage].companyNamePlaceholder;

  const dailyOrderLabel3 = table3.querySelector(
    ".detail-inplabel:nth-child(2) .inp"
  );
  dailyOrderLabel3.textContent =
    joinUs4Translations[currentLanguage].dailyOrderLabel;

  const countryLabel = table3.querySelector(
    ".detail-inplabel:nth-child(3) .inp"
  );
  countryLabel.textContent = joinUs4Translations[currentLanguage].countryLabel;

  const joinuscontainer3 = document.querySelector(".screen211");
  const navbar2 = joinuscontainer3.querySelector(".navbar");
  navbar2.querySelector(".frst").textContent =
    joinUs3Translations[currentLanguage].frst;
  navbar2.querySelector(".scnd").textContent =
    joinUs3Translations[currentLanguage].scnd;

  const table2 = joinuscontainer3.querySelector(".table");
  table2.querySelector(".tit").textContent =
    joinUs3Translations[currentLanguage].tit;

  const budgetLabel2 = table2.querySelector(
    ".detail-inplabel:nth-child(1) .label"
  );
  budgetLabel2.textContent = joinUs3Translations[currentLanguage].countryLabel;
  const budgetInput2 = table2.querySelector(
    ".detail-inplabel:nth-child(1) input"
  );
  budgetInput2.placeholder =
    joinUs3Translations[currentLanguage].countryPlaceholder;

  const dailyOrderLabel2 = table2.querySelector(
    ".detail-inplabel:nth-child(2) .label"
  );
  dailyOrderLabel2.textContent =
    joinUs3Translations[currentLanguage].experienceLabel;

  const ys = table2.querySelector(
    ".detail-inplabel:nth-child(2) .radio .t:nth-child(1) .radinpt"
  );
  ys.textContent = joinUs3Translations[currentLanguage].yesLabel;
  const no = table2.querySelector(
    ".detail-inplabel:nth-child(2) .radio .t:nth-child(2) .radinpt"
  );
  no.textContent = joinUs3Translations[currentLanguage].noLabel;

  const networkLabel2 = table2.querySelector(
    ".detail-inplabel:nth-child(3) .label"
  );
  networkLabel2.textContent =
    joinUs3Translations[currentLanguage].questionsLabel;

  const joinuscontainer2 = document.querySelector(".screen21");
  const navbar = joinuscontainer2.querySelector(".navbar");
  navbar.querySelector(".frst").textContent =
    joinUs3Translations[currentLanguage].frst;
  navbar.querySelector(".scnd").textContent =
    joinUs2Translations[currentLanguage].scnd;

  const table = joinuscontainer2.querySelector(".table");
  table.querySelector(".tit").textContent =
    joinUs2Translations[currentLanguage].tit;
  const avera = table.querySelector(
    ".detail-inplabel:nth-child(2) .joinaschoices .inp"
  );
  avera.textContent = joinUs2Translations[currentLanguage].dailerorder;
  const budgetLabel = table.querySelector(
    ".detail-inplabel:nth-child(1) .label"
  );
  budgetLabel.textContent = joinUs2Translations[currentLanguage].budgetLabel;
  const budgetInput = table.querySelector(
    ".detail-inplabel:nth-child(1) input"
  );
  budgetInput.placeholder =
    joinUs2Translations[currentLanguage].budgetPlaceholder;

  const dailyOrderLabel = table.querySelector(
    ".detail-inplabel:nth-child(2) .label"
  );
  dailyOrderLabel.textContent =
    joinUs2Translations[currentLanguage].dailyOrderLabel;

  const networkLabel = table.querySelector(
    ".detail-inplabel:nth-child(3) .label"
  );
  networkLabel.textContent = joinUs2Translations[currentLanguage].networkLabel;
  const networkInput = table.querySelector(
    ".detail-inplabel:nth-child(3) input"
  );
  networkInput.placeholder =
    joinUs2Translations[currentLanguage].networkPlaceholder;

  const screen1Div = document.querySelector(".screen1");
  screen1Div.querySelector(".frst").textContent =
    translationsForm[currentLanguage].joinUs;
  screen1Div.querySelector(".scnd").textContent =
    translationsForm[currentLanguage].createAccount;
  screen1Div.querySelector(".tit").textContent =
    translationsForm[currentLanguage].enterInfoTitle;
  screen1Div.querySelector(".nm input").placeholder =
    translationsForm[currentLanguage].yourName;
  screen1Div.querySelector(".tel input").placeholder =
    translationsForm[currentLanguage].yourPhone;
  screen1Div.querySelector(".eml input").placeholder =
    translationsForm[currentLanguage].yourEmail;
  screen1Div.querySelector(".inp").textContent =
    translationsForm[currentLanguage].joinAs;
  screen1Div.querySelector(".btn1 button").textContent =
    translationsForm[currentLanguage].backBtn;
  screen1Div.querySelector(".btn3 button").textContent =
    translationsForm[currentLanguage].nextBtn;

  const t = document.querySelectorAll(".btn2 button");
  for (const tt of t) {
    tt.textContent = translationsForm[currentLanguage].languageSwitch;
  }
  const fulfillmentGenieSpch = document.querySelector(".footer .spch");

  fulfillmentGenieSpch.textContent =
    fulfillmentGenieTranslations[currentLanguage].spch;

  const joinUsCard = document.querySelector(".joinus-card");

  joinUsCard.querySelector(".joinus-card-title").textContent =
    joinUsTranslations[currentLanguage].title;
  joinUsCard.querySelector(".joinus-card-speech").textContent =
    joinUsTranslations[currentLanguage].speech;
  joinUsCard.querySelector("button").textContent =
    joinUsTranslations[currentLanguage].button;

  const questionsContainer = document.querySelector(".questions-container");

  questionsContainer.querySelector(".title").textContent =
    questionsTranslations[currentLanguage].title;
  questionsContainer.querySelector(".speech").textContent =
    questionsTranslations[currentLanguage].speech;

  const questionAnswers =
    questionsContainer.querySelectorAll(".question-answer");
  let index = 1;
  questionAnswers.forEach((qa) => {
    qa.querySelector(".question .qst").textContent =
      questionsTranslations[currentLanguage].questions[`q${index}`].qst;
    qa.querySelector(".answer").textContent =
      questionsTranslations[currentLanguage].questions[`q${index}`].ans;
    index++;
  });

  const sponsorContainer = document.querySelector(".sponsor");

  sponsorContainer.querySelector(".spnr-title").textContent =
    sponsorTranslations[currentLanguage].title;

  const howItWorksContainer = document.querySelector(".howitwork-container");

  howItWorksContainer.querySelector(".title").textContent =
    howItWorksTranslations[currentLanguage].title;
  howItWorksContainer.querySelector(".speech").textContent =
    howItWorksTranslations[currentLanguage].speech;

  const part1 = howItWorksContainer.querySelector(".part1");
  part1.querySelector(".tit").textContent =
    howItWorksTranslations[currentLanguage].part1.tit;
  part1.querySelector(".spch").textContent =
    howItWorksTranslations[currentLanguage].part1.spch;

  const part2 = howItWorksContainer.querySelector(".part2");
  part2.querySelector(".tit").textContent =
    howItWorksTranslations[currentLanguage].part2.tit;
  part2.querySelector(".spch").textContent =
    howItWorksTranslations[currentLanguage].part2.spch;

  const part3 = howItWorksContainer.querySelector(".part3");
  part3.querySelector(".tit").textContent =
    howItWorksTranslations[currentLanguage].part3.tit;
  part3.querySelector(".spch").textContent =
    howItWorksTranslations[currentLanguage].part3.spch;

  const part4 = howItWorksContainer.querySelector(".part4");
  part4.querySelector(".tit").textContent =
    howItWorksTranslations[currentLanguage].part4.tit;
  part4.querySelector(".spch").textContent =
    howItWorksTranslations[currentLanguage].part4.spch;

  const aboutContainer = document.querySelector(".about-container");
  console.log("hello");
  aboutContainer.querySelector(".title").textContent =
    aboutTranslations[currentLanguage].title;
  aboutContainer.querySelector(".speech").textContent =
    aboutTranslations[currentLanguage].speech;
  const big = aboutContainer.querySelector(".big-card");
  const card11 = big.querySelector(".card1");
  card11.querySelector(".tit").textContent =
    aboutTranslations[currentLanguage].card1.tit;
  card11.querySelector(".spch").textContent =
    aboutTranslations[currentLanguage].card1.spch;

  const card22 = aboutContainer.querySelector(".card2");
  card22.querySelector(".tit").textContent =
    aboutTranslations[currentLanguage].card2.tit;
  card22.querySelector(".spch").textContent =
    aboutTranslations[currentLanguage].card2.spch;

  const cardContainer = document.querySelector(".whyus_container");

  cardContainer.querySelector(".title").textContent =
    cardTranslations[currentLanguage].whyUs;
  cardContainer.querySelector(".speech").textContent =
    cardTranslations[currentLanguage].speech;

  const card1 = cardContainer.querySelector(".card1");
  card1.querySelector(".tit").textContent =
    cardTranslations[currentLanguage].card1.tit;
  card1.querySelector(".spch").textContent =
    cardTranslations[currentLanguage].card1.spch;

  const card2 = cardContainer.querySelector(".card2");
  card2.querySelector(".tit").textContent =
    cardTranslations[currentLanguage].card2.tit;
  card2.querySelector(".spch").textContent =
    cardTranslations[currentLanguage].card2.spch;

  const card3 = cardContainer.querySelector(".card3");
  card3.querySelector(".tit").textContent =
    cardTranslations[currentLanguage].card3.tit;
  card3.querySelector(".spch").textContent =
    cardTranslations[currentLanguage].card3.spch;
  const joinasDropdown = document.querySelector(".joinasdropdown1");
  joinasDropdown.querySelector(".choix1").textContent =
    translationsForm[currentLanguage].affiliate;
  joinasDropdown.querySelector(".choix2").textContent =
    translationsForm[currentLanguage].seller;
  document.getElementById("language-switch").textContent =
    translations[currentLanguage].languageSwitch;
  document.getElementById("why-us").textContent =
    translations[currentLanguage].whyUs;
  document.getElementById("about").textContent =
    translations[currentLanguage].about;
  document.getElementById("how-it-works").textContent =
    translations[currentLanguage].howItWorks;
  document.getElementById("faqs").textContent =
    translations[currentLanguage].faqs;

  document.getElementById("speech").innerHTML =
    translations[currentLanguage].speech;
  document.getElementById("details").textContent =
    translations[currentLanguage].details;

  document.getElementById("getstartedbtn").textContent =
    translations[currentLanguage].getstartedbtn;
  document.getElementById("logIn").textContent =
    translations[currentLanguage].logIn;
  document.getElementById("logInn").textContent =
    translations[currentLanguage].logIn;
  const isArabic = currentLanguage === "ar";
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const containerDiv = document.querySelector(".first_vue_container");

  const allDivs = containerDiv.querySelectorAll("div");
  const problem = document.getElementById("details");
  if (screenWidth >= 700) {
    problem.style.width = isArabic ? "auto" : "70%";
    for (const div of allDivs) {
      div.style.flexDirection = isArabic ? "row-reverse" : "row";
      div.style.textAlign = isArabic ? "right" : "left";
    }
  }

  const bigg = aboutContainer.querySelector(".big-card");
  const allDivss = bigg.querySelectorAll("div");
  if (screenWidth > 701) {
    for (const div of allDivss) {
      div.style.textAlign = isArabic ? "right" : "left";
    }
  }

  const allDivsss = questionsContainer.querySelectorAll(".question-answer");

  const allquestion = questionsContainer.querySelectorAll(".question");

  const head = questionsContainer.querySelector(".header");
  if (screenWidth > 650) {
    head.style.flexDirection = isArabic ? "row-reverse" : "row";
  }

  const answers = questionsContainer.querySelectorAll(".answer");

  for (const div of answers) {
    div.style.width = isArabic ? "auto" : "90%";
  }
  for (const div of allquestion) {
    div.style.flexDirection = isArabic ? "row-reverse" : "row";
  }
  for (const div of allDivsss) {
    div.style.textAlign = isArabic ? "right" : "left";
  }
  const details = document.querySelectorAll(".detail-inplabel");
  const last = document.querySelector(".screen222 .detail-inplabel2 ");
  last.style.justifyContent = isArabic ? "flex-end" : "flex-start";
  for (const detail of details) {
    const divs = detail.querySelectorAll("div");
    const drops = detail.querySelectorAll(".joinasdropdown");
    const flechs = detail.querySelectorAll(".flech");

    for (const flech of flechs) {
      flech.style.marginRight = isArabic ? "-35px" : "0";
    }
    for (const drop of drops) {
      drop.style.right = isArabic ? "0" : "auto";
    }
    for (const div of divs) {
      div.style.flexDirection = isArabic ? "row-reverse" : "row";
      div.style.textAlign = isArabic ? "right" : "left";
    }
  }
  var button = document.getElementById("toggleButton");
  if (isArabic) {
    button.textContent =
      button.textContent === "Show More" ? "اظهر المزيد" : "اظهر اقل";
  } else {
    button.textContent =
      button.textContent === "اظهر المزيد" ? "Show More" : "Show Less";
  }

  if (isArabic) {
    document.documentElement.style.setProperty("--ff-small", "'Tajawal Light'");
    document.documentElement.style.setProperty("--ff-med", "'Tajawal Medium'");
    document.documentElement.style.setProperty("--ff-reg", "'Tajawal Regular'");
    document.documentElement.style.setProperty("--ff-bold", "'Tajawal Bold'");
  }
  if (!isArabic) {
    document.documentElement.style.removeProperty("--ff-small");
    document.documentElement.style.removeProperty("--ff-med");
    document.documentElement.style.removeProperty("--ff-reg");
    document.documentElement.style.removeProperty("--ff-bold");
  }
}
let stylesApplied = false;

function adjustDivStyle() {
  isArabic = currentLanguage === "ar";
  const aboutContainer = document.querySelector(".about-container");
  const questionsContainer = document.querySelector(".questions-container");
  const head = questionsContainer.querySelector(".header");
  const bigg = aboutContainer.querySelector(".big-card");
  const allDivss = bigg.querySelectorAll("div");
  const containerDiv = document.querySelector(".first_vue_container");
  const dav = containerDiv.querySelector(".first_vue");
  const allDivs = dav.querySelectorAll("div");
  const problem = document.getElementById("details");
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth < 700) {
    problem.removeAttribute("style");
    allDivs.forEach((div) => div.removeAttribute("style"));
    allDivss.forEach((div) => div.removeAttribute("style"));
    if (screenWidth < 650) {
      head.removeAttribute("style");
    }
    stylesApplied = false;
  } else {
    if (!stylesApplied) {
      head.style.flexDirection = isArabic ? "row-reverse" : "row";
      problem.style.width = isArabic ? "auto" : "70%";
      allDivs.forEach((div) => {
        div.style.flexDirection = isArabic ? "row-reverse" : "row";
        div.style.textAlign = isArabic ? "right" : "left";
      });
      for (const div of allDivss) {
        div.style.textAlign = isArabic ? "right" : "left";
      }
      stylesApplied = true;
    }
  }
}

window.addEventListener("resize", adjustDivStyle);

document.addEventListener("DOMContentLoaded", function () {
  var setToToggle = document.querySelector(
    ".questions-container .questions .qsts:nth-child(2)"
  );
  var button = document.getElementById("toggleButton");

  button.addEventListener("click", function () {
    isArabic = currentLanguage === "ar";

    console.log(isArabic);
    setToToggle.classList.toggle("hidden");
    button.textContent = setToToggle.classList.contains("hidden")
      ? isArabic
        ? "اظهر المزيد"
        : "Show More"
      : isArabic
      ? "اظهر اقل"
      : "Show Less";
  });
});
