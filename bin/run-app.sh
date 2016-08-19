#!/usr/bin/env bash

# source venv/bin/activate
# gunicorn -w 2 --preload -b 127.0.0.1:8006 run:app --log-level=DEBUG --timeout=120
echo 'Running app...'
exec /var/www/video_map/venv/bin/gunicorn run:app -c /var/www/video_map/conf/gunicorn.conf.py
