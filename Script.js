/* =====================================================
   GREATLANDTech Solutions
   Professional Website JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* ================= SEARCH ================= */

const searchButton = document.getElementById("searchButton");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");
const globalSearch = document.getElementById("globalSearch");

searchButton.addEventListener("click", () => {

    searchPanel.classList.add("open");

    setTimeout(() => {
        globalSearch.focus();
    }, 200);

});

closeSearch.addEventListener("click", () => {

    searchPanel.classList.remove("open");

});

globalSearch.addEventListener("keydown", event => {

    if (event.key === "Enter") {

        const searchTerm = globalSearch.value.trim();

        if (searchTerm !== "") {

            alert(
                `Searching GREATLANDTech for: ${searchTerm}`
            );

        }

    }

});


/* ================= MARKETPLACE FILTER ================= */

const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.category;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

});


/* ================= BUSINESS PLAN MODAL ================= */

const planButton = document.getElementById("planButton");
const planModal = document.getElementById("planModal");
const modalClose = document.getElementById("modalClose");

planButton.addEventListener("click", () => {

    planModal.classList.add("open");

});

modalClose.addEventListener("click", () => {

    planModal.classList.remove("open");

});


/* ================= LOGIN MODAL ================= */

const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const loginClose = document.getElementById("loginClose");

loginButton.addEventListener("click", () => {

    loginModal.classList.add("open");

});

loginClose.addEventListener("click", () => {

    loginModal.classList.remove("open");

});


/* ================= GET STARTED ================= */

const joinButton = document.getElementById("joinButton");

joinButton.addEventListener("click", () => {

    planModal.classList.add("open");

});


/* ================= CLOSE MODALS ================= */

window.addEventListener("click", event => {

    if (event.target === planModal) {
        planModal.classList.remove("open");
    }

    if (event.target === loginModal) {
        loginModal.classList.remove("open");
    }

});


/* ================= BUSINESS PLAN GENERATOR ================= */

const planForm = document.getElementById("planForm");
const generatedPlan = document.getElementById("generatedPlan");

planForm.addEventListener("submit", event => {

    event.preventDefault();

    const businessName =
        document.getElementById("businessName").value;

    const businessIdea =
        document.getElementById("businessIdea").value;

    const targetMarket =
        document.getElementById("targetMarket").value;

    generatedPlan.innerHTML = `

        <h3>${businessName}</h3>

        <p>
            <strong>Business idea:</strong><br>
            ${businessIdea}
        </p>

        <br>

        <p>
            <strong>Target market:</strong><br>
            ${targetMarket}
        </p>

        <br>

        <p>
            <strong>Suggested next steps:</strong>
        </p>

        <ul>
            <li>Research your target market.</li>
            <li>Define your products or services.</li>
            <li>Estimate startup and operating costs.</li>
            <li>Create a marketing strategy.</li>
            <li>Set measurable business goals.</li>
        </ul>

        <br>

        <p>
            Your business plan draft has been created.
        </p>

    `;

    generatedPlan.classList.add("show");

});


/* ================= LOGIN DEMO ================= */

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", event => {

    event.preventDefault();

    loginMessage.textContent =
        "Demo sign-in complete. Connect a backend authentication system to make accounts fully functional.";

    loginMessage.style.color = "#039855";

});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thank you. Your message has been received in this demo.";

    formMessage.style.color = "#039855";

    contactForm.reset();

});


/* ================= PRODUCT BUTTONS ================= */

document.querySelectorAll(".view-product").forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Product details will appear here when the marketplace backend is connected."
        );

    });

});


/* ================= FOOTER YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        planModal.classList.remove("open");
        loginModal.classList.remove("open");
        searchPanel.classList.remove("open");

        nav.classList.remove("open");

    }

});


/* ================= SIMPLE REVEAL ANIMATION ================= */

const revealElements = document.querySelectorAll(
    ".product-card, .service-card, .stat, .about-content, .plan-preview"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity .6s ease, transform .6s ease";

    revealObserver.observe(element);

});