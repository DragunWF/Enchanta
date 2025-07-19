import * as SQLite from "expo-sqlite";
import AdventureResult from "../../models/adventureResult";

const database = SQLite.openDatabaseSync("enchanta.db");

interface AdventureResultRow {
  id: number;
  landscapeId: number;
  summary: string;
  adventureWon: number; // To be converted into an boolean because SQLite does not have booleans
  datetime: string;
}

export function init() {
  console.info("Database initialization has been called!");
  return database.runAsync(`
CREATE TABLE IF NOT EXISTS adventureResults (
    id INTEGER PRIMARY KEY NOT NULL,
    landscapeId TEXT NOT NULL,
    summary TEXT NOT NULL,
    adventureWon INTEGER NOT NULL,
    datetime TEXT NOT NULL
)
`);
}

export function insertAdventureResult(result: AdventureResult) {
  return database.runAsync(
    `
        INSERT INTO adventureResults (landscapeId, summary, adventureWon, datetime)
        VALUES (?, ?, ?, ?)
    `,
    [
      result.getLandscapeId(),
      result.getSummary(),
      Number(result.isAdventureWon()),
      result.getDatetime().toISOString(),
    ]
  );
}

export async function fetchAdventureResults(): Promise<AdventureResult[]> {
  const result = await database.getAllAsync<AdventureResultRow>(
    "SELECT * FROM adventureResults"
  );

  const adventureResults = [];

  for (const dp of result) {
    adventureResults.push(
      new AdventureResult(
        dp.id,
        Number(dp.landscapeId),
        dp.summary,
        Boolean(dp.adventureWon),
        new Date(dp.datetime)
      )
    );
  }

  return adventureResults;
}

export async function resetDatabase() {
  await database.runAsync(`DROP TABLE IF EXISTS adventureResults`);
  await init();
  console.info("Database has been reset!");
}
