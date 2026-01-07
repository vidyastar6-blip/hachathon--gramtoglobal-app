import { Stack } from "expo-router";
import './global.css';

if (!global.products) {
  global.products = [
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
  ];
}

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(buyer)" />
      <Stack.Screen name="(seller)" />
    </Stack>
  );
}
