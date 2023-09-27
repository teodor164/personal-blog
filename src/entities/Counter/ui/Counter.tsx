import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const counterValue = useSelector(getCounterValue);

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid="increment-button"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-button"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
