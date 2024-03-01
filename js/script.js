/* ============================== Aside ============================ */
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;
//const hireMeButton = document.querySelector(".hire-me");
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    if (a) { // Check if anchor element exists
        a.addEventListener("click", () => {
            const target = a.getAttribute("href").split("#")[1];
            handleSectionNavigation(target);
        });
    }
}


// hireMeButton.addEventListener("click", () => {
//     const sectionIndex = hireMeButton.getAttribute("data-section-index");
//     handleSectionNavigation(sectionIndex);
// });

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);

function handleSectionNavigation(target) {
    removeBackSection();
    navList.forEach((navItem) => {
        const navLink = navItem.querySelector("a");
        navLink.classList.remove("active");
        if (navLink.getAttribute("href").split("#")[1] === target) {
            navLink.classList.add("active");
        }
    });
    showSection(target);
    if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
    }
}

function removeBackSection() {
    allSection.forEach((section) => {
        section.classList.remove("back-section");
    });
}

function showSection(target) {
    allSection.forEach((section) => {
        section.classList.remove("active");
    });
    document.querySelector("#" + target).classList.add("active");
}

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach((section) => {
        section.classList.toggle("open");
    });
}

/* ============================== typing animation ============================ */

var typed2 = new Typed(".typing2",{
    strings:["Modern C++","Technical Interview Basics","Data Structures and Algorithms","Computer Architecture"],
    typeSpeed:80,
    BackSpeed:50,
    loop:true
})

var typed = new Typed(".typing",{
    strings:["","Software Engineer","Teacher","Hardware Engineer"],
    typeSpeed:80,
    BackSpeed:50,
    loop:true
})

var dummyTyped = new Typed(".typingDummy",{
    strings:[""],
    typeSpeed:80,
    BackSpeed:50,
    loop:true
})


const messages = [
    {
        hello: "Greetings, I am",
        profession: "I'm a",
        language: "Software Engineer",
    },
    {
        hello: "こんにちは, I am",
        profession: "私 は",
        language: "ソフトウェアエンジニア",
    },
    // Add more message objects for other languages as needed
];

const messageElement = document.querySelector(".my-profession");
const typingOptions = {
    typeSpeed: 80,
    backSpeed: 50,
    loop: true,
};

let currentMessageIndex = 0;

function updateMessage() {
    const currentMessage = messages[currentMessageIndex];
    const helloElement = document.querySelector(".hello");
    const professionElement = document.querySelector(".my-profession");

    helloElement.textContent = `${currentMessage.hello} Ashray Gupta`;
    professionElement.textContent = `${currentMessage.profession} ${currentMessage.language}`;

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
}

updateMessage();

setInterval(updateMessage, 2000); // Change message every 2 seconds
