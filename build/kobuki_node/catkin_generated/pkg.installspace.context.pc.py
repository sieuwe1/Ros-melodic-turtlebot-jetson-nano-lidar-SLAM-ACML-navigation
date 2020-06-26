# generated from catkin/cmake/template/pkg.context.pc.in
CATKIN_PACKAGE_PREFIX = ""
PROJECT_PKG_CONFIG_INCLUDE_DIRS = "${prefix}/include".split(';') if "${prefix}/include" != "" else []
PROJECT_CATKIN_DEPENDS = "rospy;roscpp;nodelet;pluginlib;tf;angles;geometry_msgs;sensor_msgs;nav_msgs;std_msgs;diagnostic_updater;diagnostic_msgs;kobuki_msgs;kobuki_driver;kobuki_keyop;kobuki_safety_controller;ecl_exceptions;ecl_sigslots;ecl_streams;ecl_threads".replace(';', ' ')
PKG_CONFIG_LIBRARIES_WITH_PREFIX = "-lkobuki_ros;-lkobuki_nodelet".split(';') if "-lkobuki_ros;-lkobuki_nodelet" != "" else []
PROJECT_NAME = "kobuki_node"
PROJECT_SPACE_DIR = "/home/jetson/turtlebot_ws/install"
PROJECT_VERSION = "0.7.6"
