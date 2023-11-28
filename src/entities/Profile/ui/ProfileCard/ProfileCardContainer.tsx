import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardRedesigned } from './redesigned/ProfileCardRedesigned';
import { ProfileCardDeprecated } from './deprecated/ProfileCardDeprecated';
import { Profile } from '../..';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export interface ProfileCardProps {
    className?: string
    data?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    onChangeFirstname?: (value: string) => void
    onChangeLastname?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => (
    <ToggleFeatures
        feature="isAppRedesigned"
        on={<ProfileCardRedesigned {...props} />}
        off={<ProfileCardDeprecated {...props} />}
    />
);
