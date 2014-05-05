<?php
include ("connect.php");

if (isset($_POST['username']) &&
isset($_POST['firstname']) &&
isset($_POST['lastname']) &&
isset($_POST['email']) &&
isset($_POST['password']))
{
	$username = $_POST('username');
	$firstname = $_POST('firstname');
	$lastname = $_POST('lastname');
	$email = $_POST('email');
	$password = $_POST('password');

	$dup = mysql_query("SELECT username FROM UserData WHERE username='".$uname_add."'");
	if(mysql_num_rows($dup) >0){
		echo '<b>username is taken.</b><br />';
		echo "<a href='register.php'>Start over</a>";
		
	}
	else{
		$query = "INSERT INTO UserData VALUES (DEFAULT,'$uname_add', '$fname_add', '$lname_add', '$cname_add', '$email_add', '$service_add', '$password_add','$con_code','0')";
		mysql_query($query);
		if($query){
			 echo 'Your registration has been completed. A confirmation email has been sent to you.<br />';
			 echo "Thank you!<br />";
			 echo 'Please check your email to activate your account.<br />';
			echo "<a href='reg_login.php'>Log in</a>";
		}
		else{
			echo '<b>Error Registeration.</b>';
		}
	}

}
/*
if (isset($_POST['delete']) && $isbn != "")
{
$query = "DELETE FROM classics WHERE isbn='$isbn'";

if (!mysql_query($query, $db_server))
echo "DELETE failed: $query<br />" .
mysql_error() . "<br /><br />";
}
else
{
$query = "INSERT INTO classics VALUES" .
"('$author', '$title', '$category', '$year', '$isbn')";

if (!mysql_query($query, $db_server))
echo "INSERT failed: $query<br />" .
mysql_error() . "<br /><br />";
}
}

echo <<<_END
<form action="sqltest.php" method="post"><pre>
Author <input type="text" name="author" />
Title <input type="text" name="title" />
Category <input type="text" name="category" />
Year <input type="text" name="year" />
ISBN <input type="text" name="isbn" />
<input type="submit" value="ADD RECORD" />
</pre></form>
_END;

$query = "SELECT * FROM classics";
$result = mysql_query($query);

if (!$result) die ("Database access failed: " . mysql_error());
$rows = mysql_num_rows($result);

for ($j = 0 ; $j < $rows ; ++$j)
{
$row = mysql_fetch_row($result);
echo <<<_END
<pre>
Author $row[0]
Title $row[1]
Category $row[2]
Year $row[3]
ISBN $row[4]
</pre>
<form action="sqltest.php" method="post">
<input type="hidden" name="delete" value="yes" />
<input type="hidden" name="isbn" value="$row[4]" />
<input type="submit" value="DELETE RECORD" /></form>
_END;

}//end if on 4

mysql_close($db_server);

function get_post($var)
{
return mysql_real_escape_string($_POST[$var]);
}*/
?>
