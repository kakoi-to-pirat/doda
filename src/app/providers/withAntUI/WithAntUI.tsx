import { ConfigProvider } from 'antd';

import { LAYOUT } from '@/shared/lib';

import { IWithAntUI } from './WithAntUI.h';

export const WithAntUI = ({ children }: IWithAntUI): JSX.Element => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: LAYOUT.colors['--color-blue'],
        colorInfo: LAYOUT.colors['--color-blue'],
        colorSuccess: LAYOUT.colors['--color-green'],
        colorTextBase: LAYOUT.colors['--color-black'],
        borderRadius: LAYOUT.quantities['--base-border-radius'],
        colorBgContainer: LAYOUT.colors['--color-main-bg'],
      },
      components: {
        Menu: {
          itemColor: LAYOUT.colors['--color-black'],
          itemHoverColor: LAYOUT.colors['--color-white'],
          itemHoverBg: LAYOUT.colors['--color-blue'],
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
        Table: {
          headerBorderRadius: 0,
        },
      },
    }}
  >
    {children}
  </ConfigProvider>
);
