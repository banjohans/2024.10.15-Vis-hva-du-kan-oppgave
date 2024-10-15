const puzzles = {
  reverseStringBug: {
    code: `function reverseString(input) {
      return input.spilt('').reverrse().jion('');
    }`,
    description:
      "This puzzle requires you to fix a JavaScript function that reverses a string.  \
      The function first splits an input strain, then reverses it, \
      and then the string is joined to the strain in reversed order. \
      There are several typos in the method name. Can you spot the typos in the code and fix it?",
    requiresInput: true, // This puzzle requires user input
  },
  sumOfTwoNumbersBug: {
    code: `function sumOfTwoNumbers() {

      return 3 4; // The operator is missing here. You need to fix this, for the numbers to add up.
    }`,
    description:
      "This puzzle requires you to fix a function that adds two numbers. \
      The function is supposed to return the sum of 3 and 4, but the operator between the two numbers is missing. \
      Your job is to find the bug and fix the function.",
    requiresInput: false, // No input needed for this puzzle
  },
  sumOfThreeNumbersBug: {
    code: `function sumOfThreeNumbers() {
    
      return 3 4 5; // The operators are missing here. You need to fix this, for the numbers to add up.
    }`,
    description:
      "This puzzle requires you to fix a function that adds two numbers, before it multiplies the sum of these two with a third number. \
      You will need to ad operators and a parentheses to make the calculation correct. You are aiming for the number 35. \
      Debug and fix the function.",
    requiresInput: false, // No input needed for this puzzle
  },
  testProofOfConceptCode: {
    code: `function proofOfConceptCode() {
return "??"
    }`,
    description:
      "The only purpose of this puzzle is to see of the ID tags will change text properly.\
      Write 'Hans Martin' instead of ?? in the code editor and wonderful things will happen.",
  },
};

// Load the selected puzzle into the code editor and description area
function loadPuzzle() {
  const puzzleSelect = document.getElementById("puzzleSelect").value;
  const codeEditor = document.getElementById("codeEditor");
  const puzzleDescription = document.getElementById("puzzleDescription");
  const inputContainer = document.getElementById("inputContainer"); // The input field container

  // Load the buggy code into the text area
  codeEditor.value = puzzles[puzzleSelect].code;

  // Load the puzzle description into the description area
  puzzleDescription.innerText = puzzles[puzzleSelect].description;

  // Show or hide the input field based on whether the puzzle requires input
  if (puzzles[puzzleSelect].requiresInput) {
    inputContainer.style.display = "block"; // Show input field
  } else {
    inputContainer.style.display = "none"; // Hide input field
  }
}

function executeCode() {
  const codeEditor = document.getElementById("codeEditor").value;
  const outputElement = document.getElementById("output");
  const puzzleSelect = document.getElementById("puzzleSelect").value;

  // Define userInput for reverseStringBug outside of block to avoid scope issues
  let userInput = "";

  // Try to run the code, catch any errors
  try {
    // Use eval to execute the code written in the editor
    eval(codeEditor);

    let result;

    // Test the user's code based on the selected puzzle
    if (puzzleSelect === "reverseStringBug") {
      userInput = document.getElementById("puzzleInput").value;
      result = reverseString(userInput); // Call reverseString after eval
    } else if (puzzleSelect === "sumOfTwoNumbersBug") {
      result = sumOfTwoNumbers(); // Call sumOfTwoNumbers after eval
    } else if (puzzleSelect === "sumOfThreeNumbersBug") {
      result = sumOfThreeNumbers(); // Call sumOfThreeNumbers after eval
    } else if (puzzleSelect === "testProofOfConceptCode") {
      result = proofOfConceptCode(); // Call testProofOfConceptCode after eval
    }

    // Check for correct result based on the puzzle type
    if (
      puzzleSelect === "reverseStringBug" &&
      result === userInput.split("").reverse().join("")
    ) {
      if (!userInput) {
        outputElement.innerHTML = `Puzzle Solved! The output is: ${result}. But it seems you didn't input any values! Please enter some input to see the result.`;
      } else {
        outputElement.innerHTML = `Puzzle Solved! The output is: ${result}`;
      }
    } else if (puzzleSelect === "sumOfTwoNumbersBug" && result === 7) {
      outputElement.innerHTML = `Puzzle Solved! The output is: ${result}`;
    } else if (puzzleSelect === "sumOfThreeNumbersBug" && result === 35) {
      outputElement.innerHTML = `Puzzle Solved! The output is: ${result}`;
    } else if (
      puzzleSelect === "testProofOfConceptCode" &&
      result === "Hans Martin"
    ) {
      outputElement.innerHTML = `You will live your life in prosper, many richess will be awarded you, a loving spouse and a garden full of juicy fruits! ${result} is the correct answer to all of your problems`;
    } else {
      outputElement.innerHTML = `Incorrect output: ${result}. Keep trying!`;
    }
  } catch (error) {
    // Show detailed error messages for each step
    outputElement.innerHTML = `Error: ${error.message}. Please check your code for mistakes!`;
  }
}

