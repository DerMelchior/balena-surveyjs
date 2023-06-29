#!/bin/bash
export ENABLE_TIMER="1"

if [ "$ENABLE_TIMER" == "1" ]
then
  echo "Starting scheduler."
  (crontab -l; echo "*/5 * * * * /var/www/www.git/hooks/git_checkout.sh" | crontab -
fi

crond -f