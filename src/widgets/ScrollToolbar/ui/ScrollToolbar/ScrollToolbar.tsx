import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/common/Stack';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo((props: ScrollToolbarProps) => {
    const { className } = props;

    return (
        <VStack max className={classNames(cls.ScrollToolbar, {}, [className])} align="center" justify="center">
            <ScrollToTopButton />
        </VStack>
    );
});
