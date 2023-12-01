import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import './PageLoader.scss';
import { Loader } from '@/shared/ui/deprecated/Loader';

interface PageLoaderProps {
    className?: string
}
/**
 * @deprecated
 */
export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
    <div className={classNames('page__loader', {}, [className])}>
        <Loader />
    </div>
);
