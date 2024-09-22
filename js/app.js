// // Variables globales para gráficos

function calculateMargins(scenarioQuantities, unitPrice, unitCost, adminExpenses) {
    return scenarioQuantities.map(quantity => {
        const grossProfit = (unitPrice - unitCost) * quantity;
        return grossProfit - adminExpenses;
    });
}

document.getElementById('simulator-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const storeName = document.getElementById('storeName').value;
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const unitCost = parseFloat(document.getElementById('unitCost').value);
    const adminExpenses = parseFloat(document.getElementById('adminExpenses').value);

    // Escenarios de cantidades vendidas
    const baseScenario = [5, 10, 15, 15, 25, 30, 30, 25, 20, 15, 20, 40];
    const optimisticScenario = baseScenario.map(qty => qty * 1.3);
    const pessimisticScenario = baseScenario.map(qty => qty * 0.8);

        // Cálculo de márgenes
    const baseMargins = calculateMargins(baseScenario, unitPrice, unitCost, adminExpenses);
    const optimisticMargins = calculateMargins(optimisticScenario, unitPrice, unitCost, adminExpenses);
    const pessimisticMargins = calculateMargins(pessimisticScenario, unitPrice, unitCost, adminExpenses);

    // Mostrar los gráficos (destruir si ya existen)
    if (marginChart) {
        marginChart.destroy();
    }
    if (marginValuesChart) {
        marginValuesChart.destroy();
    }

    plotMargins(baseScenario, optimisticScenario, pessimisticScenario);
    plotMarginValues(baseMargins, optimisticMargins, pessimisticMargins);

    showBreakEvenPoint(unitPrice, unitCost, adminExpenses);
});

// Funciones para graficar cantidades vendidas y márgenes (Chart.js)
function plotMargins(baseScenario, optimisticScenario, pessimisticScenario) {
    const ctx = document.getElementById('marginChart').getContext('2d');
    marginChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                { label: 'Escenario Base - Cantidad Vendida', data: baseScenario, borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, fill: false },
                { label: 'Escenario Optimista - Cantidad Vendida', data: optimisticScenario, borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 2, fill: false },
                { label: 'Escenario Pesimista - Cantidad Vendida', data: pessimisticScenario, borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 2, fill: false }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

function plotMarginValues(baseMargins, optimisticMargins, pessimisticMargins) {
    const ctx = document.getElementById('marginValuesChart').getContext('2d');
    marginValuesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                { label: 'Escenario Base - Márgenes', data: baseMargins, borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, fill: false },
                { label: 'Escenario Optimista - Márgenes', data: optimisticMargins, borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 2, fill: false },
                { label: 'Escenario Pesimista - Márgenes', data: pessimisticMargins, borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 2, fill: false }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

function showBreakEvenPoint(unitPrice, unitCost, adminExpenses) {
    const breakEvenPoint = adminExpenses / (unitPrice - unitCost);
    document.getElementById('breakEvenPoint').innerText = `Punto de equilibrio: ${breakEvenPoint.toFixed(2)} unidades vendidas.`;
}
