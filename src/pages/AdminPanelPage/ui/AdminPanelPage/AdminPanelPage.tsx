import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page data-testid="admin-panel-page" className={classNames('', {}, [className])}>
            {t('Admin Panel Page')}
        </Page>
    );
};

export default AdminPanelPage;
