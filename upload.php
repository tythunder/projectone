<?php
//check for type of file
if ((($_FILES["file"]["type"] == "image/jpeg"))
//check for how big the file is in bits
&& ($_FILES["file"]["size"] < 10000))
{
	//check file error like screwed up uploads
	if ($_FILES["file"]["error"] > 0)
	{
		echo "Return Code: ". $_FILES["file"]["error"] . "<br />";
	}
	else
	{
		//name of the file
		echo "Upload: ". $_FILES["file"]["name"]. "<br />";
		//type of the file
		echo "Type: ". $_FILES["file"]["type"]. "<br />";
		//size of the file in bits, divided by 1024 will make it into kb. And if divided again by 1024 with get it to MB
		echo "Size:". ($_FILES["file"]["size"] / 1024). "Kb<br />";
		//temporary storage name
		echo "Temp file: ". $_FILES["file"]["tmp_name"]."<br />";

		if (file_exists("upload/".$_FILES["file"]["name"]))
		{
			echo $_FILES["file"]["name"]." already exists.";
		}
		else
		{
			//function to move the file to a location, in this case to upload/the name of the file
			move_uploaded_file($_FILES["file"]["tmp_name"],"upload/".$_FILES["file"]["name"]);
			echo "Stored in: " . "upload/". $_FILES["file"]["name"];
		}
	}
}
else
{
	echo "Invalid file";
}

?>