import { ConfigProvider } from 'antd';

import { IWithAntUI } from './WithAntUI.h';

export const WithAntUI = ({ children }: IWithAntUI): JSX.Element => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#3a96b7',
        colorInfo: '#3a96b7',
        colorSuccess: '#3ab77c',
        colorTextBase: '#272727',
        borderRadius: 8,
        colorBgContainer: '#eff1f8',
      },
      components: {
        Menu: {
          itemColor: '#272727',
          itemHoverColor: '#fff',
          itemHoverBg: '#3a96b7',
          itemSelectedBg: 'inherit',
          subMenuItemBg: 'inherit',
          zIndexPopup: 0,
          itemPaddingInline: 14,
          itemMarginInline: 0,
          itemMarginBlock: 0,
          iconSize: 18,
          collapsedIconSize: 18,
          collapsedWidth: 45,
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
);
