#!/bin/bash
echo "-----------------------------------------------------"
echo "Date: $(date)"
echo "Top 5 Processes using the most system resources"
echo "-----------------------------------------------------"
ps -eo pid,ppid,cmd,%cpu,%mem --sort=-%cpu | head -n 6
echo "-----------------------------------------------------"
