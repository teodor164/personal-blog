import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

type CardVariant = 'normal' | 'outline' | 'light'
type CardPadding = '0' | '8' | '16' | '24'
type CardBorder = 'round' | 'normal'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    variant?: CardVariant
    max?: boolean
    padding?: CardPadding
    border?: CardBorder
}

const mapPaddingToClass: Record<CardPadding, string> = {
    0: 'padding_0',
    8: 'padding_8',
    16: 'padding_16',
    24: 'padding_24',
};

const mapBorderToClass: Record<CardBorder, string> = {
    normal: 'border-normal',
    round: 'border-round',
};

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        variant = 'normal',
        max,
        padding = '8',
        border = 'normal',
        ...otherProps
    } = props;

    const paddingClass = mapPaddingToClass[padding];
    const borderClass = mapBorderToClass[border];

    return (
        <div
            className={
                classNames(
                    cls.Card,
                    { [cls.max]: max },
                    [className, cls[variant], cls[paddingClass], cls[borderClass]],
                )
            }
            {...otherProps}
        >
            {children}
        </div>
    );
});
