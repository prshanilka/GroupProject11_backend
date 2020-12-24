-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 21, 2020 at 02:23 AM
-- Server version: 10.3.27-MariaDB-log-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ipmpszzk_odernow`
--

-- --------------------------------------------------------

--
-- Table structure for table `accept_deliveries`
--

CREATE TABLE `accept_deliveries` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `is_complete` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addons`
--

CREATE TABLE `addons` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `addon_category_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addon_categories`
--

CREATE TABLE `addon_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addon_category_item`
--

CREATE TABLE `addon_category_item` (
  `id` int(10) UNSIGNED NOT NULL,
  `addon_category_id` int(10) UNSIGNED NOT NULL,
  `item_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `house` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landmark` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tag` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `latitude` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `user_id`, `address`, `house`, `landmark`, `tag`, `created_at`, `updated_at`, `latitude`, `longitude`) VALUES
(1, 3, 'Weliweriya - Kirindiwela Road, Weliweriya, Gampaha, Western Province, Sri Lanka', '1351', NULL, NULL, '2020-12-15 09:58:11', '2020-12-15 09:58:11', '7.026953023946532', '80.03901756582732'),
(2, 2, 'Ambagaha Handiya Road, Colombo, Western Province, Sri Lanka', NULL, NULL, NULL, '2020-12-21 17:36:53', '2020-12-21 17:36:53', '6.901608599999999', '80.0087746');

-- --------------------------------------------------------

--
-- Table structure for table `alerts`
--

CREATE TABLE `alerts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `data` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  `count` int(11) NOT NULL DEFAULT 0,
  `max_count` int(11) NOT NULL DEFAULT 1,
  `min_subtotal` decimal(20,2) NOT NULL DEFAULT 0.00,
  `max_discount` decimal(20,2) DEFAULT NULL,
  `subtotal_message` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'ALL',
  `max_count_per_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupon_restaurant`
--

CREATE TABLE `coupon_restaurant` (
  `id` int(10) UNSIGNED NOT NULL,
  `coupon_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_areas`
--

CREATE TABLE `delivery_areas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `areas` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `geojson` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_area_restaurant`
--

CREATE TABLE `delivery_area_restaurant` (
  `id` int(10) UNSIGNED NOT NULL,
  `delivery_area_id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_collections`
--

CREATE TABLE `delivery_collections` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(20,2) NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_collection_logs`
--

CREATE TABLE `delivery_collection_logs` (
  `id` int(10) UNSIGNED NOT NULL,
  `delivery_collection_id` int(11) NOT NULL,
  `amount` decimal(20,2) NOT NULL DEFAULT 0.00,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_guy_details`
--

CREATE TABLE `delivery_guy_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vehicle_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `commission_rate` decimal(8,2) NOT NULL DEFAULT 5.00,
  `is_notifiable` tinyint(1) DEFAULT 0,
  `max_accept_delivery_limit` int(11) NOT NULL DEFAULT 100
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gps_tables`
--

CREATE TABLE `gps_tables` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `user_lat` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_long` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_lat` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_long` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `heading` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `item_category_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `old_price` decimal(20,2) NOT NULL DEFAULT 0.00,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_recommended` tinyint(1) NOT NULL,
  `is_popular` tinyint(1) NOT NULL,
  `is_new` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `desc` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeholder_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `is_veg` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `item_categories`
--

CREATE TABLE `item_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_enabled` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_popular` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2018_11_06_222923_create_transactions_table', 1),
(4, '2018_11_07_192923_create_transfers_table', 1),
(5, '2018_11_07_202152_update_transfers_table', 1),
(6, '2018_11_15_124230_create_wallets_table', 1),
(7, '2018_11_19_164609_update_transactions_table', 1),
(8, '2018_11_20_133759_add_fee_transfers_table', 1),
(9, '2018_11_22_131953_add_status_transfers_table', 1),
(10, '2018_11_22_133438_drop_refund_transfers_table', 1),
(11, '2019_01_19_062844_create_settings_table', 1),
(12, '2019_01_19_132750_create_locations_table', 1),
(13, '2019_01_21_055516_create_promo_sliders_table', 1),
(14, '2019_01_21_073753_create_restaurants_table', 1),
(15, '2019_01_22_045205_add_slug_to_restaurants_table', 1),
(16, '2019_01_26_103144_create_items_table', 1),
(17, '2019_01_26_103412_create_item_categories_table', 1),
(18, '2019_02_01_095905_add_extras_to_items_table', 1),
(19, '2019_02_01_103027_add_placeholder_image_to_restaurants_table', 1),
(20, '2019_02_02_032957_add_lat_long_to_restaurants_table', 1),
(21, '2019_02_02_033139_add_certificate_to_restaurants_table', 1),
(22, '2019_02_08_061116_add_restaurant_charges_to_restaurants_table', 1),
(23, '2019_02_08_101537_create_coupons_table', 1),
(24, '2019_02_16_042718_add_auth_token_to_users_table', 1),
(25, '2019_02_17_031843_add_phobe_number_to_users_table', 1),
(26, '2019_02_18_054807_create_pages_table', 1),
(27, '2019_02_19_084731_create_orders_table', 1),
(28, '2019_02_19_084930_create_orderstatuses_table', 1),
(29, '2019_02_19_085232_create_orderitems_table', 1),
(30, '2019_02_20_044738_create_addresses_table', 1),
(31, '2019_02_20_104553_add_default_address_id_to_users_table', 1),
(32, '2019_02_25_051228_add_payment_mode_to_orders_table', 1),
(33, '2019_02_28_053038_add_order_comment_to_orders_table', 1),
(34, '2019_05_13_111553_update_status_transfers_table', 1),
(35, '2019_05_21_074923_create_permission_tables', 1),
(36, '2019_06_25_103755_add_exchange_status_transfers_table', 1),
(37, '2019_07_09_054236_create_payment_gateways_table', 1),
(38, '2019_07_11_054103_create_user_restaurant_table', 1),
(39, '2019_07_11_135603_add_restaurant_id_to_orders_table', 1),
(40, '2019_07_13_054323_add_delivery_pin_to_users_table', 1),
(41, '2019_07_13_135125_create_gps_tables_table', 1),
(42, '2019_07_15_053733_create_accept_deliveries_table', 1),
(43, '2019_07_16_062435_add_address_pincode_landmark_to_restaurants_table', 1),
(44, '2019_07_23_030953_create_slides_table', 1),
(45, '2019_07_24_031824_add_sku_to_restaurants_table', 1),
(46, '2019_07_29_184926_decimal_places_wallets_table', 1),
(47, '2019_07_31_032042_add_is_active_to_restaurants_table', 1),
(48, '2019_08_11_172547_add_transaction_id_to_orders_table', 1),
(49, '2019_08_13_130103_add_is_accepted_to_restaurants_table', 1),
(50, '2019_08_13_140046_add_is_active_to_items_table', 1),
(51, '2019_08_14_093404_add_restaurant_id_to_coupons_table', 1),
(52, '2019_08_14_112249_add_count_to_coupons_table', 1),
(53, '2019_08_16_105252_create_push_tokens_table', 1),
(54, '2019_08_18_102353_add_is_featured_to_restaurants_table', 1),
(55, '2019_08_20_084106_add_user_id_to_itemcategories_table', 1),
(56, '2019_08_24_182445_add_location_id_to_promo_sliders_table', 1),
(57, '2019_09_15_044915_create_addons_table', 1),
(58, '2019_09_18_234250_create_addon_categories_table', 1),
(59, '2019_09_19_000319_create_addon_category_item_table', 1),
(60, '2019_09_20_054300_create_order_item_addons_table', 1),
(61, '2019_09_23_225754_create_restaurant_earnings_table', 1),
(62, '2019_09_25_005540_add_commission_rate_to_restaurants_table', 1),
(63, '2019_09_25_014138_create_restaurant_payouts_table', 1),
(64, '2019_09_25_025705_add_restaurant_payout_id_to_restaurant_earnings_table', 1),
(65, '2019_10_02_193759_add_discount_transfers_table', 1),
(66, '2019_11_06_232008_add_delivery_type_to_restaurants_table', 1),
(67, '2019_11_07_050958_add_delivery_type_to_orders_table', 1),
(68, '2019_11_08_022754_create_delivery_guy_details_table', 1),
(69, '2019_11_08_023100_add_delivery_guy_detail_id_to_users_table', 1),
(70, '2019_11_17_223225_add_nullable_constraint_to_pincode_landmark_in_restaurants_table', 1),
(71, '2019_11_20_042206_add_payable_to_orders_table', 1),
(72, '2019_11_28_052028_add_delivery_radius_to_restaurants_table', 1),
(73, '2019_12_02_015709_add_lat_lng_to_addresses_table', 1),
(74, '2019_12_05_223129_add_gps_delivery_charges_fields_to_restaurants_table', 1),
(75, '2019_12_09_000038_create_popular_geo_places_table', 1),
(76, '2019_12_13_043245_add_postion_id_and_size_to_promo_sliders_table', 1),
(77, '2019_12_15_223236_add_long_text_constrait_for_body_to_pages_table', 1),
(78, '2019_12_18_002035_create_translations_table', 1),
(79, '2019_12_18_011559_add_default_language_and_is_active_to_translations_table', 1),
(80, '2019_12_19_221313_change_desc_contraints_to_items_table', 1),
(81, '2019_12_20_061211_add_commission_rate_to_delivery_guy_details_table', 1),
(82, '2019_12_29_063818_create_modules_table', 1),
(83, '2019_12_29_233803_create_ratings_table', 1),
(84, '2019_12_30_235034_change_price_constraints_on_every_table_increase_limit', 1),
(85, '2020_01_05_223346_create_delivery_collections_table', 1),
(86, '2020_01_05_223712_create_delivery_collection_logs_table', 1),
(87, '2020_01_06_005737_create_restaurant_categories_table', 1),
(88, '2020_01_06_012659_create_restaurant_category_restaurant_table', 1),
(89, '2020_01_06_024126_create_restaurant_category_sliders_table', 1),
(90, '2020_01_12_225036_create_password_reset_otps_table', 1),
(91, '2020_01_26_055400_change_constraints_of_location_in_orders_table', 1),
(92, '2020_01_28_075230_add_short_name_and_code_to_modules_table', 1),
(93, '2020_02_03_223654_add_old_price_to_items_table', 1),
(94, '2020_02_07_003016_add_is_veg_to_items_table', 1),
(95, '2020_02_14_014122_add_heading_column_to_gps_tables', 1),
(96, '2020_03_13_234146_change_address_constraints_on_addresses_table', 1),
(97, '2020_03_31_001623_add_min_order_price_to_restaurants_table', 1),
(98, '2020_04_01_011619_create_alerts_table', 1),
(99, '2020_04_09_125640_create_sms_otps_table', 1),
(100, '2020_04_09_125652_create_sms_gateways_table', 1),
(101, '2020_04_15_120225_change_restaurant_owner_role_to_store_owner', 1),
(102, '2020_04_15_184850_change_order_id_constraints_in_accept_deliveries_table', 1),
(103, '2020_04_17_140857_add_is_sms_notifiable_to_restaurants_table', 1),
(104, '2020_04_17_141115_add_is_sms_notifiable_to_delivery_guy_details_table', 1),
(105, '2020_04_19_113902_add_auto_acceptable_to_restaurants_table', 1),
(106, '2020_04_21_132439_add_max_accept_delivery_limit_to_delivery_guy_details_table', 1),
(107, '2020_04_25_161840_add_is_active_to_addons_table', 1),
(108, '2020_05_06_123402_change_columns_datatypes_for_many_tables', 1),
(109, '2020_05_06_125302_add_schedule_data_to_restaurants_table', 1),
(110, '2020_05_06_125339_add_is_schedulable_to_restaurants_table', 1),
(111, '2020_06_10_231926_add_sort_position_to_slides_table', 1),
(112, '2020_06_11_100217_add_order_column_to_restaurant_category_sliders_table', 1),
(113, '2020_06_11_170707_add_order_column_to_restaurants_table', 1),
(114, '2020_06_20_102953_add_avatar_to_users_table', 1),
(115, '2020_06_29_120302_add_min_max_to_coupons_table', 1),
(116, '2020_07_12_104136_make_slug_unique_in_restaurants_table', 1),
(117, '2020_07_20_092301_add_is_active_to_users_table', 1),
(118, '2020_08_25_144443_add_custom_message_block_to_restaurants_table', 1),
(119, '2020_09_03_124043_add_description_to_addon_categories_table', 1),
(120, '2020_09_25_154535_add_wallet_amount_to_orders_table', 1),
(121, '2020_10_08_115632_create_coupon_restaurant_table', 1),
(122, '2020_10_08_125459_add_user_type_to_coupons_table', 1),
(123, '2020_10_08_210058_add_max_count_per_user_to_coupons_table', 1),
(124, '2020_10_27_134053_create_payment_gateway_restaurant_table', 1),
(125, '2020_07_31_051522_create_delivery_areas_table', 2),
(126, '2020_08_01_050551_delivery_area_restaurant', 2);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\User', 1),
(1, 'App\\User', 2),
(4, 'App\\User', 3),
(4, 'App\\User', 4);

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

CREATE TABLE `modules` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `version` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `is_installed` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `short_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `settings_path` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `update_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE `orderitems` (
  `id` int(10) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(20,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `unique_order_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderstatus_id` int(11) NOT NULL DEFAULT 1,
  `user_id` int(11) NOT NULL,
  `coupon_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` mediumtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax` decimal(20,2) DEFAULT NULL,
  `restaurant_charge` decimal(20,2) DEFAULT NULL,
  `delivery_charge` decimal(20,2) DEFAULT NULL,
  `total` decimal(20,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `payment_mode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `restaurant_id` int(11) DEFAULT NULL,
  `transaction_id` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_type` int(11) NOT NULL DEFAULT 1,
  `payable` decimal(20,2) NOT NULL DEFAULT 0.00,
  `wallet_amount` decimal(8,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderstatuses`
--

CREATE TABLE `orderstatuses` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item_addons`
--

CREATE TABLE `order_item_addons` (
  `id` int(10) UNSIGNED NOT NULL,
  `orderitem_id` int(11) NOT NULL,
  `addon_category_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addon_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addon_price` decimal(20,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `name`, `slug`, `body`, `created_at`, `updated_at`) VALUES
(1, 'Privacy Policy', 'privacy-policy', '<p><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Privacy Policy</span><span style=\"color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"></span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">ordernow.lk built the https://ordernow.lk/ app as a Free app. This SERVICE is provided by ordernow.lk at no cost and is intended for use as is.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at https://ordernow.lk/ unless otherwise defined in this Privacy Policy.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Information Collection and Use</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to location. The information that we request will be retained by us and used as described in this privacy policy.</p><div style=\"box-sizing: inherit; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">The app does use third party services that may collect information used to identify you.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px;\">Link to privacy policy of third party service providers used by the app</p><ul style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; list-style-position: initial; list-style-image: initial;\"><li style=\"box-sizing: inherit; margin: 10px 10px 10px 2.5em; padding: 0px;\"><a href=\"https://www.google.com/policies/privacy/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"box-sizing: inherit; color: rgb(50, 115, 220); cursor: pointer;\">Google Play Services</a></li></ul></div><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Log Data</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Cookies</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Service Providers</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">We may employ third-party companies and individuals due to the following reasons:</p><ul style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; list-style-position: initial; list-style-image: initial; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><li style=\"box-sizing: inherit; margin: 10px 10px 10px 2.5em; padding: 0px;\">To facilitate our Service;</li><li style=\"box-sizing: inherit; margin: 10px 10px 10px 2.5em; padding: 0px;\">To provide the Service on our behalf;</li><li style=\"box-sizing: inherit; margin: 10px 10px 10px 2.5em; padding: 0px;\">To perform Service-related services; or</li><li style=\"box-sizing: inherit; margin: 10px 10px 10px 2.5em; padding: 0px;\">To assist us in analyzing how our Service is used.</li></ul><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Security</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Links to Other Sites</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Children’s Privacy</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Changes to This Privacy Policy</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This policy is effective as of 2020-12-15</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"box-sizing: inherit; font-weight: 700; color: rgb(54, 54, 54);\">Contact Us</span></p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contactus@ordernow.lk.</p><p style=\"box-sizing: inherit; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(74, 74, 74); font-family: BlinkMacSystemFont, -apple-system, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px;\">This privacy policy page was created at&nbsp;<a href=\"https://privacypolicytemplate.net/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"box-sizing: inherit; color: rgb(50, 115, 220); cursor: pointer;\">privacypolicytemplate.net&nbsp;</a>and modified/generated by&nbsp;<a href=\"https://app-privacy-policy-generator.nisrulz.com/\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"box-sizing: inherit; color: rgb(50, 115, 220); cursor: pointer;\">App Privacy Policy Generator</a></p>', '2020-12-16 02:18:39', '2020-12-16 02:18:39');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_otps`
--

CREATE TABLE `password_reset_otps` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_gateways`
--

CREATE TABLE `payment_gateways` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_gateways`
--

INSERT INTO `payment_gateways` (`id`, `name`, `description`, `logo`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'COD', 'Cash On Delivery Payment', NULL, 1, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(2, 'Stripe', 'Online Payment with Stripe', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(3, 'Paypal', 'Paypal Express Checkout', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(4, 'PayStack', 'PayStack Payment Gateway', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(5, 'Razorpay', 'PayStack Payment Gateway', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(6, 'PayMongo', 'PayMongo Payment Gateway', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(7, 'MercadoPago', 'MercadoPago Payment Gateway', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(8, 'Paytm', 'Paytm Payment Gateway', NULL, 0, '2020-12-14 16:36:34', '2020-12-14 16:36:34');

-- --------------------------------------------------------

--
-- Table structure for table `payment_gateway_restaurant`
--

CREATE TABLE `payment_gateway_restaurant` (
  `id` int(10) UNSIGNED NOT NULL,
  `payment_gateway_id` int(11) NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `popular_geo_places`
--

CREATE TABLE `popular_geo_places` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `latitude` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longitude` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `promo_sliders`
--

CREATE TABLE `promo_sliders` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `position_id` int(11) NOT NULL DEFAULT 0,
  `size` int(11) NOT NULL DEFAULT 5
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `promo_sliders`
--

INSERT INTO `promo_sliders` (`id`, `name`, `is_active`, `created_at`, `updated_at`, `location_id`, `position_id`, `size`) VALUES
(1, 'Testing Slide 01', 1, '2020-12-15 04:37:33', '2020-12-15 04:47:42', 0, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `push_tokens`
--

CREATE TABLE `push_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `token` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `is_sent` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `push_tokens`
--

INSERT INTO `push_tokens` (`id`, `token`, `status`, `is_sent`, `is_active`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'eq_oSw8LyFY:APA91bEEyK_Th4uTlEQBGJC_vdJvUOtQ6y_ZVfGcuOVZVOU-xKuSv__HM9ZP0_bpknSwqFC-cbzKD-Moz7PsLas8LGcis8ourxgLRjk0viRdzTIB86DHcyYxsslTnOVhig7hSRXqPq5g', 0, 0, 1, 3, '2020-12-15 09:59:20', '2020-12-16 02:23:48');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rateable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rateable_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_time` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price_range` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_pureveg` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeholder_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitude` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `certificate` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `restaurant_charges` decimal(20,2) DEFAULT NULL,
  `delivery_charges` decimal(20,2) DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pincode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `landmark` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sku` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `is_accepted` tinyint(1) NOT NULL DEFAULT 0,
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `commission_rate` decimal(8,2) NOT NULL DEFAULT 0.00,
  `delivery_type` int(11) NOT NULL DEFAULT 1,
  `delivery_radius` decimal(8,2) NOT NULL DEFAULT 10.00,
  `delivery_charge_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'FIXED',
  `base_delivery_charge` decimal(20,2) DEFAULT NULL,
  `base_delivery_distance` int(11) DEFAULT NULL,
  `extra_delivery_charge` decimal(20,2) DEFAULT NULL,
  `extra_delivery_distance` int(11) DEFAULT NULL,
  `min_order_price` decimal(20,2) NOT NULL DEFAULT 0.00,
  `is_notifiable` tinyint(1) DEFAULT 0,
  `auto_acceptable` tinyint(1) NOT NULL DEFAULT 0,
  `schedule_data` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_schedulable` tinyint(1) NOT NULL DEFAULT 0,
  `order_column` int(11) DEFAULT NULL,
  `custom_message` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `description`, `location_id`, `image`, `rating`, `delivery_time`, `price_range`, `is_pureveg`, `created_at`, `updated_at`, `slug`, `placeholder_image`, `latitude`, `longitude`, `certificate`, `restaurant_charges`, `delivery_charges`, `address`, `pincode`, `landmark`, `sku`, `is_active`, `is_accepted`, `is_featured`, `commission_rate`, `delivery_type`, `delivery_radius`, `delivery_charge_type`, `base_delivery_charge`, `base_delivery_distance`, `extra_delivery_charge`, `extra_delivery_distance`, `min_order_price`, `is_notifiable`, `auto_acceptable`, `schedule_data`, `is_schedulable`, `order_column`, `custom_message`) VALUES
(1, 'Store 01', 'Store Desc', NULL, '/assets/img/restaurants/1607969640VKI7buuF2j.jpg', '4.5', '60', '300', 0, '2020-12-15 04:44:00', '2020-12-15 04:45:26', 'store-01-GhIeMqUNWXy8SwA', NULL, '7.02996525', '80.02875656', NULL, NULL, NULL, '*Full Address:*Full Address:*Full Address:', '11710', '*Full Address:', '1607969640TkiXVqo3fK', 1, 1, 1, 0.00, 1, 5.00, 'DYNAMIC', 40.00, 1, 20.00, 1, 300.00, 0, 0, NULL, 0, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_categories`
--

CREATE TABLE `restaurant_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_category_restaurant`
--

CREATE TABLE `restaurant_category_restaurant` (
  `id` int(10) UNSIGNED NOT NULL,
  `restaurant_category_id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_category_sliders`
--

CREATE TABLE `restaurant_category_sliders` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_placeholder` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `categories_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order_column` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_earnings`
--

CREATE TABLE `restaurant_earnings` (
  `id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `amount` decimal(20,2) NOT NULL DEFAULT 0.00,
  `is_requested` tinyint(1) NOT NULL DEFAULT 0,
  `is_processed` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `restaurant_payout_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_payouts`
--

CREATE TABLE `restaurant_payouts` (
  `id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(11) NOT NULL,
  `restaurant_earning_id` int(11) NOT NULL,
  `amount` decimal(20,2) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_mode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transaction_id` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_user`
--

CREATE TABLE `restaurant_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `restaurant_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'web', '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(2, 'Delivery Guy', 'web', '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(3, 'Store Owner', 'web', '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(4, 'Customer', 'web', '2020-12-14 16:36:34', '2020-12-14 16:36:34');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `key`, `value`) VALUES
(1, 'storeColor', '#fc8019'),
(2, 'splashLogo', 'splash.jpg?v=1607967115p9Mhs'),
(3, 'firstScreenHeading', 'Order from top & favourite restaurants'),
(4, 'firstScreenSubHeading', 'Ready to see top restaurant to order?'),
(5, 'firstScreenSetupLocation', 'setup your location'),
(6, 'firstScreenLoginText', 'Have an account?'),
(7, 'footerNearme', 'Near Me'),
(8, 'footerExplore', 'Explore'),
(9, 'footerCart', 'Cart'),
(10, 'footerAccount', 'Account'),
(11, 'restaurantCountText', 'Restaurants Near You'),
(12, 'searchAreaPlaceholder', 'Search your area...'),
(13, 'searchPopularPlaces', 'Popular Places'),
(14, 'recommendedBadgeText', 'Recommended'),
(15, 'recommendedBadgeColor', '#d53d4c'),
(16, 'popularBadgeText', 'Popular'),
(17, 'popularBadgeColor', '#ff5722'),
(18, 'newBadgeText', 'New'),
(19, 'newBadgeColor', '#2196F3'),
(20, 'currencyFormat', 'Rs:'),
(21, 'currencyId', 'LKR'),
(22, 'cartColorBg', '#60b246'),
(23, 'cartColorText', '#ffffff'),
(24, 'cartEmptyText', 'Your Cart is Empty'),
(25, 'firstScreenHeroImage', 'assets/img/various/156662819939lzR3gB2i.png'),
(26, 'restaurantSearchPlaceholder', 'Search for restaurants and items...'),
(27, 'accountManageAddress', 'Manage Address'),
(28, 'accountMyOrders', 'My Orders'),
(29, 'accountHelpFaq', 'Help & FAQs'),
(30, 'accountLogout', 'Logout'),
(31, 'cartMakePayment', 'Make Payment'),
(32, 'cartLoginHeader', 'Almost There'),
(33, 'cartLoginSubHeader', 'Login or Signup to place your order'),
(34, 'cartLoginButtonText', 'Continue'),
(35, 'cartDeliverTo', 'Deliver To'),
(36, 'cartChangeLocation', 'Change'),
(37, 'buttonNewAddress', 'New Address'),
(38, 'buttonSaveAddress', 'Save Address'),
(39, 'editAddressAddress', 'Flat/Apartment Number'),
(40, 'editAddressHouse', 'House / Flat No.'),
(41, 'editAddressLandmark', 'Landmark'),
(42, 'editAddressTag', 'Tag'),
(43, 'addressTagPlaceholder', 'Eg. Home, Work'),
(44, 'cartApplyCoupon', 'Apply Coupon'),
(45, 'cartInvalidCoupon', 'Invalid Coupon'),
(46, 'cartSuggestionPlaceholder', 'Suggestion for the restaurant...'),
(47, 'editAddressText', 'Edit'),
(48, 'deleteAddressText', 'Delete'),
(49, 'noAddressText', 'You don\'t have any saved addresses.'),
(50, 'cartSetAddressText', 'Set Your Address'),
(51, 'cartPageTitle', 'Cart'),
(52, 'checkoutPageTitle', 'Checkout'),
(53, 'checkoutPlaceOrder', 'Place Order'),
(54, 'runningOrderPlacedTitle', 'Order Placed Successfully'),
(55, 'runningOrderPlacedSub', 'Waiting for the restaurant to confirm your order'),
(56, 'runningOrderPreparingTitle', 'Chef at work!!'),
(57, 'runningOrderPreparingSub', 'Restaurant is preparing your order'),
(58, 'runningOrderOnwayTitle', 'Vroom Vroom!!'),
(59, 'runningOrderOnwaySub', 'Order has been picked up and is on its way'),
(60, 'runningOrderRefreshButton', 'Refresh Order Status'),
(61, 'noOrdersText', 'You have not placed any order yet.'),
(62, 'orderTextTotal', 'Total:'),
(63, 'checkoutPaymentListTitle', 'Select your prefered payment method'),
(64, 'checkoutSelectPayment', 'Select Payment Method'),
(65, 'mapApiKey', NULL),
(66, 'storeName', 'ordernow.lk'),
(67, 'storeLogo', 'logo.png?v=1607967115il7Vo'),
(68, 'runningOrderDeliveryAssignedTitle', 'Delivery Guy Assigned'),
(69, 'runningOrderDeliveryAssignedSub', 'On the way to pick up your order.'),
(70, 'runningOrderCanceledTitle', 'Order Canceled'),
(71, 'runningOrderCanceledSub', 'Sorry. Your order has been canceled.'),
(72, 'stripePublicKey', NULL),
(73, 'stripeSecretKey', NULL),
(74, 'firstScreenWelcomeMessage', 'Welcome,'),
(75, 'firstScreenLoginBtn', 'Login'),
(76, 'loginErrorMessage', 'Woopss!! Something went wrong. Please try again.'),
(77, 'pleaseWaitText', 'Please Wait...'),
(78, 'loginLoginTitle', 'LOGIN'),
(79, 'loginLoginSubTitle', 'Enter your email and password'),
(80, 'loginLoginEmailLabel', 'Email'),
(81, 'loginLoginPasswordLabel', 'Password'),
(82, 'homePageMinsText', 'MINS'),
(83, 'homePageForTwoText', 'FOR TWO'),
(84, 'itemsPageRecommendedText', 'RECOMMENDED'),
(85, 'floatCartItemsText', 'Items'),
(86, 'floatCartViewCartText', 'View Cart'),
(87, 'cartItemsInCartText', 'Items in Cart'),
(88, 'cartBillDetailsText', 'Bill Details'),
(89, 'cartItemTotalText', 'Item Total'),
(90, 'cartRestaurantCharges', 'Restaurant Charges'),
(91, 'cartDeliveryCharges', 'Delivery Charges'),
(92, 'cartCouponText', 'Coupon'),
(93, 'cartToPayText', 'To Pay'),
(94, 'cartSetYourAddress', 'Set Your Address'),
(95, 'checkoutPaymentInProcess', 'Payment in process. Do not hit refresh or go back.'),
(96, 'checkoutStripeText', 'Stripe'),
(97, 'checkoutStripeSubText', 'Online Payment'),
(98, 'checkoutCodText', 'COD'),
(99, 'checkoutCodSubText', 'Cash On Delivery'),
(100, 'showPromoSlider', 'true'),
(101, 'loginLoginPhoneLabel', 'Phone'),
(102, 'loginLoginNameLabel', 'Name'),
(103, 'registerErrorMessage', 'Woppss!! Something went wrong. Please try again.'),
(104, 'registerRegisterTitle', 'Register'),
(105, 'registerRegisterSubTitle', 'Regsiter now for free'),
(106, 'firstScreenRegisterBtn', 'Register'),
(107, 'loginDontHaveAccount', 'Don\'t have an account yet? '),
(108, 'regsiterAlreadyHaveAccount', 'Already have an account? '),
(109, 'favicon-16x16', 'favicon-16x16.png?v=1607967114Npwfu'),
(110, 'favicon-32x32', 'favicon-32x32.png?v=1607967114KFTqO'),
(111, 'favicon-96x96', 'favicon-96x96.png?v=1607967115Sp7LP'),
(112, 'favicon-128x128', 'favicon-128x128.png?v=1607967115UdAuy'),
(113, 'storeEmail', 'admin@ordernow.lk'),
(114, 'seoMetaTitle', 'ordernow'),
(115, 'seoMetaDescription', NULL),
(116, 'storeUrl', 'https://ordernow.lk/'),
(117, 'twitterUsername', 'twitter-username'),
(118, 'seoOgTitle', NULL),
(119, 'seoOgDescription', NULL),
(120, 'seoTwitterTitle', NULL),
(121, 'seoTwitterDescription', NULL),
(122, 'seoOgImage', NULL),
(123, 'seoTwitterImage', NULL),
(124, 'accountMyAccount', 'My Account'),
(125, 'desktopHeading', 'Order from restaurants near you'),
(126, 'desktopSubHeading', 'Easy way to get the food you love delivered.\r\nWe bring food from the best restaurants and desserts to your doorstep. We have <b style=\"\">hundreds</b> of restaurants to choose from.'),
(127, 'desktopUseAppButton', 'Use App'),
(128, 'desktopAchievementOneTitle', 'Restaurants'),
(129, 'desktopAchievementOneSub', '2300+'),
(130, 'desktopAchievementTwoTitle', 'Items'),
(131, 'desktopAchievementTwoSub', '65000+'),
(132, 'desktopAchievementThreeTitle', 'Customers'),
(133, 'desktopAchievementThreeSub', '1M+'),
(134, 'desktopAchievementFourTitle', 'Deliveries'),
(135, 'desktopAchievementFourSub', '5M+'),
(136, 'desktopSocialFacebookLink', 'https://www.facebook.com'),
(137, 'desktopSocialGoogleLink', 'https://www.google.com'),
(138, 'desktopSocialYoutubeLink', NULL),
(139, 'desktopSocialInstagramLink', 'https://www.instagram.com'),
(140, 'desktopFooterSocialHeader', 'We Are Social'),
(141, 'desktopFooterAddress', '#1201, Someplace, Near Somewhere'),
(142, 'runningOrderDeliveryPin', 'Delivery Pin: '),
(143, 'deliveryNoOrdersAccepted', 'No Orders Accepted Yet'),
(144, 'deliveryNoNewOrders', 'No New Orders Yet'),
(145, 'firstScreenHeroImageSm', 'assets/img/various/156662819939lzR3gB2i-sm.png'),
(146, 'showMap', 'true'),
(147, 'paypalEnv', 'sandbox'),
(148, 'paypalSandboxKey', NULL),
(149, 'paypalProductionKey', NULL),
(150, 'enablePushNotification', 'true'),
(151, 'enablePushNotificationOrders', 'true'),
(152, 'firebaseSenderId', '864924325601'),
(153, 'firebaseSecret', 'AAAAyWGB1uE:APA91bE0ew8hABu_ofX74zX5AkpX5rq7Y7NGkdwjlfiDKC-fYN-gKsNVky5iMJBDZmCDq2YlTswRx2TjBd6D9oiBlB1w9q-G6RHZ1Kq0IPfjsClf6ff02b-c4TF5SF6Vcpnp8vLZvmMI'),
(154, 'runningOrderDelivered', 'Order Delivered'),
(155, 'runningOrderDeliveredSub', 'The order has been delivered to you. Enjoy.'),
(156, 'showGdpr', 'false'),
(157, 'gdprMessage', 'We use Cookies to give you the best possible service. By continuing to browse our site you are agreeing to our use of Cookies'),
(158, 'gdprConfirmButton', 'Okay'),
(159, 'restaurantFeaturedText', 'Featured'),
(160, 'deliveryNewOrdersTitle', 'New Orders'),
(161, 'deliveryAcceptedOrdersTitle', 'Accepted Orders'),
(162, 'deliveryWelcomeMessage', 'Welcome'),
(163, 'deliveryOrderItems', 'Order Items'),
(164, 'deliveryRestaurantAddress', 'Restaurant Address'),
(165, 'deliveryGetDirectionButton', 'Get Direction'),
(166, 'deliveryDeliveryAddress', 'Delivery Address'),
(167, 'deliveryOnlinePayment', 'Online Payment'),
(168, 'deliveryDeliveryPinPlaceholder', 'ENTER DELIVERY PIN'),
(169, 'deliveryAcceptOrderButton', 'Accept'),
(170, 'deliveryPickedUpButton', 'Picked Up'),
(171, 'deliveryDeliveredButton', 'Delivered'),
(172, 'deliveryOrderCompletedButton', 'Order Completed'),
(173, 'deliveryInvalidDeliveryPin', 'Incorrect delivery pin. Please try again.'),
(174, 'deliveryAlreadyAccepted', 'This delivery has been accepted by someone else.'),
(175, 'deliveryLogoutDelivery', 'Logout Delivery'),
(176, 'enableGoogleAnalytics', 'false'),
(177, 'googleAnalyticsId', NULL),
(178, 'taxApplicable', 'false'),
(179, 'taxPercentage', NULL),
(180, 'firebasePublic', 'BMyLMelFXtL-Joki-rsqGUCrD_uyYc4LRrtqV86Rz0tXfp6lZysJJyQKtA0Moer9gatSfpLJVxoUmC_-LEvXL78'),
(181, 'deliveryLogoutConfirmation', 'Are you sure?'),
(182, 'customizationHeading', 'Customizations'),
(183, 'customizableItemText', 'Customizable'),
(184, 'customizationDoneBtnText', 'Continue'),
(185, 'paystackPublicKey', 'pk_test_ecf3496bdf36bced2112a502f5f5bb96e1340124'),
(186, 'paystackPrivateKey', NULL),
(187, 'paystackPayText', 'PAY WITH PAYSLACK'),
(188, 'minPayout', '150'),
(189, 'enableFacebookLogin', 'false'),
(190, 'facebookAppId', NULL),
(191, 'facebookLoginButtonText', 'Login with Facebook'),
(192, 'enableGoogleLogin', 'false'),
(193, 'googleAppId', NULL),
(194, 'googleLoginButtonText', 'Login with Google'),
(195, 'customCSS', NULL),
(196, 'enSOV', 'false'),
(197, 'twilioSid', NULL),
(198, 'twilioAccessToken', NULL),
(199, 'twilioServiceId', NULL),
(200, 'fieldValidationMsg', 'This is a required field.'),
(201, 'nameValidationMsg', 'Please enter your full name.'),
(202, 'emailValidationMsg', 'Please enter a valid email.'),
(203, 'phoneValidationMsg', 'Please enter a phone number in this format: +1123456789'),
(204, 'minimumLengthValidationMessage', 'This field must be at least 8 characters long.'),
(205, 'emailPhoneAlreadyRegistered', 'Email or Phone has already been registered.'),
(206, 'enterPhoneToVerify', 'Please enter your phone number to verify'),
(207, 'invalidOtpMsg', 'Invalid OTP. Please check and try again.'),
(208, 'otpSentMsg', 'An OTP has been sent to '),
(209, 'resendOtpMsg', 'Resend OTP to '),
(210, 'resendOtpCountdownMsg', 'Resend OTP in '),
(211, 'verifyOtpBtnText', 'Verify OTP'),
(212, 'socialWelcomeText', 'Hi '),
(213, 'emailPassDonotMatch', 'Email & Password do not match.'),
(214, 'enSPU', 'false'),
(215, 'runningOrderReadyForPickup', 'Food is Ready'),
(216, 'runningOrderReadyForPickupSub', 'Your order is ready for self pickup.'),
(217, 'deliveryTypeDelivery', 'Delivery'),
(218, 'deliveryTypeSelfPickup', 'Self Pickup'),
(219, 'noRestaurantMessage', 'No restaurants are available.'),
(220, 'selectedSelfPickupMessage', 'You have selected Self Pickup.'),
(221, 'vehicleText', 'Vehicle:'),
(222, 'deliveryGuyAfterName', 'is your delivery valet today.'),
(223, 'callNowButton', 'Call Now'),
(224, 'enableGoogleAPI', 'false'),
(225, 'checkoutRazorpayText', 'Razorpay'),
(226, 'checkoutRazorpaySubText', 'Pay with cards, wallet or UPI'),
(227, 'razorpayKeyId', 'rzp_test_VWcp86nfU6T7rV'),
(228, 'razorpayKeySecret', 'eLzMBr1cycRG0iEjgMptgjMs'),
(229, 'allowLocationAccessMessage', 'Kindly allow location access for live tracking.'),
(230, 'enableDeliveryPin', 'true'),
(231, 'deliveryOrdersRefreshBtn', 'Refresh'),
(232, 'restaurantAcceptTimeThreshold', '10'),
(233, 'deliveryAcceptTimeThreshold', '30'),
(234, 'taxText', 'Tax'),
(235, 'itemsRemovedMsg', 'Items added from the previous restaurant have been removed.'),
(236, 'ongoingOrderMsg', 'You have some on-going orders. VIEW'),
(237, 'trackOrderText', 'Track Order'),
(238, 'orderPlacedStatusText', 'Order Placed'),
(239, 'preparingOrderStatusText', 'Preparing Order'),
(240, 'deliveryGuyAssignedStatusText', 'Delivery Guy Assigned'),
(241, 'orderPickedUpStatusText', 'Order Picked Up'),
(242, 'deliveredStatusText', 'Delivered'),
(243, 'canceledStatusText', 'Canceled'),
(244, 'readyForPickupStatusText', 'Ready For Pickup'),
(245, 'pureVegText', 'Pure Veg'),
(246, 'certificateCodeText', 'Certificate Code: '),
(247, 'showMoreButtonText', 'Show More'),
(248, 'showLessButtonText', 'Show Less'),
(249, 'walletName', 'Wallet'),
(250, 'accountMyWallet', 'My Wallet'),
(251, 'noWalletTransactionsText', 'No Wallet Transactions Yet!!!'),
(252, 'walletDepositText', 'Deposit'),
(253, 'walletWithdrawText', 'Withdraw'),
(254, 'payPartialWithWalletText', 'Pay partial amount with wallet'),
(255, 'willbeDeductedText', 'will be deducted from your balance of'),
(256, 'payFullWithWalletText', 'Pay full amount with Wallet.'),
(257, 'orderPaymentWalletComment', 'Payment for order:'),
(258, 'orderPartialPaymentWalletComment', 'Partial payment for order:'),
(259, 'orderRefundWalletComment', 'Refund for order cancellation.'),
(260, 'orderPartialRefundWalletComment', 'Partial Refund for order cancellation.'),
(261, 'enDevMode', 'true'),
(262, 'walletRedeemBtnText', 'Redeem'),
(263, 'restaurantNewOrderNotificationMsg', 'A New Order has Arrived !!!'),
(264, 'restaurantNewOrderNotificationMsgSub', 'New Order Notification'),
(265, 'deliveryGuyNewOrderNotificationMsg', 'A New Order is Waiting !!!'),
(266, 'deliveryGuyNewOrderNotificationMsgSub', 'New Order Notification'),
(267, 'firebaseSDKSnippet', ''),
(268, 'cartCouponOffText', 'OFF'),
(269, 'willBeRefundedText', 'will be refunded back to your wallet.'),
(270, 'willNotBeRefundedText', 'No Refund will be made to your wallet as the restaurant has already prepared the order.'),
(271, 'cartRestaurantNotOperational', 'Restaurant is not operational on your selected location.'),
(272, 'addressDoesnotDeliverToText', 'Does not deliver to'),
(273, 'googleApiKey', 'AIzaSyD4_duWs0x3OQ8y-z4v7LMKiwiiWWOp4hc'),
(274, 'useCurrentLocationText', 'Use Current Location'),
(275, 'gpsAccessNotGrantedMsg', 'GPS access is not granted or was denied.'),
(276, 'yourLocationText', 'YOUR LOCATION'),
(277, 'notAcceptingOrdersMsg', 'Currently Not Accepting Any Orders'),
(278, 'exploreRestautantsText', 'RESTAURANTS'),
(279, 'exploreItemsText', 'ITEMS'),
(280, 'hidePriceWhenZero', 'true'),
(281, 'phoneCountryCode', '+94'),
(282, 'orderCancellationConfirmationText', 'Do you want to cancel this order?'),
(283, 'yesCancelOrderBtn', 'Yes, Cancel Order'),
(284, 'cancelGoBackBtn', 'Go back'),
(285, 'cancelOrderMainButton', 'Cancel Order'),
(286, 'deliveryOrderPlacedText', 'Order Placed'),
(287, 'deliveryCashOnDelivery', 'Cash On Delivery'),
(288, 'socialLoginOrText', 'OR'),
(289, 'orderCancelledText', 'Order Cancelled'),
(290, 'searchAtleastThreeCharsMsg', 'Enter at least 3 characters to search.'),
(291, 'multiLanguageSelection', 'true'),
(292, 'changeLanguageText', 'Change Language'),
(293, 'deliveryFooterNewTitle', 'New Orders'),
(294, 'deliveryFooterAcceptedTitle', 'Accepted'),
(295, 'deliveryFooterAccount', 'Account'),
(296, 'enableDeliveryGuyEarning', 'true'),
(297, 'deliveryGuyCommissionFrom', 'DELIVERYCHARGE'),
(298, 'deliveryEarningsText', 'Earnings'),
(299, 'deliveryOnGoingText', 'On-Going'),
(300, 'deliveryCompletedText', 'Completed'),
(301, 'deliveryCommissionMessage', 'Commission for order: '),
(302, 'itemSearchText', 'Search results for: '),
(303, 'itemSearchNoResultText', 'No results found for: '),
(304, 'itemSearchPlaceholder', 'Search for items...'),
(305, 'googleApiKeyIP', 'AIzaSyDI52777envxsEAaxKC8fbcW8iUGWaVMG8'),
(306, 'itemsMenuButtonText', 'MENU'),
(307, 'enPassResetEmail', 'false'),
(308, 'mail_host', NULL),
(309, 'mail_port', NULL),
(310, 'mail_username', NULL),
(311, 'mail_password', NULL),
(312, 'mail_encryption', NULL),
(313, 'enRestaurantCategorySlider', '0'),
(314, 'restaurantCategorySliderPosition', '2'),
(315, 'restaurantCategorySliderSize', '3'),
(316, 'showRestaurantCategorySliderLabel', 'false'),
(317, 'restaurantCategorySliderStyle', '0.4'),
(318, 'enRAR', 'true'),
(319, 'rarModEnHomeBanner', 'true'),
(320, 'rarModShowBannerRestaurantName', 'true'),
(321, 'rarModHomeBannerPosition', '2'),
(322, 'rarModHomeBannerBgColor', 'rgb(255, 235, 59)'),
(323, 'rarModHomeBannerTextColor', 'rgb(0, 0, 0)'),
(324, 'rarModHomeBannerStarsColor', 'rgb(255, 162, 0)'),
(325, 'rarModHomeBannerText', 'Rate and Review'),
(326, 'rarModRatingPageTitle', 'Rate Your Order'),
(327, 'rarModDeliveryRatingTitle', 'Rate the Delivery'),
(328, 'rarModRestaurantRatingTitle', 'Rate the Restaurant'),
(329, 'rarReviewBoxTitle', 'Your Feedback'),
(330, 'rarReviewBoxTextPlaceHolderText', 'Write your feedback here (optional)'),
(331, 'rarSubmitButtonText', 'Submit'),
(332, 'showPercentageDiscount', 'true'),
(333, 'itemPercentageDiscountText', '% OFF'),
(334, 'showVegNonVegBadge', 'true'),
(335, 'exploreNoResults', 'No Items or Restaurants Found'),
(336, 'updatingMessage', 'Updating System'),
(337, 'userNotFoundErrorMessage', 'No user found with this email.'),
(338, 'invalidOtpErrorMessage', 'Invalid OTP Entered'),
(339, 'resetPasswordPageTitle', 'Reset Password'),
(340, 'resetPasswordPageSubTitle', 'Enter your email address to continue'),
(341, 'sendOtpOnEmailButtonText', 'Send OTP on Email'),
(342, 'alreadyHaveResetOtpButtonText', 'I already have an OTP'),
(343, 'enterResetOtpMessageText', 'Enter the OTP sent to you email'),
(344, 'verifyResetOtpButtonText', 'Verify OTP'),
(345, 'dontHaveResetOtpButtonText', 'I dont have an OTP'),
(346, 'enterNewPasswordText', 'Please enter a new password below'),
(347, 'newPasswordLabelText', 'New Password'),
(348, 'setNewPasswordButtonText', 'Set New Password'),
(349, 'exlporeByRestaurantText', 'By'),
(350, 'forgotPasswordLinkText', 'Forgot Password?'),
(351, 'categoriesNoRestaurantsFoundText', 'No Restaurants Found'),
(352, 'categoriesFiltersText', 'Filters'),
(353, 'sendEmailFromEmailAddress', 'do-not-reply@foodomaa.com'),
(354, 'sendEmailFromEmailName', 'OderNow'),
(355, 'passwordResetEmailSubject', 'Reset Password OTP'),
(356, 'registrationPolicyMessage', NULL),
(357, 'locationSavedAddresses', 'Saved Addresses'),
(358, 'restaurantMinOrderMessage', 'Min cart value should be atleast '),
(359, 'footerAlerts', 'Alerts'),
(360, 'showFromNowDate', 'true'),
(361, 'markAllAlertReadText', 'Mark all read'),
(362, 'noNewAlertsText', 'No new alerts'),
(363, 'currencySymbolAlign', 'left'),
(364, 'restaurantNotificationAudioTrack', 'Alert-5'),
(365, 'restaurantNewOrderRefreshRate', '15'),
(366, 'enDelChrRnd', 'true'),
(367, 'expandAllItemMenu', 'true'),
(368, 'msg91AuthKey', NULL),
(369, 'msg91SenderId', NULL),
(370, 'defaultSmsGateway', '1'),
(371, 'otpMessage', 'Your OTP verification code is:'),
(372, 'twilioFromPhone', NULL),
(373, 'smsRestaurantNotify', 'false'),
(374, 'smsDeliveryNotify', 'false'),
(375, 'defaultSmsRestaurantMsg', 'You have received a new order.'),
(376, 'smsRestOrderValue', 'false'),
(377, 'smsOrderNotify', 'false'),
(378, 'defaultSmsDeliveryMsg', 'A new order has arrived.'),
(379, 'showOrderAddonsDelivery', 'true'),
(380, 'showDeliveryFullAddressOnList', 'true'),
(381, 'sendgrid_api_key', NULL),
(382, 'showUserInfoBeforePickup', 'true'),
(383, 'recommendedLayoutV2', 'true'),
(384, 'cartItemNotAvailable', 'Item Not Available'),
(385, 'cartRemoveItemButton', 'Remove Item'),
(386, 'deliveryTotalEarningsText', 'Total Earnings'),
(387, 'flatApartmentAddressRequired', 'false'),
(388, 'deliveryUsePhoneToAccessMsg', 'Use your mobile phone to login to the Delivery Application.'),
(389, 'restaurantNotActiveMsg', 'Not Accepting Orders'),
(390, 'uploadImageQuality', '75'),
(391, 'deliveryMaxOrderReachedMsg', 'Max Order Limit Reached'),
(392, 'showInActiveItemsToo', 'false'),
(393, 'enGDMA', 'false'),
(394, 'showPriceAndOrderCommentsDelivery', 'false'),
(395, 'useSimpleSpinner', 'true'),
(396, 'randomizeStores', 'false'),
(397, 'showCouponDescriptionOnSuccess', 'true'),
(398, 'chooseAvatarText', 'Choose your avatar'),
(399, 'stripeAcceptAliPay', 'false'),
(400, 'stripeAcceptBitCoin', 'false'),
(401, 'stripeLocale', 'auto'),
(402, 'customCartMessage', '<p><br></p>'),
(403, 'customHomeMessage', '<p><br></p>'),
(404, 'inAppCloseButton', 'Close'),
(405, 'inAppOpenLinkButton', 'Open'),
(406, 'iOSPWAPopupTitle', 'Add to Home Screen'),
(407, 'iOSPWAPopupBody', 'This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.'),
(408, 'iOSPWAPopupShareButtonLabel', '1) Press the \'Share\' button'),
(409, 'iOSPWAPopupAddButtonLabel', '2) Press \'Add to Home Screen\''),
(410, 'iOSPWAPopupCloseButtonLabel', 'Cancel'),
(411, 'defaultEmailGateway', 'sendgrid'),
(412, 'enIOSPWAPopup', 'true'),
(413, 'offlineTitleMessage', 'You Are Offline'),
(414, 'offlineSubTitleMessage', 'Please check your internet connection.'),
(415, 'userInActiveMessage', 'You are banned from placing orders'),
(416, 'googleApiKeyNoRestriction', 'AIzaSyCvy3sEYncz_In7MshpEYP9K-dUPP6_ucg'),
(417, 'footerStyleType', 'FLOAT'),
(418, 'mockSearchOnHomepage', 'true'),
(419, 'mockSearchPlaceholder', 'Search for stores or items...'),
(420, 'tooManyApiCallMessage', 'Please try again in a minute...'),
(421, 'paymongoPK', NULL),
(422, 'paymongoSK', NULL),
(423, 'awaitingPaymentStatusText', 'Awaiting Payment'),
(424, 'paymentFailedStatusText', 'Payment Failed'),
(425, 'awaitingPaymentTitle', 'Awaiting Payment'),
(426, 'awaitingPaymentSubTitle', 'Awaiting payment from your bank. Order will be canceled if not processed in time.'),
(427, 'checkoutStripeIdealText', 'Stripe Ideal'),
(428, 'checkoutStripeIdealSubText', 'Pay with Ideal Netherlands'),
(429, 'checkoutStripeFpxText', 'Stripe FPX'),
(430, 'checkoutStripeFpxSubText', 'Pay with FPX Malaysia'),
(431, 'checkoutMercadoPagoText', 'MercadoPago'),
(432, 'checkoutMercadoPagoSubText', 'Pay with MerecadoPago for Brazil'),
(433, 'checkoutPayMongoText', 'Pay with PayMongo'),
(434, 'checkoutPayMongoSubText', 'Pay with PayMongo for Philippines'),
(435, 'checkoutPayText', 'Pay'),
(436, 'checkoutCardNumber', 'Card Number'),
(437, 'checkoutCardExpiration', 'Expiration'),
(438, 'checkoutCardCvv', 'CVV'),
(439, 'checkoutCardPostalCode', 'Postal Code'),
(440, 'checkoutCardFullname', 'Full Name'),
(441, 'checkoutIdealSelectBankText', 'Select Bank'),
(442, 'checkoutFpxSelectBankText', 'Select Bank'),
(443, 'mercadopagoAccessToken', NULL),
(444, 'stripeInlineCardCheckout', 'false'),
(445, 'stripeAcceptIdealPayment', 'false'),
(446, 'stripeAcceptFpxPayment', 'false'),
(447, 'stripeCheckoutPostalCode', 'true'),
(448, 'googleFullAddress', 'false'),
(449, 'couponNotLoggedin', 'Login to apply coupon'),
(450, 'checkoutPaytmText', 'Paytm'),
(451, 'checkoutPaytmSubText', 'Pay with Paytm Wallet | Credit/Debit Card'),
(452, 'paytm_environment', 'local'),
(453, 'paytm_merchant_id', NULL),
(454, 'paytm_merchant_key', NULL),
(455, 'paytm_merchant_website', NULL),
(456, 'paytm_channel', NULL),
(457, 'paytm_industry_type', NULL),
(458, 'showDeliveryCollection', 'true'),
(459, 'deliveryCollectionText', 'COD In-Hand'),
(460, 'allowPaymentGatewaySelection', 'false');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` int(10) UNSIGNED NOT NULL,
  `promo_slider_id` int(11) NOT NULL,
  `unique_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_placeholder` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `order_column` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `promo_slider_id`, `unique_id`, `name`, `image`, `image_placeholder`, `url`, `is_active`, `created_at`, `updated_at`, `order_column`) VALUES
(1, 1, NULL, 'Slide 01', '/assets/img/slider/1607969310RQGWM6Nt0m.jpg', NULL, 'https://ordernow.lk/', 1, '2020-12-15 04:38:30', '2020-12-15 04:38:30', 1),
(2, 1, NULL, 'Testing Slide 02', '/assets/img/slider/1607969885PMFU3QeHrn.jpg', NULL, 'stores/store-01-GhIeMqUNWXy8SwA', 1, '2020-12-15 04:48:05', '2020-12-15 04:48:05', 2);

-- --------------------------------------------------------

--
-- Table structure for table `sms_gateways`
--

CREATE TABLE `sms_gateways` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `gateway_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sms_gateways`
--

INSERT INTO `sms_gateways` (`id`, `gateway_name`, `created_at`, `updated_at`) VALUES
(1, 'MSG91', '2020-12-14 16:36:34', '2020-12-14 16:36:34'),
(2, 'TWILIO', '2020-12-14 16:36:34', '2020-12-14 16:36:34');

-- --------------------------------------------------------

--
-- Table structure for table `sms_otps`
--

CREATE TABLE `sms_otps` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `otp` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(10) UNSIGNED NOT NULL,
  `payable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payable_id` bigint(20) UNSIGNED NOT NULL,
  `wallet_id` int(10) UNSIGNED DEFAULT NULL,
  `type` enum('deposit','withdraw') COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` bigint(20) NOT NULL,
  `confirmed` tinyint(1) NOT NULL,
  `meta` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` int(10) UNSIGNED NOT NULL,
  `from_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_id` bigint(20) UNSIGNED NOT NULL,
  `to_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `to_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('exchange','transfer','paid','refund','gift') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'transfer',
  `status_last` enum('exchange','transfer','paid','refund','gift') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deposit_id` int(10) UNSIGNED NOT NULL,
  `withdraw_id` int(10) UNSIGNED NOT NULL,
  `discount` bigint(20) NOT NULL DEFAULT 0,
  `fee` bigint(20) NOT NULL DEFAULT 0,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `id` int(10) UNSIGNED NOT NULL,
  `language_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`id`, `language_name`, `data`, `created_at`, `updated_at`, `is_default`, `is_active`) VALUES
(1, 'English', '{\"desktopHeading\":\"Order from restaurants near you\",\"desktopSubHeading\":\"OderNow is the easy way to get the food you love delivered.\\r\\nWe bring food from the best restaurants and desserts to your doorstep. We have <b style=\\\"\\\">hundreds<\\/b> of restaurants to choose from.\",\"desktopUseAppButton\":\"Use App Now\",\"desktopAchievementOneTitle\":\"Restaurants\",\"desktopAchievementOneSub\":\"2300+\",\"desktopAchievementTwoTitle\":\"Items\",\"desktopAchievementTwoSub\":\"65000+\",\"desktopAchievementThreeTitle\":\"Customers\",\"desktopAchievementThreeSub\":\"1M+\",\"desktopAchievementFourTitle\":\"Deliveries\",\"desktopAchievementFourSub\":\"5M+\",\"desktopFooterAddress\":\"<p>#1201, Someplace, Near Somewhere<\\/p><p><a href=\\\"\\/pages\\/hello-world\\\" target=\\\"_blank\\\">Cookie Policy<\\/a><br><\\/p>\",\"desktopFooterSocialHeader\":\"We Are Social\",\"desktopSocialFacebookLink\":\"https:\\/\\/www.facebook.com\",\"desktopSocialGoogleLink\":\"https:\\/\\/www.google.com\",\"desktopSocialYoutubeLink\":null,\"desktopSocialInstagramLink\":\"https:\\/\\/www.instagram.com\",\"gdprMessage\":\"<p>We use Cookies to give you the best possible service. By continuing to browse our site you are agreeing to our use of <b>Cookies.&nbsp;&nbsp;<\\/b><a href=\\\"https:\\/\\/en.wikipedia.org\\/wiki\\/HTTP_cookie\\\" target=\\\"_blank\\\" style=\\\"background-color: rgb(255, 255, 255); font-size: 0.9rem;\\\">Read About Cookies<\\/a><\\/p>\",\"gdprConfirmButton\":\"Okay\",\"changeLanguageText\":\"Change Language\",\"firstScreenHeading\":\"Order from top & favourite restaurants\",\"firstScreenSubHeading\":\"Ready to see top restaurant to order?\",\"firstScreenSetupLocation\":\"setup your location\",\"firstScreenWelcomeMessage\":\"Welcome,\",\"firstScreenLoginText\":\"Have an account?\",\"firstScreenLoginBtn\":\"Login\",\"loginErrorMessage\":\"Woopss!! Something went wrong. Please try again.\",\"pleaseWaitText\":\"Please Wait...\",\"loginLoginTitle\":\"LOGIN\",\"loginLoginSubTitle\":\"Enter your email and password\",\"loginLoginEmailLabel\":\"Email\",\"loginLoginPasswordLabel\":\"Password\",\"loginDontHaveAccount\":\"Don\'t have an account yet?\",\"firstScreenRegisterBtn\":\"Register\",\"registerRegisterTitle\":\"Register\",\"registerRegisterSubTitle\":\"Regsiter now for free\",\"loginLoginNameLabel\":\"Name\",\"loginLoginPhoneLabel\":\"Phone\",\"regsiterAlreadyHaveAccount\":\"Already have an account?\",\"fieldValidationMsg\":\"This is a required field.\",\"nameValidationMsg\":\"Please enter your full name.\",\"emailValidationMsg\":\"Please enter a valid email.\",\"phoneValidationMsg\":\"Please enter a phone number in this format: +1123456789\",\"minimumLengthValidationMessage\":\"This field must be at least 8 characters long.\",\"emailPhoneAlreadyRegistered\":\"Email or Phone has already been registered.\",\"emailPassDonotMatch\":\"Email & Password do not match.\",\"enterPhoneToVerify\":\"Please enter your phone number to verify\",\"invalidOtpMsg\":\"Invalid OTP. Please check and try again.\",\"otpSentMsg\":\"An OTP has been sent to\",\"resendOtpMsg\":\"Resend OTP to\",\"resendOtpCountdownMsg\":\"Resend OTP in\",\"verifyOtpBtnText\":\"Verify OTP\",\"socialWelcomeText\":\"Hi\",\"socialLoginOrText\":\"OR\",\"forgotPasswordLinkText\":\"Forgot Password?\",\"resetPasswordPageTitle\":\"Reset Password\",\"resetPasswordPageSubTitle\":\"Enter your email address to continue\",\"userNotFoundErrorMessage\":\"No user found with this email.\",\"invalidOtpErrorMessage\":\"Invalid OTP Entered\",\"sendOtpOnEmailButtonText\":\"Send OTP on Email\",\"alreadyHaveResetOtpButtonText\":\"I already have an OTP\",\"dontHaveResetOtpButtonText\":\"I dont have an OTP\",\"enterResetOtpMessageText\":\"Enter the OTP sent to you email\",\"verifyResetOtpButtonText\":\"Verify OTP\",\"enterNewPasswordText\":\"Please enter a new password below\",\"newPasswordLabelText\":\"New Password\",\"setNewPasswordButtonText\":\"Set New Password\",\"registrationPolicyMessage\":null,\"customHomeMessage\":\"<p><br><\\/p>\",\"deliveryTypeDelivery\":\"Delivery\",\"deliveryTypeSelfPickup\":\"Self Pickup\",\"noRestaurantMessage\":\"No restaurants are available.\",\"restaurantCountText\":\"Restaurants Near You\",\"restaurantFeaturedText\":\"Featured\",\"homePageMinsText\":\"MINS\",\"homePageForTwoText\":\"FOR TWO\",\"footerNearme\":\"Near Me\",\"footerExplore\":\"Explore\",\"footerCart\":\"Cart\",\"footerAccount\":\"Account\",\"footerAlerts\":\"Alerts\",\"exploreNoResults\":\"No Items or Restaurants Found\",\"restaurantNotActiveMsg\":\"Not Accepting Orders\",\"mockSearchPlaceholder\":\"Search for stores or items...\",\"markAllAlertReadText\":\"Mark all read\",\"noNewAlertsText\":\"No new alerts\",\"restaurantSearchPlaceholder\":\"Search for restaurants\",\"exploreRestautantsText\":\"RESTAURANTS\",\"exploreItemsText\":\"ITEMS\",\"searchAtleastThreeCharsMsg\":\"Enter at least 3 characters to search.\",\"exlporeByRestaurantText\":\"By\",\"recommendedBadgeText\":\"Recommended\",\"popularBadgeText\":\"Popular\",\"newBadgeText\":\"New\",\"itemsPageRecommendedText\":\"RECOMMENDED\",\"floatCartViewCartText\":\"View Cart\",\"floatCartItemsText\":\"Items\",\"customizableItemText\":\"Customizable\",\"customizationHeading\":\"Customizations\",\"customizationDoneBtnText\":\"Continue\",\"pureVegText\":\"Pure Veg\",\"certificateCodeText\":\"Certificate Code:\",\"showMoreButtonText\":\"Show More\",\"showLessButtonText\":\"Show Less\",\"notAcceptingOrdersMsg\":\"Currently Not Accepting Any Orders\",\"itemSearchPlaceholder\":\"Search for items...\",\"itemSearchText\":\"Search results for:\",\"itemSearchNoResultText\":\"No results found for:\",\"itemsMenuButtonText\":\"MENU\",\"itemPercentageDiscountText\":\"% OFF\",\"customCartMessage\":\"<p><br><\\/p>\",\"cartPageTitle\":\"Cart\",\"cartItemsInCartText\":\"Items in Cart\",\"cartEmptyText\":\"Your Cart is Empty\",\"cartSuggestionPlaceholder\":\"Write your comment\\/suggestion for the restaurant...\",\"cartCouponText\":\"Coupon\",\"cartApplyCoupon\":\"Coupon Applied\",\"cartInvalidCoupon\":\"Invalid Coupon\",\"cartCouponOffText\":\"OFF\",\"couponNotLoggedin\":\"Login to apply coupon\",\"cartBillDetailsText\":\"Bill Details\",\"cartItemTotalText\":\"Item Total\",\"cartToPayText\":\"To Pay\",\"cartDeliveryCharges\":\"Delivery Charges\",\"cartRestaurantCharges\":\"Restaurant Charges\",\"cartSetYourAddress\":\"Set Your Address\",\"buttonNewAddress\":\"New Address\",\"cartChangeLocation\":\"Change\",\"cartDeliverTo\":\"Deliver To\",\"checkoutSelectPayment\":\"Proceed to Checkout\",\"cartLoginHeader\":\"Almost There\",\"cartLoginSubHeader\":\"Login or Signup to place your order\",\"cartLoginButtonText\":\"Continue\",\"selectedSelfPickupMessage\":\"You have selected Self Pickup.\",\"taxText\":\"Tax\",\"itemsRemovedMsg\":\"Items added from the previous restaurant have been removed.\",\"ongoingOrderMsg\":\"You have some on-going orders. VIEW\",\"cartRestaurantNotOperational\":\"Restaurant is not operational on your selected location.\",\"restaurantMinOrderMessage\":\"Min cart value should be atleast\",\"cartRemoveItemButton\":\"Remove Item\",\"cartItemNotAvailable\":\"Item Not Available\",\"orderTextTotal\":\"Total:\",\"checkoutPageTitle\":\"Checkout\",\"checkoutPaymentListTitle\":\"Select your prefered payment method\",\"checkoutPaymentInProcess\":\"Payment in process. Do not hit refresh or go back.\",\"checkoutStripeText\":\"Stripe\",\"checkoutStripeSubText\":\"Online Payment\",\"checkoutCodText\":\"COD\",\"checkoutCodSubText\":\"Cash On Delivery\",\"paystackPayText\":\"Pay with PayStack\",\"checkoutPaytmText\":\"Paytm\",\"checkoutPaytmSubText\":\"Pay with Paytm Wallet | Credit\\/Debit Card\",\"checkoutRazorpayText\":\"Razorpay\",\"checkoutRazorpaySubText\":\"Pay with cards, wallet or UPI\",\"userInActiveMessage\":\"You are banned from placing orders\",\"tooManyApiCallMessage\":\"Please try again in a minute...\",\"checkoutStripeIdealText\":\"Stripe Ideal\",\"checkoutStripeIdealSubText\":\"Pay with Ideal Netherlands\",\"checkoutStripeFpxText\":\"Stripe FPX\",\"checkoutStripeFpxSubText\":\"Pay with FPX Malaysia\",\"checkoutMercadoPagoText\":\"MercadoPago\",\"checkoutMercadoPagoSubText\":\"Pay with MerecadoPago for Brazil\",\"checkoutPayMongoText\":\"Pay with PayMongo\",\"checkoutPayMongoSubText\":\"Pay with PayMongo for Philippines\",\"checkoutPayText\":\"Pay\",\"checkoutCardNumber\":\"Card Number\",\"checkoutCardExpiration\":\"Expiration\",\"checkoutCardCvv\":\"CVV\",\"checkoutCardPostalCode\":\"Postal Code\",\"checkoutCardFullname\":\"Full Name\",\"checkoutIdealSelectBankText\":\"Select Bank\",\"checkoutFpxSelectBankText\":\"Select Bank\",\"runningOrderPlacedTitle\":\"Order Placed Successfully\",\"runningOrderPlacedSub\":\"Waiting for the restaurant to confirm your order\",\"runningOrderPreparingTitle\":\"Chef at work!!\",\"runningOrderPreparingSub\":\"Restaurant is preparing your order\",\"runningOrderOnwayTitle\":\"Vroom Vroom!!\",\"runningOrderOnwaySub\":\"Order has been picked up and is on its way\",\"runningOrderDeliveryAssignedTitle\":\"Delivery Guy Assigned\",\"runningOrderDeliveryAssignedSub\":\"On the way to pick up your order.\",\"runningOrderCanceledTitle\":\"Order Canceled\",\"runningOrderCanceledSub\":\"Sorry. Your order has been canceled.\",\"runningOrderReadyForPickup\":\"Food is Ready\",\"runningOrderReadyForPickupSub\":\"Your order is ready for self pickup.\",\"awaitingPaymentStatusText\":\"Awaiting Payment\",\"paymentFailedStatusText\":\"Payment Failed\",\"runningOrderDelivered\":\"Order Delivered\",\"runningOrderDeliveredSub\":\"The order has been delivered to you. Enjoy.\",\"runningOrderRefreshButton\":\"Refresh Order Status\",\"deliveryGuyAfterName\":\"is your delivery valet today.\",\"vehicleText\":\"Vehicle:\",\"callNowButton\":\"Call Now\",\"allowLocationAccessMessage\":\"Kindly allow location access for live tracking.\",\"trackOrderText\":\"Track Order\",\"orderPlacedStatusText\":\"Order Placed\",\"preparingOrderStatusText\":\"Preparing Order\",\"deliveryGuyAssignedStatusText\":\"Delivery Guy Assigned\",\"orderPickedUpStatusText\":\"Order Picked Up\",\"deliveredStatusText\":\"Delivered\",\"canceledStatusText\":\"Canceled\",\"readyForPickupStatusText\":\"Ready For Pickup\",\"deliveryGuyNewOrderNotificationMsg\":\"A New Order is Waiting !!!\",\"deliveryGuyNewOrderNotificationMsgSub\":\"New Order Notification\",\"runningOrderDeliveryPin\":\"Delivery Pin:\",\"awaitingPaymentTitle\":\"Awaiting Payment\",\"awaitingPaymentSubTitle\":\"Awaiting payment from your bank. Order will be canceled if not processed in time.\",\"accountMyAccount\":\"My Account\",\"accountManageAddress\":\"Manage Address\",\"addressDoesnotDeliverToText\":\"Does not deliver to\",\"accountMyOrders\":\"My Orders\",\"accountHelpFaq\":\"Help & FAQs\",\"accountLogout\":\"Logout\",\"accountMyWallet\":\"My Wallet\",\"noOrdersText\":\"You have not placed any order yet.\",\"orderCancelledText\":\"Order Cancelled\",\"chooseAvatarText\":\"Choose your avatar\",\"searchAreaPlaceholder\":\"Search your area...\",\"searchPopularPlaces\":\"Popular Places\",\"useCurrentLocationText\":\"Use Current Location\",\"gpsAccessNotGrantedMsg\":\"GPS access is not granted or was denied.\",\"yourLocationText\":\"YOUR LOCATION\",\"editAddressAddress\":\"Address\",\"editAddressTag\":\"Tag\",\"addressTagPlaceholder\":\"Eg. Home, Work\",\"buttonSaveAddress\":\"Save Address\",\"locationSavedAddresses\":\"Saved Addresses\",\"deleteAddressText\":\"Delete\",\"noAddressText\":\"You don\'t have any saved addresses.\",\"noWalletTransactionsText\":\"No Wallet Transactions Yet!!!\",\"walletDepositText\":\"Deposit\",\"walletWithdrawText\":\"Withdraw\",\"payPartialWithWalletText\":\"Pay partial amount with wallet\",\"willbeDeductedText\":\"will be deducted from your balance of\",\"payFullWithWalletText\":\"Pay full amount with Wallet.\",\"orderPaymentWalletComment\":\"Payment for order:\",\"orderPartialPaymentWalletComment\":\"Partial payment for order:\",\"orderRefundWalletComment\":\"Refund for order cancellation.\",\"orderPartialRefundWalletComment\":\"Partial Refund for order cancellation.\",\"walletRedeemBtnText\":\"Redeem\",\"cancelOrderMainButton\":\"Cancel Order\",\"willBeRefundedText\":\"will be refunded back to your wallet.\",\"willNotBeRefundedText\":\"No Refund will be made to your wallet as the restaurant has already prepared the order.\",\"orderCancellationConfirmationText\":\"Do you want to cancel this order?\",\"yesCancelOrderBtn\":\"Yes, Cancel Order\",\"cancelGoBackBtn\":\"Go back\",\"deliveryWelcomeMessage\":\"Welcome\",\"deliveryAcceptedOrdersTitle\":\"Accepted Orders\",\"deliveryNoOrdersAccepted\":\"No Orders Accepted Yet\",\"deliveryNewOrdersTitle\":\"New Orders\",\"deliveryNoNewOrders\":\"No New Orders Yet\",\"deliveryOrderItems\":\"Order Items\",\"deliveryRestaurantAddress\":\"Restaurant Address\",\"deliveryDeliveryAddress\":\"Delivery Address\",\"deliveryGetDirectionButton\":\"Get Direction\",\"deliveryOnlinePayment\":\"Online Payment\",\"deliveryCashOnDelivery\":\"Cash On Delivery\",\"deliveryDeliveryPinPlaceholder\":\"ENTER DELIVERY PIN\",\"deliveryAcceptOrderButton\":\"Accept\",\"deliveryPickedUpButton\":\"Picked Up\",\"deliveryDeliveredButton\":\"Delivered\",\"deliveryOrderCompletedButton\":\"Order Completed\",\"deliveryAlreadyAccepted\":\"This delivery has been accepted by someone else.\",\"deliveryInvalidDeliveryPin\":\"Incorrect delivery pin. Please try again.\",\"deliveryLogoutDelivery\":\"Logout\",\"deliveryLogoutConfirmation\":\"Are you sure?\",\"deliveryOrdersRefreshBtn\":\"Refresh\",\"deliveryOrderPlacedText\":\"Order Placed\",\"deliveryFooterNewTitle\":\"New Orders\",\"deliveryFooterAcceptedTitle\":\"Accepted\",\"deliveryFooterAccount\":\"Account\",\"deliveryEarningsText\":\"Earnings\",\"deliveryCollectionText\":\"COD In-Hand\",\"deliveryOnGoingText\":\"On-Going\",\"deliveryCompletedText\":\"Completed\",\"deliveryCommissionMessage\":\"Commission for order:\",\"updatingMessage\":\"Updating OderNow\",\"categoriesFiltersText\":\"Filters\",\"categoriesNoRestaurantsFoundText\":\"No Restaurants Found\",\"deliveryTotalEarningsText\":\"Total Earnings\",\"deliveryUsePhoneToAccessMsg\":\"Use your mobile phone to login into the Delivery Application.\",\"deliveryMaxOrderReachedMsg\":\"Max Order Reached\",\"inAppCloseButton\":\"Close\",\"inAppOpenLinkButton\":\"Open\",\"iOSPWAPopupTitle\":\"Add to Home Screen\",\"iOSPWAPopupBody\":\"This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.\",\"iOSPWAPopupShareButtonLabel\":\"1) Press the \'Share\' button\",\"iOSPWAPopupAddButtonLabel\":\"2) Press \'Add to Home Screen\'\",\"iOSPWAPopupCloseButtonLabel\":\"Cancel\",\"offlineTitleMessage\":\"You Are Offline\",\"offlineSubTitleMessage\":\"Please check your internet connection.\"}', '2020-12-14 16:36:34', '2020-12-21 17:52:53', 0, 1),
(2, 'සිංහල', '{\"desktopHeading\":\"\\u0d94\\u0db6\\u0dda \\u0d86\\u0dc3\\u0db1\\u0dca\\u0db1\\u0dad\\u0db8 \\u0d86\\u0db4\\u0db1\\u0dc1\\u0dcf\\u0dbd\\u0dcf\\u0dc0\\u0dd9\\u0db1\\u0dca \\u0d94\\u0db6 \\u0d9a\\u0dd0\\u0db8\\u0dad\\u0dd2\\u0db8 \\u0d86\\u0dc4\\u0dcf\\u0dbb \\u0d87\\u0dab\\u0dc0\\u0dd4\\u0db8\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"desktopSubHeading\":\"<div>\\u0d94\\u0db6 \\u0d9a\\u0dd0\\u0db8\\u0dad\\u0dd2\\u0db8 \\u0d86\\u0dc4\\u0dcf\\u0dbb \\u0dbd\\u0db6\\u0dcf \\u0d9c\\u0dd0\\u0db1\\u0dd3\\u0db8\\u0da7 \\u0db4\\u0dc4\\u0dc3\\u0dd4\\u0db8 \\u0d9a\\u0dca\\u200d\\u0dbb\\u0db8\\u0dba. \\u0d85\\u0db4\\u0dd2 \\u0dc4\\u0ddc\\u0db3\\u0db8 \\u0d85\\u0dc0\\u0db1\\u0dca\\u0dc4\\u0dbd\\u0dca \\u0dc3\\u0dc4 \\u0d85\\u0dad\\u0dd4\\u0dbb\\u0dd4\\u0db4\\u0dc3 \\u0dc0\\u0dbd\\u0dd2\\u0db1\\u0dca \\u0d86\\u0dc4\\u0dcf\\u0dbb \\u0d94\\u0db6\\u0dda \\u0daf\\u0ddc\\u0dbb\\u0d9a\\u0da9\\u0da7 \\u0d9c\\u0dd9\\u0db1\\u0dd9\\u0db8\\u0dd4. \\u0d94\\u0db6\\u0da7 \\u0dad\\u0ddd\\u0dbb\\u0dcf \\u0d9c\\u0dd0\\u0db1\\u0dd3\\u0db8\\u0da7 \\u0d94\\u0db6 \\u0db4\\u0dca\\u200d\\u0dbb\\u0daf\\u0dda\\u0dc1\\u0dba\\u0dda \\u0d87\\u0dad\\u0dd2 \\u0dc3\\u0dd2\\u0dba\\u0dbd\\u0dd4\\u0db8 \\u0d85\\u0dc0\\u0db1\\u0dca\\u0dc4\\u0dbd\\u0dca\\u0dc0\\u0dbd \\u0dc3\\u0dd2\\u0dba\\u0dbd\\u0dd4\\u0db8 \\u0d86\\u0dc4\\u0dcf\\u0dbb \\u0dc0\\u0dbb\\u0dca\\u0d9c \\u0db8\\u0dd9\\u0dc4\\u0dd2 \\u0d87\\u0dad.<\\/div>\",\"desktopUseAppButton\":\"Use App\",\"desktopAchievementOneTitle\":\"Restaurants\",\"desktopAchievementOneSub\":\"2300+\",\"desktopAchievementTwoTitle\":\"Items\",\"desktopAchievementTwoSub\":\"65000+\",\"desktopAchievementThreeTitle\":\"Customers\",\"desktopAchievementThreeSub\":\"1M+\",\"desktopAchievementFourTitle\":\"Deliveries\",\"desktopAchievementFourSub\":\"5M+\",\"desktopFooterAddress\":\"#1201, Someplace, Near Somewhere\",\"desktopFooterSocialHeader\":\"We Are Social\",\"desktopSocialFacebookLink\":\"https:\\/\\/www.facebook.com\",\"desktopSocialGoogleLink\":\"https:\\/\\/www.google.com\",\"desktopSocialYoutubeLink\":null,\"desktopSocialInstagramLink\":\"https:\\/\\/www.instagram.com\",\"gdprMessage\":\"We use Cookies to give you the best possible service. By continuing to browse our site you are agreeing to our use of Cookies\",\"gdprConfirmButton\":\"Okay\",\"changeLanguageText\":\"Change Language\",\"firstScreenHeading\":\"\\u0d94\\u0db6\\u0dda \\u0d86\\u0dc3\\u0db1\\u0dca\\u0db1\\u0dad\\u0db8 \\u0d86\\u0db4\\u0db1\\u0dc1\\u0dcf\\u0dbd\\u0dcf\\u0dc0\\u0dd9\\u0db1\\u0dca \\u0d94\\u0db6 \\u0d9a\\u0dd0\\u0db8\\u0dad\\u0dd2\\u0db8 \\u0d86\\u0dc4\\u0dcf\\u0dbb \\u0d87\\u0dab\\u0dc0\\u0dd4\\u0db8\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"firstScreenSubHeading\":\"\\u0d87\\u0dab\\u0dc0\\u0dd4\\u0db8\\u0dca \\u0d9a\\u0dd2\\u0dbb\\u0dd3\\u0db8\\u0da7 \\u0dc4\\u0ddc\\u0daf\\u0db8 \\u0dc3\\u0dc4 \\u0dc5\\u0d9c\\u0db8 \\u0d85\\u0dc0\\u0db1\\u0dca\\u0dc4\\u0dbd\\u0d9a\\u0dca \\u0db6\\u0dd0\\u0dbd\\u0dd3\\u0db8\\u0da7 \\u0dc3\\u0dd6\\u0daf\\u0dcf\\u0db1\\u0db8\\u0dca\\u0daf?\",\"firstScreenSetupLocation\":\"\\u0d94\\u0db6\\u0dda \\u0dc3\\u0dca\\u0dae\\u0dcf\\u0db1\\u0dba \\u0dc3\\u0d9a\\u0dc3\\u0db1\\u0dca\\u0db1.\",\"firstScreenWelcomeMessage\":\"\\u0d86\\u0dba\\u0dd4\\u0db6\\u0ddd\\u0dc0\\u0db1\\u0dca...\",\"firstScreenLoginText\":\"Have an account?\",\"firstScreenLoginBtn\":\"Login\",\"loginErrorMessage\":\"\\u0d94\\u0db6 \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dc5 \\u0dad\\u0ddc\\u0dbb\\u0dad\\u0dd4\\u0dbb\\u0dd4 \\u0db1\\u0dd2\\u0dc0\\u0dd0\\u0dbb\\u0daf\\u0dd2 \\u0db1\\u0ddc\\u0dc0\\u0dda. \\u0d9a\\u0dbb\\u0dd4\\u0dab\\u0dcf\\u0d9a\\u0dbb \\u0db1\\u0dd0\\u0dc0\\u0dad \\u0d8b\\u0dad\\u0dca\\u0dc3\\u0dcf\\u0dc4 \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"pleaseWaitText\":\"\\u0db8\\u0daf\\u0d9a\\u0dca \\u0dbb\\u0dd0\\u0daf\\u0dd3 \\u0dc3\\u0dd2\\u0da7\\u0dd2\\u0db1\\u0dca\\u0db1..\",\"loginLoginTitle\":\"LOGIN\",\"loginLoginSubTitle\":\"Enter your email and password\",\"loginLoginEmailLabel\":\"Email\",\"loginLoginPasswordLabel\":\"Password\",\"loginDontHaveAccount\":\"Don\'t have an account yet?\",\"firstScreenRegisterBtn\":\"Register\",\"registerRegisterTitle\":\"Register\",\"registerRegisterSubTitle\":\"Regsiter now for free\",\"loginLoginNameLabel\":\"Name\",\"loginLoginPhoneLabel\":\"Phone\",\"regsiterAlreadyHaveAccount\":\"Already have an account?\",\"fieldValidationMsg\":\"\\u0db8\\u0dd9\\u0dba \\u0d85\\u0db1\\u0dd2\\u0dc0\\u0dcf\\u0dbb\\u0dca\\u0dba\\u0dba\\u0dd9\\u0db1\\u0dca\\u0db8 \\u0dc3\\u0db8\\u0dca\\u0db4\\u0dd6\\u0dbb\\u0dca\\u0dab \\u0d9a\\u0dc5 \\u0dba\\u0dd4\\u0dad\\u0dd4 \\u0dba.\",\"nameValidationMsg\":\"\\u0d94\\u0db6\\u0d9c\\u0dda \\u0dc3\\u0db8\\u0dca\\u0db4\\u0dd6\\u0dbb\\u0dca\\u0dab \\u0db1\\u0db8\",\"emailValidationMsg\":\"Please enter email.\",\"phoneValidationMsg\":\"\\u0d94\\u0db6\\u0d9c\\u0dda \\u0da2\\u0d82\\u0d9c\\u0db8 \\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1 \\u0d85\\u0d82\\u0d9a\\u0dba \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1. (\\u0d8b\\u0daf\\u0dcf +94711234567)\",\"minimumLengthValidationMessage\":\"\\u0db8\\u0dda \\u0dc3\\u0daf\\u0dc4\\u0dcf \\u0d85\\u0dc0\\u0db8 \\u0d85\\u0d9a\\u0dd4\\u0dbb\\u0dd4 \\u0dc4\\u0ddd \\u0d89\\u0dbd\\u0d9a\\u0dca\\u0d9a\\u0db8\\u0dca \\u0d85\\u0da7\\u0d9a\\u0dca\\u0dc0\\u0dad\\u0dca \\u0dad\\u0dd2\\u0db6\\u0dd2\\u0dba \\u0dba\\u0dd4\\u0dad\\u0dd4 \\u0dba.\",\"emailPhoneAlreadyRegistered\":\"\\u0db6 \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dc5 Email \\u0dc4\\u0ddd \\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1 \\u0d85\\u0d82\\u0d9a\\u0dba \\u0db8\\u0dd3\\u0da7 \\u0db4\\u0dd9\\u0dbb \\u0dbd\\u0dd2\\u0dba\\u0dcf\\u0db4\\u0daf\\u0dd2\\u0d82\\u0da0\\u0dd2 \\u0dc0\\u0dd3 \\u0d87\\u0dad. \\u0d9a\\u0dbb\\u0dd4\\u0dab\\u0dcf\\u0d9a\\u0dbb Login \\u0dc0\\u0db1\\u0dca\\u0db1.\",\"emailPassDonotMatch\":\"Email \\u0dbd\\u0dd2\\u0db4\\u0dd2\\u0db1\\u0dba \\u0dc3\\u0daf\\u0dc4\\u0dcf \\u0d94\\u0db6 \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dc5  \\u0db8\\u0dd4\\u0dbb\\u0db4\\u0daf\\u0dba \\u0db1\\u0ddc\\u0d9c\\u0dd0\\u0dc5\\u0db4\\u0dda.\",\"enterPhoneToVerify\":\"\\u0d94\\u0db6\\u0dda \\u0d85\\u0db1\\u0db1\\u0dca\\u200d\\u0dba\\u0dad\\u0dcf\\u0dc0\\u0dba \\u0dad\\u0dc4\\u0dc0\\u0dd4\\u0dbb\\u0dd4 \\u0d9a\\u0dd2\\u0dbb\\u0dd3\\u0db8 \\u0dc3\\u0daf\\u0dc4\\u0dcf \\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1 \\u0d85\\u0d82\\u0d9a\\u0dba \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"invalidOtpMsg\":\"\\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1\\u0dba\\u0da7 \\u0dbd\\u0dd0\\u0db6\\u0dd4\\u0dab\\u0dd4 \\u0dbb\\u0dc4\\u0dc3\\u0dca \\u0d85\\u0d82\\u0d9a\\u0dba \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dd2\\u0dbb\\u0dd3\\u0db8 \\u0dc0\\u0dd0\\u0dbb\\u0daf\\u0dd2 \\u0dba. \\u0d9a\\u0dbb\\u0dd4\\u0dab\\u0dcf\\u0d9a\\u0dbb \\u0db1\\u0dd0\\u0dc0\\u0dad \\u0d8b\\u0dad\\u0dca\\u0dc3\\u0dcf\\u0dc4 \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"otpSentMsg\":\"\\u0dbb\\u0dc4\\u0dc3\\u0dca \\u0d85\\u0d82\\u0d9a\\u0dba \\u0db8\\u0dd9\\u0db8 \\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1 \\u0d85\\u0d82\\u0d9a\\u0dba\\u0da7 \\u0dba\\u0ddc\\u0db8\\u0dd4 \\u0d9a\\u0dbb\\u0db1 \\u0dbd\\u0daf\\u0dd3.\",\"resendOtpMsg\":\"\\u0dbb\\u0dc4\\u0dc3\\u0dca \\u0d85\\u0d82\\u0d9a\\u0dba \\u0db8\\u0dd9\\u0db8 \\u0daf\\u0dd4\\u0dbb\\u0d9a\\u0dad\\u0db1 \\u0d85\\u0d82\\u0d9a\\u0dba\\u0da7 \\u0db1\\u0dd0\\u0dc0\\u0dad \\u0dba\\u0dc0\\u0db1\\u0dca\\u0db1.\",\"resendOtpCountdownMsg\":\"\\u0dbb\\u0dc4\\u0dc3\\u0dca \\u0d85\\u0d82\\u0d9a\\u0dba \\u0db1\\u0dd0\\u0dc0\\u0dad \\u0dba\\u0dd0\\u0dc0\\u0dd3\\u0db8\\u0da7 \\u0d94\\u0db6 \\u0dbb\\u0dd0\\u0daf\\u0dd3 \\u0dc3\\u0dd2\\u0da7\\u0dd2\\u0dba \\u0dba\\u0dd4\\u0dad\\u0dd4 \\u0dc0\\u0dda\\u0dbd\\u0dcf\\u0dc0\",\"verifyOtpBtnText\":\"Verify OTP\",\"socialWelcomeText\":\"Hi\",\"socialLoginOrText\":\"OR\",\"forgotPasswordLinkText\":\"\\u0d94\\u0db6\\u0dda Password \\u0d91\\u0d9a \\u0d85\\u0db8\\u0dad\\u0d9a \\u0daf?\",\"resetPasswordPageTitle\":\"Reset Password\",\"resetPasswordPageSubTitle\":\"\\u0d89\\u0daf\\u0dd2\\u0dbb\\u0dd2\\u0dba\\u0da7 \\u0dba\\u0dcf\\u0db8 \\u0dc3\\u0daf\\u0dc4\\u0dcf \\u0d94\\u0db6\\u0dda email \\u0d91\\u0d9a \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"userNotFoundErrorMessage\":\"No user found with this\",\"invalidOtpErrorMessage\":\"Invalid OTP Entered\",\"sendOtpOnEmailButtonText\":\"Send OTP on Email\",\"alreadyHaveResetOtpButtonText\":\"I already have an OTP\",\"dontHaveResetOtpButtonText\":\"I dont have an OTP\",\"enterResetOtpMessageText\":\"Enter the OTP sent to you email\",\"verifyResetOtpButtonText\":\"Verify OTP\",\"enterNewPasswordText\":\"Please enter a new password below\",\"newPasswordLabelText\":\"New Password\",\"setNewPasswordButtonText\":\"Set New Password\",\"registrationPolicyMessage\":null,\"customHomeMessage\":\"<p><br><\\/p>\",\"deliveryTypeDelivery\":\"Delivery\",\"deliveryTypeSelfPickup\":\"Self Pickup\",\"noRestaurantMessage\":\"No restaurants are available.\",\"restaurantCountText\":\"Restaurants Near You\",\"restaurantFeaturedText\":\"Featured\",\"homePageMinsText\":\"MINS\",\"homePageForTwoText\":\"FOR TWO\",\"footerNearme\":\"Near Me\",\"footerExplore\":\"Explore\",\"footerCart\":\"Cart\",\"footerAccount\":\"Account\",\"footerAlerts\":\"Alerts\",\"exploreNoResults\":\"No Items or Restaurants Found\",\"restaurantNotActiveMsg\":\"Not Accepting Orders\",\"mockSearchPlaceholder\":\"Search for stores or items...\",\"markAllAlertReadText\":\"\\u0dc3\\u0dd2\\u0dba\\u0dbd\\u0dca\\u0dbd \\u0d9a\\u0dd2\\u0dba\\u0dc0\\u0dd6 \\u0dbd\\u0dd9\\u0dc3 \\u0dc3\\u0dbd\\u0d9a\\u0dd4\\u0dab\\u0dd4 \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"noNewAlertsText\":\"\\u0d85\\u0dbd\\u0dd4\\u0dad\\u0dd2\\u0db1\\u0dca \\u0daf\\u0dd0\\u0db1\\u0dca\\u0dc0\\u0dd3\\u0db8\\u0dca \\u0db1\\u0ddc\\u0db8\\u0dd0\\u0dad.\",\"restaurantSearchPlaceholder\":\"Search for restaurants and items...\",\"exploreRestautantsText\":\"RESTAURANTS\",\"exploreItemsText\":\"ITEMS\",\"searchAtleastThreeCharsMsg\":\"Enter at least 3 characters to search.\",\"exlporeByRestaurantText\":\"By\",\"recommendedBadgeText\":\"Recommended\",\"popularBadgeText\":\"Popular\",\"newBadgeText\":\"New\",\"itemsPageRecommendedText\":\"RECOMMENDED\",\"floatCartViewCartText\":\"View Cart\",\"floatCartItemsText\":\"Items\",\"customizableItemText\":\"Customizable\",\"customizationHeading\":\"Customizations\",\"customizationDoneBtnText\":\"Continue\",\"pureVegText\":\"Pure Veg\",\"certificateCodeText\":\"Certificate Code:\",\"showMoreButtonText\":\"Show More\",\"showLessButtonText\":\"Show Less\",\"notAcceptingOrdersMsg\":\"Currently Not Accepting Any Orders\",\"itemSearchPlaceholder\":\"Search for items...\",\"itemSearchText\":\"Search results for:\",\"itemSearchNoResultText\":\"No results found for:\",\"itemsMenuButtonText\":\"MENU\",\"itemPercentageDiscountText\":\"% OFF\",\"customCartMessage\":\"<p><br><\\/p>\",\"cartPageTitle\":\"Cart\",\"cartItemsInCartText\":\"Items in Cart\",\"cartEmptyText\":\"Your Cart is Empty\",\"cartSuggestionPlaceholder\":\"Suggestion for the restaurant...\",\"cartCouponText\":\"Coupon\",\"cartApplyCoupon\":\"Apply Coupon\",\"cartInvalidCoupon\":\"Invalid Coupon\",\"cartCouponOffText\":\"OFF\",\"couponNotLoggedin\":\"Login to apply coupon\",\"cartBillDetailsText\":\"Bill Details\",\"cartItemTotalText\":\"Item Total\",\"cartToPayText\":\"To Pay\",\"cartDeliveryCharges\":\"Delivery Charges\",\"cartRestaurantCharges\":\"Restaurant Charges\",\"cartSetYourAddress\":\"Set Your Address\",\"buttonNewAddress\":\"New Address\",\"cartChangeLocation\":\"Change\",\"cartDeliverTo\":\"Deliver To\",\"checkoutSelectPayment\":\"Select Payment Method\",\"cartLoginHeader\":\"Almost There\",\"cartLoginSubHeader\":\"Login or Signup to place your order\",\"cartLoginButtonText\":\"Continue\",\"selectedSelfPickupMessage\":\"You have selected Self Pickup.\",\"taxText\":\"Tax\",\"itemsRemovedMsg\":\"Items added from the previous restaurant have been removed.\",\"ongoingOrderMsg\":\"You have some on-going orders. VIEW\",\"cartRestaurantNotOperational\":\"Restaurant is not operational on your selected location.\",\"restaurantMinOrderMessage\":\"Min cart value should be atleast\",\"cartRemoveItemButton\":\"Remove Item\",\"cartItemNotAvailable\":\"Item Not Available\",\"orderTextTotal\":\"Total:\",\"checkoutPageTitle\":\"Checkout\",\"checkoutPaymentListTitle\":\"Select your prefered payment method\",\"checkoutPaymentInProcess\":\"Payment in process. Do not hit refresh or go back.\",\"checkoutStripeText\":\"Stripe\",\"checkoutStripeSubText\":\"Online Payment\",\"checkoutCodText\":\"COD\",\"checkoutCodSubText\":\"Cash On Delivery\",\"paystackPayText\":\"PAY WITH PAYSLACK\",\"checkoutPaytmText\":\"Paytm\",\"checkoutPaytmSubText\":\"Pay with Paytm Wallet | Credit\\/Debit Card\",\"checkoutRazorpayText\":\"Razorpay\",\"checkoutRazorpaySubText\":\"Pay with cards, wallet or UPI\",\"userInActiveMessage\":\"You are banned from placing orders\",\"tooManyApiCallMessage\":\"Please try again in a minute...\",\"checkoutStripeIdealText\":\"Stripe Ideal\",\"checkoutStripeIdealSubText\":\"Pay with Ideal Netherlands\",\"checkoutStripeFpxText\":\"Stripe FPX\",\"checkoutStripeFpxSubText\":\"Pay with FPX Malaysia\",\"checkoutMercadoPagoText\":\"MercadoPago\",\"checkoutMercadoPagoSubText\":\"Pay with MerecadoPago for Brazil\",\"checkoutPayMongoText\":\"Pay with PayMongo\",\"checkoutPayMongoSubText\":\"Pay with PayMongo for Philippines\",\"checkoutPayText\":\"Pay\",\"checkoutCardNumber\":\"Card Number\",\"checkoutCardExpiration\":\"Expiration\",\"checkoutCardCvv\":\"CVV\",\"checkoutCardPostalCode\":\"Postal Code\",\"checkoutCardFullname\":\"Full Name\",\"checkoutIdealSelectBankText\":\"Select Bank\",\"checkoutFpxSelectBankText\":\"Select Bank\",\"runningOrderPlacedTitle\":\"Order Placed Successfully\",\"runningOrderPlacedSub\":\"Waiting for the restaurant to confirm your order\",\"runningOrderPreparingTitle\":\"Chef at work!!\",\"runningOrderPreparingSub\":\"Restaurant is preparing your order\",\"runningOrderOnwayTitle\":\"Vroom Vroom!!\",\"runningOrderOnwaySub\":\"Order has been picked up and is on its way\",\"runningOrderDeliveryAssignedTitle\":\"Delivery Guy Assigned\",\"runningOrderDeliveryAssignedSub\":\"On the way to pick up your order.\",\"runningOrderCanceledTitle\":\"Order Canceled\",\"runningOrderCanceledSub\":\"Sorry. Your order has been canceled.\",\"runningOrderReadyForPickup\":\"Food is Ready\",\"runningOrderReadyForPickupSub\":\"Your order is ready for self pickup.\",\"awaitingPaymentStatusText\":\"Awaiting Payment\",\"paymentFailedStatusText\":\"Payment Failed\",\"runningOrderDelivered\":\"Order Delivered\",\"runningOrderDeliveredSub\":\"The order has been delivered to you. Enjoy.\",\"runningOrderRefreshButton\":\"Refresh Order Status\",\"deliveryGuyAfterName\":\"is your delivery valet today.\",\"vehicleText\":\"Vehicle:\",\"callNowButton\":\"Call Now\",\"allowLocationAccessMessage\":\"Kindly allow location access for live tracking.\",\"trackOrderText\":\"Track Order\",\"orderPlacedStatusText\":\"Order Placed\",\"preparingOrderStatusText\":\"Preparing Order\",\"deliveryGuyAssignedStatusText\":\"Delivery Guy Assigned\",\"orderPickedUpStatusText\":\"Order Picked Up\",\"deliveredStatusText\":\"Delivered\",\"canceledStatusText\":\"Canceled\",\"readyForPickupStatusText\":\"Ready For Pickup\",\"deliveryGuyNewOrderNotificationMsg\":\"A New Order is Waiting !!!\",\"deliveryGuyNewOrderNotificationMsgSub\":\"New Order Notification\",\"runningOrderDeliveryPin\":\"Delivery Pin:\",\"awaitingPaymentTitle\":\"Awaiting Payment\",\"awaitingPaymentSubTitle\":\"Awaiting payment from your bank. Order will be canceled if not processed in time.\",\"accountMyAccount\":\"My Account\",\"accountManageAddress\":\"Manage Address\",\"addressDoesnotDeliverToText\":\"Does not deliver to\",\"accountMyOrders\":\"My Orders\",\"accountHelpFaq\":\"Help & FAQs\",\"accountLogout\":\"Logout\",\"accountMyWallet\":\"My Wallet\",\"noOrdersText\":\"You have not placed any order yet.\",\"orderCancelledText\":\"Order Cancelled\",\"chooseAvatarText\":\"Choose your avatar\",\"searchAreaPlaceholder\":\"Search your area...\",\"searchPopularPlaces\":\"Popular Places\",\"useCurrentLocationText\":\"\\u0daf\\u0dd0\\u0db1\\u0dca \\u0dc3\\u0dd2\\u0da7\\u0dd2\\u0db1 \\u0dc3\\u0dca\\u0dae\\u0dcf\\u0db1\\u0dba \\u0dc3\\u0d9a\\u0dc3\\u0db1\\u0dca\\u0db1\",\"gpsAccessNotGrantedMsg\":\"GPS \\u0db4\\u0dca\\u200d\\u0dbb\\u0dc0\\u0dda\\u0dc1\\u0dba \\u0dbd\\u0db6\\u0dcf \\u0db1\\u0ddc\\u0daf\\u0dda.\",\"yourLocationText\":\"\\u0dc3\\u0dd2\\u0dad\\u0dd2\\u0dba\\u0db8\\u0dd9\\u0db1\\u0dca \\u0d94\\u0db6 \\u0dc3\\u0dd2\\u0da7\\u0dd2\\u0db1 \\u0dc3\\u0dca\\u0dae\\u0dcf\\u0db1\\u0dba \\u0db1\\u0dd2\\u0dc0\\u0dd0\\u0dbb\\u0daf\\u0dd2\\u0dc0 \\u0daf\\u0d9a\\u0dca\\u0dc0\\u0db1\\u0dca\\u0db1.\",\"editAddressAddress\":\"\\u0db1\\u0dd2\\u0dc0\\u0dc3\\u0dda \\u0dbd\\u0dd2\\u0db4\\u0dd2\\u0db1\\u0dba \\u0d87\\u0dad\\u0dd4\\u0dc5\\u0dad\\u0dca \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"editAddressTag\":\"Tag\",\"addressTagPlaceholder\":\"Eg. Home, Work\",\"buttonSaveAddress\":\"\\u0dbd\\u0dd2\\u0db4\\u0dd2\\u0db1\\u0dba \\u0dad\\u0dc4\\u0dc0\\u0dd4\\u0dbb\\u0dd4 \\u0d9a\\u0dbb\\u0db1\\u0dca\\u0db1.\",\"locationSavedAddresses\":\"Saved Addresses\",\"deleteAddressText\":\"\\u0db8\\u0d9a\\u0db1\\u0dca\\u0db1.\",\"noAddressText\":\"\\u0d94\\u0db6 \\u0db8\\u0dd3\\u0da7 \\u0db4\\u0dd9\\u0dbb \\u0dbd\\u0dd2\\u0db4\\u0dd2\\u0db1\\u0dba\\u0db1\\u0dca Save \\u0d9a\\u0dbb \\u0db1\\u0ddc\\u0db8\\u0dd0\\u0dad.\",\"noWalletTransactionsText\":\"No Wallet Transactions Yet!!!\",\"walletDepositText\":\"Deposit\",\"walletWithdrawText\":\"Withdraw\",\"payPartialWithWalletText\":\"Pay partial amount with wallet\",\"willbeDeductedText\":\"will be deducted from your balance of\",\"payFullWithWalletText\":\"Pay full amount with Wallet.\",\"orderPaymentWalletComment\":\"Payment for order:\",\"orderPartialPaymentWalletComment\":\"Partial payment for order:\",\"orderRefundWalletComment\":\"Refund for order cancellation.\",\"orderPartialRefundWalletComment\":\"Partial Refund for order cancellation.\",\"walletRedeemBtnText\":\"Redeem\",\"cancelOrderMainButton\":\"Cancel Order\",\"willBeRefundedText\":\"will be refunded back to your wallet.\",\"willNotBeRefundedText\":\"No Refund will be made to your wallet as the restaurant has already prepared the order.\",\"orderCancellationConfirmationText\":\"Do you want to cancel this order?\",\"yesCancelOrderBtn\":\"Yes, Cancel Order\",\"cancelGoBackBtn\":\"Go back\",\"deliveryWelcomeMessage\":\"Welcome\",\"deliveryAcceptedOrdersTitle\":\"Accepted Orders\",\"deliveryNoOrdersAccepted\":\"No Orders Accepted Yet\",\"deliveryNewOrdersTitle\":\"New Orders\",\"deliveryNoNewOrders\":\"No New Orders Yet\",\"deliveryOrderItems\":\"Order Items\",\"deliveryRestaurantAddress\":\"Restaurant Address\",\"deliveryDeliveryAddress\":\"Delivery Address\",\"deliveryGetDirectionButton\":\"Get Direction\",\"deliveryOnlinePayment\":\"Online Payment\",\"deliveryCashOnDelivery\":\"Cash On Delivery\",\"deliveryDeliveryPinPlaceholder\":\"ENTER DELIVERY PIN\",\"deliveryAcceptOrderButton\":\"Accept\",\"deliveryPickedUpButton\":\"Picked Up\",\"deliveryDeliveredButton\":\"Delivered\",\"deliveryOrderCompletedButton\":\"Order Completed\",\"deliveryAlreadyAccepted\":\"This delivery has been accepted by someone else.\",\"deliveryInvalidDeliveryPin\":\"Incorrect delivery pin. Please try again.\",\"deliveryLogoutDelivery\":\"Logout Delivery\",\"deliveryLogoutConfirmation\":\"Are you sure?\",\"deliveryOrdersRefreshBtn\":\"Refresh\",\"deliveryOrderPlacedText\":\"Order Placed\",\"deliveryFooterNewTitle\":\"New Orders\",\"deliveryFooterAcceptedTitle\":\"Accepted\",\"deliveryFooterAccount\":\"Account\",\"deliveryEarningsText\":\"Earnings\",\"deliveryCollectionText\":\"COD In-Hand\",\"deliveryOnGoingText\":\"On-Going\",\"deliveryCompletedText\":\"Completed\",\"deliveryCommissionMessage\":\"Commission for order:\",\"updatingMessage\":\"Updating System\",\"categoriesFiltersText\":\"Filters\",\"categoriesNoRestaurantsFoundText\":\"No Restaurants Found\",\"deliveryTotalEarningsText\":\"Total Earnings\",\"deliveryUsePhoneToAccessMsg\":\"Use your mobile phone to login to the Delivery Application.\",\"deliveryMaxOrderReachedMsg\":\"Max Order Limit Reached\",\"inAppCloseButton\":\"Close\",\"inAppOpenLinkButton\":\"Open\",\"iOSPWAPopupTitle\":\"Add to Home Screen\",\"iOSPWAPopupBody\":\"\\u0db8\\u0dd9\\u0db8 \\u0dc0\\u0dd9\\u0db6\\u0dca \\u0d85\\u0da9\\u0dc0\\u0dd2\\u0dba\\u0da7 \\u0d85\\u0daf\\u0dcf\\u0dbd App \\u0d91\\u0d9a Download \\u0d9a\\u0dbb\\u0d9c\\u0db1\\u0dca\\u0db1.\",\"iOSPWAPopupShareButtonLabel\":\"1) Press the \'Share\' button\",\"iOSPWAPopupAddButtonLabel\":\"2) Press \'Add to Home Screen\'\",\"iOSPWAPopupCloseButtonLabel\":\"Cancel\",\"offlineTitleMessage\":\"You Are Offline\",\"offlineSubTitleMessage\":\"\\u0d94\\u0db6 \\u0d85\\u0db1\\u0dca\\u0dad\\u0dbb\\u0dca\\u0da2\\u0dcf\\u0dbd\\u0dba \\u0dc3\\u0db8\\u0d9c \\u0dc3\\u0db8\\u0dca\\u0db6\\u0db1\\u0dca\\u0db0 \\u0dc0\\u0dd3 \\u0db1\\u0ddc\\u0db8\\u0dd0\\u0dad.\"}', '2020-12-15 04:17:16', '2020-12-15 04:35:08', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `auth_token` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `default_address_id` int(11) DEFAULT 0,
  `delivery_pin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `delivery_guy_detail_id` int(11) DEFAULT NULL,
  `avatar` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `auth_token`, `phone`, `default_address_id`, `delivery_pin`, `delivery_guy_detail_id`, `avatar`, `is_active`) VALUES
(1, 'ipm admin', 'admin@ipmceylon.com', NULL, '$2y$10$x82dhnUH8Xcyq0NTXqarxOOYiVVq.sJ691FbamsPSz4yjXHXQxn3G', 'pvns3eSbUsn3uKF2UxZhzgZMapMxTRpuuCPYKdo9tcZq3HUFyvZ0TekDFbRT', '2020-12-14 16:36:34', '2020-12-14 16:36:34', NULL, NULL, 0, '5RSYB', NULL, NULL, 1),
(2, 'admin 2', 'admin2@ipmceylon.com', NULL, '$2y$10$Qa3oq.UHM9y730X/mqNdEu/73GVI.PIYk6EAkFshLMs3vjoVpM7Iu', '5CcAtNhsYUylyXyAbtwnvFEweiHePNzTnogEpK81XHa49N61yoEmEHtvHniI', '2020-12-15 03:21:11', '2020-12-21 17:36:53', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29yZGVybm93LmxrL3B1YmxpYy9hcGkvbG9naW4iLCJpYXQiOjE2MDg1MzQ0MTMsIm5iZiI6MTYwODUzNDQxMywianRpIjoiMk1aUndDT1l3ZHZYMmxJOCIsInN1YiI6MiwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.kLUUw3tS1c77idAz-8zMy_mHpYFQec_HMj79r2VYx74', '0222', 2, 'MLXXK', NULL, NULL, 1),
(3, 'aa@aa.aa', 'aa@aa.aa', NULL, '$2y$10$gAHaM3PNIu3K/TqIuk11IuymxnQ1v408rlPBQZlwvq/629/JdvVeO', NULL, '2020-12-15 09:58:11', '2020-12-15 09:58:54', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29yZGVybm93LmxrL3B1YmxpYy9hcGkvcmVnaXN0ZXIiLCJpYXQiOjE2MDc5ODg0OTEsIm5iZiI6MTYwNzk4ODQ5MSwianRpIjoiWEdZc252RUg4RldtSmVSeSIsInN1YiI6MywicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.wRbByMgnlyTy6xwrWn5CmBR8DgOG_-ftRzOC-kA15Sw', '+94717580511', 1, 'FXXVP', NULL, 'user10', 1),
(4, 'Heshan', 'dinuthheshanj@gmail.com', NULL, '$2y$10$Osbn4/xYk1GPilTo1Ui9tOGTv9RIsti7UQ2XQr3w.ut6ME2CvE8bq', NULL, '2020-12-16 17:50:44', '2020-12-16 17:50:44', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL29yZGVybm93LmxrL3B1YmxpYy9hcGkvcmVnaXN0ZXIiLCJpYXQiOjE2MDgxMDMyNDQsIm5iZiI6MTYwODEwMzI0NCwianRpIjoiMnYwSUJNc1JJQzlsVE5wNSIsInN1YiI6NCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.09h3LAKrcukG-1ODe10Xd268EfiuRV9jOlcQerdq4PY', '+94779553722', 0, 'TGWTE', NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int(10) UNSIGNED NOT NULL,
  `holder_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `holder_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `balance` bigint(20) NOT NULL DEFAULT 0,
  `decimal_places` smallint(6) NOT NULL DEFAULT 2,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `holder_type`, `holder_id`, `name`, `slug`, `description`, `balance`, `decimal_places`, `created_at`, `updated_at`) VALUES
(1, 'App\\User', 1, 'Default Wallet', 'default', NULL, 0, 2, '2020-12-15 03:20:29', '2020-12-15 03:20:29'),
(2, 'App\\User', 2, 'Default Wallet', 'default', NULL, 0, 2, '2020-12-15 03:21:12', '2020-12-15 03:21:12'),
(3, 'App\\User', 3, 'Default Wallet', 'default', NULL, 0, 2, '2020-12-15 09:58:11', '2020-12-15 09:58:11'),
(4, 'App\\User', 4, 'Default Wallet', 'default', NULL, 0, 2, '2020-12-16 17:50:44', '2020-12-16 17:50:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accept_deliveries`
--
ALTER TABLE `accept_deliveries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accept_deliveries_order_id_unique` (`order_id`);

--
-- Indexes for table `addons`
--
ALTER TABLE `addons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addon_categories`
--
ALTER TABLE `addon_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addon_category_item`
--
ALTER TABLE `addon_category_item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alerts`
--
ALTER TABLE `alerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon_restaurant`
--
ALTER TABLE `coupon_restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_areas`
--
ALTER TABLE `delivery_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_area_restaurant`
--
ALTER TABLE `delivery_area_restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_collections`
--
ALTER TABLE `delivery_collections`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_collection_logs`
--
ALTER TABLE `delivery_collection_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_guy_details`
--
ALTER TABLE `delivery_guy_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gps_tables`
--
ALTER TABLE `gps_tables`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_categories`
--
ALTER TABLE `item_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `locations_name_unique` (`name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `modules`
--
ALTER TABLE `modules`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderstatuses`
--
ALTER TABLE `orderstatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_item_addons`
--
ALTER TABLE `order_item_addons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `password_reset_otps`
--
ALTER TABLE `password_reset_otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_gateways`
--
ALTER TABLE `payment_gateways`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_gateway_restaurant`
--
ALTER TABLE `payment_gateway_restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `popular_geo_places`
--
ALTER TABLE `popular_geo_places`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `promo_sliders`
--
ALTER TABLE `promo_sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `push_tokens`
--
ALTER TABLE `push_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ratings_rateable_type_rateable_id_index` (`rateable_type`,`rateable_id`),
  ADD KEY `ratings_rateable_id_index` (`rateable_id`),
  ADD KEY `ratings_rateable_type_index` (`rateable_type`),
  ADD KEY `ratings_user_id_foreign` (`user_id`);

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `restaurants_sku_unique` (`sku`),
  ADD UNIQUE KEY `restaurants_slug_unique` (`slug`);

--
-- Indexes for table `restaurant_categories`
--
ALTER TABLE `restaurant_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_category_restaurant`
--
ALTER TABLE `restaurant_category_restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_category_sliders`
--
ALTER TABLE `restaurant_category_sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_earnings`
--
ALTER TABLE `restaurant_earnings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_payouts`
--
ALTER TABLE `restaurant_payouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant_user`
--
ALTER TABLE `restaurant_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sms_gateways`
--
ALTER TABLE `sms_gateways`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sms_otps`
--
ALTER TABLE `sms_otps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transactions_uuid_unique` (`uuid`),
  ADD KEY `transactions_payable_type_payable_id_index` (`payable_type`,`payable_id`),
  ADD KEY `payable_type_ind` (`payable_type`,`payable_id`,`type`),
  ADD KEY `payable_confirmed_ind` (`payable_type`,`payable_id`,`confirmed`),
  ADD KEY `payable_type_confirmed_ind` (`payable_type`,`payable_id`,`type`,`confirmed`),
  ADD KEY `transactions_type_index` (`type`),
  ADD KEY `transactions_wallet_id_foreign` (`wallet_id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `transfers_uuid_unique` (`uuid`),
  ADD KEY `transfers_from_type_from_id_index` (`from_type`,`from_id`),
  ADD KEY `transfers_to_type_to_id_index` (`to_type`,`to_id`),
  ADD KEY `transfers_deposit_id_foreign` (`deposit_id`),
  ADD KEY `transfers_withdraw_id_foreign` (`withdraw_id`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `wallets_holder_type_holder_id_slug_unique` (`holder_type`,`holder_id`,`slug`),
  ADD KEY `wallets_holder_type_holder_id_index` (`holder_type`,`holder_id`),
  ADD KEY `wallets_slug_index` (`slug`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accept_deliveries`
--
ALTER TABLE `accept_deliveries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addons`
--
ALTER TABLE `addons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addon_categories`
--
ALTER TABLE `addon_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addon_category_item`
--
ALTER TABLE `addon_category_item`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `alerts`
--
ALTER TABLE `alerts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coupon_restaurant`
--
ALTER TABLE `coupon_restaurant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_areas`
--
ALTER TABLE `delivery_areas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_area_restaurant`
--
ALTER TABLE `delivery_area_restaurant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_collections`
--
ALTER TABLE `delivery_collections`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_collection_logs`
--
ALTER TABLE `delivery_collection_logs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_guy_details`
--
ALTER TABLE `delivery_guy_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gps_tables`
--
ALTER TABLE `gps_tables`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `item_categories`
--
ALTER TABLE `item_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `modules`
--
ALTER TABLE `modules`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderstatuses`
--
ALTER TABLE `orderstatuses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_item_addons`
--
ALTER TABLE `order_item_addons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `password_reset_otps`
--
ALTER TABLE `password_reset_otps`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_gateways`
--
ALTER TABLE `payment_gateways`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payment_gateway_restaurant`
--
ALTER TABLE `payment_gateway_restaurant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `popular_geo_places`
--
ALTER TABLE `popular_geo_places`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `promo_sliders`
--
ALTER TABLE `promo_sliders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `push_tokens`
--
ALTER TABLE `push_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `restaurant_categories`
--
ALTER TABLE `restaurant_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_category_restaurant`
--
ALTER TABLE `restaurant_category_restaurant`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_category_sliders`
--
ALTER TABLE `restaurant_category_sliders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_earnings`
--
ALTER TABLE `restaurant_earnings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_payouts`
--
ALTER TABLE `restaurant_payouts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `restaurant_user`
--
ALTER TABLE `restaurant_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=461;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sms_gateways`
--
ALTER TABLE `sms_gateways`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sms_otps`
--
ALTER TABLE `sms_otps`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `ratings`
--
ALTER TABLE `ratings`
  ADD CONSTRAINT `ratings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_wallet_id_foreign` FOREIGN KEY (`wallet_id`) REFERENCES `wallets` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transfers`
--
ALTER TABLE `transfers`
  ADD CONSTRAINT `transfers_deposit_id_foreign` FOREIGN KEY (`deposit_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `transfers_withdraw_id_foreign` FOREIGN KEY (`withdraw_id`) REFERENCES `transactions` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
