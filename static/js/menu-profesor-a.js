const menu = document.querySelector('.menu');

menu.addEventListener('click',() => {
    Swal.fire({
        html: '<nav><ul class="ul-eme"><li class="li-eme"><a href="p-perfil.html" class="a-eme home-eme">Perfil</a></li><a href="p-refuerzo-libros.html" class="a-eme home-eme">Refuerzo de estudio</a></li><li class="li-eme"><a href="p-material_estudio.html" class="a-eme home-eme">Recurso de estudio</a></li><li class="li-eme"><a href="../index.html" class="a-eme cerrar-eme">Cerrar Sesion</a></li></ul></nav>',
        backdrop: true,
        customClass: {
            popup: 'emergente-class classes-eme',
            confirmButton: 'confirm-eme',
            container: 'container-eme conta-eme',
        },            
        imageUrl: '../imagenes/recursos/logo-jes.png',
        imageWidth: '120px',
        imageHeight: '120px',
        imageAlt: 'Logo-JES',
        buttonsStyling: false,
        showCloseButton: false,
        // closeButtonAriaLabel: "cerrar",
        allowOutsideClick: true,
        confirmButtonText: "Aceptar",
        showConfirmButton: false,
        position: 'top-right',
        // grow: 'column'
    });
});