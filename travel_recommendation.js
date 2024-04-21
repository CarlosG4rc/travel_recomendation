const resultDiv = document.getElementById('result');
resultDiv.innerHTML = '';

function searchCondition() {
  const input = document.getElementById('destInput').value.toLowerCase();
  fetch('travel_recomendation_api.json')
  .then(response => response.json())
  .then(data => {
    
    if (input === "temples" || input === "beaches"){
      data[input].forEach(element => {
        resultDiv.innerHTML += `<h2>${element.name}</h2>`;
        resultDiv.innerHTML += `<img src="${element.imageUrl}" alt="hjh">`;
        resultDiv.innerHTML += `<p>${element.description}</p>`;
      });
    }
    if (input === "countries"){
      data[input].forEach(element => {
        resultDiv.innerHTML += `<h2>${element.name}</h2>`;
        resultDiv.innetHTML += `<h2>Cities</h2>`;
        element.cities.forEach(item => {
          resultDiv.innerHTML += `<h2>${item.name}</h2>`;
          resultDiv.innerHTML += `<img src="${item.imageUrl}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${item.description}</p>`;
        });
      });
    }
  });
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', () => {
  resultDiv.innerHTML = '';
  document.getElementById('destInput').value = '';
});