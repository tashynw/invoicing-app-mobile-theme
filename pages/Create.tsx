import {
  VStack,
  HStack,
  Icon,
  Heading,
  Text,
  Box,
  Avatar,
  AvatarFallbackText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';
import {ChevronLeft, MoreHorizontal, ScrollText, X} from 'lucide-react-native';
import React from 'react';

const CreatePage = () => {
  return (
    <VStack w="100%" gap="$7" mb={70}>
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <Icon as={ChevronLeft} size="xl" color="$trueGray500" />
        <Heading size="xl" fontWeight="$semibold">
          Create
        </Heading>
        <Icon as={MoreHorizontal} size="xl" color="$trueGray500" />
      </HStack>
      <Heading size="2xl" fontWeight="$semibold">
        Invoice #0028
      </Heading>
      <VStack w="100%" gap="$3">
        <Text size="lg" fontWeight="$semibold">
          Recipient
        </Text>
        <Box
          pt={15}
          pb={20}
          pr={40}
          pl={15}
          bg="$trueGray100"
          borderRadius="$lg">
          <HStack w="100%" justifyContent="space-between" alignItems="center">
            <HStack w="100%" gap="$3" alignItems="center">
              <Avatar size="md" borderRadius="$full">
                <AvatarFallbackText>Lautaro Martinez</AvatarFallbackText>
              </Avatar>
              <VStack>
                <Heading size="lg" fontWeight="$semibold">
                  Lautaro Martinez
                </Heading>
                <Text size="md" fontWeight="$medium">
                  Lautaro.m@gmail.com
                </Text>
              </VStack>
            </HStack>
            <Icon as={X} color="$green400" size={25 as any} mr={10} />
          </HStack>
        </Box>
      </VStack>
      <FormControl>
        <FormControlLabel mb="$3">
          <FormControlLabelText size="lg" fontWeight="$semibold">
            Project
          </FormControlLabelText>
        </FormControlLabel>
        <Input borderRadius="$lg">
          <InputField />
        </Input>
      </FormControl>
      <VStack w="100%" gap="$3">
        <Text size="lg" fontWeight="$semibold">
          Item
        </Text>
        <Box pt={20} pr={20} pl={20} pb={30} bg="$green50" borderRadius="$xl">
          <VStack w="100%" gap="$3">
            <FormControl>
              <FormControlLabel mb="$2">
                <FormControlLabelText size="lg" color="$coolGray600">
                  Description
                </FormControlLabelText>
              </FormControlLabel>
              <Input borderRadius="$lg">
                <InputField />
              </Input>
            </FormControl>
            <HStack w="100%" gap="$4">
              <FormControl w="20%">
                <FormControlLabel mb="$2">
                  <FormControlLabelText size="lg" color="$coolGray600">
                    Qty
                  </FormControlLabelText>
                </FormControlLabel>
                <Input borderRadius="$lg">
                  <InputField />
                </Input>
              </FormControl>
              <FormControl w="35%">
                <FormControlLabel mb="$2">
                  <FormControlLabelText size="lg" color="$coolGray600">
                    Price
                  </FormControlLabelText>
                </FormControlLabel>
                <Input borderRadius="$md">
                  <InputField />
                </Input>
              </FormControl>
              <FormControl w="35%">
                <FormControlLabel mb="$2">
                  <FormControlLabelText size="lg">Total</FormControlLabelText>
                </FormControlLabel>
                <Input borderRadius="$md">
                  <InputField />
                </Input>
              </FormControl>
            </HStack>
          </VStack>
        </Box>
      </VStack>
      <HStack w="100%" gap="$4">
        <FormControl flex={1}>
          <FormControlLabel mb="$2">
            <FormControlLabelText size="lg" fontWeight="$semibold">
              Issued
            </FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius="$md">
            <InputField />
          </Input>
        </FormControl>
        <FormControl flex={1}>
          <FormControlLabel mb="$2">
            <FormControlLabelText size="lg" fontWeight="$semibold">
              Due
            </FormControlLabelText>
          </FormControlLabel>
          <Input borderRadius="$md">
            <InputField />
          </Input>
        </FormControl>
      </HStack>
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <VStack gap="$1">
          <Text size="sm" fontWeight="$semibold" color="$coolGray500">
            Total
          </Text>
          <Heading size="2xl">$ 5,200</Heading>
        </VStack>
        <Box p={20} bg="$green400" borderRadius="$lg">
          <HStack gap="$3" alignItems="center">
            <Icon as={ScrollText} color="white" size="lg" />
            <Heading size="md" color="white">
              Preview
            </Heading>
          </HStack>
        </Box>
      </HStack>
    </VStack>
  );
};

export default CreatePage;
