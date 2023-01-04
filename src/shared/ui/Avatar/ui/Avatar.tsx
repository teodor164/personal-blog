import {
    CSSProperties, memo, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    src?: string
    className?: string
    size?: number
    alt?: string
}

export const Avatar = memo((props: AvatarProps) => {
    const {
        src,
        className,
        size,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={style}
        />
    );
});
