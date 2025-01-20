#!/bin/bash

# Variables
DIRECTORY_PATH=~/project_files
FILE_PATH=~/project_files/welcome.txt

### Task 1: Directory Management

echo "------------------"
## Create project_files directory using mkdir
echo "Creating project_files directory...."

echo "Processing...."

mkdir --verbose $DIRECTORY_PATH
# --verbose attribute displays detailed processing information

echo -e "------------------\n"


### Task 2: User and Group Management

## Add developers group to the system
echo "------------------"
echo "Creating developers group...."

sudo groupadd developers

echo "developers group created sucessfully...."
echo -e "------------------\n"

## Add intern_user 
echo "------------------"
echo "Creating intern_user...."

sudo useradd intern_user

echo "intern_user created sucessfully...."
echo -e "------------------\n"

## Set password for intern_user through the CLI
echo "------------------"
echo "Enter the password for intern_user: "

sudo passwd intern_user

echo -e "------------------\n"

## Add user to the developers group
echo "------------------"
echo "Adding intern_user to developers group...."

sudo usermod -aG developers intern_user
# -a => -append, -G => -Groups

echo "intern_user added to developers group sucessfully...."
echo -e "------------------\n"


### Task 3: Permissions and Ownership

## Change directory's user ownership
echo "------------------"
echo "Changing project_files's user ownership to intern_user...."

sudo chown -v intern_user $DIRECTORY_PATH

# chown => changes the user ownership of the directory
# 	=> intern_user is the new owner 
# 	=> $DIRECTORY_PATH is the directory to be updated
# -v attribute displays detailed processing information 

echo "Directory's user ownership updated sucessfully...."
echo -e "------------------\n"

## Change directory's group ownership
echo "------------------"
echo "Changing project_files's group ownership to developers...."

sudo chgrp -v developers $DIRECTORY_PATH

# chgrp => changes the group ownership of the directory
# 	=> developers is the new group 
# 	=> $DIRECTORY_PATH is the directory to be updated
# -v attribute displays detailed processing information 

echo "Directory's group ownership updated sucessfully...."
echo -e "------------------\n"


## Change directory's permissions
echo "------------------"
echo "Changing project_files's permissions...."

sudo chmod -v 750 $DIRECTORY_PATH

# 750 means the permissions for owner, group and others
# 7 => 111 or rwx, owner has read, write and executable permissions
# 5 => 101 or r-x, group has read and executable permissions
# 0 => 000 or ---, other user's beside owner and group has no permissions

echo "Directory's permissions updated sucessfully...."
echo -e "------------------\n"


### Task 4: Additional Tasks

## Creating welcome file
echo "------------------"
echo "Creating welcome.txt file...."

echo "Processing...."
sudo touch $FILE_PATH

echo "welcome.txt created successfully...."
echo -e "------------------\n"

## Set appropriate permissions for the welcome.txt file
echo "------------------"
echo "Updating permissions for the welcome.txt file"

sudo chmod -v 600 $FILE_PATH
# Owner(intern_user) will have read-write permissions, while the group(developers) will have no permissions
# 600 means the permissions for owner, group and others
# 6 => 110 or rw-, owner has read and write permissions
# 0 => 000 or ---, group has no permissions
# 0 => 000 or ---, other user's beside owner and group also has no permissions

echo "File's permissions updated successfully"
echo -e "------------------\n"

## Change welcome.txt file's user ownership
echo "------------------"
echo "Changing welcome.txt's user ownership to intern_user...."
sudo chown -v intern_user $FILE_PATH
echo "welcome.txt's user ownership updated successfully...."
echo -e "------------------\n"

## Change welcome.txt file's group ownership
echo "------------------"
echo "Changing welcome.txt's group ownership to developers...."
sudo chgrp -v developers $FILE_PATH
echo "welcome.txt's group ownership updated successfully...."
echo -e "------------------\n"

# tee -a [FILE_NAME]
# This commands helps read from standard input and write to output and files
# -a or --append => append to the files rather than overwrite

# "|" helps chain multiple commands; the output of one command can be used as the input for another command

echo "------------------"
echo "Adding contents to the welcome.txt file:"
echo "------------------"
## Add date and time of file creation
echo "Creation time of the file:" $(date) | sudo tee -a $FILE_PATH

## Add directory's path
echo "Directory path:" $(pwd) | sudo tee -a $FILE_PATH

## Add owner and group information 
echo "Owner and group information:" $(sudo ls -l $DIRECTORY_PATH | grep "welcome.txt") | sudo tee -a $FILE_PATH

echo "File and contents created sucessfully...."
echo -e "------------------\n"

## Display the contents inside welcome.txt
echo "------------------"
echo "Contents of welcome.txt: "
echo -e "------------------"

sudo cat $FILE_PATH

echo -e "------------------\n"

### Task 5: Verification
echo "------------------"
echo "Verifications"
echo -e "------------------\n"

## Verify project_files directory creation
echo "------------------"
echo "Directory creation and permissions:"
ls -l ~/ | grep "project_files"
echo -e "------------------\n"

## Verify user and group creation
echo "------------------"
echo "User and group creation:"
cat /etc/passwd | grep "intern_user" # cat /etc/passwd: lists all the users
cat /etc/group | grep "developers" # cat /etc/group: lists all the groups
echo -e "------------------\n"

## Verify group membership
echo "------------------"
echo "Group membership:"
groups intern_user
# displays all the groups intern_user is a member of
echo -e "------------------\n"

## File creation and its contents
echo "------------------"
echo "File creation and its content:"
sudo cat $FILE_PATH
echo -e "------------------\n"

## File permissions
echo "------------------"
echo "File permissions:"
sudo ls -l ~/project_files | grep "welcome"
echo -e "------------------\n"

