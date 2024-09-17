#!/bin/bash

kubectl create ns app-chaining

kubectl -n app-chaining apply -f deployment.yaml