// Check if the code is running in a browser environment
if (typeof window !== 'undefined') {
    const nav = document.querySelector(".nav");
    const navList = nav.querySelectorAll("li");
    const totalNavList = navList.length;
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;
    // const hireMeButton = document.querySelector(".hire-me");
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

    // Dynamically load the Typed library script
    const typedScript = document.createElement('script');
    typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    typedScript.onload = initializeTyped;
    document.head.appendChild(typedScript);

    function initializeTyped() {
        /* ============================== typing animation ============================ */
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
            Greeting1: "Greetings, I am",
            Greeting2: "I'm a",
            Greeting3: "Software Engineer",
        },
        {
            Greeting1: "こんにちは, I am",
            Greeting2: "私 は",
            Greeting3: "ソフトウェアエンジニア   ",
        },
        {
            Greeting1: "Bonjour, I am",
            Greeting2: "Je suis un",
            Greeting3: "ingénieur logiciel"
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

        helloElement.textContent = `${currentMessage.Greeting1} Ashray Gupta`;
        professionElement.textContent = `${currentMessage.Greeting2} ${currentMessage.Greeting3}`;

        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    }

    updateMessage();

    setInterval(updateMessage, 2000); // Change message every 2 seconds
} else {
    console.log("This code is not running in a browser environment.");
}