import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>
/**
 * @deprecated
 */
export const VStack = (props: HStackProps) => (
    <Flex direction="column" {...props} />
);
