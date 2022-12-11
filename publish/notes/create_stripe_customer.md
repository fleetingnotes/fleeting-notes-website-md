---
title: create_stripe_customer
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that creates a stripe customer and returns the `stripe_customer_id`. Steps:

1. Get the `supabase_user_id` from the request
2. Check if `stripe_customer_id` already exists in the table. If it does, skip the following steps
3. Create stripe customer and store the `stripe_customer_id`
4. Update the table with the `stripe_customer_id` and return it

[Example Code](https://github.com/dijonmusters/happy-days/blob/main/supabase/functions/create-stripe-customer/index.ts)
[Video Walkthrough](https://egghead.io/lessons/supabase-automatically-create-a-stripe-customer-for-each-user-with-supabase-function-hooks)