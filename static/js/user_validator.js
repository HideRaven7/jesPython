function usuario() {
    let user = document.getElementById("id").value;
    let password = document.getElementById("password").value;

    if (user === "admin" && password === "admin") {
        window.location.href = "/admin/home";
    } else if (user === "estudiante" && password === "estudiante") {
        window.location.href = "Home/estudiante/";
    } else if (user === "profesor" && password === "profesor") {
        window.location.href = "../profesor/p-home-a.html";
    } else if (user === "" || password === "") {
        Swal.fire({
            html: '<span class="white">Por favor, asegúrate de completar todos los campos necesarios para acceder al sistema.</span>',
            backdrop: true,
            customClass: {
                popup: 'emergente-class',
                confirmButton: 'confirm-eme',
                container: 'container-eme'
            },
            buttonsStyling: false,
            showCloseButton: false,
            allowOutsideClick: false,
            confirmButtonText: "Aceptar",
            imageUrl: './static/imagenes/recursos/logo-jes.png',
            imageWidth: '140px',
            imageHeight: '120px'
        });
    } else {
        Swal.fire({
            html: '<span class="white">Lo sentimos, parece que el ID o la contraseña ingresados son incorrectos. Por favor, inténtalo de nuevo.</span>',
            backdrop: true,
            customClass: {
                popup: 'emergente-class',
                confirmButton: 'confirm-eme',
                container: 'container-eme',
            },
            buttonsStyling: false,
            showCloseButton: false,
            allowOutsideClick: false,
            confirmButtonText: "Aceptar",
            imageUrl: './static/imagenes/recursos/logo-jes.png',
            imageWidth: '140px',
            imageHeight: '120px'
        });
    }
}
