#!/bin/bash

if [ -n "${BUILDER}" ]; then
   buildtool="${BUILDER}"
else
   buildtool="docker"
fi

# Run npm install
npm install

# Build Docker image
${buildtool} build -t docker.io/library/node-api-app:1.0 .

# Run Docker container
# ${buildtool} run -d -p 3000:3000 --name node-api-app docker.io/library/node-api-app:1.0
