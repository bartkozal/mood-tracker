import { AsyncStorage } from "react-native";

export const saveState = async (key: string, state: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(state));
  } catch (error) {
    console.error(error);
  }
};

export const loadState = async (key: string) => {
  try {
    const state = await AsyncStorage.getItem(key);
    return state ? JSON.parse(state) : {};
  } catch (error) {
    console.error(error);
  }
};
