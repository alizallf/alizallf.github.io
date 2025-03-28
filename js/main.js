document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded - Fetching nav.html...");

    let navPath = window.location.pathname.includes("/projects/") || 
                  window.location.pathname.includes("/about/") ? "../nav.html" : "nav.html";

    fetch(navPath)
      .then(response => {
          if (!response.ok) throw new Error("Failed to load nav.html");
          return response.text();
      })
      .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);
        console.log("✅ nav.html loaded into DOM");

        setupMenu(); // Directly call after insertion
    })
    .catch(error => console.error("Failed to load nav.html:", error));

    function setupMenu() {
        console.log("Setting up menu...");
        const hamburger = document.getElementById("hamburger");
        const overlayMenu = document.getElementById("overlay-menu");
        const closeMenu = document.getElementById("close-menu");

        if (!hamburger || !overlayMenu || !closeMenu) {
            console.error("Menu elements not found! Retrying in 100ms...");
            setTimeout(setupMenu, 100); // Retry in case DOM isn't fully updated yet
            return;
        }

        hamburger.addEventListener("click", () => {
            console.log("Hamburger clicked!");
            overlayMenu.classList.toggle("active");
        });

        closeMenu.addEventListener("click", () => {
            console.log("Close menu clicked!");
            overlayMenu.classList.remove("active");
        });

        document.querySelectorAll(".has-submenu > a").forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("Toggling submenu...");
                link.parentElement.classList.toggle("open");
            });
        });
    }

    // 🔄 Role Button Click (Flip Image)
    const roleButtons = document.querySelectorAll(".role-button");
    const roleImage = document.getElementById("role-image");

    if (roleButtons.length > 0 && roleImage) {
        const defaultImage = "/images/header-productdesigner.png";
        const storytellerImage = "/images/header-storyteller.png";

        roleButtons.forEach(button => {
            button.addEventListener("click", function () {
                const role = this.textContent.trim();
                let newImageSrc = role === "Storyteller" ? storytellerImage : defaultImage;

                if (new URL(roleImage.src).pathname !== newImageSrc) {
                    roleImage.classList.add("flip");

                    setTimeout(() => {
                        roleImage.src = newImageSrc;
                    }, 400);

                    setTimeout(() => {
                        roleImage.classList.remove("flip");
                    }, 800);
                }
            });
        });
    }

    // 🖼️ Fade-Out Effect on Scroll
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".case-study-header");
        if (header) {
            header.classList.toggle("fade-out", window.scrollY > 150);
        }
    });

    // 🖼️ Make Header Image Clickable
    const headerImage = document.querySelector(".header-image");
    if (headerImage && headerImage.parentElement?.href) {
        headerImage.addEventListener("click", function (e) {
            e.preventDefault();
            window.open(headerImage.parentElement.href, "_blank");
        });
    }
});
