// Check if the code is running in a browser environment
if (typeof window !== 'undefined') {
    const nav = document.querySelector(".nav");
    const navList = nav.querySelectorAll("li");
    const totalNavList = navList.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;
    const navTogglerBtn = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    for (let i = 0; i < totalNavList; i++) {
        const a = navList[i].querySelector("a");
        if (a) {
            a.addEventListener("click", () => {
                const target = a.getAttribute("href").split("#")[1];
                handleSectionNavigation(target);
            });
        }
    }

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

    // Dynamically load the Typed library script
    const typedScript = document.createElement('script');
    typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    typedScript.onload = initializeTyped;
    document.head.appendChild(typedScript);

    function initializeTyped() {
        var typed2 = new Typed(".typing2", {
            strings: ["Modern C++", "Technical Interview Basics", "Data Structures and Algorithms", "Computer Architecture"],
            typeSpeed: 80,
            BackSpeed: 50,
            loop: true
        });

        var typed = new Typed(".typing", {
            strings: ["", "Software Engineer", "Teacher", "Hardware Engineer"],
            typeSpeed: 80,
            BackSpeed: 50,
            loop: true
        });

        var dummyTyped = new Typed(".typingDummy", {
            strings: [""],
            typeSpeed: 80,
            BackSpeed: 50,
            loop: true
        });
    }

    const messages = [
        {
            Greeting1: "Greetings",
            Greeting2: "I am",
            Greeting3: "I'm a Software Engineer",
        },
        {
            Greeting1: "こんにちは",
            Greeting2: "私 は",
            Greeting3: "I'm a ソフトウェアエンジニア   ",
        },
        {
            Greeting1: "Bonjour",
            Greeting2: "Je m'appele",
            Greeting3: "I'm a ingénieur logiciel"
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

    // ... (existing code)

function updateMessage() {
    console.log("Updating message...");
    const currentMessage = messages[currentMessageIndex];
    const helloElement = document.querySelector(".hello");
    const professionElement = document.querySelector(".my-profession");
    const nameElement = document.querySelector(".name");

    helloElement.textContent = currentMessage.Greeting1;
    professionElement.textContent = currentMessage.Greeting2;
    nameElement.innerHTML = `<span class="cursive-text">Ashray Gupta</span><br>${currentMessage.Greeting3}`;

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    console.log("Message updated.");
}
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Trigger the rope and bulbs animations
    setTimeout(function() {
        document.querySelector('.bulbs').style.animation = 'bulbsAppear 1s forwards';
        // Show the navigation after bulbs appear
        document.querySelector('.nav').classList.remove('hidden');
    }, 1500); // Adjust the delay to match the rope animation duration
});


//Error checking kinda
updateMessage();
setInterval(() => {
    console.log("Interval function called.");
    updateMessage();
}, 2000);


    updateMessage();

    setInterval(updateMessage, 2000);
} else {
    console.log("This code is not running in a browser environment.");
}