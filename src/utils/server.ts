export const makePageProps = <PagePropsType extends Record<string, unknown>>(
  pageProps: PagePropsType,
) => ({
    pageContext: {
      pageProps,
    },
  });
