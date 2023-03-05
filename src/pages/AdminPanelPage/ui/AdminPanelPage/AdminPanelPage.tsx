import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page className={classNames('', {}, [className])}>
            {t('Admin Panel Page')}
        </Page>
    );
};

export default AdminPanelPage;
