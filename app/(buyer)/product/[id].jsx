import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

// Same dummy data source (MVP)
const PRODUCTS = [
  {
    id: "1",
    name: "Organic Wheat",
    price: 32,
    unit: "kg",
    location: "Punjab",
    description: "High quality organic wheat sourced directly from farmers.",
  },
  {
    id: "2",
    name: "Basmati Rice",
    price: 68,
    unit: "kg",
    location: "Haryana",
    description: "Premium long-grain basmati rice.",
  },
  {
    id: "3",
    name: "Fresh Potatoes",
    price: 18,
    unit: "kg",
    location: "Uttar Pradesh",
    description: "Freshly harvested potatoes suitable for daily use.",
  },
];

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const product = (global.products || []).find((p) => p.id === id);

  if (!product) {
    return (
      <View className="flex-1 bg-white px-6 pt-20">
        <Text className="text-lg text-red-600">
          Product not found.
        </Text>
      </View>
    );
  }

  const placeOrder = () => {
    // MVP dummy order storage
    global.orders = global.orders || [];

    global.orders.push({
      id: Date.now().toString(),
      productId: product.id,
      productName: product.name,
      price: product.price,
      status: "PENDING",
    });

    router.replace("/orders");
  };

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      <Text className="text-3xl font-bold text-gray-900">
        {product.name}
      </Text>

      <Text className="mt-2 text-lg text-green-700 font-semibold">
        ₹{product.price}/{product.unit}
      </Text>

      <Text className="mt-2 text-gray-500">
        Location: {product.location}
      </Text>

      <View className="mt-6">
        <Text className="text-base text-gray-700">
          {product.description}
        </Text>
      </View>

      <Pressable
        onPress={placeOrder}
        className="mt-10 bg-green-600 py-4 rounded-xl"
      >
        <Text className="text-center text-white text-lg font-semibold">
          Place Order
        </Text>
      </Pressable>
    </View>
  );
}
