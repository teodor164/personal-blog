import { ButtonHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline'
export type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    /**
     * Button variant. Responsible for the visual (in a frame, without styles, color opposite to the variant of the application, etc.)
     */
    variant?: ButtonVariant;
    /**
     * Flag that makes the button square
     */
    square?: boolean;
    /**
     *Button size according to design system
     */
    size?: ButtonSize;
    /**
     * Flag responsible for the status of the button
     */
    disabled?: boolean;
    /**
     * Enlarges the button to the full free width
     */
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        variant = 'outline',
        square,
        size = 'm',
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
