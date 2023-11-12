import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();

    const counterValue = useCounterValue();

    const { decrement, increment } = useCounterActions();

    const handleDecrement = () => {
        decrement();
    };

    const handleIncrement = () => {
        increment();
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button
                onClick={handleIncrement}
                data-testid="increment-button"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={handleDecrement}
                data-testid="decrement-button"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};
