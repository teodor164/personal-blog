import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ViewSelector } from '@/features/ViewSelector';
import { useArticlesFilters } from '../../lib/hooks/useArticlesFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
    const { className } = props;

    const { view, onChangeView } = useArticlesFilters();

    return (
        <ViewSelector
            className={classNames('', {}, [className])}
            view={view}
            onViewClick={onChangeView}
        />
    );
});
