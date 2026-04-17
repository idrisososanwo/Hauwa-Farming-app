import { openDB } from "idb";

const DB_NAME = "hauwa-db";
const STORE_NAME = "activities";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const addActivity = async (activity: any) => {
  const db = await initDB();
  return db.add(STORE_NAME, activity);
};

export const getActivities = async () => {
  const db = await initDB();
  return db.getAll(STORE_NAME);
};