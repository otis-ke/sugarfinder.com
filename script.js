window.onload = function () {
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.nav-links');
    const close_btn = document.querySelector('#close-menu');

    // Toggle hamburger menu
    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

    // Close menu when the close button is pressed
    close_btn.addEventListener('click', function () {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
};

////////////////////////////////////////////////////////////////////

let currentIndex = 0;

function moveLeft() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = items.length - 1;
    }
    updateSlider();
}

function moveRight() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.slider');
    const items = document.querySelectorAll('.slider-item');
    const totalWidth = items[0].clientWidth * currentIndex;
    slider.style.transform = `translateX(-${totalWidth}px)`;
}

window.addEventListener('resize', updateSlider);








// Show the signup form when the Sign Up Now button is clicked
document.getElementById('signupButton').addEventListener('click', function() {
    document.getElementById('signupFormSection').style.display = 'block';
});

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form values
    const userType = document.getElementById('userType').value;
    const genderPreference = document.getElementById('genderPreference').value;
    const ethnicityPreference = document.getElementById('ethnicityPreference').value;
    const ageMin = parseInt(document.getElementById('ageMin').value);
    const ageMax = parseInt(document.getElementById('ageMax').value);

    // Validate age range
    if (ageMin < 18 || ageMax < 18) {
        alert('Age must be 18 or older.');
        return;
    }

    // Redirect to people.html with preferences
    let redirectUrl = 'people.html';
    redirectUrl += `?userType=${userType}&gender=${genderPreference}&ethnicity=${ethnicityPreference}&ageMin=${ageMin}&ageMax=${ageMax}`;
    window.location.href = redirectUrl;
});

// Example function to parse query parameters (to be used on the content pages)
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        userType: params.get('userType'),
        gender: params.get('gender'),
        ethnicity: params.get('ethnicity'),
        ageMin: params.get('ageMin'),
        ageMax: params.get('ageMax'),
    };
}

// Function to filter and display relevant matches (this should be called on people.html)
function displayMatches() {
    const { userType, gender, ethnicity, ageMin, ageMax } = getQueryParams();
    
    // Logic to filter profiles based on preferences goes here
    // For demo purposes, you might manually show/hide match profiles based on the parameters

    // Example:
    const matches = document.querySelectorAll('.match');
    matches.forEach(match => {
        const matchAge = parseInt(match.querySelector('.age').textContent);
        const matchEthnicity = match.querySelector('.ethnicity').textContent.toLowerCase();
        
        if (matchAge >= ageMin && matchAge <= ageMax && 
            (ethnicity === 'any' || ethnicity === matchEthnicity)) {
            match.style.display = 'block';
        } else {
            match.style.display = 'none';
        }
    });
}

// Call the displayMatches function on people.html
window.onload = displayMatches;










// Handle Match button click
document.querySelectorAll('.match-button').forEach(button => {
    button.addEventListener('click', function() {
        const profileCard = this.closest('.profile-card');
        profileCard.classList.add('swipe');

        // Remove the card after the animation completes
        setTimeout(() => {
            profileCard.style.display = 'none';
        }, 500);

        alert('You have matched with this user!');
    });
});

// Handle Message button click
document.querySelectorAll('.message-button').forEach(button => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('message-modal');
        modal.style.display = 'flex';

        const closeButton = document.querySelector('.close-button');
        closeButton.onclick = function() {
            modal.style.display = 'none';
        };

        // Simulate sending a message
        const sendButton = document.getElementById('send-button');
        sendButton.onclick = function() {
            const messageInput = document.getElementById('message-input');
            const chatBox = document.querySelector('.chat-box');

            if (messageInput.value.trim() !== "") {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message-sent');
                newMessage.innerHTML = `<p>${messageInput.value}</p><span class="ticks">✔✔</span>`;
                chatBox.appendChild(newMessage);

                messageInput.value = "";  // Clear input
                chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom

                setTimeout(() => {
                    alert('Message sent successfully!');
                }, 300);
            }
        };
    });
});

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('message-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};





document.addEventListener("DOMContentLoaded", function() {
    const matchButton = document.querySelector(".match-button");
    const messageButton = document.querySelector(".message-button");
    const modal = document.getElementById("message-modal");
    const closeModal = document.querySelector(".close");

    matchButton.addEventListener("click", function() {
        matchButton.classList.add("matched");
        alert("You've matched with Avery! 🎉");
    });

    messageButton.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});






