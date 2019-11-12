<?php
// A very simple server-side script to control the target website

// We have to send this header to allow CORS
header("Access-Control-Allow-Origin: *");

// Set the right Content-Type
header("Content-Type: application/json");

// Grab the values from an array; it is of course possible to hook this script to a database or whatever
$sites = array(
  'www.example2.com' => array(
    'due_date' => '2019-11-05',
    'days_deadline' => 40,
    'stop' => FALSE // You can stop the fading away immediately by setting this to TRUE
  )
);

// If the site specified in the 'site' GET parameter exists, return the values, return HTTP 404 error otherwise
if(!empty($_GET['site']) && isset($sites[$_GET['site']])) {
  echo json_encode($sites[$_GET['site']]);
} else {
  http_response_code(404);
}
