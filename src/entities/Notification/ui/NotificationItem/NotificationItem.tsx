import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NotificationSchema } from '../../model/types/NotificationSchema';
import cls from './NotificationItem.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

interface NotificationItemProps {
    className?: string;
    item: NotificationSchema
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <Text
                        title={item.title}
                        text={item.description}
                    />
                </Card>
            )}
            off={(
                <CardDeprecated
                    theme={CardTheme.OUTLINED}
                    className={classNames(cls.NotificationItem, {}, [className])}
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            )}
        />
    );

    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
