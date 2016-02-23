#!/usr/bin/env bash

#remember to set password for postgres user
#see: http://suite.opengeo.org/4.1/dataadmin/pgGettingStarted/firstconnect.html
#then you can set default password for account by creating ~/.pgpass which contains
#hostname:port:database:username:password
#e.g. localhost:5432:*:postgres:mypassword

echo "CREATE USER demouser WITH PASSWORD 'youcantguess';" | psql -h localhost -U postgres

echo "CREATE DATABASE video_map;" | psql -h localhost -U postgres

echo "GRANT ALL PRIVILEGES ON DATABASE video_map TO demouser;" | psql -h localhost -U postgres
