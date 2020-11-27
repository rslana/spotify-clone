import React, { createContext, useContext, useState } from "react";

export interface PlayerContextType {
  showAlbum: boolean;
  setShowAlbum(showAlbum: boolean): void;
}

const PlayerContext = createContext<PlayerContextType>(null!);

export default function PlayerContextProvider(
  props: React.PropsWithChildren<{}>
) {
  const [showAlbum, setShowAlbum] = useState<boolean>(true);

  const contextValue = {
    showAlbum,
    setShowAlbum,
  } as PlayerContextType;

  return (
    <PlayerContext.Provider value={{ ...contextValue }}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within the PlayerContext");
  }
  return context;
}
