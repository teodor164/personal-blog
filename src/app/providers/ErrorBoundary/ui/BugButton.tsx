import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

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
