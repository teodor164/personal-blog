import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextVariant = 'primary' | 'error' | 'accent'
type TextAlign = 'right' | 'left' | 'center'
type TextSize = 's' | 'm' | 'l'
type WhiteSpace = 'nowrap' | 'normal' | 'pre'

interface TextProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    whiteSpace?: WhiteSpace
    bold?: boolean

    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    s: 'h3',
    m: 'h2',
    l: 'h1',
};
export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        size = 'm',
        variant = 'primary',
        align = 'left',
        whiteSpace = 'normal',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const additionClasses = [className, cls[variant], cls[align], cls[size], cls[`white-space-${whiteSpace}`]];

    return (
        <div className={classNames(cls.Text, { [cls.bold]: bold }, additionClasses)}>
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p
                    className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
