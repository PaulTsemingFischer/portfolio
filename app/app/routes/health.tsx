import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { prisma } from "~/utils/db.server";

export const loader: LoaderFunction = async () => {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;

    return json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        services: {
          database: "connected",
          application: "running"
        }
      },
      { status: 200 }
    );
  } catch (error) {
    return json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: "Database connection failed"
      },
      { status: 503 }
    );
  }
};
