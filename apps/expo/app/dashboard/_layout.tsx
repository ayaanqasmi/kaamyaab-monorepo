import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="employers" />
      <Tabs.Screen name="jobs" />
    </Tabs>
  )
}