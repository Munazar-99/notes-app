# Notes App (In-progress)

A simple Notes App with a React frontend and a Django backend.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Development](#development)
- [Stopping the Application](#stopping-the-application)
- [Customization](#customization)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This repository contains the source code for a Notes App, which is divided into a React frontend and a Django backend. The project is Dockerized, allowing for easy setup and execution in a development environment.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

Follow these steps to set up and run the Notes App using Docker:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/notes-app.git
   cd notes-app
   docker-compose up --build
   ```

2. Wait for the containers to start. You will see logs indicating the progress.

3. Once the containers are running, you can access the Notes App in your web browser:

    - **Frontend (React)**: [http://localhost:3000](http://localhost:3000)
    - **Backend (Django API)**: [http://localhost:8000](http://localhost:8000)

## Usage

- The React frontend is accessible at [http://localhost:3000](http://localhost:3000). Use the Notes App interface to create, read, update, and delete notes.

- The Django backend API is accessible at [http://localhost:8000](http://localhost:8000). Interact with the API endpoints to perform CRUD operations on notes.

## Development

- To work on the frontend, edit the files in the `frontend` directory. Changes will be hot-reloaded into the Docker container for immediate viewing.

- For backend development, modify the files in the `backend` directory. Changes will also be automatically reflected in the Docker container.

## Stopping the Application

To stop the Docker containers and clean up resources, you can press `Ctrl + C` in the terminal where you started the containers. Alternatively, run the following command in the project directory:

```shell
docker-compose down
````
## Customization

- Customize the Django settings in the `backend/settings.py` file to match your project requirements.

- Adjust environment variables and configurations in the `docker-compose.yml` file.


## Acknowledgments

- This project was developed using React and Django and takes advantage of Docker for simplified setup and deployment.


