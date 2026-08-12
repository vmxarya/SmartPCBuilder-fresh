# SmartPCBuilder

Cloud-first experimental prototype for intelligent PC building in the Iranian market.

## Current flow

`Home → Builder → recommend-build-v2 (Supabase Edge Function) → Recommended Build`

The UI supports Visual and Compact/Pro modes and uses the project's locked terminology and eight-component prototype build model.

## Setup

1. Create `.env.local` from `.env.example`.
2. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Install dependencies with `npm install`.
4. Run `npm run dev`.

## Important

- Never commit `.env.local`, service-role keys, passwords, or private keys.
- The app does not fabricate market data.
- Prices belong to retailer offers, not canonical products.
- Recommendation is delegated to the existing `recommend-build-v2` Supabase Edge Function.

## Prototype finish line

A cloud-hosted user enters budget, purpose, preference and resolution, clicks one Generate button, and receives a complete compatible build backed by real offers and prices. The current handoff notes say all eight core categories still need sufficient real market offers before this can be considered complete.
