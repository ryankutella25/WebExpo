import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: "Health",
                }}
            />
            <Text>Health Page</Text>
            <Pressable>

            </Pressable>
        </View>
    );
}
