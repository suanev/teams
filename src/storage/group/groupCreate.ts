import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "storage/storageConfig";

import { AppError } from "utils/AppError";
import { groupsGetAll } from "./groupsGetAll";

export const groupCreate = async (NewGroup: string) => {
  try {
    const storagedGroups = await groupsGetAll();

    const groupAlreadyExists = storagedGroups.includes(NewGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storagedGroups, NewGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
