<?php

require 'PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer();

$sender_name=stripslashes($_POST["name"]);
$sender_phone=stripslashes($_POST["phone"]);
$sender_email=stripslashes($_POST["email"]);
$sender_message=stripslashes($_POST["message"]);
$secret="6LcHNQcUAAAAAK31sYMh60-g3XN4sMSOWvUyVn6z";
$response=$_POST["captcha"];

$verify = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$_POST['captcha']);
$captcha_success=json_decode($verify);


if ($captcha_success->success==false) {
    echo "<p>You are a bot! Go away!</p>";
  }
else if ($captcha_success->success==true) {
        echo "<p>You are not a bot!</p>";
        //To address and name
        $mail->addAddress("info@corrcapital.com", "Recipient Name");
        //Address to which recipient will reply
        $mail->From = 'noreply@corrcapital.com';
        $mail->FromName = 'Webmaster';

        // Create the email and send the message
        $mail->Subject = "CORR Capital Website Contact Form:  $name";
        $mail->Body = "You have received a new message from your website contact form.<br><br>"."Here are the details:<br><br>Name: $sender_name<br>Email: $sender_email<br>Phone: $sender_phone<br>Message:<br>$sender_message";
        $mail->AltBody = "This is the plain text version of the email content";

        if(!$mail->send())
        {
            echo "Mailer Error: " . $mail->ErrorInfo;
        }
        else
        {
            echo "Message has been sent successfully";
        }
}

?>