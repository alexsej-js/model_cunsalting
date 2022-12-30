<?php 
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

//   от кого письмо
$mail->setForm('info@ls.guru', '')
// кому письмо
$mail->addAddress('vlasovaleksej291189@gmail.com')



// тело письма

$body = '<h1>От клиета</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';   
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';   
}
if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['message'].'</p>';   
}



$mail->Body = $body;

// Отправляем 

if (!mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправленны';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>
