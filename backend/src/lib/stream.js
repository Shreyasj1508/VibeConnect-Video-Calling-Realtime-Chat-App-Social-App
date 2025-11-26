import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY || process.env.STEAM_API_KEY; // accept both names
const apiSecret = process.env.STREAM_API_SECRET || process.env.STEAM_API_SECRET;

let streamClient = null;

if (!apiKey || !apiSecret) {
  console.warn("Stream API key/secret not provided. Stream features will be disabled in dev.");
} else {
  try {
    streamClient = StreamChat.getInstance(apiKey, apiSecret);
  } catch (err) {
    console.error("Failed to initialize Stream client:", err);
    streamClient = null;
  }
}

export const upsertStreamUser = async (userData) => {
  if (!streamClient) {
    // In dev without Stream keys, skip actual upsert and return provided data
    console.warn("upsertStreamUser: Stream client not initialized — skipping upsert.");
    return userData;
  }

  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  if (!streamClient) {
    console.warn("generateStreamToken: Stream client not initialized — returning null token.");
    return null;
  }

  try {
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
