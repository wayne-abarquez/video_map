bind = '127.0.0.1:8006'
accesslog = '/var/www/video_map/logs/gunicorn-access.log'
errorlog = '/var/www/video_map/logs/gunicorn-error.log'
limit_request_line = 0
workers = 2
preload = True
timeout = 120
