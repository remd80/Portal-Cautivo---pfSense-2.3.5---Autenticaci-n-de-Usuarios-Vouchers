function validacion_usuarios() {
	usuarioNombre = document.getElementById('usuario').value;
	usuarioClave = document.getElementById('clave').value;
	usuarioCampo = document.getElementById('usuario');
	claveCampo = document.getElementById('clave');
	usuarioError = document.getElementById('nombre_error');
	claveError = document.getElementById('clave_error');
	
	if (!usuarioNombre) {
		var mensajeErrorNombre = "Por favor introduzca su Nombre de Usuario!";
		usuarioError.innerHTML = mensajeErrorNombre;
		usuarioCampo.style.outline = "2px solid #f00";
		return false;
	}
	
	if (!usuarioClave) {
		var mensajeErrorClave = "Por favor introduzca su Clave del Usuario!";
		claveError.innerHTML = mensajeErrorClave;
		claveCampo.style.outline = "2px solid #f00";
		return false;
	}
}