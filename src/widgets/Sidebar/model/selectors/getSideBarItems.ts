import { createSelector } from "@reduxjs/toolkit";
import { create } from "domain";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";
import ProfileIcon from "shared/assets/icons/profile-20-20.svg";
import Articals from "shared/assets/icons/articals.svg.svg";
import { SidebarItemType } from "../types/sidebar";

export const getSideBarItems = createSelector(getUserAuthData,(userData) => {
    const sidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: MainIcon,
    text: "Главная",
  },
  {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "О сайте",
  },
];

if (userData) {
    sidebarItemsList.push( {
    path: RoutePath.profile + (userData ? userData.id : ""),
    Icon: ProfileIcon,
    text: "Профиль",
    authOnly: true,
  },
    {
    path: RoutePath.articals,
    Icon: Articals,
    text: "Статьи",
    authOnly: true,
  },)
}
return sidebarItemsList
})
