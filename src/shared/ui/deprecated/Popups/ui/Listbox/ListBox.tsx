import { Fragment, ReactNode } from 'react';
import { Listbox as HLisBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import { HStack } from '../../../../common/Stack';
import { Button } from '../../../Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/Popup.module.scss';
import { mapDirectionClass } from '../../styles/const';

interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    readonly?: boolean
    direction?: DropdownDirection
    label?: string
}
/**
 * @deprecated
 */
export function ListBox(props: ListBoxProps) {
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

    return (
        <HStack gap="4" align="center">
            {label && <span>{`${label}>`}</span>}
            <HLisBox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                disabled={readonly}
            >
                <HLisBox.Button
                    className={cls.trigger}
                >
                    <Button>
                        {value ?? defaultValue}
                    </Button>
                </HLisBox.Button>
                <HLisBox.Options
                    className={classNames(cls.options, {}, [mapDirectionClass[direction]])}
                >
                    {items?.map((item) => (
                        <HLisBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({
                                active,
                                selected,
                            }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HLisBox.Option>
                    ))}
                </HLisBox.Options>
            </HLisBox>
        </HStack>
    );
}
