# 1 - Download & Install Python
FROM python:3.14.2

# 2 - setup Linux as packages
RUN python -m venv /opt/venv

# 3 - Set Environment Variables
ENV PATH="/opt/venv/bin:$PATH"

# 3.1 - Upgrade PIP
RUN pip install --upgrade pip

# 3.2 - Set Python-related environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 3.3 - Install os dependencies
RUN apt-get update && apt-get install -y \
    # for postgres
    libpq-dev \
    # for Pillow
    libjpeg-dev \
    # for CairoSVG
    libcairo2-dev \
    # other
    gcc \
    && rm -rf /var/lib/apt/lists/*

# 3.4 - Create the mini vm's code directory
RUN mkdir -p /code
WORKDIR /code

# 3.5 - Copy pyproject.toml and README for dependency installation
COPY pyproject.toml README.md /code/

# 3.6 - Copy the project code into the container
COPY ./app /code/app

# 3.7 - Install the Python project dependencies from pyproject.toml
RUN pip install .

# Clean up apt cache to reduce image size
RUN apt-get remove --purge -y \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Run the FastAPI project when the container starts
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]