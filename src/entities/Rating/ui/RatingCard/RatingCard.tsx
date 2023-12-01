import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/common/Stack';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Text as RedesignedText } from '@/shared/ui/redesigned/Text';
import { Input as RedesignedInput } from '@/shared/ui/redesigned/Input';
import { Card as RedesignedCard } from '@/shared/ui/redesigned/Card';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { Button as RedesignedButton } from '@/shared/ui/redesigned/Button';

import { Input as DeprecatedInput } from '@/shared/ui/deprecated/Input';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Button as DeprecatedButton, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface RatingCardProps {
    className?: string
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
    rate?: number
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        hasFeedback,
        onAccept,
        onCancel,
        feedbackTitle,
        title,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [starsCount, setStarsCount] = useState<number>(rate);
    const [feedback, setFeedback] = useState<string>('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandler = () => {
        onAccept?.(starsCount, feedback);
        setIsModalOpen(false);
    };

    const cancelHandler = () => {
        onCancel?.(starsCount);
        setIsModalOpen(false);
    };

    const Text = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => RedesignedText,
        off: () => DeprecatedText as typeof RedesignedText,
    });

    const Input = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => RedesignedInput,
        off: () => DeprecatedInput as typeof RedesignedInput,
    });

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="rating-card-input"
                placeholder={t('Your feedback')}
                onChange={setFeedback}
                value={feedback}
            />
        </>
    );

    const content = (
        <>
            <VStack align="center" gap="8" max>
                <Text title={starsCount ? t('Thank you for feedback!') : title} />
                <StarRating onSelect={onSelectStars} size={40} selectedStars={starsCount} />
            </VStack>

            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <ToggleFeatures
                                feature="isAppRedesigned"
                                on={(
                                    <>
                                        <RedesignedButton
                                            data-testid="rating-card-cancel"
                                            variant="outline"
                                            onClick={cancelHandler}
                                        >
                                            {t('Cancel')}
                                        </RedesignedButton>
                                        <RedesignedButton
                                            data-testid="rating-card-send"
                                            onClick={acceptHandler}
                                        >
                                            {t('Send')}
                                        </RedesignedButton>
                                    </>
                                )}
                                off={(
                                    <>
                                        <DeprecatedButton
                                            data-testid="rating-card-cancel"
                                            theme={ButtonTheme.OUTLINE_RED}
                                            onClick={cancelHandler}
                                        >
                                            {t('Cancel')}
                                        </DeprecatedButton>
                                        <DeprecatedButton
                                            data-testid="rating-card-send"
                                            onClick={acceptHandler}
                                        >
                                            {t('Send')}
                                        </DeprecatedButton>
                                    </>
                                )}
                            />
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>

            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <DeprecatedButton onClick={acceptHandler} size={ButtonSize.L} fullWidth>
                            {t('Send')}
                        </DeprecatedButton>
                    </VStack>
                </Drawer>
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={(
                <RedesignedCard
                    data-testid="rating-card"
                    className={classNames('', {}, [className])}
                    max
                    padding="24"
                    border="partial"
                >
                    {content}
                </RedesignedCard>
            )}
            off={(
                <DeprecatedCard
                    data-testid="rating-card"
                    className={classNames('', {}, [className])}
                    max
                >
                    {content}
                </DeprecatedCard>
            )}
        />
    );
});
