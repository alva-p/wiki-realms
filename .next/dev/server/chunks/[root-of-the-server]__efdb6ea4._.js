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
    const base = 'https://api.opensea.io/api/v1/events';
    const url = new URL(base);
    url.searchParams.set('asset_contract_address', contract);
    url.searchParams.set('event_type', 'successful');
    url.searchParams.set('only_opensea', 'false');
    if (occurredAfterUnix) url.searchParams.set('occurred_after', String(occurredAfterUnix));
    url.searchParams.set('limit', '50');
    const headers = {};
    if (apiKey) headers['X-API-KEY'] = apiKey;
    const res = await fetch(url.toString(), {
        headers
    });
    if (!res.ok) throw new Error(`OpenSea fetch failed: ${res.status}`);
    const data = await res.json();
    const events = data?.asset_events || [];
    const normalized = events.map((e)=>{
        const asset = e?.asset || e?.asset_bundle?.assets && e.asset_bundle.assets[0];
        const tokenId = asset?.token_id || e?.asset_bundle?.slug || undefined;
        const totalPrice = e?.total_price ?? e?.payment_token?.usd_price ?? '0';
        const decimals = e?.payment_token?.decimals ?? 18;
        const price = Number(totalPrice) / Math.pow(10, decimals);
        const date = e?.transaction?.timestamp || e?.created_date;
        const traits = (asset?.traits || []).map((t)=>({
                trait_type: t.trait_type,
                value: t.value
            }));
        return {
            id: String(e.id || `${contract}-${tokenId}-${date}`),
            collection: asset?.collection?.name || asset?.collection?.slug || e?.collection?.slug || contract,
            tokenId,
            price: Number.isFinite(price) ? price : 0,
            currency: e?.payment_token?.symbol || undefined,
            date,
            traits
        };
    });
    return normalized;
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
"[project]/Desktop/Proyectos/wiki-realms/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
(()=>{
    const e = new Error("Cannot find module '@prisma/client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
const prisma = global.__prisma || new PrismaClient();
if ("TURBOPACK compile-time truthy", 1) global.__prisma = prisma;
const __TURBOPACK__default__export__ = prisma;
}),
"[project]/Desktop/Proyectos/wiki-realms/lib/lastsales_db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getCollectionState",
    ()=>getCollectionState,
    "readSalesFromDb",
    ()=>readSalesFromDb,
    "refreshCollectionsDb",
    ()=>refreshCollectionsDb,
    "upsertCollectionState",
    ()=>upsertCollectionState,
    "writeSalesToDb",
    ()=>writeSalesToDb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proyectos/wiki-realms/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proyectos/wiki-realms/lib/lastsales.ts [app-route] (ecmascript)");
;
;
async function readSalesFromDb() {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sale.findMany({
        orderBy: {
            date: 'desc'
        },
        take: 5000
    });
    return rows.map((r)=>({
            id: r.id,
            collection: r.collection,
            tokenId: r.tokenId || undefined,
            price: r.price,
            currency: r.currency || undefined,
            date: r.date.toISOString(),
            traits: r.traits
        }));
}
async function upsertCollectionState(contract, name, market, lastTimestamp = 0) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collectionState.upsert({
        where: {
            contract
        },
        update: {
            name,
            market,
            lastTimestamp
        },
        create: {
            contract,
            name,
            market,
            lastTimestamp
        }
    });
}
async function getCollectionState(contract) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collectionState.findUnique({
        where: {
            contract
        }
    });
}
async function writeSalesToDb(sales) {
    // insert many (skip existing by id)
    for (const s of sales){
        await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sale.upsert({
            where: {
                id: s.id
            },
            update: {
                price: s.price,
                updatedAt: new Date()
            },
            create: {
                id: s.id,
                collection: s.collection || 'unknown',
                tokenId: s.tokenId || null,
                price: s.price || 0,
                currency: s.currency || null,
                date: new Date(s.date),
                traits: s.traits || null
            }
        });
    }
}
async function refreshCollectionsDb(collections, apiKey) {
    for (const col of collections){
        const state = await getCollectionState(col.contract || '');
        const last = state?.lastTimestamp || col.last_timestamp || 0;
        const events = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchOpenSeaSales"])(col.contract || '', last, apiKey);
        if (!events.length) continue;
        await writeSalesToDb(events);
        const newest = Math.max(...events.map((e)=>Date.parse(e.date) / 1000 || 0));
        await upsertCollectionState(col.contract || '', col.name, col.market, Math.max(last, newest));
    }
}
const __TURBOPACK__default__export__ = {
    readSalesFromDb,
    writeSalesToDb,
    refreshCollectionsDb,
    upsertCollectionState,
    getCollectionState
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales_db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Proyectos/wiki-realms/lib/lastsales_db.ts [app-route] (ecmascript)");
;
;
;
const CONTRACT_KOJINS = process.env.CONTRACT_ADDRESS_KOJINS;
const CONTRACT_MOUNTS = process.env.CONTRACT_ADDRESS_MOUNTS;
const OPENSEA_KEY = process.env.OPENSEA_API_KEY;
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
    }
];
async function GET() {
    try {
        // Prefer DB if configured
        if (process.env.DATABASE_URL) {
            const sales = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales_db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].readSalesFromDb();
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                sales
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
        if (process.env.DATABASE_URL) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$lib$2f$lastsales_db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].refreshCollectionsDb(COLLECTIONS, OPENSEA_KEY);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Proyectos$2f$wiki$2d$realms$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                ok: true
            });
        }
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

//# sourceMappingURL=%5Broot-of-the-server%5D__efdb6ea4._.js.map