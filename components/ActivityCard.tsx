import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Heading,
  VStack,
  Text,
  Box,
} from '@gluestack-ui/themed';
import React from 'react';

type Props = {};

const ActivityCard = (props: Props) => {
  return (
    <VStack gap="$4" p="$5" bg="white" borderRadius="$lg">
      <HStack gap="$3" alignItems="center">
        <Avatar>
          <AvatarFallbackText>Tashyn Wallace</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: `https://c8.alamy.com/zooms/9/9d75d3fcb40441a39876692eed1f0c21/tc2fpe.jpg`,
            }}
          />
        </Avatar>
        <VStack>
          <Heading>Mario Brazuca</Heading>
          <Text color="$trueGray500" textAlign="center" fontWeight="$medium">
            brazuca@gmail.com
          </Text>
        </VStack>
      </HStack>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        p="$4"
        borderRadius="$lg"
        bg="$coolGray200">
        <VStack alignItems="flex-start">
          <Heading size="xl" textAlign="center" fontWeight="$bold">
            $22,300
          </Heading>
          <Text color="$trueGray500" textAlign="center" fontWeight="$medium">
            Amount
          </Text>
        </VStack>
        <Box pt="$2" pb="$2" pl="$3" pr="$3" borderRadius="$lg" bg="$green200">
          <Text color="$green600">Paid</Text>
        </Box>
      </HStack>
      <Heading size="md" textAlign="center" fontWeight="$bold">
        #0033 - 04 December 2021
      </Heading>
    </VStack>
  );
};

export default ActivityCard;
