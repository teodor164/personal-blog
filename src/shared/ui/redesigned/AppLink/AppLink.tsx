import { memo } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
    variant?: AppLinkVariant
    className?: string
    activeClassName?: string
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        children,
        className,
        to,
        variant = 'primary',
        activeClassName = '',
        ...otherProps
    } = props;

    return (
        <NavLink
            className={({ isActive }) => classNames(
                cls.AppLink,
                { [activeClassName]: isActive },
                [className, cls[variant]],
            )}
            to={to}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
});
