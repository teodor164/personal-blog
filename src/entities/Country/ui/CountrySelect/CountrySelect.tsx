import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups/ui/Listbox';
import { Country } from '../../model/types/country';

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

    return (
        <ListBox
            className={className}
            items={options}
            value={value}
            defaultValue={t('Select Country')}
            label={t('Select Country')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top right"
        />
    );
};
