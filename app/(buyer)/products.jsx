import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function Products() {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setProducts(global.products || []);
    }, [])
  );

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900 mb-6">
        Products
      </Text>

      {products.length === 0 ? (
        <Text className="text-gray-500">
          No products available.
        </Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(`product/${item.id}`)}
              className="mb-4 bg-white border border-gray-200 rounded-xl p-5"
            >
              <Text className="text-lg font-semibold text-gray-900">
                {item.name}
              </Text>

              <Text className="mt-1 text-gray-600">
                ₹{item.price}/{item.unit || "unit"}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                Location: {item.location}
              </Text>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}
