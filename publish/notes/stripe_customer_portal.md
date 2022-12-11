---
title: stripe_customer_portal
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that creates a customer portal and returns the url for a particular user.

1. Get the `supabase_user_id` from the request
2. Using the `supabase_user_id` query the table to get the `stripe_customer_id`
3. Create a [stripe customer portal](https://stripe.com/docs/customer-management/integrate-customer-portal#webhooks) and return the url to access the portal

[Example Code](https://github.com/dijonmusters/happy-days/blob/main/supabase/functions/create-stripe-customer/index.ts)
[Video Walkthrough](https://egghead.io/lessons/next-js-allow-customer-to-manage-their-subscription-with-stripe-customer-portal)