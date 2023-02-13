FROM mcr.microsoft.com/dotnet/sdk:6.0

RUN apt-get update
RUN apt-get install -y nodejs npm

WORKDIR /apps/Zahlenraten.Intermediate/frontend
COPY apps/Zahlenraten.Intermediate/frontend/package.json apps/Zahlenraten.Intermediate/frontend/package-lock.json ./
RUN npm ci

WORKDIR /
COPY ../../analyzers.ruleset .

WORKDIR /apps/Zahlenraten.Intermediate
COPY apps/Zahlenraten.Intermediate/Zahlenraten.Intermediate.csproj .
RUN dotnet restore
