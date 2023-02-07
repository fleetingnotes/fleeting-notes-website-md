---
# Mandatory field
id: "d25ec410-7c2a-11ed-9e65-b708c7c95c7e"
# Optional fields
title: "query to calculate churn rate over different days"
tags: []
source: ""
created_date: "2022-12-14"
modified_date: "2022-12-26"
---
SELECT DATE(end_date) AS churn_date,
       COUNT(*) AS total_subscriptions,
       SUM(CASE WHEN end_date < DATE(end_date) THEN 1 ELSE 0 END) AS churned_subscriptions,
       (SUM(CASE WHEN end_date < DATE(end_date) THEN 1 ELSE 0 END) / COUNT(*)) * 100 AS churn_rate
FROM subscriptions
WHERE start_date < DATE(end_date)
GROUP BY DATE(end_date);
