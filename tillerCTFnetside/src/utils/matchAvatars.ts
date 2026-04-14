import defaultpic from "../assets/vite.svg";

function matchAvatars(name: string) {
  const formatName = name.toLowerCase().replace(/\s+/g, "");

  try {
    return new URL(`../assets/avatars/${formatName}.png`, import.meta.url).href;
  } catch {
    return defaultpic;
  }
}

export default matchAvatars;
