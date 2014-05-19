-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: May 19, 2014 at 10:51 PM
-- Server version: 5.5.34
-- PHP Version: 5.5.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `projectone`
--

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id for image',
  `link` varchar(500) NOT NULL COMMENT 'link for image',
  `title` varchar(100) NOT NULL COMMENT 'title for image',
  `desc` varchar(1000) NOT NULL COMMENT 'desc for image',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `link`, `title`, `desc`) VALUES
(1, 'images/dummy/charizard.jpg', 'Charizard', 'This is Charizard'),
(2, 'imagetwo.png', 'Ugly', 'This picture is ugly.'),
(3, 'images/dummy/pidgey.jpg', 'Pidgey', 'This is Pidgey.'),
(4, 'images/dummy/rapidash.jpg', 'Rapidash', 'This is Rapidash.'),
(5, 'images/dummy/pikachu.jpg', 'Pikachu', 'This is Pikachu.'),
(8, 'images/dummy/mankey.jpg', 'Mankey', 'This is Mankey.'),
(10, 'images/dummy/gengar.jpg', 'Gengar', 'This is Gengar.'),
(12, 'images/dummy/farfetched.jpg', 'Farfetched', 'This is Farfetched.'),
(13, 'images/dummy/hypno.jpg', 'Hypno', 'This is Hypno.'),
(14, 'images/dummy/seaking.jpg', 'Seaking', 'This is Seaking.'),
(15, 'images/dummy/jean.jpg', 'Jean', 'Jean''s avatar'),
(16, 'images/dummy/levi.jpg', 'Levi', 'Levi''s avatar'),
(17, 'images/dummy/Sasha.jpg', 'Sasha', 'Sasha''s avatar'),
(18, 'images/dummy/reiner.jpg', 'Renier', 'Renier''s avatar'),
(19, 'images/dummy/ymir.jpg', 'Ymir', 'Ymir''s avatar');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `link` varchar(500) NOT NULL COMMENT 'link for the splash image',
  `title` varchar(100) NOT NULL COMMENT 'title for portfolio',
  `desc` varchar(1000) NOT NULL COMMENT 'title for the description',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `portfolio`
--

INSERT INTO `portfolio` (`id`, `link`, `title`, `desc`) VALUES
(1, 'images/dummy/pokesplash.jpg', 'Pokemon', 'Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
(2, 'splashtwo.png', 'Photoshop Project', 'This was my Photoshop project from grade 13'),
(4, 'images/dummy/mikasa.jpg', 'Attack On Titan', 'Hate dog climb leg. Shake treat bag. Chew iPad power cord. Stand in front of the computer screen. Need to chase tail chew iPad power cord cat snacks but stand in front of the computer screen. ');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_collaborator`
--

CREATE TABLE `portfolio_collaborator` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id for portfolio and collaborator relation',
  `portfolio_id` int(11) NOT NULL COMMENT 'id from portfolio table',
  `user_id` int(11) NOT NULL COMMENT 'id from user table',
  PRIMARY KEY (`id`),
  KEY `portfolio_id` (`portfolio_id`,`user_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `portfolio_collaborator`
--

INSERT INTO `portfolio_collaborator` (`id`, `portfolio_id`, `user_id`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_image`
--

CREATE TABLE `portfolio_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id for portfolio image relation',
  `portfolio_id` int(11) NOT NULL COMMENT 'id from portfolio table',
  `image_id` int(11) NOT NULL COMMENT 'id from image table',
  PRIMARY KEY (`id`),
  KEY `portfolio_id` (`portfolio_id`,`image_id`),
  KEY `image_id` (`image_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `portfolio_image`
--

INSERT INTO `portfolio_image` (`id`, `portfolio_id`, `image_id`) VALUES
(1, 1, 1),
(3, 1, 3),
(5, 1, 4),
(6, 1, 5),
(7, 1, 8),
(8, 1, 10),
(9, 1, 12),
(10, 1, 13),
(11, 1, 14),
(2, 2, 2),
(12, 4, 15),
(13, 4, 16),
(14, 4, 17),
(15, 4, 18),
(16, 4, 19);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id for user',
  `username` varchar(32) NOT NULL COMMENT 'name for user',
  `email` varchar(320) NOT NULL COMMENT 'users email',
  `password` varchar(32) NOT NULL COMMENT 'users password',
  `first_name` varchar(32) NOT NULL COMMENT 'users first name',
  `last_name` varchar(32) NOT NULL COMMENT 'users last name',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'admin status',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`, `first_name`, `last_name`, `status`) VALUES
(1, 'adminty', 'ty.duong@gmail.com', 'adminty', 'Ty', 'Duong', 1),
(2, 'adminalice', 'alice.tseng@live.com', 'adminalice', 'Alice', 'Tseng', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_portfolio`
--

CREATE TABLE `user_portfolio` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id for user portfolio relation',
  `user_id` int(11) NOT NULL COMMENT 'id from user table',
  `portfolio_id` int(11) NOT NULL COMMENT 'id from portfolio table',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `portfolio_id` (`portfolio_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `user_portfolio`
--

INSERT INTO `user_portfolio` (`id`, `user_id`, `portfolio_id`) VALUES
(1, 1, 1),
(3, 2, 2),
(5, 1, 4);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `portfolio_collaborator`
--
ALTER TABLE `portfolio_collaborator`
  ADD CONSTRAINT `portfolio_collaborator_ibfk_1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `portfolio_collaborator_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `portfolio_image`
--
ALTER TABLE `portfolio_image`
  ADD CONSTRAINT `portfolio_image_ibfk_1` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `portfolio_image_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_portfolio`
--
ALTER TABLE `user_portfolio`
  ADD CONSTRAINT `user_portfolio_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_portfolio_ibfk_2` FOREIGN KEY (`portfolio_id`) REFERENCES `portfolio` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
