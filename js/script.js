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

document.addEventListener('DOMContentLoaded', function () {
    // Target the typing paragraph element
    var aboutParagraph = document.querySelector('.typing-paragraph');

const aboutTyping = new Typed(aboutParagraph, {
    strings: ['Okay first thing\'s first, Warm Greetings!. I am Final year student pursuing the (a little uncommon) Computation and Mathematics degree. I\'m a Software Engineer and AI/ML developer based in India (for now!). In addition to the Software based internships and client work, I\'ve also bring along Project Manager experience where I successfully oversaw and implemented projects worth more than $120,000 with my team. Did I tell you, I\'m a poet and writer too? Now you know. So let\'s stitch some stories together. Trust me, you won\'t be disappointed :)'],
    typeSpeed: 5, // Adjust typing speed as needed
    loop: false, // Disable looping to type the paragraph only once
    onComplete: function () {
        console.log('Trigger');
        const techStackSection = document.querySelector('.container_Tech_stack');
        techStackSection.classList.remove('hidden_Tech_Stack'); // Show the section
    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('.square');
    const languageInfos = document.querySelectorAll('.language-info');

    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            // Toggle visibility of language info corresponding to the clicked square

            languageInfos.forEach(info => {
                info.classList.add('hidden');
            });
            
            languageInfos[index].classList.toggle('hidden');
        });
    });
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