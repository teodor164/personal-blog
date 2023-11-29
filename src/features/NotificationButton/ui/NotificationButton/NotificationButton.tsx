import React, { memo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { Icon } from '@/shared/ui/redesigned/Icon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Popover } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';

import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Icon
                    Svg={NotificationIcon}
                    clickable
                    onClick={onDrawerOpen}
                />
            )}
            off={(
                <ButtonDeprecated
                    theme={ButtonTheme.CLEAR}
                    onClick={onDrawerOpen}
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            )}
        />
    );

    return (
        <>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={(
                        <Popover
                            className={classNames('', {}, [className])}
                            panelClassName={classNames(cls.notificationPanel, {})}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notification} />
                        </Popover>
                    )}
                    off={(
                        <PopoverDeprecated
                            className={classNames('', {}, [className])}
                            panelClassName={classNames(cls.notificationPanel, {})}
                            direction="bottom left"
                            trigger={trigger}
                        >
                            <NotificationList className={cls.notification} />
                        </PopoverDeprecated>
                    )}
                />
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
