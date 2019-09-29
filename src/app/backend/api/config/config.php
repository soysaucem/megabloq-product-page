<?php

// Setup headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Content-type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Megabloq-Api-Key, Accept");

date_default_timezone_set("Australia/Brisbane");

/* 
 * Get all header values of request
 */
function newGetAllHeaders()
{
  $headers = [];
  foreach ($_SERVER as $name => $value)
  {
    if (substr($name, 0, 5) == 'HTTP_')
    {
      $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
    }
  }
  return $headers;
}

$head = newGetAllHeaders();
