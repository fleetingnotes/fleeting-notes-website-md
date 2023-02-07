---
# Mandatory field
id: "e47cc5b0-796a-11ed-9ab0-5982d584b2fc"
# Optional fields
title: "steps to enable markdown"
tags: []
source: ""
created_date: "2022-12-11"
modified_date: "2022-12-26"
---
1. Fork md repo
2. Setup vercel [[steps to deploy to vercel as next.js]] / disconnect repository from vercel
4. Enable github actions and add your markdown files to publish folder
5. update github workflow to point to desired repository and add vercel secrets to repo
6. push code to github. (also look into setting up git for obsidian to do all these actions within obsidian)