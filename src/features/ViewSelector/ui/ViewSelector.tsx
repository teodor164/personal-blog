import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ViewSelector.module.scss';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';

// TODO this component should not depend of ArticleView, should be generic component
import { ArticleView } from '@/entities/Article';

import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import { Icon as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import { Button as DeprecatedButton, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { HStack } from '@/shared/ui/common/Stack';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewsTypes = [
    {
        view: ArticleView.SMALL,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: ArticleView.BIG,
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

// TODO add styling from design
export const ViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <Card border="partial" className={classNames(cls.ViewSelectorRedesigned, {}, [className])}>
                    <HStack gap="8" reverse>
                        {viewsTypes.map((viewType) => (
                            <Icon
                                clickable
                                onClick={onClick(viewType.view)}
                                key={viewType.view}
                                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                            />
                        ))}
                    </HStack>
                </Card>
            )}
            off={(
                <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                    {viewsTypes.map((viewType) => (
                        <DeprecatedButton
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                            key={viewType.view}
                        >
                            <DeprecatedIcon
                                className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                                Svg={viewType.icon}
                                width={24}
                                height={24}
                            />
                        </DeprecatedButton>
                    ))}
                </div>
            )}
        />

    );
});
