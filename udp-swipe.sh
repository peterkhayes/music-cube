# Sends two arguments as cell codes to the UDP server.
# This can be used to simulate a swipe on the cube.
echo -n $1 >/dev/udp/0.0.0.0/12345
sleep 0.2
echo -n $2 >/dev/udp/0.0.0.0/12345