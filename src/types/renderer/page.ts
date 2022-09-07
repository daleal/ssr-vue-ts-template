import type { PageContextBuiltIn } from 'vite-plugin-ssr';

export type PageContext = {
  Page: object
  urlPathname: string
  pageProps?: Record<string, unknown>
  redirectTo?: string
} & PageContextBuiltIn;
