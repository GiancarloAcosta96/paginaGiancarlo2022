<?php

if (isset($_POST['enviar'])) {
    if(!empty($_POST['name']) &&  !empty($_POST['telef']) !empty($_POST['email']) !empty($_POST['message'])) {
        $name = $_POST['name'];
        $telef = $_POST['telef'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $header = "From: noreply@example.com" . "\r\n";
        $header = "Reply to: noreply@example.com" . "\r\n";
        $header = "X-Mailer: PHP/". phpversion();
        $mail = mail($email, $telef, $email, $message);
        if($mail) {
            echo "<h4>Enviado exitosamente<h4>";
        }
    }
}


?>