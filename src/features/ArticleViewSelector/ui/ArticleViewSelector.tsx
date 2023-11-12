import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TitleIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewsTypes = [
    {
        view: ArticleView.SMALL,
        icon: TitleIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewsTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        className={classNames('', { [cls.notSelected]: viewType.view !== view })}
                        Svg={viewType.icon}
                        width={24}
                        height={24}
                    />
                </Button>
            ))}
        </div>
    );
});
