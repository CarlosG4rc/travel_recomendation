function searchCondition() {
  const input = document.getElementById('destInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  fetch('travel_recomendation_api.json')
    .then(response => response.json())
    .then(data => {
        let results = [];
        

        // sections.forEach(section => {
        data[input].forEach(item => {
            if (item.name.toLowerCase().includes(input)) {
                results.push(item);
            }

            if (item.cities) {
                item.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(input)) {
                        results.push(city);
                    }
                });
            }
        });
        // });
        console.log(results);
    })

}

btnSearch.addEventListener('click', searchCondition);