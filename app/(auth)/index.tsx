// import { supabase } from '@/utils/supabase';
import {useRouter } from 'expo-router'
import { useAuth } from '@/providers/AuthProvider';
import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'

export default function() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signIn} = useAuth();
    // const handleLogin = async() => {
    //   const {data, error} = await supabase.auth.signInWithPassword({
    //     email:email,
    //     password:password,
    //   });
    //   if(error) return Alert.alert('Kindly Check Your Credentials')
    //   router.push('/(tabs)')
    // }
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <View className='w-full p-4'>
      <Text className="text-black font-bold text-3xl text-center mb-4">Login</Text>
      <TextInput 
        placeholder='Email'
        className='bg-white p-4 rounded-lg border border-gray-300 w-full'
        value={email}
        onChangeText={setEmail}
       />
      <TextInput 
        placeholder='Password'
        className='bg-white p-4 rounded-lg border border-gray-300 w-full'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
       />
        <TouchableOpacity onPress={() => signIn(email, password)}
        className="bg-black p-4 px-6 rounded-lg text-center">
            <Text className="text-white font-bold text-lg text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/signup')}
        className="py-4 mt-3 px-6 rounded-lg text-center border">
            <Text className="text-black font-bold text-lg text-center ">Sign Up</Text>
        </TouchableOpacity>
          </View>
    </View>
  )
}