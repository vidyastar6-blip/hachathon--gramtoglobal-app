import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const submit = () => {
    if (!name || !price || !location) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    global.products = global.products || [];

    global.products.push({
      id: Date.now().toString(),
      name,
      price,
      location,
      seller: global.userName || "Seller",
    });

    router.replace("listings");
  };

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-3xl font-bold text-gray-900">
        Add Product
      </Text>

      <TextInput
        placeholder="Product name"
        value={name}
        onChangeText={setName}
        className="mt-8 border rounded-xl px-4 py-4"
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
        className="mt-4 border rounded-xl px-4 py-4"
      />

      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
        className="mt-4 border rounded-xl px-4 py-4"
      />

      <Pressable
        onPress={submit}
        className="mt-8 bg-blue-600 py-4 rounded-xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Save Product
        </Text>
      </Pressable>
    </View>
  );
}
