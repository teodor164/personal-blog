import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
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
        <Select
            className={className}
            label={t('Country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
