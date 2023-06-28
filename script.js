/*
Use JavaScript to create an event listener for the submit button.
4. In the event listener, get the value of the text input field and perform the following operations on the string:
• Count the number of characters in the string.
Count the number of words in the string.
Reverse the string
Convert the string to uppercase.
Convert the string to lowercase.
5. Display the results of the operations on the string in the HTML page, below the form.
*/

const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const fullInput = document.getElementById('fullname').value;
  const emailInput = document.getElementById('email').value;
  const phoneInput = document.getElementById('phone').value;
  const pwordInput = document.getElementById('password').value;

  const processText = (text) => ({
    charCount: text.length,
    wordCount: text.trim() === '' ? 0 : text.split(/\s+/).length,
    reverseText: text.split("").reverse().join(""),
    upperText: text.toUpperCase(),
    lowerText: text.toLowerCase(),
  });

  const outputResult = (heading, resultObj) => {
    result.innerHTML += `
      <h3>${heading}</h3>
      <p>Number of characters: ${resultObj.charCount}</p>
      <p>Number of words: ${resultObj.wordCount}</p>
      <p>Reversed text: ${resultObj.reverseText}</p>
      <p>Uppercase text: ${resultObj.upperText}</p>
      <p>Lowercase text: ${resultObj.lowerText}</p>
    `;
  };

  const fullResult = processText(fullInput);
  outputResult("Full name", fullResult);

  const emailResult = processText(emailInput);
  setTimeout(() => {
    outputResult("Email", emailResult);
  }, 1000); // Delayed output for emailResult

  const phoneResult = processText(phoneInput);
  setTimeout(() => {
    outputResult("Phone", phoneResult);
  }, 2000); // Delayed output for phoneResult

  const pwordResult = processText(pwordInput);
  setTimeout(() => {
    outputResult("Password", pwordResult);
  }, 3000); // Delayed output for pwordResult
});
