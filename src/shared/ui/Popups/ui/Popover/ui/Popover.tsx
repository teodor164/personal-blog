import { Popover as HeadlessPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../../styles/const';
import popupCls from '../../../styles/Popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        direction = 'bottom right',
        children,
    } = props;

    return (
        <HeadlessPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HeadlessPopover.Button className={popupCls.trigger}>
                {trigger}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel className={classNames(cls.panel, {}, [mapDirectionClass[direction]])}>
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
};
