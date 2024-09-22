// Función para crear el gráfico de cantidades vendidas (escenarios)
function createChart(chartId, baseScenario, optimisticScenario, pessimisticScenario) {
    const ctx = document.getElementById(chartId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                {
                    label: 'Escenario Normal',
                    data: baseScenario,
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'Escenario Optimista',
                    data: optimisticScenario,
                    borderColor: 'green',
                    fill: false,
                },
                {
                    label: 'Escenario Pesimista',
                    data: pessimisticScenario,
                    borderColor: 'red',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Proyección de Cantidades Vendidas'
            }
        }
    });
}

function updateChart(chart, baseScenario, optimisticScenario, pessimisticScenario) {
    chart.data.datasets[0].data = baseScenario;
    chart.data.datasets[1].data = optimisticScenario;
    chart.data.datasets[2].data = pessimisticScenario;
    chart.update();
}

// Función para crear el gráfico de márgenes (escenarios)
function createMarginChart(chartId, baseMargins, optimisticMargins, pessimisticMargins) {
    const ctx = document.getElementById(chartId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
            datasets: [
                {
                    label: 'Margen Escenario Normal',
                    data: baseMargins,
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'Margen Escenario Optimista',
                    data: optimisticMargins,
                    borderColor: 'green',
                    fill: false,
                },
                {
                    label: 'Margen Escenario Pesimista',
                    data: pessimisticMargins,
                    borderColor: 'red',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Proyección de Márgenes'
            }
        }
    });
}
