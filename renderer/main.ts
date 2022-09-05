import { createSSRApp, defineComponent, h } from 'vue';
import { setPageContext } from '../src/composables/pageContext';

import type { PageContext } from '../src/types/renderer/page';

import '../src/assets/styles/main.css';

export const createApp = (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const ApplicationComponent = defineComponent({
    render() {
      return h(Page, pageProps || {});
    },
  });

  const application = createSSRApp(ApplicationComponent);

  setPageContext(application, pageContext);

  return application;
};
