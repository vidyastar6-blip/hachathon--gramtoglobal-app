import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

/**
 * MVP NOTE:
 * For now, we store role in a simple global variable.
 * This is intentional for MVP simplicity.
 * Later, replace this with Context or storage.
 */
global.userRole = null;

export default function RoleSelect() {
  const selectRole = (role) => {
    global.userRole = role;
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      {/* Header */}
      <Text className="text-3xl font-bold text-gray-900">
        Choose Your Role
      </Text>

      <Text className="mt-3 text-gray-600 text-base">
        Select how you want to use GramToGlobal.
      </Text>

      {/* Buyer Card */}
      <Pressable
        onPress={() => selectRole("buyer")}
        className="mt-10 bg-green-50 border border-green-200 rounded-2xl p-6"
      >
        <Text className="text-xl font-semibold text-green-700">
          Buyer
        </Text>
        <Text className="mt-2 text-gray-600">
          Browse products and place orders directly from farmers.
        </Text>
      </Pressable>

      {/* Seller Card */}
      <Pressable
        onPress={() => selectRole("seller")}
        className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-6"
      >
        <Text className="text-xl font-semibold text-blue-700">
          Seller
        </Text>
        <Text className="mt-2 text-gray-600">
          List your products and sell directly to buyers.
        </Text>
      </Pressable>

      {/* Footer hint */}
      <Text className="mt-10 text-center text-sm text-gray-400">
        You can change your role later.
      </Text>
    </View>
  );
}
