import { FlatList, Text, View } from "react-native";

export default function BuyerOrders() {
  const orders = global.orders || [];

  const renderItem = ({ item }) => (
    <View className="mb-4 bg-white border border-gray-200 rounded-xl p-5">
      <Text className="text-lg font-semibold text-gray-900">
        {item.productName}
      </Text>

      <Text className="mt-1 text-gray-600">
        Price: ₹{item.price}
      </Text>

      <View className="mt-3">
        <Text className="text-sm font-semibold text-yellow-600">
          Status: {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <Text className="text-3xl font-bold text-gray-900 mb-6">
        My Orders
      </Text>

      {orders.length === 0 ? (
        <Text className="text-gray-500 text-base">
          You have not placed any orders yet.
        </Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
