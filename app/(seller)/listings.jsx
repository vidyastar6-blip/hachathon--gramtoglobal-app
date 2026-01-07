import { FlatList, Text, View } from "react-native";

export default function SellerListings() {
  const products = global.products || [];

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900 mb-6">
        My Listings
      </Text>

      {products.length === 0 ? (
        <Text className="text-gray-500">
          No products added yet.
        </Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4 bg-white p-5 rounded-xl border">
              <Text className="text-lg font-semibold">
                {item.name}
              </Text>
              <Text className="text-gray-600">
                ₹{item.price}
              </Text>
              <Text className="text-gray-500 text-sm">
                {item.location}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
