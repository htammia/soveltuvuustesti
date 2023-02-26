// Get all the result-title elements
const resultTitles = document.querySelectorAll('.result-title');

// Loop through each result-title element
resultTitles.forEach(resultTitle => {
  // Add a click event listener to each result-title element
  resultTitle.addEventListener('click', () => {
  // Get the data-result attribute value of the clicked result-title element
  const resultNumber = resultTitle.getAttribute('data-result');
  // Get the result-content element corresponding to the clicked result-title element
  const resultContent = document.querySelector(`.result-content[data-result="${resultNumber}"]`);

  // If the result-content element is hidden, show it; otherwise, hide it
  if (resultContent.style.display === 'none') {
    resultContent.style.display = 'block';
  } else {
    resultContent.style.display = 'none';
  }
  });
});