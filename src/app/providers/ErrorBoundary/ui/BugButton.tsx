import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';

// Button for testing ErrorBoundary
export const BugButton: FC = () => {
    const onThrow = () => {
        throw new Error();
    };

    const { t } = useTranslation();

    return (
        <Button onClick={onThrow}>
            {t('Throw error')}
        </Button>
    );
};
