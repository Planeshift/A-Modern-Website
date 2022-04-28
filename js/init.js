(function () {

    // We want to know your location.
    // navigator.geolocation.getCurrentPosition(function(){console.log("Nice")});

    // We want to send random notifications. Only works on https though.
    // Notification.requestPermission().then(function(result){console.log(result)});

    // document.body.addEventListener("contextmenu", e => e.preventDefault());

    /* Cookies */

    document.cookie = "amw_cookieController=cookie; SameSite=lax; max-age=86400";


    function modalCookies() {

        let overlay = document.createElement("div");
        overlay.classList.add("dark-overlay");
        document.body.appendChild(overlay);

        let modal = document.createElement("div");
        modal.classList.add("modal", "modal-z");
        modal.id = "modal-cookies";
        document.body.appendChild(modal);

        let closeButton = document.createElement("button");
        closeButton.classList.add("modal-close-button");
        modal.appendChild(closeButton);
        closeButton.addEventListener("mouseover", closeButtonRoll);
        closeButton.addEventListener("focus", function () { closeButton.blur() });

        function closeButtonRoll() {
            closeButton.blur();
            closeButton.disabled = true;
            closeButton.removeEventListener("mouseover", closeButtonRoll);
            closeButton.style.animationPlayState = "running";
            closeButton.addEventListener("animationiteration", function () {
                closeButton.style.animationPlayState = "paused";
                closeButton.disabled = false;
                closeButton.addEventListener("mouseover", closeButtonRoll);
            });
        }

        closeButton.addEventListener("click", closeButton);

        let modalTitle = document.createElement("div");
        modalTitle.classList.add("modal-title");
        modalTitle.textContent = "We need to talk about cookies."
        modal.appendChild(modalTitle);

        let modalContent = document.createElement("div");
        modalContent.classList.add("modal-content");
        modalContent.textContent = "This website, like many others, uses cookies in order to track you and collect data about you, data that we will then use and sell in order to make money. Unfortunately, laws force us to tell you that we intend to do that. We also have to give you a way to refuse those cookies, but nowhere was it said that it should be obvious or easy. It would be way easier for everyone if you could just accept them, of course."
        modal.appendChild(modalContent);

        let modalButtonRow = document.createElement("div");
        modalButtonRow.classList.add("button-row");
        modal.appendChild(modalButtonRow);

        let modalConfigureCookies = document.createElement("button");
        modalConfigureCookies.classList.add("cookie-button", "configure-cookies");
        modalConfigureCookies.textContent = "Configure";
        modalButtonRow.appendChild(modalConfigureCookies);

        modalConfigureCookies.addEventListener("mouseover", modalConfigureCookiesMove);

        function modalConfigureCookiesMove() {
            modalButtonRow.appendChild(modalButtonRow.firstChild);
        }

        modalConfigureCookies.addEventListener("click", modalConfigureCookiesOpen);

        let modalAcceptCookies = document.createElement("button");
        modalAcceptCookies.classList.add("cookie-button", "accept-cookies");
        modalAcceptCookies.textContent = "Accept";
        modalButtonRow.appendChild(modalAcceptCookies);

    }

    function modalConfigureCookiesOpen() {
        let overlays = document.getElementsByClassName("dark-overlay");
        let overlay;

        if (overlays.length >= 1) {
            overlay = overlays[0];
        } else {
            overlay = document.createElement("div");
            overlay.classList.add("dark-overlay");
            document.body.appendChild(overlay);
        }

        overlay.style.zIndex = 3;

        let submodal = document.createElement("div");
        submodal.classList.add("modal", "submodal-z");
        document.body.appendChild(submodal);

        let closeButton = document.createElement("button");
        closeButton.classList.add("modal-close-button");
        submodal.appendChild(closeButton);

        closeButton.addEventListener("click", function () {
            overlay.style.removeProperty("z-index");
            submodal.remove();
        });

        let title = document.createElement("div");
        title.classList.add("modal-title");
        title.textContent = "Configure how much we’ll track you";
        submodal.appendChild(title);

        let content = document.createElement("div");
        content.classList.add("modal-content");
        submodal.appendChild(content);

        let aboutCookies = document.createElement("details");
        aboutCookies.classList.add("modal-content-details");
        content.appendChild(aboutCookies);

        let aboutCookiesSummary = document.createElement("summary");
        aboutCookiesSummary.classList.add("modal-content-summary");
        aboutCookiesSummary.textContent = "About cookies";
        aboutCookies.appendChild(aboutCookiesSummary);

        let aboutCookiesContent = document.createElement("div");
        aboutCookiesContent.classList.add("about-cookies-content", "modal-content-details-content", "details-content");
        aboutCookies.appendChild(aboutCookiesContent);

        let aboutCookiesContentP1 = document.createElement("p");
        aboutCookiesContentP1.textContent = "Whenever you use any website, it may store or retrieve information on your browser. This information is usually stored in cookies, little bit of texts that are usually deleted by your browser after a while. Historically, cookies were primarily used to answer a simple question: how do you make sure a user is still the same when navigating on your website? The answer was cookies: whenever the user logins, the website asks the browser to write a small piece of text with a unique identifier that it recognizes. Then, whenever the user moves across the website, the cookie is sent with each request for a new page, allowing the server to know it’s still the same user. Of course, this system has some issues of its own, but it was the best course of action.";
        aboutCookiesContent.appendChild(aboutCookiesContentP1);

        let aboutCookiesContentP2 = document.createElement("p");
        aboutCookiesContentP2.textContent = "Problems arise when people realized that you could write and do anything with cookies (as long as you respected some limitations, like size). Quickly, cookies were used to track how a user navigated a website, logged-in or not, how long they spent on each page, on what did they click, where did they move their cursor, which videos they watched, but also their position through their IP adress, their connection habit, everything. Then it devolved even more: why stop on one website? A cookie can be read everywhere, anytime you want. If you somehow manage to put some code on a lot of websites, you could read your cookies on all of them, giving you even more data. That is, for example, what Google is doing, but many more are using similar tactics. And you don’t have to do anything illegal for that: you can just sell your tracking to those websites, which is exactly what Google Analytics is."
        aboutCookiesContent.appendChild(aboutCookiesContentP2);

        let aboutCookiesContentP3 = document.createElement("p");
        aboutCookiesContentP3.textContent = "Given that, some started to fight back. People started using browsers extensions to reduce tracking, for example, but those could only do so much, and even then, only for the minority who had the technical know-how for that. Something had to be done at a higher level, and it happened in the European Union, with the General Data Protection Regulation. Websites now have to get the rightful consent of their users before gathering any data about them. Of course, given that this is how the Internet is making most of its money, especially \"free\" websites (ads make for another big chunk), to say there was and still is pushback would be an understatement.";
        aboutCookiesContent.appendChild(aboutCookiesContentP3);

        let acceptAll = document.createElement("button");
        acceptAll.classList.add("cookie-button");
        acceptAll.textContent = "Accept all";
        content.appendChild(acceptAll);

        new Accordion(aboutCookies);

        let necessaryCookies = document.createElement("details");
        necessaryCookies.classList.add("modal-content-details");
        content.appendChild(necessaryCookies);

        let necessaryCookiesSummary = document.createElement("summary");
        necessaryCookiesSummary.classList.add("modal-content-summary");
        necessaryCookies.appendChild(necessaryCookiesSummary);

        let necessaryCookiesSummaryTitle = document.createElement("div");
        necessaryCookiesSummaryTitle.textContent = "Strictly Necessary Cookies";
        necessaryCookiesSummary.appendChild(necessaryCookiesSummaryTitle);

        let necessaryCookiesSummaryStatus = document.createElement("div");
        necessaryCookiesSummaryStatus.classList.add("necessary-cookies-status");
        necessaryCookiesSummaryStatus.textContent = "Always active";

        let necessaryCookiesContent = document.createElement("div");
        necessaryCookiesContent.classList.add("modal-content-details-content", "details-content");
        necessaryCookiesContent.textContent = "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.";
        necessaryCookies.appendChild(necessaryCookiesContent);

        new Accordion(necessaryCookies);

        let performanceCookies = document.createElement("details");
        performanceCookies.classList.add("modal-content-details");
        content.appendChild(performanceCookies);

        let performanceCookiesSummary = document.createElement("summary");
        performanceCookiesSummary.classList.add("modal-content-summary");
        performanceCookies.appendChild(performanceCookiesSummary);

        let performanceCookiesSummaryTitle = document.createElement("div");
        performanceCookiesSummaryTitle.textContent = "Performance Cookies";
        performanceCookiesSummary.appendChild(performanceCookiesSummaryTitle);

        let performanceCookiesSummaryStatus = document.createElement("input");
        performanceCookiesSummaryStatus.type = "checkbox";
        performanceCookiesSummaryStatus.classList.add("cookie-input-switch");
        performanceCookiesSummary.appendChild(performanceCookiesSummaryStatus);

        let performanceCookiesContent = document.createElement("div");
        performanceCookiesContent.classList.add("modal-content-details-content", "details-content");
        performanceCookiesContent.textContent = "These cookies are used to improve the website. That’s it. Nothing else. I mean, to do that, we have to track you, count how many visits you make, what you watch, but we can’t really identify you, you know? Not directly anyway. Please, accept them.";
        performanceCookies.appendChild(performanceCookiesContent);

        new Accordion(performanceCookies);

    }

    // Taken from: https://css-tricks.com/how-to-animate-the-details-element-using-waapi/

    class Accordion {
        /**
         * 
         * @param {HTMLElement} el 
         */
        constructor(el) {
            // Store the <details> element
            this.el = el;
            // Store the <summary> element
            this.summary = el.getElementsByTagName("summary")[0];
            // Store the <div class="content"> element
            this.content = el.getElementsByClassName("details-content")[0];

            // Store the animation object (so we can cancel it if needed)
            this.animation = null;
            // Store if the element is closing
            this.isClosing = false;
            // Store if the element is expanding
            this.isExpanding = false;
            // Detect user clicks on the summary element
            this.summary.addEventListener('click', (e) => this.onClick(e));
        }

        onClick(e) {
            // Stop default behaviour from the browser
            e.preventDefault();
            // Add an overflow on the <details> to avoid content overflowing
            this.el.style.overflow = 'hidden';
            // Check if the element is being closed or is already closed
            if (this.isClosing || !this.el.open) {
                this.open();
                // Check if the element is being openned or is already open
            } else if (this.isExpanding || this.el.open) {
                this.shrink();
            }
        }

        shrink() {
            // Set the element as "being closed"
            this.isClosing = true;

            // Store the current height of the element
            const startHeight = `${this.el.offsetHeight}px`;
            // Calculate the height of the summary
            const endHeight = `${this.summary.offsetHeight}px`;

            // If there is already an animation running
            if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
            }

            // Start a WAAPI animation
            this.animation = this.el.animate({
                // Set the keyframes from the startHeight to endHeight
                height: [startHeight, endHeight]
            }, {
                duration: 400,
                easing: 'ease-out'
            });

            // When the animation is complete, call onAnimationFinish()
            this.animation.onfinish = () => this.onAnimationFinish(false);
            // If the animation is cancelled, isClosing variable is set to false
            this.animation.oncancel = () => this.isClosing = false;
        }

        open() {
            // Apply a fixed height on the element
            this.el.style.height = `${this.el.offsetHeight}px`;
            // Force the [open] attribute on the details element
            this.el.open = true;
            // Wait for the next frame to call the expand function
            window.requestAnimationFrame(() => this.expand());
        }

        expand() {
            // Set the element as "being expanding"
            this.isExpanding = true;
            // Get the current fixed height of the element
            const startHeight = `${this.el.offsetHeight}px`;
            // Calculate the open height of the element (summary height + content height)
            const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

            // If there is already an animation running
            if (this.animation) {
                // Cancel the current animation
                this.animation.cancel();
            }

            // Start a WAAPI animation
            this.animation = this.el.animate({
                // Set the keyframes from the startHeight to endHeight
                height: [startHeight, endHeight]
            }, {
                duration: 400,
                easing: 'ease-out'
            });
            // When the animation is complete, call onAnimationFinish()
            this.animation.onfinish = () => this.onAnimationFinish(true);
            // If the animation is cancelled, isExpanding variable is set to false
            this.animation.oncancel = () => this.isExpanding = false;
        }

        onAnimationFinish(open) {
            // Set the open attribute based on the parameter
            this.el.open = open;
            // Clear the stored animation
            this.animation = null;
            // Reset isClosing & isExpanding
            this.isClosing = false;
            this.isExpanding = false;
            // Remove the overflow hidden and the fixed height
            this.el.style.height = this.el.style.overflow = '';
        }
    }

    modalCookies();

})();