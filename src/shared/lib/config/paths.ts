export const BASE_PATH = '/doda';

export const PATH_PAGE = {
  root: `${BASE_PATH}/`,
  profile: `${BASE_PATH}/profile`,
  about: `${BASE_PATH}/about`,
  page404: '*',

  login: `${BASE_PATH}/login`,
  logout: `${BASE_PATH}/logout`,

  statistics: `${BASE_PATH}/statistics`,
  monitoring: `${BASE_PATH}/monitoring`,
  payment: `${BASE_PATH}/payment`,

  report: {
    root: `${BASE_PATH}/report`,
    general: `${BASE_PATH}/report/general`,
    details: `${BASE_PATH}/report/details`,
    collection: `${BASE_PATH}/report/collection`,
  },

  points: {
    root: `${BASE_PATH}/points`,
    remoteСontrol: `${BASE_PATH}/points/remote-control`,
    settings: `${BASE_PATH}/points/settings`,
  },

  administration: {
    root: `${BASE_PATH}/administration`,
    agents: `${BASE_PATH}/administration/agents`,
    employees: `${BASE_PATH}/administration/employees`,
    franchisee: `${BASE_PATH}/administration/franchisee`,
    points: `${BASE_PATH}/administration/points`,
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

export const PATH_CONFIG = {
  [PATH_PAGE.page404]: { id: 'page404', title: '404' },
  [PATH_PAGE.login]: { id: 'pageLogin', title: 'Аутентификация' },
  [PATH_PAGE.about]: { id: 'pageAbout', title: 'О программе' },
  [PATH_PAGE.profile]: { id: 'pageProfile', title: 'Профиль' },

  [PATH_PAGE.statistics]: { id: 'pageStatistics', title: 'Статистика' },
  [PATH_PAGE.monitoring]: { id: 'pageMonitoring', title: 'Мониторинг' },
  [PATH_PAGE.payment]: { id: 'pagePayment', title: 'Поиск платежей' },

  [PATH_PAGE.report.root]: {
    id: 'pageReport',
    title: 'Отчеты',
  },
  [PATH_PAGE.report.general]: {
    id: 'pageReportGeneral',
    title: 'Общий отчет',
  },
  [PATH_PAGE.report.details]: {
    id: 'pageReportDetails',
    title: 'Детальный отчет',
  },
  [PATH_PAGE.report.collection]: {
    id: 'pageReportCollection',
    title: 'Отчет об инкассациях',
  },

  [PATH_PAGE.points.root]: {
    id: 'pagePoints',
    title: 'ТО точек',
  },
  [PATH_PAGE.points.remoteСontrol]: {
    id: 'pagePointsRemoteСontrol',
    title: 'Удаленное управление',
  },
  [PATH_PAGE.points.settings]: {
    id: 'pagePointsSettings',
    title: 'Настройка',
  },

  [PATH_PAGE.administration.root]: {
    id: 'pageAdministration',
    title: 'Администрирование',
  },
  [PATH_PAGE.administration.agents]: {
    id: 'pageAdministrationAgents',
    title: 'Агенты',
  },
  [PATH_PAGE.administration.employees]: {
    id: 'pageAdministrationEmployees',
    title: 'Сотрудники',
  },
  [PATH_PAGE.administration.franchisee]: {
    id: 'pageAdministrationFranchisee',
    title: 'Франчайзи',
  },
  [PATH_PAGE.administration.points]: {
    id: 'pageAdministrationPoints',
    title: 'Точки',
  },
};
