import { useAuth } from '@/providers/AuthProvider'
import { View, Text } from 'react-native'

export default function() {
  const {user} = useAuth();
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <Text className="text-black font-bold text-3xl">Welcome Home {user?.username}</Text>
    </View>
  )
}