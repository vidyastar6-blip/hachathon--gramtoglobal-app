import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";


export default function Login() {
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!global.userRole) {
      Alert.alert("Error", "Role not selected");
      router.replace("/");
      return;
    }

    if (!name.trim()) {
      Alert.alert("Required", "Please enter your name");
      return;
    }

    global.userName = name;

    // Navigate ONLY on button press
    if (global.userRole === "buyer") {
      router.replace("/(buyer)/home");
    } else if (global.userRole === "seller") {
      router.replace("/(seller)/home");
    }

  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <Text className="text-3xl font-bold text-gray-900">Login</Text>

      <Text className="mt-3 text-gray-600">
        Continue as {global.userRole}
      </Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        className="mt-10 border border-gray-300 rounded-xl px-4 py-4"
      />

      <Pressable
        onPress={handleLogin}
        className="mt-8 bg-green-600 py-4 rounded-xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Continue
        </Text>
      </Pressable>
    </View>
  );
}
