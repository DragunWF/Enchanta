import * as SQLite from "expo-sqlite";
import AdventureResult from "../../models/adventureResult";

const database = SQLite.openDatabaseSync("enchanta.db");

interface AdventureResultRow {
  id: number;
  landscape: string;
  summary: string;
  adventureWon: number; // To be converted into an boolean because SQLite does not have booleans
  datetime: string;
}

export function init() {
  console.info("Database initialization has been called!");
  return database.runAsync(`
CREATE TABLE IF NOT EXISTS adventureResults (
    id INTEGER PRIMARY KEY NOT NULL,
    landscape TEXT NOT NULL,
    summary TEXT NOT NULL,
    adventureWon INTEGER NOT NULL,
    datetime TEXT NOT NULL
)
`);
}

export function insertAdventureResult(result: AdventureResult) {
  return database.runAsync(
    `
        INSERT INTO adventureResults (landscape, summary, adventureWon, datetime)
        VALUES (?, ?, ?, ?)
    `,
    [
      result.getLandscape(),
      result.getSummary(),
      Number(result.isAdventureWon()),
      result.getDatetime(),
    ]
  );
}

export async function fetchAdventureResults() {
  const result = await database.getAllAsync<AdventureResultRow>(
    "SELECT * FROM adventureResults"
  );

  const adventureResults = [];

  for (const dp of result) {
    adventureResults.push(
      new AdventureResult(
        dp.id,
        dp.landscape,
        dp.summary,
        Boolean(dp.adventureWon),
        dp.datetime
      )
    );
  }

  return adventureResults;
}
