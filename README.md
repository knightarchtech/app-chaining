# Node API App

This is a simple Node.js application that provides two RESTful API endpoints:
1. `/headers`: Displays the request and response headers.
2. `/forward`: Forwards the request to another API server based on the URL provided via the `FORWARD_URL` environment variable.

## Usage

### Install dependencies
```bash
npm install
```

### Instructions:

1. **Run Locally**: Install dependencies with `npm install` and start the server with `npm start`.
2. **Build Docker**: Use `./build.sh` to build the Docker image and run the container.
3. **Deploy on Kubernetes**: Apply the `deployment.yaml` to your cluster via `kubectl apply -f deployment.yaml`.

This setup covers a basic Node.js application with all the necessary components: package, Docker, and Kubernetes deployment configuration.

