import { memo, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon';
import StarIcon from '@/shared/assets/icons/star-20-20.svg';

interface StarRatingProps {
    className?: string
    onSelect: (starsCount: number) => void
    size?: number
    selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];
/**
 * @deprecated
 */
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
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, mods(starNumber), [])}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNumber)}
                    onClick={onClick(starNumber)}
                    data-testid={`star-rating-${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
});
