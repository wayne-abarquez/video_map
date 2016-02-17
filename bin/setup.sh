#!/usr/bin/env bash

# create a virtual env to install libraries
virtualenv --no-site-packages venv

# enable virtual env
source venv/bin/activate

# install all requirements to virtual env
pip install -r requirements.txt
