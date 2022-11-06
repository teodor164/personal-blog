import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/';

export const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig)
                    .map(({ path, element }) => <Route key={path} element={element} path={path} />)}
            </Routes>
        </div>
    </Suspense>
);
