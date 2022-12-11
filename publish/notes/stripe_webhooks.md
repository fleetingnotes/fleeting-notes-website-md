---
title: stripe_webhooks
tags: [ "notes" ]
date: 2022-10-30
lastmod: 2022-10-30
---
A [supabase function](https://supabase.com/docs/guides/functions) that gets realtime updates from stripe then updates the `subscription_tier` of users. Steps:

1. Verify stripe signing signature
2. Query stripe API to avoid handling any forged event
3. Update supabase the subscription tier of the user based on the `stripe_customer_id`

[Example Code](https://github.com/dijonmusters/happy-days/blob/main/supabase/functions/stripe-webhooks/index.ts)
[Video Walkthrough](https://www.youtube.com/watch?v=Vzkb42ao1B0&list=PL5S4mPUpp4Ouyw8bMupHgxC3VL9BLZzvV&index=8&t=6390s)
