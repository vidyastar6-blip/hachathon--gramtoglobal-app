import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function SellerHome() {
  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-sm text-gray-500">Welcome</Text>

      <Text className="text-3xl font-bold text-gray-900 mt-1">
        {global.userName || "Seller"}
      </Text>

      {/* Add Product */}
      <View className="mt-10 bg-blue-50 p-6 rounded-2xl">
        <Text className="text-xl font-semibold text-blue-700">
          Add New Product
        </Text>

        <Pressable
          onPress={() => router.push("add-product")}
          className="mt-6 bg-blue-600 py-4 rounded-xl"
        >
          <Text className="text-center text-white text-lg font-semibold">
            Add Product
          </Text>
        </Pressable>
      </View>

      {/* View Listings */}
      <View className="mt-6 bg-gray-50 p-6 rounded-2xl">
        <Text className="text-xl font-semibold text-gray-900">
          My Listings
        </Text>

        <Pressable
          onPress={() => router.push("listings")}
          className="mt-6 bg-gray-900 py-4 rounded-xl"
        >
          <Text className="text-center text-white text-lg font-semibold">
            View Listings
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
