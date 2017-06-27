# Useful tool for sending packets to the UDP interface
echo -n $1 >/dev/udp/0.0.0.0/12345
sleep 0.2
echo -n $2 >/dev/udp/0.0.0.0/12345