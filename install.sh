#!/bin/bash
echo "=====Build dockerfile and run docker image……"
docker rmi $(docker images -q -f dangling=true)
docker-compose up --build

