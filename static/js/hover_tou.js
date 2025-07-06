document.addEventListener('DOMContentLoaded', function() {
    // Create the popup element
    const popup = document.createElement('div');
    popup.id = 'color-info-popup'; // Add ID for easier debugging
    popup.style.position = 'absolute';
    popup.style.padding = '8px 12px';
    popup.style.backgroundColor = '#222222';
    popup.style.color = '#ffffff';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '4px';
    popup.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    popup.style.fontFamily = 'Arial, sans-serif';
    popup.style.fontSize = '14px';
    popup.style.zIndex = '1000';
    popup.style.display = 'none';
    popup.style.pointerEvents = 'none';
    popup.style.textOverflow = 'wrap'; // Ensure text wraps properly
    popup.style.whiteSpace = 'normal'; // Allow text to wrap
    popup.style.maxWidth = '300px'; // Set a max width for the popup
    document.body.appendChild(popup);
    console.log('Popup element created and appended to body');

    const messages = {
        "Suggestive positions": "Using my character in any position that is considered suggestive or provocative in nature is permitted.",
        "Any Genitals": "Altering my character to have any form of genitals (whether they be human-like, fantasy-like, or animal-like) is permitted. This also includes changing the character's sexual organs to male, female, nonexistent, or any other form.",
        "Drawing With Other Characters or OCs": "This is allowed, as long as the other characters or OCs are not copyrighted or disallowed for use. If the other character(s) are not yours, please ensure you have permission from the original creator to use them in your artwork.",
        "Romantic or Intimate Settings": "This is allowed (somewhat). Romantic or intimate art is permitted as long as it doesn't really seem like my character is being shipped with another character or OC. As long as it's satirical or obviously not meant to be taken seriously, it is allowed. I am not comfortable with my character being shipped with another character or OC, so please keep that in mind.",
        "Age Alteration": "Altering my character's age to be older or younger is allowed, as long as it does not involve any illegal or inappropriate content. This includes making my character appear as a child or minor in any sexual or suggestive context, which is strictly prohibited. Don't make me get the flamethrower you weirdos.",
        "Species Alteration": "Changing my character's species to any other species (only of animals / furries) is allowed as long as it is an open species. This includes changing the character's appearance to resemble that of a different species, such as a cat, dog, dragon, etc. Make sure to keep the character's original design elements intact, such as colors, patterns, and other distinctive features.",
        "Feral Representations": "Creating feral representations of my character is allowed, as long as it does not involve any illegal or inappropriate content. This includes making my character appear as a cub or minor in any sexual or suggestive context, which is strictly prohibited. Feral representations should be respectful and not depict any illegal or inappropriate content.",
        "Exaggerated Body Proportions": "Exaggerating my character's body proportions is allowed, but keep it in moderation, and don't make it too extreme... I don't want to see my character looking like a complete and utter freak of nature, alright?",
        "Use in Non-Satirical Propaganda": "Using my character in any form of propaganda that is not satirical or humorous in nature is strictly prohibited. This includes using my character to promote any political, religious, or social agenda that is not aligned with my values or beliefs. Stuff that's supposed to be funny like those fake war/recruitment posters are fine, but don't use my character to promote any real-life political or social agenda.",
        "Commercial Usage": "Using my character for commercial purposes, such as selling merchandise or using it in advertisements is not allowed unless you have explicit permission from me. This includes using my character in any form of commercial media, such as video games, movies, or television shows. If you want to use my character for commercial purposes, please contact me first to discuss the details and obtain permission.",
        "Genderswapping": "Changing my character's gender is not allowed. My character is an extension of myself and therefore represents my identity. My character is an AMAB (Assigned Male At Birth) Transfeminine person, and I do not want my character to be represented as a different gender than myself."
    }

    const spans = document.querySelectorAll('span');

    // Add event listeners to all relevant li elements
    spans.forEach((span, index) => {
        span.addEventListener('mouseenter', function(e) {
            const text = this.textContent.trim();
            const message = messages[text]
            if (!message) {
                console.warn(`No message found for index ${index}`);
                return;
            }
            // Set popup content
            popup.innerHTML = `
                <div><span>${message}</span></div>
            `;

            popup.style.display = 'block';
            const rect = this.getBoundingClientRect();
            console.log('li position:', rect);
            
            popup.style.left = `${rect.left + window.scrollX}px`;
            popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
            console.log(`Popup positioned at: left=${popup.style.left}, top=${popup.style.top}`);
        });

        span.addEventListener('mouseleave', function() {
            popup.style.display = 'none';
        });

        span.style.cursor = 'pointer';
    });
});