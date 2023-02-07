---
# Mandatory field
id: "37e08f80-7cb2-11ed-a6e7-5ff7e5da7925"
# Optional fields
title: "geotab jenkins command"
tags: []
source: ""
created_date: "2022-12-15"
modified_date: "2022-12-26"
---
gcloud container clusters get-credentials geotab-dp-cicd --zone europe-west4-a --project geotab-data-platform-test \
 && kubectl port-forward --namespace jenkins $(kubectl get pod --namespace jenkins --selector="app.kubernetes.io/component=jenkins-controller,app.kubernetes.io/instance=jenkins" --output jsonpath='{.items[0].metadata.name}') 8080:8080