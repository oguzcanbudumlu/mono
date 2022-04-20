````console
kubectl get pods | awk '/comments/{print $1}' | xargs kubectl logs
````
