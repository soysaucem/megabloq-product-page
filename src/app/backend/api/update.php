<?php

require 'config/database.php';
require 'config/config.php';
require 'config/preflight.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

  // Validate.
  if ((int)$request->id < 1 || trim($request->fistName) == '' || trim($request->lastName) == '' || trim($request->email) == '' || trim($request->message) == '') {
    return http_response_code(400);
  }

  // Sanitize.
  $id    = mysqli_real_escape_string($con, (int)$request->id);
  $fistName = mysqli_real_escape_string($con, trim($request->fistName));
  $lastName = mysqli_real_escape_string($con, trim($request->lastName));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $message = mysqli_real_escape_string($con, trim($request->message));

  // Update.
  $sql = "UPDATE `forms` SET `fistName`='$fistName',`lastName`='$lastName',`email`='$email',`message`='$message' WHERE `id` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
