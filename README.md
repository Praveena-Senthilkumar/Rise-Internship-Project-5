# Rise Internship Project -5
# Containerize and Deploy App with Docker on AWS EC2

## Project Overview

This project demonstrates how to containerize a Node.js web application using Docker and deploy it on an Amazon EC2 instance. The goal is to simplify deployment, ensure portability, and follow modern DevOps practices.

---

## Problem Statement

Traditional application deployments are complex, error-prone, and difficult to scale. Managing dependencies and environments manually leads to inconsistencies.

---

## Objective

* Containerize a Node.js web application using Docker
* Deploy the containerized application on AWS EC2
* Make the application accessible over the internet

---

## Tech Stack

* Node.js
* Express.js
* Docker
* Amazon EC2

---

## Project Structure

```
Rise-Internship-Project-5/
│
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
└── public/
    └── style.css
```

---

## Application Features

* Multi-page web application (Home, Products, Cart, Contact)
* Styled UI using CSS
* Navigation bar across all pages
* Product display with basic layout

---

## Docker Setup

### Build Docker Image

```
docker build -t my-app .
```

### Run Docker Container

```
docker run -d -p 3000:3000 my-app
```

### Access Application Locally

```
http://localhost:3000
```

---

## AWS EC2 Deployment

### Step 1: Launch EC2 Instance

* Use Ubuntu AMI
* Allow ports: 22, 80, 3000

### Step 2: Connect to EC2

```
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### Step 3: Install Docker

```
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
```

### Step 4: Clone Repository

```
git clone https://github.com/your-username/Rise-Internship-Project-5.git
cd Rise-Internship-Project-5
```

### Step 5: Build and Run

```
docker build -t my-app .
docker run -d -p 3000:3000 my-app
```

---

## Access Application on EC2

```
http://<your-ec2-public-ip>:3000
```

---

## Security Group Configuration

Ensure the following inbound rules are added:

* SSH (22)
* HTTP (80)
* Custom TCP (3000)

---

## Key Learnings

* Docker containerization
* Image creation using Dockerfile
* Running containers on cloud infrastructure
* AWS EC2 setup and networking
* Debugging deployment issues

---

## Future Improvements

* Add database integration
* Implement real shopping cart functionality
* Add authentication system
* Use reverse proxy (Nginx)
* Implement CI/CD pipeline

---

## Conclusion

This project demonstrates a complete workflow from development to deployment using Docker and AWS. It highlights how containerization simplifies application deployment and ensures consistency across environments.
