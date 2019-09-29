<?php

require 'config/database.php';
require 'config/config.php';
require 'config/preflight.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata) && $_SERVER['REQUEST_METHOD'] == 'POST')
{
  // Extract the data.
  $request = json_decode($postdata);


  // Validate.
  if (trim($request->id) === '' || trim($request->firstName) === '' || trim($request->lastName) === '' || trim($request->email) === '' || trim($request->message) === '')
  {
    return http_response_code(400);
  }

  if (!isset($head['Megabloq-Api-Key']) || $head['Megabloq-Api-Key'] !== 'hguiehrg348gh38ghegh49gh384g12rcj679gnjfn')
  {
    return http_response_code(403);
  }

  // Sanitize.
  $id = mysqli_real_escape_string($con, trim($request->id));
  $firstName = mysqli_real_escape_string($con, trim($request->firstName));
  $lastName = mysqli_real_escape_string($con, trim($request->lastName));
  $email = mysqli_real_escape_string($con, trim($request->email));
  $message = mysqli_real_escape_string($con, trim($request->message));
  $createdAt = date("Y/m/d H:i:s");

  // Create.
  $sql = "INSERT INTO `forms`(`id`,`firstName`,`lastName`,`email`,`message`,`createdAt`) VALUES ('{$id}','{$firstName}','{$lastName}','{$email}','{$message}','${createdAt}')";

  if(mysqli_query($con, $sql))
  {
    http_response_code(201);
    $form = [
      'id' => $id,
      'firstName' => $firstName,
      'lastName' => $lastName,
      'email' => $email,
      'message' => $message,
      'createdAt' => $createdAt
    ];
    echo json_encode($form);
  }
  else
  {
    http_response_code(422);
  }
}
else
{
  http_response_code(404);
}
