function displayResults(containerId, margins, scenarioName) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<h3>${scenarioName}</h3>`;
    margins.forEach((margin, month) => {
        const marginElement = document.createElement('div');
        marginElement.textContent = `Mes ${month + 1}: ${margin.toFixed(2)} USD`;
        container.appendChild(marginElement);
    });
}
