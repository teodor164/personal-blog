import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter', () => {
    test('Page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('about-page');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/not-existing-page',
        });

        const page = await screen.findByTestId('not-found-page');
        expect(page).toBeInTheDocument();
    });

    test('Redirect for unauthorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
        });

        const page = await screen.findByTestId('main-page');
        expect(page).toBeInTheDocument();
    });

    test('Access for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('profile-page');
        expect(page).toBeInTheDocument();
    });

    test('Access denied user doesnt has the rule', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('forbidden-page');
        expect(page).toBeInTheDocument();
    });

    test('User has the role and page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('admin-panel-page');
        expect(page).toBeInTheDocument();
    });
});
