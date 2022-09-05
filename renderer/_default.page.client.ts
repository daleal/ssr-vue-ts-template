import { createHead } from '@vueuse/head';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router';

import { createApp } from './main';
import type { PageContext } from '../src/types/renderer/page';

export const render = async (pageContext: PageContextBuiltInClient & PageContext) => {
  const application = createApp(pageContext);
  const head = createHead();

  application.use(head);

  application.mount('#app');
};
