import type React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import AboutIcon from 'shared/assets/icons/ico-about.svg';
import MainIcon from 'shared/assets/icons/ico-main.svg';
import ProfileIcon from 'shared/assets/icons/ico-profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: 'Главная страница'
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: 'О сайте'
  },
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true
  }
];
