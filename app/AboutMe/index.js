import { Stack } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Page() {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: "About Me",
                }}
            />
            <Text>About Me</Text>
            <Pressable>

            </Pressable>
        </View>
    );
}
