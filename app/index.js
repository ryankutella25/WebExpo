import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

//Main Index/Landing Page. Opens on load

export default function Page() {
    return (
        <View>
            <Text>Base Landing Page</Text>
            <Link href="/automotive" asChild>
                <Pressable>
                    <Text>Automotive</Text>
                </Pressable>
            </Link>
            <Link href="/health" asChild>
                <Pressable>
                    <Text>Health</Text>
                </Pressable>
            </Link>
            <Link href="/home" asChild>
                <Pressable>
                    <Text>Home</Text>
                </Pressable>
            </Link>
            <Link href="settings" asChild>
                <Pressable>
                    <Text>Settings</Text>
                </Pressable>
            </Link>
        </View>
    )
}
