import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    try {
      setLoading(true);

      // Firebase Auth
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCred.user.uid;

      // Get role from Firestore
      const userDoc = await getDoc(doc(db, "users", uid));

      if (!userDoc.exists()) {
        Alert.alert("Error", "User data not found");
        return;
      }

      const userData = userDoc.data();
      global.userName = userData.name;
      global.userRole = userData.role;

      // Route based on role
      if (userData.role === "buyer") {
        router.replace("/(buyer)/home");
      } else {
        router.replace("/(seller)/home");
      }

    } catch (err) {
      Alert.alert("Login failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <Text className="text-3xl font-bold text-gray-900">
        Login
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="mt-8 border rounded-xl px-4 py-4"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mt-4 border rounded-xl px-4 py-4"
      />

      <Pressable
        onPress={handleLogin}
        disabled={loading}
        className="mt-8 bg-green-600 py-4 rounded-xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          {loading ? "Logging in..." : "Login"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/register")}>
        <Text className="text-center text-blue-600 mt-4">
          New user? Register here
        </Text>
      </Pressable>

    </View>
  );
}
