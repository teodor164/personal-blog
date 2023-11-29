import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlePageGreeting = memo(() => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasOpen } = useJsonSettings();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasOpen) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpen: true }));
        }
    }, [dispatch, isArticlesPageWasOpen]);

    const onClose = () => setIsOpen(false);

    const text = (
        <Text
            title={t('Welcome to article page')}
            text={t('Here you can read articles on different subjects')}
        />
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
