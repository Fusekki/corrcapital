<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer();
//$mail->SMTPDebug = 3;
$mail->From = 'noreply@corrcapital.com';
$mail->FromName = 'Webmaster';
// Check for empty fields
// if(empty($_POST['name'])      ||
//    empty($_POST['email'])     ||
//    empty($_POST['phone'])     ||
//    empty($_POST['message']) ||
//    !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
//    {
//   echo "No arguments Provided!";
//   return false;
//    }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//To address and name
$mail->addAddress("info@corrcapital.com", "Recepient Name");

//Address to which recipient will reply

$mail->isHTML(true);

// Create the email and send the message
$mail->Subject = "CORR Capital Website Contact Form:  $name";
$mail->Body = "You have received a new message from your website contact form.<br><br>"."Here are the details:<br><br>Name: $name<br>Email: $email_address<br>Phone: $phone<br>Message:<br>$message";
$mail->AltBody = "This is the plain text version of the email content";
//$mail->SMTPDebug = 4;
if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}

?>
