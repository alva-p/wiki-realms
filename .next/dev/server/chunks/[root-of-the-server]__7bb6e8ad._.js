module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/Desktop/Proyectos/wiki-realms/lib/lastsales.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchOpenSeaSales",
    ()=>fetchOpenSeaSales,
    "fetchRoninGraphQLSales",
    ()=>fetchRoninGraphQLSales,
    "fetchRoninSales",
    ()=>fetchRoninSales,
    "readStored",
    ()=>readStored,
    "refreshCollections",
    ()=>refreshCollections,
    "writeStored",
    ()=>writeStored
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DATA_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'data', 'lastsales.json');
function ensureDataFile() {
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(DATA_PATH);
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dir)) __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dir, {
        recursive: true
    });
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(DATA_PATH)) {
        const initial = {
            last_timestamps: {},
            sales: []
        };
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DATA_PATH, JSON.stringify(initial, null, 2));
    }
}
function readStored() {
    ensureDataFile();
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(DATA_PATH, 'utf-8');
    try {
        return JSON.parse(raw);
    } catch (err) {
        const initial = {
            last_timestamps: {},
            sales: []
        };
        return initial;
    }
}
function writeStored(data) {
    ensureDataFile();
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}
async function fetchOpenSeaSales(contract, occurredAfterUnix = 0, apiKey) {
    if (!contract) return [];
    if (!process.env.OPENSEA_API_URL) {
        // default OpenSea events endpoint alternative
        process.env.OPENSEA_API_URL = 'https://api.opensea.io/api/v1/events';
    }
    const base = process.env.OPENSEA_API_URL;
    const url = new URL(base);
    // prefer query by collection slug; if contract looks like address, set asset_contract_address
    if (contract && contract.startsWith('0x')) url.searchParams.set('asset_contract_address', contract);
    else url.searchParams.set('collection_slug', contract);
    url.searchParams.set('event_type', 'sale');
    if (occurredAfterUnix) url.searchParams.set('occurred_after', String(occurredAfterUnix));
    url.searchParams.set('limit', '50');
    const headers = {};
    if (apiKey) headers['X-API-KEY'] = apiKey;
    const res = await fetch(url.toString(), {
        headers
    });
    if (!res.ok) throw new Error(`OpenSea fetch failed: ${res.status}`);
    const data = await res.json();
    const events = data?.events || data?.asset_events || [];
    const out = events.map((event)=>{
        const tokenId = event?.nft?.identifier || event?.nft?.token_id || event?.nft?.tokenId && String(event.nft.tokenId) || undefined;
        const price = event?.payment?.quantity ? Number(event.payment.quantity) / Math.pow(10, 18) : event?.price ? Number(event.price) : 0;
        const maker = event?.from_account?.address || event?.seller || undefined;
        const matcher = event?.to_account?.address || event?.buyer || undefined;
        const ts = event?.event_timestamp || event?.created_date || event?.timestamp;
        const txHash = event?.transaction_hash || event?.txHash || event?.transaction?.transaction_hash;
        const image = event?.nft?.image_url || event?.nft?.image || event?.image;
        return {
            id: String(event.id || txHash || `${contract}-${tokenId}-${ts}`),
            collection: event?.collection?.slug || event?.nft?.collection?.slug || contract,
            tokenId: tokenId != null ? String(tokenId) : undefined,
            price: Number.isFinite(price) ? price : 0,
            currency: event?.payment?.token_symbol || event?.payment?.symbol || event?.payment_token?.symbol || 'ETH',
            date: ts || new Date().toISOString(),
            traits: [],
            // extra fields
            // @ts-ignore
            maker,
            // @ts-ignore
            matcher,
            // @ts-ignore
            txHash,
            // @ts-ignore
            image
        };
    });
    return out;
}
async function fetchRoninSales(contract, occurredAfterUnix = 0, rpcUrl) {
    if (!contract || !rpcUrl) return [];
    // Helper to call JSON-RPC
    async function rpc(method, params) {
        const res = await fetch(rpcUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jsonrpc: '2.0',
                id: 1,
                method,
                params
            })
        });
        const j = await res.json();
        return j.result;
    }
    // get latest block
    const latestHex = await rpc('eth_blockNumber', []);
    const latest = parseInt(latestHex, 16);
    // scan last N blocks (configurable); 20000 ~ ~ a few days depending on chain
    const SCAN_BLOCKS = 20000;
    const fromBlock = Math.max(0, latest - SCAN_BLOCKS);
    // eth_getLogs params without topics (some providers restrict topics)
    const paramsNoTopic = [
        {
            address: contract,
            fromBlock: '0x' + fromBlock.toString(16),
            toBlock: '0x' + latest.toString(16)
        }
    ];
    let logs = [];
    try {
        logs = await rpc('eth_getLogs', paramsNoTopic);
    } catch (err) {
        return [];
    }
    const results = [];
    for (const log of logs){
        try {
            if (!log.topics || log.topics.length === 0) continue;
            if (!log.topics[0].startsWith('0xddf252ad')) continue; // Transfer signature prefix
            // tokenId usually in topics[3] or in data
            let tokenIdHex = log.topics[3] || log.data;
            if (!tokenIdHex) continue;
            tokenIdHex = tokenIdHex.startsWith('0x') ? tokenIdHex.slice(2) : tokenIdHex;
            tokenIdHex = tokenIdHex.slice(-64);
            const tokenId = BigInt('0x' + tokenIdHex).toString();
            // get block timestamp
            const block = await rpc('eth_getBlockByNumber', [
                log.blockNumber,
                false
            ]);
            const ts = block?.timestamp ? parseInt(block.timestamp, 16) : undefined;
            if (!ts) continue;
            const dateMs = ts * 1000;
            if (occurredAfterUnix && ts <= occurredAfterUnix) continue;
            results.push({
                id: `${contract}-${log.transactionHash}-${tokenId}`,
                collection: contract,
                tokenId,
                price: 0,
                currency: 'RONIN',
                date: new Date(dateMs).toISOString(),
                traits: []
            });
        } catch (e) {
            continue;
        }
    }
    results.sort((a, b)=>Date.parse(b.date) - Date.parse(a.date));
    return results;
}
async function fetchRoninGraphQLSales(contract, apiUrl, apiKey, size = 50, from_ = 0, debug = false) {
    if (!contract || !apiUrl) return [];
    const query = `
    query RecentSales($tokenAddress: String!, $from: Int!, $size: Int!) {
      recentlySolds(from: $from, size: $size, tokenAddress: $tokenAddress) {
        results {
          assets {
            token {
              __typename
              ... on Erc1155 {
                tokenIdNum: tokenId
                name
                image
              }
              ... on Erc721 {
                tokenIdStr: tokenId
                name
                image
              }
            }
            quantity
          }
          maker
          matcher
          realPrice
          timestamp
          txHash
        }
      }
    }
  `;
    const variables = {
        tokenAddress: contract,
        from: from_,
        size
    };
    const headers = {
        'Content-Type': 'application/json'
    };
    if (apiKey) headers['x-api-key'] = apiKey;
    const res = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`GraphQL HTTP ${res.status}: ${body}`);
    }
    const data = await res.json();
    if (debug) {
        try {
            console.debug('fetchRoninGraphQLSales raw:', JSON.stringify(data).slice(0, 2000));
        } catch (e) {}
    }
    if (data.errors) {
        throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
    }
    const items = data?.data?.recentlySolds?.results || [];
    const out = [];
    for (const it of items){
        try {
            const asset = it?.assets?.[0];
            const token = asset?.token;
            const tokenId = token?.tokenIdNum ?? token?.tokenIdStr ?? token?.tokenId ?? null;
            const txHash = it?.txHash || `${contract}-${tokenId}-${it?.timestamp}`;
            const price = it?.realPrice ? Number(it.realPrice) / 1e18 : 0;
            const ts = it?.timestamp ? Number(it.timestamp) : undefined;
            const date = ts ? ts > 1e12 ? new Date(ts).toISOString() : new Date(ts * 1000).toISOString() : new Date().toISOString();
            const image = token?.image || asset?.image || null;
            const name = token?.name || null;
            const maker = it?.maker || null;
            const matcher = it?.matcher || null;
            const quantity = asset?.quantity ?? null;
            out.push({
                id: String(txHash),
                collection: contract,
                tokenId: tokenId != null ? String(tokenId) : undefined,
                price,
                currency: 'RONIN',
                date,
                traits: [],
                // attach rawFields to allow UI access to extra fields
                // @ts-ignore
                txHash,
                // @ts-ignore
                maker,
                // @ts-ignore
                matcher,
                // @ts-ignore
                image,
                // @ts-ignore
                name,
                // @ts-ignore
                quantity
            });
        } catch (e) {
            continue;
        }
    }
    return out;
}
async function refreshCollections(collections, apiKey) {
    const stored = readStored();
    for (const col of collections){
        const key = col.contract || col.name || 'unknown';
        const last = stored.last_timestamps[key] || col.last_timestamp || 0;
        try {
            const events = await fetchOpenSeaSales(col.contract || '', last, apiKey);
            if (!events.length) continue;
            // append new events (avoid duplicates by id)
            const existingIds = new Set(stored.sales.map((s)=>s.id));
            const toAdd = events.filter((e)=>!existingIds.has(e.id));
            stored.sales = [
                ...toAdd,
                ...stored.sales
            ].slice(0, 5000); // cap
            // update last timestamp to newest event
            const newest = Math.max(...events.map((e)=>Date.parse(e.date) / 1000 || 0));
            stored.last_timestamps[key] = Math.max(stored.last_timestamps[key] || 0, newest);
        } catch (err) {
        // swallow per-collection errors so one failure doesn't stop the whole refresh
        // In production log this properly
        // console.error('refreshCollections error', err)
        }
    }
    writeStored(stored);
    return stored;
}
const __TURBOPACK__default__export__ = {
    readStored,
    writeStored,
    fetchOpenSeaSales,
    refreshCollections
};
}),
"[project]/Desktop/Proyectos/wiki-realms/app/api/lastsales/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proyectos/wiki-realms/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proyectos/wiki-realms/lib/lastsales.ts [app-route] (ecmascript)");
;
;
const CONTRACT_KOJINS = process.env.CONTRACT_ADDRESS_KOJINS;
const CONTRACT_MOUNTS = process.env.CONTRACT_ADDRESS_MOUNTS;
const OPENSEA_KEY = process.env.OPENSEA_API_KEY;
const RONIN_API = process.env.RONIN_API_URL;
const RONIN_API_KEY = process.env.API_KEY;
const COLLECTIONS = [
    {
        name: 'Kojins',
        contract: CONTRACT_KOJINS,
        market: 'opensea'
    },
    {
        name: 'Mounts',
        contract: CONTRACT_MOUNTS,
        market: 'opensea'
    },
    {
        name: 'Kojins',
        contract: CONTRACT_KOJINS,
        market: 'ronin'
    },
    {
        name: 'Mounts',
        contract: CONTRACT_MOUNTS,
        market: 'ronin'
    }
];
async function GET(request) {
    try {
        // helper: fetch with timeout using AbortController
        const fetchWithTimeout = async (input, init = {}, ms = 15000)=>{
            const controller = new AbortController();
            const id = setTimeout(()=>controller.abort(), ms);
            try {
                const res = await fetch(input, {
                    ...init,
                    signal: controller.signal
                });
                return res;
            } finally{
                clearTimeout(id);
            }
        };
        const url = new URL(request.url);
        const live = url.searchParams.get('live') === '1' || url.searchParams.get('live') === 'true';
        const debugMode = url.searchParams.get('debug') === '1' || url.searchParams.get('debug') === 'true';
        // If client requested live data, fetch directly from OpenSea and return recent sales
        if (live) {
            const all = [];
            const debug = {};
            for (const col of COLLECTIONS){
                try {
                    if (!col.contract) continue;
                    if (col.market === 'opensea') {
                        if (debugMode) {
                            try {
                                const base = process.env.OPENSEA_API_URL || 'https://api.opensea.io/api/v1/events';
                                const u = new URL(base);
                                if (col.contract && col.contract.startsWith('0x')) u.searchParams.set('asset_contract_address', col.contract);
                                else u.searchParams.set('collection_slug', col.contract);
                                u.searchParams.set('event_type', 'sale');
                                u.searchParams.set('limit', '10');
                                const headers = {};
                                if (OPENSEA_KEY) headers['X-API-KEY'] = OPENSEA_KEY;
                                const r = await fetchWithTimeout(u.toString(), {
                                    headers
                                }, 5000);
                                const text = await r.text();
                                debug[col.name + ':opensea_raw'] = {
                                    status: r.status,
                                    body: text.slice(0, 4000)
                                };
                            } catch (e) {
                                debug[col.name + ':opensea_raw'] = {
                                    error: String(e)
                                };
                            }
                        }
                        // Try OpenSea but fail fast (don't block the route for long)
                        try {
                            const evPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchOpenSeaSales"])(col.contract, 0, OPENSEA_KEY);
                            const evTimeout = new Promise((_, rej)=>setTimeout(()=>rej(new Error('OpenSea timeout')), 5000));
                            const events = await Promise.race([
                                evPromise,
                                evTimeout
                            ]);
                            if (debugMode) debug[col.name + ':opensea'] = {
                                count: events.length,
                                sample: events[0] || null
                            };
                            all.push(...events || []);
                        } catch (e) {
                            if (debugMode) debug[col.name + ':error'] = String(e);
                        }
                    } else if (col.market === 'ronin') {
                        // prefer GraphQL API for Ronin: do a direct POST with timeout and parse results
                        let events = [];
                        try {
                            const q = `{"query":"query RecentSales($tokenAddress: String!, $from: Int!, $size: Int!) { recentlySolds(from: $from, size: $size, tokenAddress: $tokenAddress) { results { assets { token { __typename ... on Erc721 { tokenIdStr: tokenId name image } ... on Erc1155 { tokenIdNum: tokenId name image } } quantity } maker matcher realPrice timestamp txHash } } }","variables":${JSON.stringify({
                                tokenAddress: col.contract,
                                from: 0,
                                size: 10
                            })}}`;
                            const headers = {
                                'Content-Type': 'application/json'
                            };
                            if (RONIN_API_KEY) headers['x-api-key'] = RONIN_API_KEY;
                            const r2 = await fetchWithTimeout(RONIN_API || '', {
                                method: 'POST',
                                headers,
                                body: q
                            }, 20000);
                            const text2 = await r2.text();
                            if (debugMode) debug[col.name + ':ronin_raw'] = {
                                status: r2.status,
                                body: text2.slice(0, 4000)
                            };
                            if (r2.ok) {
                                try {
                                    const parsed = JSON.parse(text2);
                                    const items = parsed?.data?.recentlySolds?.results || [];
                                    const mapped = items.map((it)=>{
                                        const asset = it?.assets?.[0];
                                        const token = asset?.token || {};
                                        const tokenId = token?.tokenIdStr ?? token?.tokenIdNum ?? token?.tokenId ?? null;
                                        const txHash = it?.txHash || `${col.contract}-${tokenId}-${it?.timestamp}`;
                                        const price = it?.realPrice ? Number(it.realPrice) / 1e18 : 0;
                                        const ts = it?.timestamp ? Number(it.timestamp) : undefined;
                                        const date = ts ? ts > 1e12 ? new Date(ts).toISOString() : new Date(ts * 1000).toISOString() : new Date().toISOString();
                                        const image = token?.image || asset?.image || null;
                                        return {
                                            id: String(txHash),
                                            collection: col.contract,
                                            tokenId: tokenId != null ? String(tokenId) : undefined,
                                            price,
                                            currency: 'RONIN',
                                            date,
                                            traits: [],
                                            maker: it?.maker || null,
                                            matcher: it?.matcher || null,
                                            txHash,
                                            image,
                                            name: token?.name || null,
                                            quantity: asset?.quantity ?? null
                                        };
                                    });
                                    if (mapped && mapped.length) events = mapped;
                                } catch (e) {
                                // ignore parse errors
                                }
                            }
                        } catch (e) {
                            if (debugMode) debug[col.name + ':ronin_raw'] = {
                                error: String(e)
                            };
                        }
                        // fallback to RPC-based scanning if GraphQL returned nothing
                        if (!events || events.length === 0) {
                            try {
                                events = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRoninSales"])(col.contract, 0, process.env.RONIN_RPC_URL);
                            } catch (e) {
                                events = [];
                            }
                        }
                        if (debugMode) debug[col.name + ':ronin'] = {
                            count: events.length,
                            sample: events[0] || null
                        };
                        all.push(...events);
                    }
                } catch (e) {
                    // continue on per-collection errors
                    if (debugMode) debug[col.name + ':error'] = String(e);
                }
            }
            // persist option: ?persist=1 will save results to data/lastsales.json
            const url = new URL(request.url);
            const persist = url.searchParams.get('persist') === '1' || url.searchParams.get('persist') === 'true';
            if (persist) {
                try {
                    const stored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readStored"])();
                    const existingIds = new Set(stored.sales.map((s)=>s.id));
                    const toAdd = all.filter((s)=>!existingIds.has(s.id));
                    stored.sales = [
                        ...toAdd,
                        ...stored.sales
                    ].slice(0, 5000);
                    // update last_timestamps per contract
                    for (const s of toAdd){
                        const key = s.collection || 'unknown';
                        const ts = s.date ? Math.floor(Date.parse(s.date) / 1000) : 0;
                        stored.last_timestamps[key] = Math.max(stored.last_timestamps[key] || 0, ts);
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeStored"])(stored);
                } catch (e) {
                // ignore persist errors
                }
            }
            if (debugMode) {
                try {
                    console.debug('lastsales debug:', debug);
                } catch (e) {}
                return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    sales: all,
                    debug
                });
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                sales: all
            });
        }
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readStored"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'failed to read data'
        }, {
            status: 500
        });
    }
}
async function POST() {
    // Trigger a refresh of the configured collections
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refreshCollections"])(COLLECTIONS, OPENSEA_KEY);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            result
        });
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'refresh failed'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7bb6e8ad._.js.map