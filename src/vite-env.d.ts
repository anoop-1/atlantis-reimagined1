/// <reference types="vite/client" />

/** Salted SHA-256 of the admin email and password, injected by vite.config.ts (empty when unset). */
declare const __ADMIN_AUTH_HASH__: string;
