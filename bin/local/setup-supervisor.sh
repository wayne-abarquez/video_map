#!/usr/bin/env bash

sudo rm /etc/supervisor/conf.d/video_map.conf
sudo cp conf/local/supervisord.conf /etc/supervisor/conf.d/video_map.conf
sudo supervisorctl reread
sudo supervisorctl update
