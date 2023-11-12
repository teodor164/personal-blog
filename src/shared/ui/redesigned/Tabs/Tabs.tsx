import { ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../../common/Stack/Flex/Flex';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
    direction?: FlexDirection
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className,
        tabs,
        onTabClick,
        value,
        direction = 'row',
    } = props;

    const onCLickHandler = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <Flex direction={direction} gap="8" className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                    <Card
                        className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
                        onClick={onCLickHandler(tab)}
                        variant={isSelected ? 'light' : 'normal'}
                        key={tab.value}
                        border="round"
                    >
                        {tab.content}
                    </Card>
                );
            })}
        </Flex>
    );
};
