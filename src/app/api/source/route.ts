import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const filePath = join(process.cwd(), "public", "bina-horizon-source.zip");
  const data = await readFile(filePath);

  return new Response(data, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="bina-horizon-source.zip"',
      "Content-Length": String(data.byteLength),
      "Cache-Control": "no-store",
    },
  });
}
