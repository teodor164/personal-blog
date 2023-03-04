import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox';
import { Currency } from '../../model/types/currency';

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
        <ListBox
            className={className}
            items={options}
            value={value}
            defaultValue={t('Select Currency')}
            label={t('Select Currency')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
};
