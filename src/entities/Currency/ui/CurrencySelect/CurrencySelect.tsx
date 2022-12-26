import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Currency } from 'entities/Currency';

interface CurrencySelectProps {
    value?: string
    onChange?: (value: Currency) => void
    readonly?: boolean
    className?: string
}

const options = [
    { value: Currency.MDL, content: Currency.MDL },
    { value: Currency.RON, content: Currency.RON },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect: FC<CurrencySelectProps> = (props) => {
    const { t } = useTranslation();
    const {
        value, onChange, readonly, className,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={className}
            label={t('Currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
