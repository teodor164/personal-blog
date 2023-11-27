import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as DeprecatedListBox } from '@/shared/ui/deprecated/Popups/ui/Listbox';

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

    const listBoxProps = {
        className,
        items: options,
        value,
        defaultValue: t('Select Currency'),
        label: t('Select Currency'),
        onChange: onChangeHandler,
        readonly,
        direction: 'top right' as const,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<DeprecatedListBox {...listBoxProps} />}
        />

    );
};
