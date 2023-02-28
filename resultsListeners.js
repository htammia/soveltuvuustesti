// Get all the result-title elements
const resultTitles = document.querySelectorAll('.result-title');

// Loop through each result-title element
resultTitles.forEach(resultTitle => {
  
   // Get the data-result attribute value of the current result-title element
   const resultNumber = resultTitle.getAttribute('data-result');

   // Get the result-content element corresponding to the current result-title element
   const resultContent = document.querySelector(`.result-content[data-result="${resultNumber}"]`);

   // Hide the result-content element initially
   resultContent.style.display = 'none';
 
   // Add a click event listener to each result-title element
   resultTitle.addEventListener('click', () => {
     // Toggle the visibility of the result-content element
     if (resultContent.style.display === 'none') {
       resultContent.style.display = 'block';
     } else {
       resultContent.style.display = 'none';
     }
   });
 });