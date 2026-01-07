import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-6 pt-14 pb-10 bg-green-50">
        <Text className="text-2xl font-bold text-green-700">
          GramToGlobal
        </Text>
      </View>

      {/* Hero Section */}
      <View className="px-6 mt-6">
        <Text className="text-3xl font-extrabold text-gray-900 leading-tight">
          From Farm to{" "}
          <Text className="text-green-600">Global Market</Text>
        </Text>

        <Text className="mt-4 text-base text-gray-600">
          Connect directly with farmers across India. Buy fresh agricultural
          products with trust and transparency.
        </Text>

        {/* Primary CTA */}
        <Pressable
          onPress={() => router.push("/role-select")}
          className="mt-8 bg-green-600 py-4 rounded-xl"
        >
          <Text className="text-center text-white text-lg font-semibold">
            Get Started
          </Text>
        </Pressable>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-between px-6 mt-10">
        <StatBox title="50K+" subtitle="Active Users" />
        <StatBox title="₹10Cr+" subtitle="Transactions" />
        <StatBox title="500+" subtitle="Villages" />
      </View>

      {/* Why Choose Section */}
      <View className="px-6 mt-14">
        <Text className="text-2xl font-bold text-gray-900 text-center">
          Why Choose GramToGlobal?
        </Text>

        <Text className="mt-3 text-center text-gray-600">
          Bridging the gap between farmers and buyers with technology.
        </Text>

        <View className="mt-8 space-y-4">
          <FeatureCard
            title="Farm Fresh"
            description="Directly sourced from verified farmers"
          />
          <FeatureCard
            title="Secure Payments"
            description="Order-based protected transactions"
          />
          <FeatureCard
            title="Fast Delivery"
            description="Reliable logistics across regions"
          />
        </View>
      </View>

      {/* Footer CTA */}
      <View className="mt-16 px-6 py-12 bg-green-700 rounded-t-3xl">
        <Text className="text-2xl font-bold text-white text-center">
          Ready to Transform Agriculture?
        </Text>

        <Text className="mt-3 text-center text-green-100">
          Join buyers and sellers already using GramToGlobal.
        </Text>

        <Pressable
          onPress={() => router.push("/role-select")}
          className="mt-6 bg-white py-4 rounded-xl"
        >
          <Text className="text-center text-green-700 text-lg font-semibold">
            Start Now
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

/* ------------------ Small Components ------------------ */

function StatBox({ title, subtitle }) {
  return (
    <View className="items-center">
      <Text className="text-xl font-bold text-gray-900">{title}</Text>
      <Text className="text-sm text-gray-600 mt-1">{subtitle}</Text>
    </View>
  );
}

function FeatureCard({ title, description }) {
  return (
    <View className="bg-gray-50 p-5 rounded-xl">
      <Text className="text-lg font-semibold text-gray-900">
        {title}
      </Text>
      <Text className="mt-2 text-gray-600 text-sm">
        {description}
      </Text>
    </View>
  );
}
