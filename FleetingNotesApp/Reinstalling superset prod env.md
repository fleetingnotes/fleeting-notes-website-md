---
# Mandatory field
id: "05fdc580-7589-11ed-b0c2-592fd656aaa6"
# Optional fields
title: "Reinstalling superset prod env"
tags: []
source: ""
created_date: "2022-12-06"
modified_date: "2022-12-26"
---
Reinstalling the environment:
helm uninstall the environment:
gcloud container clusters get-credentials geotab-superset-production-cluster --zone europe-west1-d --project geotab-superset-prod
helm uninstall superset-production

Check to see if the pods have been uninstalled you can check this either through the GKE web UI.

Check Ingress: https://console.cloud.google.com/kubernetes/discovery?project=geotab-superset-prod&pageState=(%22savedViews%22:(%22i%22:%2216b1e470cf8e496589f90cb6929ee729%22,%22c%22:%5B%5D,%22n%22:%5B%5D)) 

Check pods: https://console.cloud.google.com/kubernetes/workload/overview?project=geotab-superset-prod&pageState=(%22savedViews%22:(%22i%22:%2216b1e470cf8e496589f90cb6929ee729%22,%22c%22:%5B%5D,%22n%22:%5B%5D)) 

Delete the persistent storage AFTER INGRESS & PODS are gone:
https://console.cloud.google.com/kubernetes/persistentvolumeclaim?project=geotab-superset-prod&pageState=(%22savedViews%22:(%22i%22:%2216b1e470cf8e496589f90cb6929ee729%22,%22c%22:%5B%5D,%22n%22:%5B%5D))
Helm install again.