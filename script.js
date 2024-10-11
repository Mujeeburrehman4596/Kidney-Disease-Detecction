document.getElementById('kidney-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get user input values
    var age = parseInt(document.getElementById('age').value);
    var bp = parseInt(document.getElementById('bp').value);
    var sugar = parseInt(document.getElementById('sugar').value);
    var creatinine = parseFloat(document.getElementById('creatinine').value);
    var albumin = parseFloat(document.getElementById('albumin').value);
  
    var resultMessage = '';
  
    // Basic condition checking (This logic should ideally come from a backend or a trained ML model)
    if (age > 60 || bp > 140 || sugar > 180 || creatinine > 1.5 || albumin < 3.5) {
      resultMessage = "Warning: High risk of kidney disease. Please consult with a healthcare provider.";
    } else {
      resultMessage = "No immediate risk of kidney disease detected based on the input values.";
    }
  
    displayResult(resultMessage);
  });
  
  // Display result in the UI
  function displayResult(message) {
    document.getElementById('result-message').innerText = message;
    document.getElementById('result-message').classList.add('font-weight-bold');
  }
  