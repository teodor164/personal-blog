import { Popover as HeadlessPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../../styles/const';
import popupCls from '../../../styles/Popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    panelClassName?: string
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
        panelClassName,
    } = props;

    return (
        <HeadlessPopover className={classNames('', {}, [className, popupCls.popup])}>
            <HeadlessPopover.Button
                as="div"
                className={popupCls.trigger}
            >
                {trigger}
            </HeadlessPopover.Button>

            <HeadlessPopover.Panel
                className={classNames(cls.panel, {}, [mapDirectionClass[direction], panelClassName])}
            >
                {children}
            </HeadlessPopover.Panel>
        </HeadlessPopover>
    );
};
