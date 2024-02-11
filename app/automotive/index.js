import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: "Automotive",
                }}
            />
            <Text>Automotive Page</Text>
            <Pressable>

            </Pressable>
        </View>
    );
}
