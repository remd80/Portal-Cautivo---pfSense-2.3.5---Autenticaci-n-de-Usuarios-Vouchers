<!--
	window.onload = function() {
	var borrar = document.getElementById('borrar');
	borrar.addEventListener("click", borrarTodo);
	
	var nombre = document.getElementById('usuario');
	nombre.addEventListener("input", campoNombre);
	
	var clave = document.getElementById('clave');
	clave.addEventListener("input", campoClave);
	
	var ticket = document.getElementById('ticket');
	ticket.addEventListener("input", campoTicket);
	}

	function borrarTodo() {
		document.location.reload(true);
	}

	function campoNombre() {
		var usuarioNombre = document.getElementById('usuario').value;
		var usuarioError = document.getElementById('nombre_error');
		var usuarioCampo = document.getElementById('usuario');
		
		if (usuarioNombre) {
			usuarioError.innerHTML = " ";
			usuarioCampo.style.outline = "1px solid transparent";
		}
	}

	function campoClave() {
		var usuarioClave = document.getElementById('clave').value;
		var claveError = document.getElementById('clave_error');
		var claveCampo = document.getElementById('clave');
		
		if (usuarioClave) {
			claveError.innerHTML = " ";
			claveCampo.style.outline = "1px solid transparent";
		}
	} 
	
	function campoTicket() {
		var ticketVoucher = document.getElementById('ticket').value;
		
		if (ticketVoucher) {
			document.getElementById('ticket_error').innerHTML = " ";
			document.getElementById('ticket').style.outline = "1px solid transparent";
		}
	}
//-->