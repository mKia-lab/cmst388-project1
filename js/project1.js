document.addEventListener('DOMContentLoaded', () => {

    /* PART 1: INTRO TEXT
    -------------------------------------------------- */
    
    // Declare variables for name, age, and isStudent
    let name = "YourName"; // Replace with your actual name
    let age = 21; // Replace with your actual age
    let isStudent = true; // true or false based on your status

    const introduction = (name, age, isStudent) => {
        // Set student status message
        let studentStatus = isStudent ? "I am currently a student." : "I am not a student.";

        // Concatenate message
        let message = "Hello, my name is " + name + ". I am " + age + " years old and " + studentStatus;

        // Display the message in the DOM
        const messageDisplayArea = document.getElementById('messageDisplayArea');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageDisplayArea.appendChild(messageElement);
    };

    // Call the introduction function
    introduction(name, age, isStudent);

    /* PART 2: SELECTORS
    -------------------------------------------------- */
    
    document.querySelector("#add-classes").addEventListener('click', () => {
        // Add class "first" to first item
        document.querySelector('.selector-examples li:first-child').classList.add('first');

        // Add class "even" to even-numbered list items
        document.querySelectorAll('.selector-examples li:nth-child(even)').forEach(el => el.classList.add('even'));

        // Add class "odd" to odd-numbered list items
        document.querySelectorAll('.selector-examples li:nth-child(odd)').forEach(el => el.classList.add('odd'));

        // Add class "highlighter" to item 4 and 5
        document.querySelector('.selector-examples li:nth-child(4)').classList.add('highlighter');
        document.querySelector('.selector-examples li:nth-child(5)').classList.add('highlighter');

        // Add class "last" to the last item
        document.querySelector('.selector-examples li:last-child').classList.add('last');
    });

    /* PART 3: REPLACEMENT TEXT
    -------------------------------------------------- */
    
    document.querySelector("#change-language").addEventListener('click', () => {
        // Get value from input
        let inputValue = document.querySelector("#newLanguage").value;

        // Select all elements with the class currentLanguage
        document.querySelectorAll(".currentLanguage").forEach(el => {
            el.innerHTML = inputValue;
        });
    });

    /* PART 4: TOGGLES
    -------------------------------------------------- */

    // Define the original box color
    let boxColor = "rgb(153, 51, 51)";

    // Toggle box background color
    document.querySelector("#button_toggle_colors").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            const currentColor = window.getComputedStyle(box).backgroundColor;
            if (currentColor === boxColor) {
                box.style.backgroundColor = "white";
            } else {
                box.style.backgroundColor = boxColor;
            }
        });
    });

    // Toggle rounded edge class
    document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            box.classList.toggle("round-edge");
        });
    });

});
