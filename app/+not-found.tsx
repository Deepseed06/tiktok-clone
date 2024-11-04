import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
        <View>
          <Text>This screen doesn't exists</Text>
        <Link href="/">
        <Text>Go to home</Text>
        </Link>
        </View>
    </>
  );
}

