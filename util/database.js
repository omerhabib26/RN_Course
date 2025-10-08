import * as SQLite from "expo-sqlite";

let db;

export async function initDB() {
  if (!db) {
    db = await SQLite.openDatabaseAsync("places.db");
  }

  // Create the table if it doesn't exist
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      imageUri TEXT NOT NULL,
      address TEXT NOT NULL,
      lat REAL NOT NULL,
      lng REAL NOT NULL
    );
  `);

  console.log("✅ Database initialized and table ready");
}

export function getDB() {
  if (!db) {
    throw new Error("Database not initialized! Call initDB() first.");
  }
  return db;
}

export async function insert(place) {
  const database = getDB();
  const result = await database.runAsync(
    `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.lat,
      place.location.lng,
    ]
  );

  console.log("📥 Inserted place with ID:", result.lastInsertRowId);
  return result.lastInsertRowId;
}

export async function fetchPlaces() {
  const database = getDB();
  const result = await database.getAllAsync("SELECT * FROM places");
  console.log("✅ Places fetched:", result);
  return result; // returns an array of objects
}
