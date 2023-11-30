import { memo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon';

import { Icon as DeprecatedIcon } from '../../deprecated/Icon';
import StarIcon from '@/shared/assets/icons/star-20-20.svg';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface StarRatingProps {
    className?: string
    onSelect: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [currentStarsCount, setCurrentStarsCount] = useState<number>(selectedStars);
    const [isSelected, setIsSelected] = useState<boolean>(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(!isSelected);
        }
    };

    const mods = (starNumber: number): Mods => ({
        [cls.hovered]: starNumber <= currentStarsCount,
        [cls.selected]: isSelected,
    });

    return (
        <div
            className={classNames(
                toggleFeatures({
                    name: 'isAppRedesigned',
                    on: () => cls.StarRatingRedesigned,
                    off: () => cls.StarRating,
                }),
                {},
                [className],
            )}
        >
            {stars.map((starNumber) => {
                const props = {
                    className: classNames(cls.starIcon, mods(starNumber), []),
                    key: starNumber,
                    width: size,
                    height: size,
                    onMouseLeave: onLeave,
                    onMouseEnter: onHover(starNumber),
                    onClick: onClick(starNumber),
                    'data-testid': `star-rating-${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };

                return (
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={(
                            <Icon
                                clickable={!isSelected}
                                Svg={StarIcon}
                                {...props}
                            />
                        )}
                        off={(
                            <DeprecatedIcon
                                Svg={StarIcon}
                                {...props}
                            />
                        )}
                    />

                );
            })}
        </div>
    );
});
