<?php

	//ini_set('display_errors',1);
	error_reporting(E_ALL);
	
	if ($_POST) {

		$nombre = htmlspecialchars($_POST['txtnombrecliente'], ENT_QUOTES, 'utf-8');
		$correo = htmlspecialchars($_POST['txtmailcliente'], ENT_QUOTES, 'utf-8');
		$asunto = htmlspecialchars($_POST['txtasuntocliente'], ENT_QUOTES, 'utf-8');
		$mensaje = htmlspecialchars($_POST['txtmensajecliente'], ENT_QUOTES, 'utf-8');
	
		require 'class.phpmailer.php';
 
		$mail = new PHPMailer;

		header("Location: http://smartdesignsv.com");
		 
		/** Configurar SMTP **/
		$mail->isSMTP();                                // Indicamos que use SMTP
		$mail->Host = 'smtp.google.com';		// Indicamos los servidores SMTP
		$mail->SMTPAuth = true;                         // Habilitamos la autenticación SMTP
		$mail->Username = '';                 		// SMTP username
		$mail->Password = '';                           // SMTP password
		$mail->SMTPSecure = 'tls';                      // Habilitar encriptación TLS o SSL
		$mail->Port = 587;                              // TCP port
		 
		/** Configurar cabeceras del mensaje **/
		$mail->From = $correo;                       // Correo del remitente
		$mail->FromName = $nombre;           // Nombre del remitente
		$mail->Subject = 'Asunto del correo';                // Asunto
		 
		/** Incluir destinatarios. El nombre es opcional **/
		$mail->addAddress('', '');
		//$mail->addAddress('destinatario2@correo.com', 'Nombre2');
		//$mail->addAddress('destinatario3@correo.com', 'Nombre3');
		 
		/** Con RE, CC, BCC **/
		//$mail->addReplyTo('info@correo.com', 'Informacion');
		//$mail->addCC('cc@correo.com');
		//$mail->addBCC('bcc@correo.com');
		 
		/** Incluir archivos adjuntos. El nombre es opcional **/
		//$mail->addAttachment('/archivos/miproyecto.zip');        
		//$mail->addAttachment('/imagenes/imagen.jpg', 'nombre.jpg');
		 
		/** Enviarlo en formato HTML **/
		$mail->isHTML(true);                                  
		 
		/** Configurar cuerpo del mensaje **/
		$mail->Body    = 'Este es el mensaje en HTML <b>en negrita!</b>';
		$mail->AltBody = 'Este es el mansaje en texto plano para clientes que no admitan HTML';
		 
		/** Para que use el lenguaje español **/
		//$mail->setLanguage('es');
		 
		/** Enviar mensaje... **/
		if(!$mail->send()) {
		    echo 'El mensaje no pudo ser enviado.';
		    echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
		    echo 'Mensaje enviado correctamente';
		}
		 

	}else{
		header('Location: ../403.html');
	}

?>
<!-- 
	
*			www.smartdesignsv.com
*   		@Derechos de Autor 2015
*   		Diseño y Programacion por Smart Design SV
*       	Descripcion: Pagina Web Oficial de la empresa Smart Design SV
*
*

 -->
