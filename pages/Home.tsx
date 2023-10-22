import {Box, HStack, Heading, Icon, VStack} from '@gluestack-ui/themed';
import {Menu} from 'lucide-react-native';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <VStack gap="$3" w="100%">
      <HStack justifyContent="space-between">
        <Heading size="lg">Hi, User</Heading>
        <Box
          p={10}
          borderWidth={1}
          borderColor="$trueGray200"
          borderRadius="$full">
          <Icon as={Menu} size="xl" />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Home;
