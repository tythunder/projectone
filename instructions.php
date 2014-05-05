<?php
include("connect.php");
var_dump($con);

/*Users database table created
Portfolio database table created
Image database table created
Relational database table for users to portfolio created
Relational database table for portfolio to images created
Relational database table for collaborators (user) to portfolio created
Database file for users - get all users, get user by id, get user by name and password, insert new users
Database file for portfolio - get all portfolio, get portfolio by id, get portfolio by user id, insert new portfolio, update portfolio info
Database file for images - get all images, get image by id, get image by portfolio id, insert new images, update images
Server files for users - get all user by id, get user by username and password, insert user (check for characters)
Server files for portfolio - get all portfolios, get portfolio by id, get portfolio by user id, insert new portfolios, update new portfolios, insert collaborator (check for characters when updating and inserting)
Server files for images - get all images, get image by portfolio id, get image by id, insert new images, update images (check for misused links)
User, portfolio, and image GET POST files to check for gets and posts from client
Sessions php file to check for sessions and insert sessions
Upload php file to do uploading
Client files (however you want them to be) FULLY ASYNCHRONOUS
Uses jquery .get() and .post() to call for the files
Uses jquery .append(), .html(), .text() to change client side
A search functions that searches for all portfolio/users
And if time permits, searches for users/portfolio by name/title/description*/


?>