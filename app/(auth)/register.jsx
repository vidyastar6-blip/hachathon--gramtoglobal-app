import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Create Firebase Auth user
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = userCred.user.uid;

      // 2️⃣ Create Firestore user profile
      await setDoc(doc(db, "users", uid), {
        name,
        email,
        role,
        createdAt: serverTimestamp(),
      });

      // 3️⃣ Store locally for routing
      global.userName = name;
      global.userRole = role;

      // 4️⃣ Route by role
      if (role === "buyer") {
        router.replace("/(buyer)/home");
      } else {
        router.replace("/(seller)/home");
      }

    } catch (err) {
      Alert.alert("Registration failed", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <Text className="text-3xl font-bold text-gray-900">
        Register
      </Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        className="mt-8 border rounded-xl px-4 py-4"
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        className="mt-4 border rounded-xl px-4 py-4"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="mt-4 border rounded-xl px-4 py-4"
      />

      {/* Simple Role Selector */}
      <View className="flex-row mt-4">
        <Pressable
          onPress={() => setRole("buyer")}
          className={`flex-1 p-3 rounded-l-xl ${
            role === "buyer" ? "bg-green-600" : "bg-gray-200"
          }`}
        >
          <Text className="text-center text-white">Buyer</Text>
        </Pressable>

        <Pressable
          onPress={() => setRole("seller")}
          className={`flex-1 p-3 rounded-r-xl ${
            role === "seller" ? "bg-blue-600" : "bg-gray-200"
          }`}
        >
          <Text className="text-center text-white">Seller</Text>
        </Pressable>
      </View>

      <Pressable
        onPress={handleRegister}
        disabled={loading}
        className="mt-8 bg-black py-4 rounded-xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          {loading ? "Creating account..." : "Register"}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/login")}
        className="mt-4"
      >
        <Text className="text-center text-blue-600">
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
}
