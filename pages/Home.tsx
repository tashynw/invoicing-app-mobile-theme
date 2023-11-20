import {
  Box,
  HStack,
  Heading,
  Icon,
  VStack,
  View,
  Image,
  Text,
  ScrollView,
} from '@gluestack-ui/themed';
import {Menu, MoreHorizontal} from 'lucide-react-native';
import React from 'react';
import {Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import BottomNavigationBar from '../components/BottomNavigationBar';
import SummaryCard from '../components/SummaryCard';
import ActivityCard from '../components/ActivityCard';

type Props = {
  navigation: any;
};

const HomePage = ({navigation}: Props) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView minHeight={Dimensions.get('window').height as any}>
          <VStack w="100%" gap="$5" p="$4" bg="$trueGray100">
            <HStack justifyContent="space-between" alignItems="center">
              <Text></Text>
              <Text></Text>
              <Box
                p={10}
                borderWidth={1}
                borderColor="$trueGray200"
                borderRadius="$full"
                height="$12">
                <Icon as={Menu} size="xl" />
              </Box>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <Heading size="lg">Overview</Heading>
              <TouchableOpacity>
                <Icon as={MoreHorizontal} size="xl" />
              </TouchableOpacity>
            </HStack>
            <HStack justifyContent="space-between" gap="$3">
              <SummaryCard metric="$ 53,200" description="Received" />
              <SummaryCard metric="12" description="Pending" />
              <SummaryCard metric="05" description="Unpaid" />
            </HStack>
            <VStack p="$5" borderRadius="$xl" bg="$green800">
              <HStack gap="$3">
                <VStack alignItems="flex-start">
                  <Heading size="2xl" color="$white">
                    Upgrade to Enterprise
                  </Heading>
                  <Text
                    color="$coolGray300"
                    textAlign="center"
                    fontWeight="$normal">
                    Scale your business with pro feature
                  </Text>
                </VStack>
              </HStack>
            </VStack>
            <HStack justifyContent="space-between" alignItems="center" mt="$3">
              <Heading size="lg">Recent Activity</Heading>
              <TouchableOpacity>
                <Icon as={MoreHorizontal} size="xl" />
              </TouchableOpacity>
            </HStack>
            <ScrollView horizontal={true}>
              <HStack gap="$5">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
              </HStack>
            </ScrollView>
          </VStack>
        </ScrollView>
        <BottomNavigationBar navigation={navigation} />
      </SafeAreaView>
    </>
  );
};

export default HomePage;
