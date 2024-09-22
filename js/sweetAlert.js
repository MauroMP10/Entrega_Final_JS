// Función para borrar los datos del formulario, localStorage y gráficos
function borrarDatos() {
    Swal.fire({
        title: "¿Desea eliminar los datos?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
    }).then((result) => {
        if (result.isConfirmed) {
            // Borra los datos del formulario
            document.getElementById('storeName').value = '';
            document.getElementById('unitPrice').value = '';
            document.getElementById('unitCost').value = '';
            document.getElementById('adminExpenses').value = '';

            // Borra los gráficos si existen
            if (marginChart) {
                marginChart.destroy();  // Destruye el gráfico de cantidades
                marginChart = null;     // Reinicia la variable
            }
            if (marginValuesChart) {
                marginValuesChart.destroy();  // Destruye el gráfico de márgenes
                marginValuesChart = null;     // Reinicia la variable
            }

            // Borra los datos de localStorage
            localStorage.removeItem('datosTienda');

            // Mensaje de éxito
            // Swal.fire({
            //     title: "¡Borrar!",
            //     text: "Los datos fueron eliminados.",
            //     icon: "success"

            Swal.fire("¡Borrar!", "Los datos fueron eliminados.", "success").then(() => {
                location.reload(); // Refrescar la página
            });

            // Opcional: Puedes ocultar los gráficos temporalmente hasta que se simule de nuevo
            document.getElementById('charts').style.display = 'none';
            document.getElementById('breakEvenPoint').textContent = '';
        }
    });
}



