import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { Text as RedesignedText } from '@/shared/ui/redesigned/Text';

import { toggleFeatures } from '@/shared/lib/features';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';

interface ArticleTextBlockComponentProps {
    className?: string
    block?: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    const Text = toggleFeatures({
        name: 'isAppRedesigned',
        off: () => DeprecatedText as typeof RedesignedText,
        on: () => RedesignedText,
    });

    return (
        <div className={className}>
            {block?.title && (
                <Text title={block?.title} className={cls.title} />
            )}
            {block?.paragraphs.map((paragraph) => (
                <Text key={paragraph} text={paragraph} className={cls.paragraph} />
            ))}
        </div>
    );
});
