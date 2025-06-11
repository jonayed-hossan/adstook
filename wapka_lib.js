document.addEventListener("DOMContentLoaded", function() {
    // Ad text variations
    const adTexts = [
        "🎬 Watch Now! Stream Top Content Instantly! 🚀",
        "📥 Download Free! Unlock Premium Content! 🌟",
        "🎮 Play Now! Jump into Exciting Games! 🔥",
        "📺 Binge-Watch Hit Shows! Start Now! ✨"
    ];

    // Create ad container
    const adContainer = document.createElement("div");
    adContainer.id = "footer-ad";
    adContainer.style.position = "fixed";
    adContainer.style.bottom = "20px";
    adContainer.style.left = "50%";
    adContainer.style.transform = "translateX(-50%)";
    adContainer.style.width = "600px";
    adContainer.style.maxWidth = "90%";
    adContainer.style.background = "linear-gradient(45deg, #ff6b6b, #4b6cb7, #feca57, #1dd1a1)";
    adContainer.style.backgroundSize = "400%";
    adContainer.style.color = "#fff";
    adContainer.style.textAlign = "center";
    adContainer.style.padding = "12px";
    adContainer.style.zIndex = "999999999"; // High z-index to stay above most elements
    adContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    adContainer.style.fontFamily = "'Roboto', 'Arial', sans-serif";
    adContainer.style.transition = "all 0.4s ease";
    adContainer.style.cursor = "pointer";
    adContainer.style.borderRadius = "12px";
    adContainer.style.display = "flex";
    adContainer.style.alignItems = "center";
    adContainer.style.justifyContent = "center";
    adContainer.style.animation = "gradientCycle 8s ease infinite";

    // Responsive design
    if (window.innerWidth <= 600) {
        adContainer.style.padding = "10px";
        adContainer.style.fontSize = "14px";
        adContainer.style.maxWidth = "95%";
    }

    // Ad link wrapper
    const adLink = document.createElement("a");
    adLink.href = "https://www.profitableratecpm.com/k1dv478h?key=6853e590585bd7b8b558fb0d23cc9579";
    adLink.target = "_blank";
    adLink.style.textDecoration = "none";
    adLink.style.color = "inherit";
    adLink.style.display = "flex";
    adLink.style.alignItems = "center";
    adLink.style.width = "100%";
    adLink.style.justifyContent = "center";

    // Ad text
    const adText = document.createElement("span");
    adText.innerHTML = adTexts[Math.floor(Math.random() * adTexts.length)];
    adText.style.animation = "fadeIn 1s ease-in-out";
    adText.style.fontSize = "16px";
    adText.style.fontWeight = "500";
    if (window.innerWidth <= 600) {
        adText.style.fontSize = "13px";
    }

    // Close button
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "✕";
    closeButton.style.position = "absolute";
    closeButton.style.right = "10px";
    closeButton.style.top = "50%";
    closeButton.style.transform = "translateY(-50%)";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "16px";
    closeButton.style.padding = "5px";
    closeButton.style.transition = "transform 0.2s";
    closeButton.addEventListener("click", function(e) {
        e.stopPropagation();
        adContainer.style.transform = "translateY(100%)";
        setTimeout(() => { adContainer.style.display = "none"; }, 400);
    });
    closeButton.addEventListener("mouseover", function() {
        closeButton.style.transform = "translateY(-50%) scale(1.2)";
    });
    closeButton.addEventListener("mouseout", function() {
        closeButton.style.transform = "translateY(-50%) scale(1)";
    });

    // Make entire ad clickable and hide after click
    adLink.addEventListener("click", function() {
        adContainer.style.transform = "translateY(100%)";
        setTimeout(() => { adContainer.style.display = "none"; }, 400);
    });

    // Hover animation for ad
    adContainer.addEventListener("mouseover", function() {
        adContainer.style.transform = "translateX(-50%) translateY(-5px)";
        adContainer.style.boxShadow = "0 6px 20px rgba(0,0,0,0.4)";
    });
    adContainer.addEventListener("mouseout", function() {
        adContainer.style.transform = "translateX(-50%) translateY(0)";
        adContainer.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    });

    // Auto-hide when at page bottom
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= pageHeight - 50) { // 50px buffer
            adContainer.style.transform = "translateX(-50%) translateY(100%)";
            setTimeout(() => { adContainer.style.display = "none"; }, 400);
        } else if (adContainer.style.display === "none") {
            adContainer.style.display = "flex";
            adContainer.style.transform = "translateX(-50%) translateY(0)";
        }
    });

    // Append elements
    adLink.appendChild(adText);
    adContainer.appendChild(adLink);
    adContainer.appendChild(closeButton);
    document.body.appendChild(adContainer);

    // Animation keyframes
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes gradientCycle {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 600px) {
            #footer-ad span {
                font-size: 13px;
            }
        }
        #footer-ad {
            font-family: 'Roboto', 'Arial', sans-serif;
        }
    `;
    document.head.appendChild(style);

    // Load Roboto font
    const fontLink = document.createElement("link");
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
});
