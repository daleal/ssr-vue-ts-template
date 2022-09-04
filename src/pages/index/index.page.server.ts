import * as api from '@/api';
import { makePageProps } from '@/utils/server';

export const onBeforeRender = async () => {
  try {
    const health = await api.common.healthCheck();
    return makePageProps({ health });
  } catch (error) {
    return makePageProps({ health: 'Something went wrong!' });
  }
};
