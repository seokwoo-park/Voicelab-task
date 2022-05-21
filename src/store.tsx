import create from "zustand";
import { APIInfoType, CharacterType } from "./constants/types";

interface DataState {
  characters: CharacterType[] | [];
  sortedList: CharacterType[] | [];
  selectedItems: string[] | [];
  setCharacters: (data: CharacterType[]) => void;
  sort: (data: CharacterType[]) => void;
  select: (items: string[] | []) => void;
}

export const useStore = create<DataState>((set) => ({
  characters: [],
  sortedList: [],
  selectedItems: [],
  setCharacters: (data: CharacterType[]) => set(() => ({ characters: data })),
  sort: (data: CharacterType[]) => set(() => ({ sortedList: data })),
  select: (items: string[] | []) => set(() => ({ selectedItems: items })),
}));
