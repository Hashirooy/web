import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticalDetailsPage } from 'pages/ArticalDetailsPage';
import { ArticalPage } from 'pages/ArticalPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICALS = "articals",
    ARTICAL_DETAILS = "artical_details",
    // last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICALS]: '/articals',
    [AppRoutes.ARTICAL_DETAILS]: '/articals/',// + id
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly:true
    },
      [AppRoutes.ARTICALS]: {
        path: RoutePath.articals,
        element: <ArticalPage/>,
         authOnly:true
    },
       [AppRoutes.ARTICAL_DETAILS]: {
        path:`${ RoutePath.artical_details + ':id'}`,
        element: <ArticalDetailsPage/>,
         authOnly:true
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
