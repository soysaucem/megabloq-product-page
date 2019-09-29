<?php

// Prevent response data for OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
{
  exit;
}
