-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2021 at 05:16 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rent_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking_details`
--

CREATE TABLE `booking_details` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `car_name` varchar(255) DEFAULT NULL,
  `car_no` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_address` longtext DEFAULT NULL,
  `car_city` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `start_date_time` datetime DEFAULT NULL,
  `end_date_time` datetime DEFAULT NULL,
  `pickup_location` longtext DEFAULT NULL,
  `dropoff_location` longtext DEFAULT NULL,
  `user_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`user_details`)),
  `car_details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`car_details`)),
  `booking_status` int(2) NOT NULL DEFAULT 0 COMMENT '0: in progress 1: completed 2: cancelled',
  `car_price_per_hour` double(10,2) NOT NULL DEFAULT 0.00,
  `total_price` double(10,2) NOT NULL DEFAULT 0.00,
  `created_by` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking_details`
--

INSERT INTO `booking_details` (`id`, `user_id`, `car_id`, `car_name`, `car_no`, `user_name`, `user_email`, `user_phone`, `user_address`, `car_city`, `start_date`, `end_date`, `start_time`, `end_time`, `start_date_time`, `end_date_time`, `pickup_location`, `dropoff_location`, `user_details`, `car_details`, `booking_status`, `car_price_per_hour`, `total_price`, `created_by`, `created_at`, `updated_at`) VALUES
(31, 135, 51, 'Maruti Suzuki Honda', '495341-19690', 'gopinath dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-18', '2021-10-18', '19:00:00', '22:00:00', '2021-10-18 19:00:00', '2021-10-18 22:00:00', 'kolkata B.Garden', 'kolkata B.Garden', '[{\"id\":135,\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$EQ8GKo.yX0rBQWqwVAi8guMMOMaUWqCg5bev18QhC/32YQvNqIKz2\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda\",\"car_no\":\"495341-19690\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"2330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634487941610.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-17T16:25:41.000Z\"}]', 1, 1000.00, 3000.00, 135, '2021-10-17 16:29:56', '2021-10-30 13:52:44'),
(32, 136, 51, 'Maruti Suzuki Honda', '495341-19690', 'Raghunath Dhara', 'raghu@gmail.com', '7878787878', 'kolkata', 'Kolkata', '2021-10-18', '2021-10-18', '14:00:00', '16:00:00', '2021-10-18 14:00:00', '2021-10-18 16:00:00', 'kolkata', 'kolkata', '[{\"id\":136,\"name\":\"Raghunath Dhara\",\"email\":\"raghu@gmail.com\",\"password\":\"$2a$10$B71cVNHzYYIcdX9nim1fDeivW8Ga.uT7QuneNiBzubYntDRjRCEum\",\"phone\":\"8013634160\",\"name_on_driving_license\":\"Kousik\",\"address\":\" bangalore\",\"user_type\":1}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda\",\"car_no\":\"495341-19690\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"2330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634487941610.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-17T16:25:41.000Z\"}]', 0, 1000.00, 2000.00, 136, '2021-10-17 16:42:57', '2021-10-17 16:42:57'),
(33, 136, 51, 'Maruti Suzuki Honda', '495341-19690', 'Raghunath Dhara', 'raghu@gmail.com', '7878787878', 'kolkata', 'Kolkata', '2021-10-17', '2021-10-17', '14:30:00', '17:30:00', '2021-10-17 14:30:00', '2021-10-17 17:30:00', 'kolkata', 'kolkata', '[{\"id\":136,\"name\":\"Raghunath Dhara\",\"email\":\"raghu@gmail.com\",\"password\":\"$2a$10$B71cVNHzYYIcdX9nim1fDeivW8Ga.uT7QuneNiBzubYntDRjRCEum\",\"phone\":\"8013634160\",\"name_on_driving_license\":\"Kousik\",\"address\":\" bangalore\",\"user_type\":1}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda\",\"car_no\":\"495341-19690\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"2330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634487941610.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-17T16:25:41.000Z\"}]', 0, 1000.00, 3000.00, 136, '2021-10-17 16:47:15', '2021-10-17 16:47:15'),
(34, 136, 51, 'Maruti Suzuki Honda', '495341-19690', 'Raghunath Dhara', 'raghu@gmail.com', '7878787878', 'kolkata', 'Kolkata', '2021-10-18', '2021-10-18', '06:00:00', '12:00:00', '2021-10-18 06:00:00', '2021-10-18 12:00:00', 'kolkata', 'kolkata', '[{\"id\":136,\"name\":\"Raghunath Dhara\",\"email\":\"raghu@gmail.com\",\"password\":\"$2a$10$B71cVNHzYYIcdX9nim1fDeivW8Ga.uT7QuneNiBzubYntDRjRCEum\",\"phone\":\"8013634160\",\"name_on_driving_license\":\"Kousik\",\"address\":\" bangalore\",\"user_type\":1}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda\",\"car_no\":\"495341-19690\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"2330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634487941610.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-17T16:25:41.000Z\"}]', 0, 1000.00, 6000.00, 136, '2021-10-17 16:52:04', '2021-10-17 16:52:04'),
(35, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'gopinath dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-18', '2021-10-18', '19:00:00', '20:00:00', '2021-10-18 19:00:00', '2021-10-18 20:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$EQ8GKo.yX0rBQWqwVAi8guMMOMaUWqCg5bev18QhC/32YQvNqIKz2\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-19T12:20:18.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-19T15:34:44.000Z\"}]', 1, 2000.00, 2000.00, 135, '2021-10-19 17:24:39', '2021-10-22 22:05:08'),
(36, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'gopinath dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-19', '2021-10-19', '22:00:00', '23:00:00', '2021-10-19 22:00:00', '2021-10-19 23:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$EQ8GKo.yX0rBQWqwVAi8guMMOMaUWqCg5bev18QhC/32YQvNqIKz2\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-19T12:20:18.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-19T15:34:44.000Z\"}]', 1, 2000.00, 2000.00, 135, '2021-10-19 17:29:57', '2021-10-19 17:45:46'),
(37, 138, 52, 'Volvo', '3498-0980-1234', 'Rishi', 'rishi@gmail.com', '9804669402', 'bangalore', 'Bangalore', '2021-10-24', '2021-10-24', '07:00:00', '09:00:00', '2021-10-24 07:00:00', '2021-10-24 09:00:00', 'bangalore', 'bangalore', '[{\"id\":138,\"gender\":\"Male\",\"name\":\"Rishi Roy\",\"email\":\"rishi@gmail.com\",\"password\":\"$2a$10$QSyjvPpH2HAKouNvJIjRb.3h2B7KAWMgpfAQbHo9nBsz69RwuIaj.\",\"phone\":\"8989767890\",\"name_on_driving_license\":\"Rishi\",\"address\":\" Saltlake\",\"user_type\":1,\"created_at\":\"2021-10-23T07:42:43.000Z\",\"updated_at\":\"2021-10-23T07:46:43.000Z\"}]', '[{\"id\":52,\"car_name\":\"Volvo\",\"car_no\":\"3498-0980-1234\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"4330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Volvo car&nbsp;</strong></h3>\\n\\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\\n\",\"important_details\":\"<p><strong>Volvo Car</strong></p>\\n\\n<p>This car has 4 years warranty.</p>\\n\",\"no_of_large_bags\":7,\"no_of_small_bags\":9,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634975857624.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Volvo\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T07:57:37.000Z\",\"updated_at\":\"2021-10-23T07:57:54.000Z\"}]', 1, 1000.00, 2000.00, 138, '2021-10-23 08:33:37', '2021-10-23 08:44:29'),
(38, 138, 52, 'Volvo', '3498-0980-1234', 'Rishi', 'rishi@gmail.com', '9804669402', 'bangalore', 'Bangalore', '2021-10-24', '2021-10-24', '02:00:00', '04:00:00', '2021-10-24 02:00:00', '2021-10-24 04:00:00', 'bangalore', 'bangalore', '[{\"id\":138,\"gender\":\"Male\",\"name\":\"Rishi Roy\",\"email\":\"rishi@gmail.com\",\"password\":\"$2a$10$QSyjvPpH2HAKouNvJIjRb.3h2B7KAWMgpfAQbHo9nBsz69RwuIaj.\",\"phone\":\"8989767890\",\"name_on_driving_license\":\"Rishi\",\"address\":\" Saltlake\",\"user_type\":1,\"created_at\":\"2021-10-23T07:42:43.000Z\",\"updated_at\":\"2021-10-23T07:46:43.000Z\"}]', '[{\"id\":52,\"car_name\":\"Volvo\",\"car_no\":\"3498-0980-1234\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"4330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Volvo car&nbsp;</strong></h3>\\n\\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\\n\",\"important_details\":\"<p><strong>Volvo Car</strong></p>\\n\\n<p>This car has 4 years warranty.</p>\\n\",\"no_of_large_bags\":7,\"no_of_small_bags\":9,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634975857624.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Volvo\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T07:57:37.000Z\",\"updated_at\":\"2021-10-23T07:57:54.000Z\"}]', 0, 1000.00, 2000.00, 138, '2021-10-23 08:43:56', '2021-10-23 08:43:56'),
(39, 138, 52, 'Volvo', '3498-0980-1234', 'Rishi', 'rishi@gmail.com', '9804669402', 'bangalore', 'Bangalore', '2021-10-24', '2021-10-24', '07:00:00', '09:00:00', '2021-10-24 07:00:00', '2021-10-24 09:00:00', 'bangalore', 'bangalore', '[{\"id\":138,\"gender\":\"Male\",\"name\":\"Rishi Roy\",\"email\":\"rishi@gmail.com\",\"password\":\"$2a$10$QSyjvPpH2HAKouNvJIjRb.3h2B7KAWMgpfAQbHo9nBsz69RwuIaj.\",\"phone\":\"8989767890\",\"name_on_driving_license\":\"Rishi\",\"address\":\" Saltlake\",\"user_type\":1,\"created_at\":\"2021-10-23T07:42:43.000Z\",\"updated_at\":\"2021-10-23T07:46:43.000Z\"}]', '[{\"id\":52,\"car_name\":\"Volvo\",\"car_no\":\"3498-0980-1234\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"4330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Volvo car&nbsp;</strong></h3>\\n\\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\\n\",\"important_details\":\"<p><strong>Volvo Car</strong></p>\\n\\n<p>This car has 4 years warranty.</p>\\n\",\"no_of_large_bags\":7,\"no_of_small_bags\":9,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634975857624.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Volvo\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T07:57:37.000Z\",\"updated_at\":\"2021-10-23T07:57:54.000Z\"}]', 0, 1000.00, 2000.00, 138, '2021-10-23 08:45:09', '2021-10-23 08:45:09'),
(40, 135, 52, 'Volvo', '3498-0980-1234', 'Gopinath Dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Bangalore', '2021-10-26', '2021-10-26', '07:00:00', '09:00:00', '2021-10-26 07:00:00', '2021-10-26 09:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$wJyWxudw8dfrnn8O47dLEO0qo.PrFc6Mc6MTo9kwGa4WFM3AVRkz6\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-23T07:50:25.000Z\"}]', '[{\"id\":52,\"car_name\":\"Volvo\",\"car_no\":\"3498-0980-1234\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"4330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Volvo car&nbsp;</strong></h3>\\n\\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\\n\",\"important_details\":\"<p><strong>Volvo Car</strong></p>\\n\\n<p>This car has 4 years warranty.</p>\\n\",\"no_of_large_bags\":7,\"no_of_small_bags\":9,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634975857624.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Volvo\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T07:57:37.000Z\",\"updated_at\":\"2021-10-23T07:57:54.000Z\"}]', 0, 1000.00, 2000.00, 135, '2021-10-23 09:20:42', '2021-10-23 09:20:42'),
(41, 135, 44, 'Maruti Alto 800', '5688-0987-123', 'Gopinath Dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-28', '2021-10-28', '07:00:00', '10:00:00', '2021-10-28 07:00:00', '2021-10-28 10:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$wJyWxudw8dfrnn8O47dLEO0qo.PrFc6Mc6MTo9kwGa4WFM3AVRkz6\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-23T07:50:25.000Z\"}]', '[{\"id\":44,\"car_name\":\"Maruti Alto 800\",\"car_no\":\"5688-0987-123\",\"no_of_seats\":4,\"is_ac\":1,\"mileage\":\"3330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Included in the price</strong></h3>\\n\\n<ul>\\n\\t<li>\\n\\t<p>Free cancellation up to 48 hours before pick-up</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Collision Damage Waiver with ₹123,829 deductible</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Theft Protection with ₹123,829 excess</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>300 miles per rental</p>\\n\\t</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"no_of_large_bags\":2,\"no_of_small_bags\":1,\"price_per_hour\":3000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634215355489.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti\",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-14T12:42:35.000Z\",\"updated_at\":\"2021-10-22T20:10:33.000Z\"}]', 1, 3000.00, 9000.00, 135, '2021-10-23 09:32:53', '2021-10-23 09:36:23'),
(42, 135, 44, 'Maruti Alto 800', '5688-0987-123', 'Gopinath Dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-28', '2021-10-28', '02:00:00', '04:00:00', '2021-10-28 02:00:00', '2021-10-28 04:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$wJyWxudw8dfrnn8O47dLEO0qo.PrFc6Mc6MTo9kwGa4WFM3AVRkz6\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-23T07:50:25.000Z\"}]', '[{\"id\":44,\"car_name\":\"Maruti Alto 800\",\"car_no\":\"5688-0987-123\",\"no_of_seats\":4,\"is_ac\":1,\"mileage\":\"3330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Included in the price</strong></h3>\\n\\n<ul>\\n\\t<li>\\n\\t<p>Free cancellation up to 48 hours before pick-up</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Collision Damage Waiver with ₹123,829 deductible</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Theft Protection with ₹123,829 excess</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>300 miles per rental</p>\\n\\t</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"no_of_large_bags\":2,\"no_of_small_bags\":1,\"price_per_hour\":3000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634215355489.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti\",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-14T12:42:35.000Z\",\"updated_at\":\"2021-10-22T20:10:33.000Z\"}]', 1, 3000.00, 6000.00, 135, '2021-10-23 09:35:21', '2021-10-30 14:00:22'),
(43, 135, 44, 'Maruti Alto 800', '5688-0987-123', 'Gopinath Dhara', 'gopi1.dhara@gmail.com', '9804669402', 'post BGarden', 'Kolkata', '2021-10-28', '2021-10-28', '07:00:00', '10:00:00', '2021-10-28 07:00:00', '2021-10-28 10:00:00', 'howrah', 'howrah', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara\",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$wJyWxudw8dfrnn8O47dLEO0qo.PrFc6Mc6MTo9kwGa4WFM3AVRkz6\",\"phone\":\"9804669402\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-23T07:50:25.000Z\"}]', '[{\"id\":44,\"car_name\":\"Maruti Alto 800\",\"car_no\":\"5688-0987-123\",\"no_of_seats\":4,\"is_ac\":1,\"mileage\":\"3330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Included in the price</strong></h3>\\n\\n<ul>\\n\\t<li>\\n\\t<p>Free cancellation up to 48 hours before pick-up</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Collision Damage Waiver with ₹123,829 deductible</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Theft Protection with ₹123,829 excess</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>300 miles per rental</p>\\n\\t</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"no_of_large_bags\":2,\"no_of_small_bags\":1,\"price_per_hour\":3000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634215355489.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti\",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-14T12:42:35.000Z\",\"updated_at\":\"2021-10-22T20:10:33.000Z\"}]', 0, 3000.00, 9000.00, 135, '2021-10-23 09:37:06', '2021-10-30 14:03:08'),
(44, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-11-01', '2021-11-01', '00:00:00', '07:30:00', '2021-11-01 00:00:00', '2021-11-01 07:30:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"display_status\":1,\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-22T22:04:25.000Z\"}]', 0, 2000.00, 15000.00, 135, '2021-10-30 08:20:19', '2021-10-30 14:03:06'),
(45, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-11-02', '2021-11-04', '00:00:00', '07:30:00', '2021-11-02 00:00:00', '2021-11-04 07:30:00', '', '', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"display_status\":1,\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-22T22:04:25.000Z\"}]', 0, 2000.00, 111000.00, 135, '2021-10-30 08:21:58', '2021-10-30 14:03:03'),
(46, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-10-31', '2021-10-31', '00:00:00', '23:00:00', '2021-10-31 00:00:00', '2021-10-31 23:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"display_status\":1,\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-22T22:04:25.000Z\"}]', 2, 2000.00, 46000.00, 135, '2021-10-30 08:29:07', '2021-10-30 14:21:48'),
(47, 135, 50, 'Tayota', '567-098-021', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-10-31', '2021-10-31', '01:00:00', '03:00:00', '2021-10-31 01:00:00', '2021-10-31 03:00:00', 'howrah', 'howrah', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":50,\"car_name\":\"Tayota\",\"car_no\":\"567-098-021\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"5330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634401953298.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Toyota \",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-16T16:32:33.000Z\",\"updated_at\":\"2021-10-22T20:10:39.000Z\"}]', 2, 1000.00, 2000.00, 135, '2021-10-30 11:12:49', '2021-10-30 14:19:26'),
(48, 135, 50, 'Tayota', '567-098-021', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-10-31', '2021-10-31', '05:00:00', '07:00:00', '2021-10-31 05:00:00', '2021-10-31 07:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":50,\"car_name\":\"Tayota\",\"car_no\":\"567-098-021\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"5330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634401953298.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Toyota \",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-16T16:32:33.000Z\",\"updated_at\":\"2021-10-22T20:10:39.000Z\"}]', 2, 1000.00, 2000.00, 135, '2021-10-30 11:41:24', '2021-10-30 14:15:25'),
(49, 135, 53, 'Hyundai Venue Nice Car', '987-089-103', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Bangalore', '2021-10-31', '2021-10-31', '06:30:00', '07:30:00', '2021-10-31 06:30:00', '2021-10-31 07:30:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":53,\"car_name\":\"Hyundai Venue Nice Car\",\"car_no\":\"987-089-103\",\"no_of_seats\":12,\"is_ac\":1,\"mileage\":\"1330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Hyundai Venue</strong></h3>\\n\\n<p>very good car</p>\\n\",\"important_details\":\"<p><strong>Hyundai Venue</strong></p>\\n\\n<p>it has 5 years warranty</p>\\n\\n<p>&nbsp;</p>\\n\",\"no_of_large_bags\":4,\"no_of_small_bags\":2,\"price_per_hour\":2000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634982129698.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Hyundai Venue\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T09:42:09.000Z\",\"updated_at\":\"2021-10-23T09:43:21.000Z\"}]', 2, 2000.00, 2000.00, 135, '2021-10-30 11:42:07', '2021-10-30 14:13:29'),
(50, 135, 50, 'Tayota', '567-098-021', 'Raghu Nath Dhara', 'raghu@gmail.com', '7878787878', 'kolkata', 'Kolkata', '2021-10-31', '2021-10-31', '03:30:00', '04:00:00', '2021-10-31 03:30:00', '2021-10-31 04:00:00', 'bangalore', 'bangalore', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":50,\"car_name\":\"Tayota\",\"car_no\":\"567-098-021\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"5330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"5000\",\"car_image\":\"1634401953298.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Toyota \",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-16T16:32:33.000Z\",\"updated_at\":\"2021-10-22T20:10:39.000Z\"}]', 2, 1000.00, 500.00, 135, '2021-10-30 11:43:24', '2021-10-30 14:04:17'),
(51, 135, 48, 'BMW - 2', '#6788-0987-123', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Kolkata', '2021-10-30', '2021-10-30', '00:30:00', '02:00:00', '2021-10-30 00:30:00', '2021-10-30 02:00:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":48,\"car_name\":\"BMW - 2\",\"car_no\":\"#6788-0987-123\",\"no_of_seats\":10,\"is_ac\":1,\"mileage\":\"9330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3>Great choice!</h3>\\r\\n\\r\\n<ul>\\r\\n\\t<li>\\r\\n\\t<p>Customer rating: 8.4 / 10</p>\\r\\n\\t</li>\\r\\n\\t<li>\\r\\n\\t<p>Most popular fuel policy</p>\\r\\n\\t</li>\\r\\n\\t<li>\\r\\n\\t<p>Short queues</p>\\r\\n\\t</li>\\r\\n\\t<li>\\r\\n\\t<p>Easy to find counter</p>\\r\\n\\t</li>\\r\\n\\t<li>\\r\\n\\t<p>Helpful counter staff</p>\\r\\n\\t</li>\\r\\n\\t\\r\\n</ul>\\r\\n\",\"important_details\":\"<h3>Included in the price</h3>\\n\\n<ul>\\n\\t<li>\\n\\t<p>Free cancellation up to 48 hours before pick-up</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Collision Damage Waiver with ₹124,861 deductible</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>Theft Protection with ₹124,861 excess</p>\\n\\t</li>\\n\\t<li>\\n\\t<p>300 miles per rental</p>\\n\\t</li>\\n</ul>\\n\",\"no_of_large_bags\":8,\"no_of_small_bags\":10,\"price_per_hour\":15000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"10000\",\"car_image\":\"1634369968799.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"BMW\",\"display_status\":1,\"created_by\":1,\"updated_by\":1,\"created_at\":\"2021-10-16T07:39:28.000Z\",\"updated_at\":\"2021-10-22T20:10:36.000Z\"}]', 1, 15000.00, 22500.00, 135, '2021-10-30 11:49:39', '2021-10-30 14:03:55'),
(52, 135, 51, 'Maruti Suzuki Honda luxury', '495341-196904500', 'Raghu Nath Dhara', 'raghu@gmail.com', '7878787878', 'kolkata', 'Kolkata', '2021-10-30', '2021-10-30', '21:00:00', '22:30:00', '2021-10-30 21:00:00', '2021-10-30 22:30:00', 'bangalore', 'bangalore', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":51,\"car_name\":\"Maruti Suzuki Honda luxury\",\"car_no\":\"495341-196904500\",\"no_of_seats\":5,\"is_ac\":1,\"mileage\":\"5000 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Cleaning and safety practices</strong></h3>\\n\\n<ul>\\n\\t<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\\n\\t<li>Social distancing measures</li>\\n</ul>\\n\\n<ul>\\n\\t<li>High-touch surfaces are sanitized at pick-up locations</li>\\n</ul>\\n\",\"important_details\":\"<h3><strong>Cancellation and no-show policy</strong></h3>\\n\\n<p>Free cancellation up to pick-up</p>\\n\\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\\n\",\"no_of_large_bags\":6,\"no_of_small_bags\":10,\"price_per_hour\":2000,\"fuel_type\":\"Petrol\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634657669134.jpeg\",\"city_name\":\"Kolkata\",\"brand_name\":\"Maruti Suzuki\",\"display_status\":1,\"created_by\":1,\"updated_by\":134,\"created_at\":\"2021-10-17T16:25:41.000Z\",\"updated_at\":\"2021-10-22T22:04:25.000Z\"}]', 2, 2000.00, 3000.00, 135, '2021-10-30 15:03:47', '2021-10-30 15:04:22'),
(53, 135, 52, 'Volvo', '3498-0980-1234', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '9804669404', 'post BGarden', 'Bangalore', '2021-10-30', '2021-10-30', '22:00:00', '23:30:00', '2021-10-30 22:00:00', '2021-10-30 23:30:00', 'kolkata', 'kolkata', '[{\"id\":135,\"gender\":\"Male\",\"name\":\"Gopinath Dhara \",\"email\":\"gopi1.dhara@gmail.com\",\"password\":\"$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm\",\"phone\":\"9804669404\",\"name_on_driving_license\":\"sujoy\",\"address\":\"post BGarden\",\"user_type\":1,\"created_at\":\"2021-10-19T12:20:18.000Z\",\"updated_at\":\"2021-10-30T06:52:45.000Z\"}]', '[{\"id\":52,\"car_name\":\"Volvo\",\"car_no\":\"3498-0980-1234\",\"no_of_seats\":6,\"is_ac\":1,\"mileage\":\"4330 miles per rental\",\"is_manual\":1,\"other_details\":\"<h3><strong>Volvo car&nbsp;</strong></h3>\\n\\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\\n\",\"important_details\":\"<p><strong>Volvo Car</strong></p>\\n\\n<p>This car has 4 years warranty.</p>\\n\",\"no_of_large_bags\":7,\"no_of_small_bags\":9,\"price_per_hour\":1000,\"fuel_type\":\"Diesel\",\"fuel_tank_capacity\":\"6000\",\"car_image\":\"1634975857624.jpeg\",\"city_name\":\"Bangalore\",\"brand_name\":\"Volvo\",\"display_status\":1,\"created_by\":134,\"updated_by\":134,\"created_at\":\"2021-10-23T07:57:37.000Z\",\"updated_at\":\"2021-10-23T07:57:54.000Z\"}]', 2, 1000.00, 1500.00, 135, '2021-10-30 15:05:52', '2021-10-30 15:06:10');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `car_name` varchar(255) DEFAULT NULL,
  `car_no` varchar(255) DEFAULT NULL,
  `no_of_seats` int(11) NOT NULL DEFAULT 0,
  `is_ac` int(11) NOT NULL DEFAULT 0 COMMENT '1:ac 0:non ac',
  `mileage` varchar(255) DEFAULT NULL,
  `is_manual` int(11) NOT NULL DEFAULT 0 COMMENT '1:manual,0:automatic ',
  `other_details` longtext DEFAULT NULL,
  `important_details` longtext DEFAULT NULL,
  `no_of_large_bags` int(11) NOT NULL DEFAULT 0,
  `no_of_small_bags` int(11) NOT NULL DEFAULT 0,
  `price_per_hour` double NOT NULL DEFAULT 0,
  `fuel_type` varchar(255) DEFAULT NULL,
  `fuel_tank_capacity` varchar(255) DEFAULT NULL,
  `car_image` varchar(255) DEFAULT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `brand_name` varchar(255) DEFAULT NULL,
  `display_status` int(2) NOT NULL DEFAULT 1 COMMENT '1:show 0:hide',
  `created_by` int(11) NOT NULL DEFAULT 1,
  `updated_by` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `car_name`, `car_no`, `no_of_seats`, `is_ac`, `mileage`, `is_manual`, `other_details`, `important_details`, `no_of_large_bags`, `no_of_small_bags`, `price_per_hour`, `fuel_type`, `fuel_tank_capacity`, `car_image`, `city_name`, `brand_name`, `display_status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(42, 'WagonR', '6788-0987-123', 5, 1, '6330 miles per rental', 1, '<h3><strong>Cleaning and safety practices</strong></h3>\n\n<ul>\n	<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\n	<li>Social distancing measures</li>\n</ul>\n\n<ul>\n	<li>High-touch surfaces are sanitized at pick-up locations</li>\n</ul>\n', '<h3><strong>Cancellation and no-show policy</strong></h3>\n\n<p>Free cancellation up to pick-up</p>\n', 2, 4, 4000, 'Diesel', '6000', '1634213736000.jpeg', 'Kolkata', 'Maruti', 1, 1, 1, '2021-10-14 12:15:35', '2021-10-22 20:10:29'),
