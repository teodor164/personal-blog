import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onDrawerClose = () => {
        setIsOpen(false);
    };

    const onDrawerOpen = () => {
        setIsOpen(true);
    };

    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onDrawerOpen}
        >
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    className={classNames('', {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notification} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer
                    isOpen={isOpen}
                    onClose={onDrawerClose}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>
        </>
    );
});
