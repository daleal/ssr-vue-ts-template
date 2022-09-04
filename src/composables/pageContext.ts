import { inject } from 'vue';

import type { App, InjectionKey } from 'vue';
import type { PageContext } from '@/types/renderer/page';

const CONTEXT_KEY: InjectionKey<PageContext> = Symbol('Global Page Context');

export const usePageContext = () => {
  const pageContext = inject(CONTEXT_KEY);
  if (!pageContext) {
    throw new Error('setPageContext() not called in parent');
  }

  return { pageContext };
};

export const setPageContext = (application: App, pageContext: PageContext) => {
  application.provide(CONTEXT_KEY, pageContext);
};
