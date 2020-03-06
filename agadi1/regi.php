<?php

$con =mysqli_connect("projects.lithan.net","INC0201","INC0201","inc0201");
if (!$con)
  {
  die('Could not connect: ' . mysqli_error());
  }
$name=$_POST['firstname'];
$lname= $_POST['lastname']; // Fetching Values from URL.
$email=$_POST['email'];
$password= sha1($_POST['password']); // Password Encryption, If you like you can also leave sha1.
// Check if e-mail address syntax is valid or not
//echo "INSERT INTO user_inputs(firstname, lastname, email, password) values ('$name', $lname, '$email', '$password')";
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)

$result = mysqli_query($con,"INSERT INTO user_inputs(firstname, lastname, email, password) values ('$name', '$lname', '$email', '$password')");

if($result){

  echo '<div>Thank you '.$name . '</div>';
}
echo "INSERT INTO user_inputs(firstname, lastname, email, password) values ('$name', '$lname', '$email', '$password')";
mysqli_close ($con);
?>