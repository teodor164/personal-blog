import { Fragment, ReactNode } from 'react';
import { Listbox as HLisBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { VStack } from '../../../../common/Stack';
import { Button } from '../../../Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/Popup.module.scss';
import { mapDirectionClass } from '../../styles/const';
import { Icon } from '../../../Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T
    defaultValue?: T
    onChange: (value: T) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}

// TODO add focus for button and hover for options, remove button inside button
export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        items,
        className,
        value,
        defaultValue = 'Select...',
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const selectedItem = items?.find((item) => item.value === value);

    return (
        <VStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HLisBox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames('', {}, [className, popupCls.popup])}
                disabled={readonly}
            >
                <HLisBox.Button
                    className={popupCls.trigger}
                >
                    <Button variant="filled" disabled={readonly} addonRight={<Icon Svg={ArrowIcon} />}>
                        {selectedItem?.content ?? defaultValue}
                    </Button>
                </HLisBox.Button>
                <HLisBox.Options
                    className={classNames(popupCls.menu, {}, [mapDirectionClass[direction]])}
                >
                    {items?.map((item) => (
                        <HLisBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                            [cls.selected]: selected,
                                        },
                                    )}
                                >
                                    {selected}
                                    {item.content}
                                </li>
                            )}
                        </HLisBox.Option>
                    ))}
                </HLisBox.Options>
            </HLisBox>
        </VStack>
    );
}
