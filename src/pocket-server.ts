import PocketCDP from "@pocketcdp/pocket-for-node";

const pocketServer = (apiKey: string, accountId: string, sourceId: string) => {
  if (!apiKey || !accountId || !sourceId) {
    throw new Error("Please provide all the required parameters");
  }
  const pocketCDP = new PocketCDP({
    apiKey: process.env.POCKET_API_BACKEND_KEY,
    accountId: process.env.POCKET_API_ACCOUNT_ID,
    sourceId: process.env.POCKET_API_SOURCE_ID,
  });
  return pocketCDP;
};

export default pocketServer;
