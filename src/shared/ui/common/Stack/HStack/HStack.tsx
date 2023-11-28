import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'> & {
    reverse?: boolean
}
export const HStack = ({ reverse, ...props }: HStackProps) => (
    <Flex direction={reverse ? 'row-reverse' : 'row'} {...props} />
);
