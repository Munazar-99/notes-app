# Use an official Python runtime as the base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /app/backend

# Copy requirements.txt to the container
COPY backend/requirements.txt ./

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all backend source code to the container
COPY backend/ ./

# Expose the port the Django app runs on
EXPOSE 8000

# Define the command to run the Django application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
