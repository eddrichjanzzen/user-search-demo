# Use the official Python image
FROM python:3.10

ENV PYTHONUNBUFFERED=1

# install Microsoft SQL Server requirements.
ENV ACCEPT_EULA=Y

RUN sh -c "curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -" \
  && apt-get update \
  && sh -c "curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list" \
  && apt-get update \
  && ACCEPT_EULA=Y apt-get install -y msodbcsql18 \
  && ACCEPT_EULA=Y apt-get install -y mssql-tools18

WORKDIR /code

COPY requirements.txt /code/

RUN pip install -r requirements.txt

COPY . /code/

CMD ["sh", "run.sh"]