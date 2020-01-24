<?php
 if(isset($_POST)) {
    $email_to = "jadeli1720gmail.com";
    $email_from = "jadeelopez@from.com";
    $email_fromName = "Contact | Portfolio Inquiry";
    $email_subject = "Portfolio Contact Form";

    //making variables
    $name = $_POST['newName'];
    $email = $_POST['newEmail'];
    $phone = $_POST['newPhone'];
    $message = $_POST['newMessage'];

    //Preventing injections 
    $response = array('status' => false, 'message' => array());
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    

    //validations
    if(!isset($email) || !preg_match($email_exp, $email)) {
        array_push($response['message'], 'Opps! The email you entered is invalid. Please try again');
    }

    if(!isset($name) || empty($name)) {
        array_push($response['message'], 'Opps! The name you entered is invalid. Please try again');
    }

    if(!isset($message) || empty($message) || strlen($message) < 2) {
        array_push($response['message'], 'Opps! Invalid message. Please try again');
    }

    if(!empty($response['message'])) {
        $err_string  = '';
        foreach($response['message'] as $err) {
            $err_string .= $err.'';
        }
        echo $err_string. "Please Go Back";
        die();
    } else {
        // $email_body = "Hi Jade! You have just received a new message from ".$name."\n ";
        $htmlContent = '
            <html >
                <head>
                    <title>Portfolio Contact Form</title>
                    
                </head>
                <body style="width: 100%; margin: auto; font-family: Arial, Helvetica, sans-serif;">
                    <div style="width: 50%; margin: auto; padding: 1%;">
                        <h1 style="text-align: center; margin-bottom: 2%;" >Portfolio Contact Form</h1>
                            <div style="padding: 1%">
                                <h3> Hello Jade! </h3>
                                <p> You have received a message from: '.$name.'.</p> 
                                <p>'.$name.'\'s phone number is '.$phone.'.</p>
                                <p style="line-height: 22px;"><span style="font-weight: bold; margin-bottom:10%;">Message:</span><br>'.$message.' </p>
                                <p> Please respond to '.$name.'\'s email at '.$email.'.</p>
                            </div>
                    </div>
                </body>
        </html>
        ';

        // headers
        $headers = 'From:'.$email_fromName.'<'.$email_from.'>' . "\r\n".
                    'Reply-To: <'.$email_from.'>' . "\r\n" .
                    //headers to send HTML content
                    'MIME-Version: 1.0';
                    'Content-type: text/html; charset=iso-8859-1' . "\r\n".
                    //php mailer
                    'X-Mailer: PHP/' . phpversion();
        

        if(mail($email_to, $email_subject, $htmlContent, $headers)) {
            $response = array('status' => true, 'message' => 'Thank you for contacting us. I will be in touch with you very soon.');
            echo json_encode($response);
        } else{
            echo 'Unable to send email. Please try again.';
        }
    }
}

?>