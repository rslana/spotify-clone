export interface UserConfig {
  showAlbum?: boolean;
}

export const initUserConfigState: UserConfig = {
  showAlbum: false,
};

export const getLocalUserConfig = (): UserConfig => {
  try {
    const userConfig = JSON.parse(localStorage.getItem("@USER_CONFIG")!);
    if (!userConfig) {
      return setLocalUserConfig(initUserConfigState);
    }
    return userConfig;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const setLocalUserConfig = (userConfig: UserConfig): UserConfig => {
  try {
    localStorage.setItem("@USER_CONFIG", JSON.stringify(userConfig));
  } catch (error) {
    console.log(error);
  }
  return userConfig;
};
