****Kubernetes Cluster 7.1P****

*Running a Kubernetes cluster and accessing it on your local machine*

To get started with this project, follow these steps:

1. Run `npm install` to install project dependencies.
2. Run `docker build -t 5.1p:test-4 .` to build the Docker image.
3. Run `docker push nichollsb/5.1p:test-4` to push the Docker image to Docker Hub.
4. Run `kubectl apply -f createDeployment.yaml` to create the Kubernetes deployment.
5. Run `kubectl apply -f service.yaml` to create the Kubernetes service.

To access the service, follow these steps:

6. Visit the service by visiting http://<service IP address>:8000/compute/subtraction?num1=234&num2=4 in the web browser.
7. To find the IP address of the service, run `kubectl describe service my-service`
8. Alternatively, for Docker Desktop users, run the command `kubectl port-forward service/my-service 8000` to create a network tunnel between your local machine and a Kubernetes service running in a Kubernetes cluster. The command creates a port forwarding from a local port (in this case, port 8000) to a target port of the Kubernetes service my-service.

****Adding a database 9.1P****
  
Assuming the kubernetes cluster is still running from 7.1P

1. Clone the repository for the updated files.
2. Terminate the deployment created as part of 7.1P
3. Run `kubectl apply -f createPersistentVolume.yaml`
4. Run `kubectl apply -f createPersistentVolumeClaim.yaml`
5. Run `kubectl apply -f createStorageClass.yaml`
6. Run `kubectl apply -f createService.yaml`
7. Run `kubectl apply -f createMongoDeployment.yaml`
8. Run `kubectl apply -f createDeployment.yaml`
9. Run `kubectl apply -f createCronJob.yaml`
10. Run `kubectl port-forward service/my-service 8000` to create a network tunnel between your local machine and a Kubernetes service running in a Kubernetes cluster.

Using postman, play around with the Get, Post, Update, and Delete methods as demonstrated in the video below:
https://youtu.be/Wwb4TNiHP0I

Contributing
If you are interested in contributing to this project, feel free to submit a pull request or open an issue.

License
This project is licensed under the MIT License - see the LICENSE file for details.
