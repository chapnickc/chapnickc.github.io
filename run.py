#!/usr/bin/env python3.6
import os
from project import main
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    main.app.run(host='0.0.0.0', port=port)
