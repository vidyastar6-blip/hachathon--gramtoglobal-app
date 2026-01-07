import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function BuyerHome() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      {/* Welcome */}
      <Text className="text-sm text-gray-500">
        Welcome
      </Text>

      <Text className="text-3xl font-bold text-gray-900 mt-1">
        {global.userName || "Buyer"}
      </Text>

      {/* Main Card */}
      <View className="mt-10 bg-green-50 p-6 rounded-2xl">
        <Text className="text-xl font-semibold text-green-700">
          Browse Fresh Products
        </Text>

        <Text className="mt-2 text-gray-600">
          Explore agricultural products directly from farmers.
        </Text>

        <Pressable
          onPress={() => router.push("products")}
          className="mt-6 bg-green-600 py-4 rounded-xl"
        >
          <Text className="text-center text-white text-lg font-semibold">
            View Products
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
