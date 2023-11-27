import {
    ChangeEvent, InputHTMLAttributes, memo, MutableRefObject, ReactNode, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { VStack } from '../../common/Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size'>

type InputSize = 's' | 'm' | 'l'

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autoFocus?: boolean
    readonly?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
    label?: string
    size?: InputSize
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        size = 'm',
        ...otherProps
    } = props;

    const ref = useRef() as MutableRefObject<HTMLInputElement>;
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.isFocused]: isFocused,
        [cls.withAddonLeft]: Boolean(addonLeft),
        [cls.withAddonRight]: Boolean(addonRight),
    };

    const content = (
        <div className={classNames(cls.InputWrapper, mods, [className, cls[size]])}>
            <div className={cls.addonLeft}>{addonLeft}</div>
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readonly}
                placeholder={placeholder}
                {...otherProps}
            />
            <div className={cls.addonRight}>{addonRight}</div>
        </div>
    );

    if (label) {
        return (
            <VStack max gap="4">
                <Text text={label} whiteSpace="nowrap" />
                {content}
            </VStack>
        );
    }

    return content;
});
