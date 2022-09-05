import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';

export type PageContext = {
  Page: object
  pageProps?: Record<string, unknown>
  urlPathname: string
} & PageContextBuiltInClient;
