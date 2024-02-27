import { useStorage } from '@vueuse/core';

export const access_token = useStorage('access_token', () => '');
export const refresh_token = useStorage('refresh_token', () => '');
