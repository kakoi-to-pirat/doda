import get from 'lodash/get';

export const localStorageConfig = {
  set: (key: string, value: unknown) =>
    localStorage.setItem(
      'config',
      JSON.stringify({
        [key]: value,
      }),
    ),

  get: (key: string, defaultValue: unknown = null) =>
    get(JSON.parse(localStorage.getItem('config') || '{}'), key, defaultValue),

  setTo: (keyTarget: string, key: string, value: unknown) => {
    const prev = get(
      JSON.parse(localStorage.getItem('config') || '{}'),
      keyTarget,
      null,
    );
    localStorage.setItem(
      'config',
      JSON.stringify({
        [keyTarget]: { ...prev, ...{ [key]: value } },
      }),
    );
  },
};
