import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox as DeprecatedListBox } from '@/shared/ui/deprecated/Popups/ui/Listbox';

interface CountrySelectProps {
    value?: string
    onChange?: (value: Country) => void
    readonly?: boolean
    className?: string
}

const options = [
    { value: Country.Moldova, content: Country.Moldova },
    { value: Country.Romania, content: Country.Romania },
    { value: Country.Germany, content: Country.Germany },
];

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const { t } = useTranslation();
    const {
        value, onChange, readonly, className,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    const listBoxProps = {
        className,
        items: options,
        value,
        defaultValue: t('Select Country'),
        label: t('Select Country'),
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
