// Variables globales para los gráficos
let marginChart = null;
let marginValuesChart = null;

document.getElementById('simulator-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Recuperar valores del formulario
    const storeName = document.getElementById('storeName').value;
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const unitCost = parseFloat(document.getElementById('unitCost').value);
    const adminExpenses = parseFloat(document.getElementById('adminExpenses').value);

    // Escenarios de cantidades vendidas
    const baseScenario = [5, 10, 15, 15, 25, 30, 30, 25, 20, 15, 20, 40];
    const optimisticScenario = baseScenario.map(qty => qty * 1.3);
    const pessimisticScenario = baseScenario.map(qty => qty * 0.8);

    // Márgenes para los tres escenarios
    const baseMargins = calculateMargins(baseScenario, unitPrice, unitCost, adminExpenses);
    const optimisticMargins = calculateMargins(optimisticScenario, unitPrice, unitCost, adminExpenses);
    const pessimisticMargins = calculateMargins(pessimisticScenario, unitPrice, unitCost, adminExpenses);

    // Llamar a las funciones para graficar
    plotMargins(baseScenario, optimisticScenario, pessimisticScenario); // Gráfico de cantidades vendidas
    plotMarginValues(baseMargins, optimisticMargins, pessimisticMargins); // Gráfico de márgenes
});

// Función para calcular márgenes
function calculateMargins(scenarioQuantities, unitPrice, unitCost, adminExpenses) {
    return scenarioQuantities.map(quantity => {
        const grossProfit = (unitPrice - unitCost) * quantity;
        return grossProfit - adminExpenses;
    });
}

// Función para graficar las cantidades vendidas
function plotMargins(baseScenario, optimisticScenario, pessimisticScenario) {
    const ctx = document.getElementById('marginChart').getContext('2d');

    // Destruir el gráfico anterior si existe
    if (marginChart) {
        marginChart.destroy();
        marginChart = null; // Reiniciar la variable
    }

    // Crear el nuevo gráfico
    marginChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                { label: 'Base', data: baseScenario, borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, fill: false },
                { label: 'Optimista', data: optimisticScenario, borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 2, fill: false },
                { label: 'Pesimista', data: pessimisticScenario, borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 2, fill: false }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}

// Función para graficar los márgenes
function plotMarginValues(baseMargins, optimisticMargins, pessimisticMargins) {
    const ctx = document.getElementById('marginValuesChart').getContext('2d');

    // Destruir el gráfico anterior si existe
    if (marginValuesChart) {
        marginValuesChart.destroy();
        marginValuesChart = null; // Reiniciar la variable
    }

    // Crear el nuevo gráfico
    marginValuesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                { label: 'Base', data: baseMargins, borderColor: 'rgba(75, 192, 192, 1)', borderWidth: 2, fill: false },
                { label: 'Optimista', data: optimisticMargins, borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 2, fill: false },
                { label: 'Pesimista', data: pessimisticMargins, borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 2, fill: false }
            ]
        },
        options: { responsive: true, scales: { y: { beginAtZero: true } } }
    });
}
