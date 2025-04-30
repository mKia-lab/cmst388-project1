document.addEventListener('DOMContentLoaded', () => {
    
    /* PART 1: INTRO TEXT
    --------------------------------------------------
    */

    const name = "Your Name";
    const age = 25;
    const isStudent = true;
// TODO: Declare variables for name, age, and isStudent setting values with your own name, age, and student status.
    
    const introduction = (name, age, isStudent) => {
    const studentStatus = isStudent ? "I am currently a student." : "I am not a student.";

        // TODO: Check if isStudent is true or false and set text output to a new variable called studentStatus
        // - If isStudent is true, set studentStatus to "I am currently a student."
        // - If isStudent is false, set studentStatus to "I am not a student."
    const message = "Hello, my name is " + name + ". I am " + age + " years old and " + studentStatus;

        // TODO: Using string concatenation, store a message to a new variable called message. 
        // - The message variable should should include your name, age, and a statement about whether you are a student or not. 
        // - Example message format: "Hello, my name is John. I am 25 years old and I am currently a student."
    
        // DO NOT CHANGE: The following code selects the messageDisplayArea ID in the HTML file and appends a div 
        // tag with the message variable defined above.
        const messageDisplayArea = document.getElementById('messageDisplayArea');
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageDisplayArea.appendChild(messageElement);
    };
    
    // Call the introduction function. Do not edit this line.
    introduction(name, age, isStudent);

    /* PART 2: SELECTORS
    --------------------------------------------------
    */

    document.querySelector("#add-classes").addEventListener('click', () => {
        document.querySelector('.selector-examples li:first-child').classList.add('first');
        document.querySelectorAll('.selector-examples li:nth-child(odd)').forEach(el => el.classList.add('odd'));
        // TODO: Add remaining selectors using nth-child, loops and conditional logic where approriate. (https://www.w3schools.com/CSSref/sel_nth-child.php) 
    });

    /* PART 3: REPLACEMENT TEXT
    --------------------------------------------------
    */

    document.querySelector("#change-language").addEventListener('click', () => {
      const inputValue = document.getElementById('newLanguage').value;
      const elements = document.querySelectorAll('.currentLanguage');

      elements.forEach(el => {
        el.innerHTML = inputValue;
      });
    });

    /* PART 4: TOGGLES
    --------------------------------------------------
    */

    // Modifying CSS attributes
    let boxColor = "rgb(153, 51, 51)";

    document.querySelector("#button_toggle_colors").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            const currentColor = window.getComputedStyle(box).backgroundColor;
            if (currentColor === boxColor) {
                box.style.backgroundColor = 'white';
                // TODO: element backgroundColor currently has boxColor set, change it to 'white'
            } else {
                box.style.backgroundColor = boxColor;
                // TODO: element backgroundColor currently does not have boxcolor set, set it to boxColor
            }
        });
    });

    // Adding/Removing classes to manipulate shapes
    document.querySelector("#button_toggle_roundedges").addEventListener('click', () => {
        document.querySelectorAll(".box").forEach(box => {
            box.classList.toggle('round-edge');
            // TODO: Add a toggle to box.classList and toggle the CSS 'round-edge' class
        });
    });
});
