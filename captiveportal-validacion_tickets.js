function validacion_tickets() {
	var ticketVoucher = document.getElementById('ticket').value;
	var ticketCampo = document.getElementById('ticket');
	var ticketError = document.getElementById('ticket_error');
	
	if (!ticketVoucher) {
		var mensajeTicketError = "Por favor ingrese el Codigo del Voucher!";
		ticketError.innerHTML = mensajeTicketError;
		ticketCampo.style.outline = "1px solid #f00";
		return false;
	}
}