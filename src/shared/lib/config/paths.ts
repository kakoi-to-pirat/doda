export const BASE_PATH = '/doda';

export const PATH_PAGE = {
  root: `${BASE_PATH}/`,
  profile: `${BASE_PATH}/profile`,
  about: `${BASE_PATH}/about`,
  page404: '*',

  login: `${BASE_PATH}/login`,
  logout: `${BASE_PATH}/logout`,

  report: {
    root: `${BASE_PATH}/report`,
    general: `${BASE_PATH}/report/general`,
    details: `${BASE_PATH}/report/details`,
    collection: `${BASE_PATH}/report/collection`,
  },

  // не используются

  // profile: {
  //   root: (username: string) => `${BASE_PATH}/profile/${username}`,
  //   favorites: (username: string) =>
  //     `${BASE_PATH}/profile/${username}/favorites`,
  // },

  // editor: {
  //   root: '${BASE_PATH}/editor',
  //   edit: (slug: string) => `${BASE_PATH}/editor/${slug}`,
  // },
};

export const PATH_PAGE_TRANSLATE_RU = {
  [PATH_PAGE.page404]: '404',
  [PATH_PAGE.login]: 'Аутентификация',
  [PATH_PAGE.about]: 'О программе',
  [PATH_PAGE.profile]: 'Профиль',
  [PATH_PAGE.report.root]: 'Отчеты',
  [PATH_PAGE.report.general]: 'Общий отчет',
  [PATH_PAGE.report.details]: 'Детальный отчет',
  [PATH_PAGE.report.collection]: 'Отчет об инкассациях',
};
