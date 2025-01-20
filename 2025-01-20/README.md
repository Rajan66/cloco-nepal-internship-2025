# Shell Scripting Assignment

## Objective
This script demonstrates essential Linux system administration tasks such as directory creation, user and group management, file operations, permission settings, and verification. It helps manage a project directory, users, and file properties using shell commands.

## Tasks Implemented

### 1. Directory Management
- Created a directory named `project_files` in the user's home directory with specific permissions.

### 2. User and Group Management
- Created a group called `developers` and a user named `intern_user`.
- Added `intern_user` to the `developers` group and set a password for the user.

### 3. Permissions and Ownership
- Changed the ownership of the `project_files` directory to `intern_user` and the group to `developers`.
- Set directory permissions to allow the owner to read, write, and execute; the group to read and execute; and others to have no permissions.

### 4. File Creation and Permissions
- Created a `welcome.txt` file inside the `project_files` directory with the following information:
  - Creation date and time
  - Directory path
  - Owner and group information
- Set appropriate permissions to the file to ensure that only the owner can read and write.

### 5. Verification
- Added commands to verify:
  - Directory creation and its permissions.
  - User and group creation.
  - Group membership of `intern_user`.
  - Content inside the `welcome.txt` file.
  - File permissions for `welcome.txt`.

## Features
- Clear output messages to indicate progress through each task.
- Permission checks on both the directory and file to ensure proper security.
- Verifications to confirm that all tasks are executed correctly.

## How to Run the Script
1. Make sure the script has execute permissions:
    chmod +x myscript.sh

## Outputs
![output1](https://github.com/user-attachments/assets/74cb5e5c-7a60-4575-ace6-2ce7912cbb77)
![output2](https://github.com/user-attachments/assets/26b7d310-490a-4cf6-a609-d032967879ec)
![output3](https://github.com/user-attachments/assets/06a6da36-fb8c-4b81-bf79-eaeae9417ad7)
