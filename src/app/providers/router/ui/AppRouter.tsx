import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={<div>{t('Loading...')}</div>}>
            <div className="page-wrapper">
                <Routes>
                    {Object.values(routeConfig)
                        .map(({ path, element }) => <Route key={path} element={element} path={path} />)}
                </Routes>
            </div>
        </Suspense>
    );
};