(43, 'BMW - 1', '6788-234-123', 6, 1, '7330 miles per rental', 1, '<h3><strong>Included in the price</strong></h3>\n\n<ul>\n	<li>\n	<p>Free cancellation up to 48 hours before pick-up</p>\n	</li>\n	<li>\n	<p>Collision Damage Waiver with ₹123,829 deductible</p>\n	</li>\n	<li>\n	<p>Theft Protection with ₹123,829 excess</p>\n	</li>\n	<li>\n	<p>300 miles per rental</p>\n	</li>\n</ul>\n', '<h3><strong>Cancellation and no-show policy</strong></h3>\n\n<p>Free cancellation up to pick-up</p>\n', 4, 6, 8000, 'Petrol', '9000', '1634214649843.jpeg', 'Kolkata', 'BMW', 1, 1, 1, '2021-10-14 12:30:49', '2021-10-22 20:10:32'),
(44, 'Maruti Alto 800', '5688-0987-123', 4, 1, '3330 miles per rental', 1, '<h3><strong>Included in the price</strong></h3>\n\n<ul>\n	<li>\n	<p>Free cancellation up to 48 hours before pick-up</p>\n	</li>\n	<li>\n	<p>Collision Damage Waiver with ₹123,829 deductible</p>\n	</li>\n	<li>\n	<p>Theft Protection with ₹123,829 excess</p>\n	</li>\n	<li>\n	<p>300 miles per rental</p>\n	</li>\n</ul>\n', '<h3><strong>Cleaning and safety practices</strong></h3>\n\n<ul>\n	<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\n	<li>Social distancing measures</li>\n</ul>\n\n<ul>\n	<li>High-touch surfaces are sanitized at pick-up locations</li>\n</ul>\n', 2, 1, 3000, 'Diesel', '5000', '1634215355489.jpeg', 'Kolkata', 'Maruti', 1, 1, 1, '2021-10-14 12:42:35', '2021-10-22 20:10:33'),
(48, 'BMW - 2', '#6788-0987-123', 10, 1, '9330 miles per rental', 1, '<h3>Great choice!</h3>\r\n\r\n<ul>\r\n	<li>\r\n	<p>Customer rating: 8.4 / 10</p>\r\n	</li>\r\n	<li>\r\n	<p>Most popular fuel policy</p>\r\n	</li>\r\n	<li>\r\n	<p>Short queues</p>\r\n	</li>\r\n	<li>\r\n	<p>Easy to find counter</p>\r\n	</li>\r\n	<li>\r\n	<p>Helpful counter staff</p>\r\n	</li>\r\n	\r\n</ul>\r\n', '<h3>Included in the price</h3>\n\n<ul>\n	<li>\n	<p>Free cancellation up to 48 hours before pick-up</p>\n	</li>\n	<li>\n	<p>Collision Damage Waiver with ₹124,861 deductible</p>\n	</li>\n	<li>\n	<p>Theft Protection with ₹124,861 excess</p>\n	</li>\n	<li>\n	<p>300 miles per rental</p>\n	</li>\n</ul>\n', 8, 10, 15000, 'Diesel', '10000', '1634369968799.jpeg', 'Kolkata', 'BMW', 1, 1, 1, '2021-10-16 07:39:28', '2021-10-22 20:10:36'),
(50, 'Tayota', '567-098-021', 6, 1, '5330 miles per rental', 1, '<h3><strong>Cleaning and safety practices</strong></h3>\n\n<ul>\n	<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\n	<li>Social distancing measures</li>\n</ul>\n\n<ul>\n	<li>High-touch surfaces are sanitized at pick-up locations</li>\n</ul>\n', '<h3><strong>Cancellation and no-show policy</strong></h3>\n\n<p>Free cancellation up to pick-up</p>\n\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\n', 6, 10, 1000, 'Diesel', '5000', '1634401953298.jpeg', 'Kolkata', 'Toyota ', 1, 1, 1, '2021-10-16 16:32:33', '2021-10-22 20:10:39'),
(51, 'Maruti Suzuki Honda luxury', '495341-196904500', 5, 1, '5000 miles per rental', 1, '<h3><strong>Cleaning and safety practices</strong></h3>\n\n<ul>\n	<li>Car interiors and exteriors cleaned with disinfectant before pick-up</li>\n	<li>Social distancing measures</li>\n</ul>\n\n<ul>\n	<li>High-touch surfaces are sanitized at pick-up locations</li>\n</ul>\n', '<h3><strong>Cancellation and no-show policy</strong></h3>\n\n<p>Free cancellation up to pick-up</p>\n\n<p>You will not be charged anything for the rental since the booking was risk-free.</p>\n', 6, 10, 2000, 'Petrol', '6000', '1634657669134.jpeg', 'Kolkata', 'Maruti Suzuki', 1, 1, 134, '2021-10-17 16:25:41', '2021-10-22 22:04:25'),
(52, 'Volvo', '3498-0980-1234', 6, 1, '4330 miles per rental', 1, '<h3><strong>Volvo car&nbsp;</strong></h3>\n\n<p>It is the best car. Comfortable car with AC and high mileage.</p>\n', '<p><strong>Volvo Car</strong></p>\n\n<p>This car has 4 years warranty.</p>\n', 7, 9, 1000, 'Diesel', '6000', '1634975857624.jpeg', 'Bangalore', 'Volvo', 1, 134, 134, '2021-10-23 07:57:37', '2021-10-23 07:57:54'),
(53, 'Hyundai Venue Nice Car', '987-089-103', 12, 1, '1330 miles per rental', 1, '<h3><strong>Hyundai Venue</strong></h3>\n\n<p>very good car</p>\n', '<p><strong>Hyundai Venue</strong></p>\n\n<p>it has 5 years warranty</p>\n\n<p>&nbsp;</p>\n', 4, 2, 2000, 'Diesel', '5000', '1634982129698.jpeg', 'Bangalore', 'Hyundai Venue', 1, 134, 134, '2021-10-23 09:42:09', '2021-10-23 09:43:21');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `city_id` int(11) NOT NULL,
  `city_name` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`city_id`, `city_name`) VALUES
