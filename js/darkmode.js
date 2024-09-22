let toggle = document.getElementById('toggle');
let label_toggle = document.getElementById('label_toggle');
toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');
    if (checked) {
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        label_toggle.style.color = "yellow";
        Chart.defaults.color = 'white'; // Cambia color de texto en gráficos
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        label_toggle.style.color = "brown";
        Chart.defaults.color = 'black'; // Vuelve al color original
    }
});
