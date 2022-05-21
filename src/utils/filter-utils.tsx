import { CharacterType } from "../constants/types";

const hasSearchFiltered = (search: string, character: CharacterType) => {
  if (!search) return true;
  return character.name.toLowerCase().includes(search.toLowerCase());
};

const hasStatusFiltered = (status: string, character: CharacterType) => {
  if (!status) return true;
  return character.status.toLowerCase().includes(status.toLowerCase());
};

const hasOriginsFiltered = (origins: string[], character: CharacterType) => {
  if (!origins.length) return true;
  return origins.some((origin) =>
    character.origin.name.toLowerCase().includes(origin.toLowerCase())
  );
};

const hasSpeciesFiltered = (species: string[], character: CharacterType) => {
  if (!species.length) return true;
  return species.some((item) =>
    character.species.toLowerCase().includes(item.toLowerCase())
  );
};

export const hasAllFiltered = (
  search: string,
  species: string[],
  origins: string[],
  status: string,
  characters: CharacterType[]
) => {
  const result = characters.filter((character) => {
    return (
      hasSearchFiltered(search, character) &&
      hasStatusFiltered(status, character) &&
      hasSpeciesFiltered(species, character) &&
      hasOriginsFiltered(origins, character)
    );
  });

  return result;
};
