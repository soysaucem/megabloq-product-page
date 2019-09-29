<?php

require 'config/database.php';
require 'config/config.php';
require 'config/preflight.php';

/**
 * Returns the list of forms.
 */
$forms = [];
$sql = "SELECT * FROM forms";

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
  if (!isset($head['Megabloq-Api-Key']) || $head['Megabloq-Api-Key'] !== 'hguiehrg348gh38ghegh49gh384g12rcj679gnjfn') 
  {
    return http_response_code(403);
  }

  $result = mysqli_query($con, $sql);
  $i = 0;

  while($row = mysqli_fetch_assoc($result))
  {
    $forms[$i]['id'] = $row['id'];
    $forms[$i]['firstName'] = $row['firstName'];
    $forms[$i]['lastName'] = $row['lastName'];
    $forms[$i]['email'] = $row['email'];
    $forms[$i]['message'] = $row['message'];
    $forms[$i]['createdAt'] = $row['createdAt'];
    $i++;
  }

  echo json_encode($forms);

}
else
{
  http_response_code(404);
}
