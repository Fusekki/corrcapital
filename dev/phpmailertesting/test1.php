<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
$mail = new PHPMailer();


$mail->SMTPDebug = 3;                               // Enable verbose debug output

//From email address and name
$mail->From = "donotreply@corrcapital.com";
$mail->FromName = "Corr Capital Staff";


//To address and name
$mail->addAddress("info@corrcapital.com", "Recepient Name");
//Address to which recipient will reply
//$mail->addReplyTo("phptester@corrcapital.philliprstafford.com", "Reply");

//CC and BCC

//Send HTML or Plain Text email
$mail->isHTML(true);

$mail->Subject = "Responding to you.";
$mail->Body = "<i>Mail body in HTML</i>";
$mail->AltBody = "This is the plain text version of the email content";

if(!$mail->send())
{
    echo "Mailer Error: " . $mail->ErrorInfo;
}
else
{
    echo "Message has been sent successfully";
}