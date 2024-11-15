import { useRouter } from 'expo-router'
import { useState } from 'react';
import { useAuth } from '@/providers/AuthProvider';
// import { supabase } from '@/utils/supabase';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

export default function() {
    // const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const {signUp} = useAuth();
    // const handleSignup = async() => {
    //   const {data, error} = await supabase.auth.signUp({
    //     email:email,
    //     password:password,
    //   });
    //   if(error) return console.error(error)
    //     const {error: userError} = await supabase.from('User').insert({
    //       id:data.user?.id,
    //       username: username,
    //       email: email

    //     })
    //     if(userError) return console.error(userError)
    //     router.back()
    //     router.push('/(tabs)')
    //   console.log(email, password)
    // }
  return (
    <View className="bg-white flex-1 items-center justify-center">
      <View className='w-full p-4'>
      <Text className="text-black font-bold text-3xl text-center mb-4">Sign Up</Text>
      <TextInput 
        placeholder='Username'
        className='bg-white p-4 rounded-lg border border-gray-300 w-full'
        value={username}
        onChangeText={setUsername}
       />
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
        <TouchableOpacity onPress={() => signUp(username, email, password) } 
        className="bg-black p-4 px-6 rounded-lg text-center">
            <Text className="text-white font-bold text-lg text-center">Sign Up</Text>
        </TouchableOpacity>
          </View>
    </View>
  )
}