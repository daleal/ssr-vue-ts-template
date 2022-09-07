import { renderToString } from '@vue/server-renderer';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import { createHead, renderHeadToString } from '@vueuse/head';

import { createApp } from './main';
import type { PageContext } from '../src/types/renderer/page';

export const passToClient = ['pageProps', 'urlPathname', 'routeParams'];

const defaultHead = {
  title: 'SSR Vue + TS',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/vite.svg',
    },
  ],
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
    },
  ],
};

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
  const application = createApp(pageContext);
  const head = createHead(defaultHead);

  application.use(head);

  const appHtml = await renderToString(application);
  const {
    headTags, htmlAttrs, bodyAttrs, bodyTags,
  } = renderHeadToString(head);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html${dangerouslySkipEscape(htmlAttrs)}>
      <head>
        ${dangerouslySkipEscape(headTags)}
      </head>
      <body${dangerouslySkipEscape(bodyAttrs)}>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
        ${dangerouslySkipEscape(bodyTags)}
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do
      // page redirection: https://vite-plugin-ssr.com/page-redirection
    },
  };
};