(1, 'Bangalore'),
(2, 'Hyderabad'),
(3, 'Mumbai'),
(4, 'Delhi-NCR'),
(5, 'Chennai'),
(6, 'Pune'),
(7, 'Kolkata');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `name_on_driving_license` varchar(255) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `user_type` int(2) NOT NULL DEFAULT 1 COMMENT '1:user 2:admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `gender`, `name`, `email`, `password`, `phone`, `name_on_driving_license`, `address`, `user_type`, `created_at`, `updated_at`) VALUES
(134, 'Male', 'admin', 'admin@gmail.com', '$2a$10$GhJR23NhvbF7pRlp7fPcpujMJOjiUu.k6g9BLLUNVU4Am/4LBZUPS', '9804669402', 'suresh', 'howrah', 2, '2021-10-19 12:20:18', '2021-10-23 07:49:59'),
(135, 'Male', 'Gopinath Dhara ', 'gopi1.dhara@gmail.com', '$2a$10$fQ23e47253YZ85dpyfq9JekLH8h0y1R9geClsK80wguqm9YUocyPm', '9804669404', 'sujoy', 'post BGarden', 1, '2021-10-19 12:20:18', '2021-10-30 06:52:45'),
(136, 'Male', 'Raghunath Dhara', 'raghu@gmail.com', '$2a$10$B71cVNHzYYIcdX9nim1fDeivW8Ga.uT7QuneNiBzubYntDRjRCEum', '8013634160', 'Kousik', ' bangalore', 1, '2021-10-19 12:20:18', '2021-10-19 12:20:18'),
(137, 'Female', 'Sutapa roy', 'sutapa@gmail.com', '$2a$10$524BRwGrb.MBlEM3J7EsOekGZ3hfo9vSB1bycJpvUXst6MwxTtJwm', '8767878989', 'sutapa', ' Dumdum', 1, '2021-10-23 07:37:05', '2021-10-23 07:37:05'),
(138, 'Male', 'Rishi Roy', 'rishi@gmail.com', '$2a$10$QSyjvPpH2HAKouNvJIjRb.3h2B7KAWMgpfAQbHo9nBsz69RwuIaj.', '8989767890', 'Rishi', ' Saltlake', 1, '2021-10-23 07:42:43', '2021-10-23 07:46:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking_details`
--
ALTER TABLE `booking_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `car_id` (`car_id`),
  ADD KEY `start_date` (`start_date`),
  ADD KEY `end_date` (`end_date`),
  ADD KEY `start_time` (`start_time`),
  ADD KEY `end_time` (`end_time`),
  ADD KEY `booking_status` (`booking_status`),
  ADD KEY `car_city` (`car_city`),
  ADD KEY `car_name` (`car_name`),
  ADD KEY `car_no` (`car_no`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking_details`
--
ALTER TABLE `booking_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `city_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_details`
--
ALTER TABLE `booking_details`
  ADD CONSTRAINT `booking_details_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `booking_details_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
