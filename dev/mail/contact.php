<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer();


// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$email_address = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//To address and name
$mail->addAddress("phillip@philliprstafford.com", "Recepient Name");
//Address to which recipient will reply
$mail->addReplyTo("phptester@corrcapital.philliprstafford.com", "Reply");
$mail->From = 'phptester@corrcapital.philliprstafford.com';
$mail->FromName = 'Admin';

// Create the email and send the message
$mail->Subject = "CORR Capital Website Contact Form:  $name";
$mail->Body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}

?>
