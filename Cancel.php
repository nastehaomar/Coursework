<?php
// Retrieve the appointment data from the request
$appointment = $_POST['appointment'];

// Connect to the database
$DB = new SQLite3('LocalGPSurgery.db');


// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Update the appointment record in the database
$sql = "UPDATE appointments SET cancelled = 1 WHERE id = $appointment";

if ($conn->query($sql) === TRUE) {
  $response = array('success' => true);
} else {
  $response = array('success' => false, 'error' => $conn->error);
}

// Close the database connection
$conn->close();

// Send a response back to the front-end
header('Content-Type: application/json');
echo json_encode($response);
?>