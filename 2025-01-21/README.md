# Cron Jobs and System Monitoring

## Objective
This project is a simple demonstration of system monitoring and tasks automation using a shell script and cron jobs. The script monitors system processes and logs the top 5 proceses cpu-intensive processes every 5 mintutes. 

## Tasks Implemented

### 1. Created a Bash Script
- Created a bash script to display top 5 cpu-intensive procceses in descending order.
- Added a timestamp to the output using the `date` command.

### 2. Added a Cron Job
- Edited the crontab using `crontab -e`
- Added a cronjob to execute an script every 5 minutes.
```
FILE_PATH=/home/rajan/Projects/cloco-nepal-internship-2025/2025-01-21/cronjob_task/
*/5 * * * * $FILE_PATH/my-script.sh >> $FILE_PATH/log/cron.log 2>&1
```
- `2>&1` : stores both access logs and error logs on the same log file.

### 3. Verification
- Verified the permissions of the script file before executing.
- Executed the `my-script.sh` script file manually to check if the output is as intended.
- Created a backup of the cronjob and tested the command `crontab -r` which removes all the cronjobs.

## How to Run
1. Make sure the script has execute permissions:<br/>
	```chmod +x my-script.sh```
2. Open the crontabs file:<br/>
	```crontab -e```
3. Paste the above cronjob in the file and restart the cron service:<br/>
	```sudo service cron restart```<br/>
	```sudo service cron status```
