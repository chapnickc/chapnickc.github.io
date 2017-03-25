#!/usr/bin/env python3.6
import os
import socket

from project import main

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    localhost = socket.gethostbyname(socket.gethostname())
    main.app.run(host=localhost, port=port)
