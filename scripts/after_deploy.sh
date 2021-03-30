#!/bin/bash

chmod 755 -R /home/ubuntu/app/server/
mv /home/ubuntu/.env /home/ubuntu/app/server/
pm2 reload www