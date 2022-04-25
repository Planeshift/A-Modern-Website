(function(){

    
    // navigator.geolocation.getCurrentPosition(function(){console.log("Nice")});
    // document.body.addEventListener("contextmenu", e => e.preventDefault());

    /* Cookies */

    document.cookie = "amw_cookieController=cookie; SameSite=lax; max-age=86400";


    function modalCookies(){

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
        closeButton.addEventListener("focus", function(){closeButton.blur()});

        function closeButtonRoll() {
            closeButton.blur();
            closeButton.disabled = true;
            closeButton.removeEventListener("mouseover", closeButtonRoll);
            closeButton.style.animationPlayState = "running";
            closeButton.addEventListener("animationiteration", function(){
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
        modalConfigureCookies.classList.add("cookie-button","configure-cookies");
        modalConfigureCookies.textContent = "Configure";
        modalButtonRow.appendChild(modalConfigureCookies);

        modalConfigureCookies.addEventListener("mouseover", modalConfigureCookiesMove);

        function modalConfigureCookiesMove(){
            if(modalButtonRow.style.flexDirection == "row-reverse"){
                modalButtonRow.style.flexDirection = "row";
            }else{
                modalButtonRow.style.flexDirection = "row-reverse";
            }
        }

        modalConfigureCookies.addEventListener("click", modalConfigureCookiesOpen);

        let modalAcceptCookies = document.createElement("button");
        modalAcceptCookies.classList.add("cookie-button", "accept-cookies");
        modalAcceptCookies.textContent = "Accept";
        modalButtonRow.appendChild(modalAcceptCookies);

    }

    function modalConfigureCookiesOpen(){
        let overlays = document.getElementsByClassName("dark-overlay");
        let overlay;

        if(overlays.length >= 1){
            overlay = overlays[0];
        }else{
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

        closeButton.addEventListener("click", function(){
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
        
        let contentTitle = document.createElement("div");
        contentTitle.classList.add("modal-content-title");
        contentTitle.textContent = "About cookies";
        content.appendChild(contentTitle);

        let contentDescription = document.createElement("div");
        contentDescription.classList.add("modal-content-description");
        content.appendChild(contentDescription);

        let contentDescriptionP1 = document.createElement("p");
        contentDescriptionP1.textContent = "Whenever you use any website, it may store or retrieve information on your browser. This information is usually stored in cookies, little bit of texts that are usually deleted by your browser after a while. Historically, cookies were primarily used to answer a simple question: how do you make sure a user is still the same when navigating on your website? After all, you can’t trust an IP adress, and over methods of similar identification are not failproof either. The answer was cookies: whenever the user logins, the website asks the browser to write a small piece of text with a unique identifier that it recognizes. Then, whenever the user moves across the website, the cookie is sent with each request for a new page, allowing the server to know it’s still the same user. Of course, this system has some issues of its own, but it was the best course of action.";
        contentDescription.appendChild(contentDescriptionP1);

        let contentDescriptionP2 = document.createElement("p");
        contentDescriptionP2.textContent = "Problems arise when people realized that you could write and do anything with cookies (as long as you respected some limitations, like size). Quickly, cookies were used to track how a user navigated a website, logged-in or not, how long they spent on each page, on what did the click, where did they move their cursor, which videos they watched, but also their position through their IP adress, their connection habit, everything. Then it devolved even more: why stop on one website? A cookie can be read everywhere, anytime you want. If you somehow manage to put some code on a lot of websites, you could read your cookies on all of them, giving you even more data. That is, for example, what Google is doing, but many more are using similar tactics. And you don’t have to do anything illegal for that: you can just sell your tracking to those websites, which is exactly what Google Analytics is."
        contentDescription.appendChild(contentDescriptionP2);

        let contentDescriptionP3 = document.createElement("p");
        contentDescriptionP3.textContent = "Given that, some started to fight back. People started using browsers extensions to reduce tracking, for example, but those could only do so much, and even then, only for the minority who had the technical know-how for that. Something had to be done at a higher level, and it happened in the European Union, with the General Data Protection Regulation. Websites now have to get the rightful consent of their users before gathering any data about them. Of course, given that this is how the Internet is making most of its money, especially \"free\" websites (ads make for another big chunk), to say there was and still is pushback would be an understatement.";
        contentDescription.appendChild(contentDescriptionP3);

    }


    modalCookies();

})();