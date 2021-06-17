## How to start with udp echo

Clone the repository to your server.

> git clone https://github.com/oriolpatau/udpecho.git

udpecho uses nodeJs without any nodemodule installed.

## Execute udpecho

> node index.js {portNumber}

## Test with udpecho

Send UDP packets to IP and portNumber and udpecho will answer these packets with the received timestamp.

## Cosiderations

Check your firewall rules to allow udpecho work.
To check which port is open in the local machine you could execute netsat -tulpn, this command returns the process id who is owning the port.