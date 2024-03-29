export interface IMonitioringData {
  exchangeTime: string;
  lastTransaction: string;
  agentNumber: number;
  waterPumpNumber: string;
  address: string;
  alias: string;
  pointNumber: string;
  tankTemperature: number;
  boxTemperature: number;
  amountCashOnHand: number;
  status: 'ok' | 'fail';
  softwareVersion: number;
  type: 'selected' | 'picked' | 'missedSession' | 'noConnection';
  key: string | number;
}

export const data: IMonitioringData[] = [
  {
    key: 1,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1011,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 2,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1012,
    waterPumpNumber: '0120030001',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100002',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 3,
    type: 'noConnection',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1013,
    waterPumpNumber: '0120030002',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100003',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 4,
    type: 'missedSession',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1014,
    waterPumpNumber: '0120030003',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100004',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 5,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1010,
    waterPumpNumber: '0120030020',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100005',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 6,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1210,
    waterPumpNumber: '0120030020',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100006',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 7,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1310,
    waterPumpNumber: '0120030206',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100006',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 8,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1315,
    waterPumpNumber: '0120030010',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100007',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 9,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1110,
    waterPumpNumber: '0120030020',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100008',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 10,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1017,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100009',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 11,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1018,
    waterPumpNumber: '0120031200',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100011',
    tankTemperature: 16,
    boxTemperature: 9,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 12,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 9019,
    waterPumpNumber: '01200303400',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100021',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 13,
    type: 'noConnection',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 7010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 14,
    type: 'missedSession',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 6010,
    waterPumpNumber: '0120030300',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100201',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 15,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 9010,
    waterPumpNumber: '0120030001',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010103001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 16,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010140001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 17,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010150001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 18,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010105001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 2.01,
  },
  {
    key: 19,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1010,
    waterPumpNumber: '0120630001',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100701',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 12300,
    status: 'ok',
    softwareVersion: 2.01,
  },
  {
    key: 20,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1210,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010107600',
    tankTemperature: 90,
    boxTemperature: 2,
    amountCashOnHand: 12300,
    status: 'fail',
    softwareVersion: 1.01,
  },
  {
    key: 21,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1410,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100891',
    tankTemperature: 10,
    boxTemperature: 4,
    amountCashOnHand: 14300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 22,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1050,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010100451',
    tankTemperature: 10,
    boxTemperature: 3,
    amountCashOnHand: 11300,
    status: 'fail',
    softwareVersion: 1.04,
  },
  {
    key: 23,
    type: 'noConnection',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1710,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010123201',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 16300,
    status: 'fail',
    softwareVersion: 1.01,
  },
  {
    key: 24,
    type: 'missedSession',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 1019,
    waterPumpNumber: '0120030000',
    address: 'Курсавка, Мира 127',
    alias: 'ДК',
    pointNumber: '0101005671',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 125300,
    status: 'fail',
    softwareVersion: 1.01,
  },
  {
    key: 25,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 6010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '0101005671',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 1200,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 26,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 5010,
    waterPumpNumber: '0120030000',
    address: 'Ставрополь, Мира 127',
    alias: 'ДК',
    pointNumber: '010167001',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 1200300,
    status: 'ok',
    softwareVersion: 1.01,
  },
  {
    key: 27,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 4010,
    waterPumpNumber: '0120030000',
    address: 'Курсавка, Мира 127',
    alias: 'ДК',
    pointNumber: '010100051',
    tankTemperature: 10,
    boxTemperature: 7,
    amountCashOnHand: 178900,
    status: 'ok',
    softwareVersion: 1.02,
  },
  {
    key: 28,
    type: 'picked',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 3010,
    waterPumpNumber: '0120030000',
    address: 'Курсавка, Мира 127',
    alias: 'ДК',
    pointNumber: '010100001',
    tankTemperature: 11,
    boxTemperature: 7,
    amountCashOnHand: 2300,
    status: 'ok',
    softwareVersion: 1.02,
  },
  {
    key: 29,
    type: 'selected',
    exchangeTime: new Date().toLocaleDateString('ru'),
    lastTransaction: new Date().toLocaleDateString('ru'),
    agentNumber: 2010,
    waterPumpNumber: '0120030000',
    address: 'Курсавка, Мира 127',
    alias: 'ДК',
    pointNumber: '0101034101',
    tankTemperature: 11,
    boxTemperature: 7,
    amountCashOnHand: 1239000,
    status: 'ok',
    softwareVersion: 1.02,
  },
];
