import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

export default function SellerOrders() {
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setOrders(global.orders || []);
    }, [])
  );

  const accept = (id) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: "ACCEPTED" } : o
    );
    global.orders = updated;
    setOrders(updated);
  };

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900 mb-6">
        Orders
      </Text>

      {orders.length === 0 ? (
        <Text className="text-gray-500">No orders yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="mb-4 bg-white p-5 rounded-xl border">
              <Text className="text-lg font-semibold">
                {item.productName}
              </Text>

              <Text className="text-gray-600">
                Status: {item.status}
              </Text>

              {item.status === "PENDING" && (
                <Pressable
                  onPress={() => accept(item.id)}
                  className="mt-4 bg-blue-600 py-3 rounded-xl"
                >
                  <Text className="text-center text-white font-semibold">
                    Accept Order
                  </Text>
                </Pressable>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}
