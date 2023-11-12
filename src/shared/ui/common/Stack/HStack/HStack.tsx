import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'> & {
    reverse?: boolean
}
export const HStack = (props: HStackProps) => (
    <Flex direction={props.reverse ? 'row-reverse' : 'row'} {...props} />
);