// Define the banjo facts and details
const banjoFacts = {
  akontingCard: {
    image: "./assets/Akonting_2-removebg-preview.png",
    name: "Akonting",
    genre: "African Folk",
    age: "1600s",
    weight: "2kg",
    material: "Wood and Gourd",
    description:
      "A folk lute of the Jola people of West Africa; a banjo-like instrument with a skin-headed gourd body, two long melody strings, and one short drone string.",
  },
  minstrelCard: {
    image: "./assets/minstrelbanjo.png",
    name: "Minstrel Banjo",
    genre: "African American Folk",
    age: "1800s",
    weight: "2.5kg",
    material: "Wood and Metal",
    description:
      "A 19th-century banjo used in minstrel shows, influenced by early African-American banjos made from gourds and animal skins. It featured a fretless neck, gut strings, and lower tuning, with a deep, warm sound.",
  },
  mastertoneCard: {
    image: "./assets/mastertonebanjo.png",
    name: "Gibson Mastertone Banjo",
    genre: "Bluegrass",
    age: "1930s",
    weight: "12kg",
    material: "Flame maple, Metal and Pearloid",
    description:
      "A 20th-century banjo, renowned for its use in bluegrass music, prized by musicians and collectors alike. Built with a resonator and metal tone ring, it delivered a bright, powerful sound with exceptional projection. Its solid wood construction, typically featuring maple or mahogany, and precision craftsmanship made it a standout instrument. Known for its heavy weight and distinctive tone, the prewar Gibson Mastertone became an iconic choice for banjo players seeking a rich, resonant sound with sharp clarity.",
  },
  dobsonCard: {
    image: "./assets/hcdobson.png",
    name: "HC Dobson Banjo",
    genre: "Oldtime music",
    age: "1880s",
    weight: "4kg",
    material: "Mahogany and Brass",
    description:
      "A late 19th-century banjo crafted by renowned maker H.C. Dobson, celebrated for its innovation and refined sound. Known for its elegant spunover rim and Dobson tone ring, it produced a warm, mellow tone with a rich, resonant quality. Its lightweight construction and smooth playability made it popular among parlor musicians of the era. Typically featuring a fretless neck and gut strings, the Dobson banjo stood out for its combination of craftsmanship and tonal complexity, influencing banjo design well into the 20th century.",
  },
  toptensionCard: {
    image: "./assets/toptension.png",
    name: "Gibson Style 7 Top Tension Banjo",
    genre: "Bluegrass",
    age: "1930s",
    weight: "14kg",
    material: "Maple, Metal and Pearloid",
    description:
      "A rare, high-end banjo from the 1930s, the Gibson Style 7 Top Tension was part of Gibson's innovative top-tension series. Distinguished by its ornate design, including lavish inlays, pearloid fingerboard, and distinctive colored finish, it featured a revolutionary top-tension system allowing players to adjust head tension without removing the resonator. Known for its heavy build, including a cast metal flange and resonator, and fitted with a flathead tone ring, it delivered a bold, powerful tone with remarkable sustain and clarity. The Style 7 became a sought-after instrument for its aesthetics, playability, and cutting sound.",
  },
};

// Load the selected banjo details into the page
function loadBanjo() {
  const banjoSelect = document.getElementById("banjoSelect").value;
  const banjoData = banjoFacts[banjoSelect];
  const banjoFactContainer = document.getElementById("banjoFactContainer");

  // Filling the banjo fact container with information cards, as learned at Kodehode
  banjoFactContainer.innerHTML = `
    <article class="card-container">
      <figure class="img-container">
        <img src="${banjoData.image}" alt="${banjoData.name}">
      </figure>
      <div class="details-container">
        <h1 class="name">${banjoData.name}</h1>
        <h2 class="genre">${banjoData.genre}</h2>
        <div class="card-details">
          <div class="item">
            <p class="value">${banjoData.age}</p>
            <p class="label">Age</p>
          </div>
          <div class="item">
            <p class="value">${banjoData.weight}</p>
            <p class="label">Weight</p>
          </div>
          <div class="item">
            <p class="value">${banjoData.material}</p>
            <p class="label">Material</p>
          </div>
        </div>
        <div class="description">
          <h3>Description:</h3>
          <p class="info">${banjoData.description}</p>
        </div>
      </div>
    </article>
  `;
}
