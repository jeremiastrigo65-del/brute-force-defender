
import { neon } from "@neondatabase/serverless";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  if (!process.env.DATABASE_URL) {
    return response.status(500).json({
      success: false,
      message: "Database configuration is missing",
    });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`
      SELECT
        NOW() AS server_time,
        current_database() AS database_name
    `;

    return response.status(200).json({
      success: true,
      message: "Backend connected to Neon successfully!",
      database: result[0].database_name,
      serverTime: result[0].server_time,
    });
  } catch (error) {
    console.error("Database health check failed:", error.message);

    return response.status(500).json({
      success: false,
      message: "Could not connect to the database",
    });
  }
}
