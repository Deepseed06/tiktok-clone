import React from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { Alert } from "react-native";
const AuthContext = React.createContext({
    user:null,
    signIn: async(email:string, password:string) => {},
    signUp: async(username:string, email:string, password:string) => {},
    signOut: async() => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({children}:{children: React.ReactNode}) => {
    const [user, setUser] = React.useState(null);
    const router = useRouter();

    const getUser = async(id:string) => {
        const {data, error} = await supabase.from('User').select('*').eq('id', id).single();
        if(error) return Alert.alert('Input your correct email and password')
        setUser(data)
      console.log(data)
        router.push('/(tabs)')
    }
    const signIn = async(email:string, password:string) => {
        const {data, error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password,
          });
          if(error) return Alert.alert('Kindly Check Your Credentials')
            getUser(data?.user.id)
    }
    const signUp = async(username:string, email:string, password:string) => {
        const {data, error} = await supabase.auth.signUp({
            email:email,
            password:password,
          });
          if(error) return Alert.alert('Kindly Check Your Credentials')
          const { error: userError} = await supabase.from('User').insert({
            id:data?.user?.id,
            username: username,
            email: email
  
          })
          if(userError) return console.error(userError)
            getUser(data?.user?.id)
          router.back()
          router.push('/(tabs)')
    }
    const signOut = async() => {
        const {error} = await supabase.auth.signOut();
          if(error) return Alert.alert('Kindly Check Your Credentials')
           setUser(null);
        router.push('/(auth)')
    }
    
    return <AuthContext.Provider value={{user,signIn, signUp, signOut}}>{children}</AuthContext.Provider>
}