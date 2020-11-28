
export interface UserConfig {
  showAlbum?:boolean
}

export const getLocalUserConfig = () : UserConfig =>  {
  try {
    return JSON.parse(localStorage.getItem("@USER_CONFIG")!);
  } catch (error) {
    console.log(error);
    return {};
  }
}

export const setLocalUserConfig = (userConfig: UserConfig) : UserConfig =>  {
  try {
    localStorage.setItem("@USER_CONFIG", JSON.stringify(userConfig));
  } catch (error) {
    console.log(error) 
  }
  return userConfig;
}