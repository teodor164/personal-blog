import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState<boolean>();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onToggleModal}
                className={cls.loginBtn}
            >
                {t('Login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {/* eslint-disable-next-line */}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos inventore iste laboriosam minus molestiae omnis placeat ratione reiciendis sunt veritatis. Aperiam consequuntur doloremque error hic ipsum natus quod quos sunt totam vel! Aliquid autem deleniti eaque esse ex excepturi id nemo, nobis possimus quis quo sint veniam. Accusamus aperiam asperiores assumenda autem dignissimos doloremque ducimus ea earum eligendi esse fugiat laborum mollitia nam officiis, perferendis quibusdam quo reiciendis rerum sapiente sequi suscipit tempora tenetur voluptate. Aspernatur aut autem dolore exercitationem, explicabo fugit iste iure, maxime necessitatibus nobis quidem repellat repellendus sint. Aspernatur dicta dolores ducimus eligendi necessitatibus nisi pariatur tempore!
            </Modal>
        </div>
    );
};
