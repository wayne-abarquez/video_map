#!/usr/bin/env bash

#sudo rm /etc/nginx/sites-enabled/default
sudo rm /etc/nginx/sites-available/video_map
sudo rm /etc/nginx/sites-enabled/video_map
sudo cp conf/local/nginx.conf /etc/nginx/sites-available/video_map
sudo ln -s /etc/nginx/sites-available/video_map /etc/nginx/sites-enabled/video_map
sudo /etc/init.d/nginx reload
