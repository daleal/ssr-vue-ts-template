export const makePageProps = <PagePropsType extends Record<string, unknown>>(
  pageProps: PagePropsType,
) => ({
    pageContext: {
      pageProps,
    },
  });

export const redirectTo = (redirectionLocation: string) => ({
  pageContext: {
    redirectTo: redirectionLocation,
  },
});
