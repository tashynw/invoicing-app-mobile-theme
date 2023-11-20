import {VStack, Heading, Text} from '@gluestack-ui/themed';

type Props = {
  metric: string;
  description: string;
};

export default function SummaryCard({description, metric}: Props) {
  return (
    <VStack
      gap="$3"
      bg="$white"
      borderRadius="$xl"
      p="$5"
      justifyContent="center">
      <Heading size="2xl" textAlign="center" fontWeight="$bold">
        {metric}
      </Heading>
      <Text color="$trueGray500" textAlign="center" fontWeight="$medium">
        {description}
      </Text>
    </VStack>
  );
}
