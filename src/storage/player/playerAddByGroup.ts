import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "storage/storageConfig";
import { AppError } from "utils/AppError";

import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export const playerAddByGroup = async (
  newPlayer: PlayerStorageDTO,
  group: string
) => {
  try {
    const storagedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = await storagedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Já existe um jogador cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storagedPlayers, newPlayer]);
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
};
