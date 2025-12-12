# Last Sales Components

## Overview
Client-side React components for fetching and displaying recent NFT sales from Kojins and Mounts collections.

## Components

### `LastSalesFetcher.tsx`
- **Purpose**: Fetch live sales from `/api/lastsales?live=1&debug=1`
- **Features**:
  - Supports 90s timeout with AbortController
  - Accepts both `Sale[]` and `{ sales: Sale[] }` payload shapes
  - Logs full payload to browser console for debugging
  - Friendly loading/error/empty states

### `LastSalesClient.tsx`
- **Purpose**: Render sales list and charts
- **Features**:
  - Staggered fade-in + slide-up animation on mount
  - Displays NFT image, token ID, price, maker, matcher, transaction link
  - Collection filter dropdown
  - Top traits bar chart (if traits are available)
  - Top collections pie chart
  - Shows count of sales in title and empty state

## API Endpoint
- **GET** `/api/lastsales?live=1&debug=1`
  - Fetches Kojins and Mounts sales from OpenSea (if available) and Ronin GraphQL
  - Returns `{ sales: Sale[], debug?: {...} }`
  - Each Sale includes: id, collection, tokenId, price, currency, date, image, name, maker, matcher, txHash, quantity

## Usage
```tsx
import LastSalesFetcher from '@/components/lastsales/LastSalesFetcher'

export default function Page() {
  return <LastSalesFetcher />
}
```

## Debugging
- Open browser DevTools → Console
- Look for `[LastSalesFetcher] fetched payload:` to see raw API response
- Look for `[LastSalesFetcher] salesPayload length:` to verify parsing
- Look for `[LastSalesFetcher] rendering LastSalesClient with N sales` before render

## Animation
- Items start visible (`opacity: 1`) but slightly offset (`translateY(8px)`)
- On mount, they transition to final position with staggered delays (50ms per item)
- This ensures content is always visible even if JS hasn't fully hydrated
