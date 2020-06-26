#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/jetson/turtlebot_ws/src/kobuki_testsuite"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/jetson/turtlebot_ws/install/lib/python2.7/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/jetson/turtlebot_ws/install/lib/python2.7/dist-packages:/home/jetson/turtlebot_ws/build/lib/python2.7/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/jetson/turtlebot_ws/build" \
    "/usr/bin/python2" \
    "/home/jetson/turtlebot_ws/src/kobuki_testsuite/setup.py" \
    build --build-base "/home/jetson/turtlebot_ws/build/kobuki_testsuite" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/jetson/turtlebot_ws/install" --install-scripts="/home/jetson/turtlebot_ws/install/bin"
