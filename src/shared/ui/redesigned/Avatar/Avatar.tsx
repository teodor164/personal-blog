import {
    CSSProperties, memo, useMemo,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../common/AppImage';
import UserIcon from '../../../assets/icons/avarat-icon.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

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
        size = 100,
        alt,
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            style={style}
        />
    );
});
