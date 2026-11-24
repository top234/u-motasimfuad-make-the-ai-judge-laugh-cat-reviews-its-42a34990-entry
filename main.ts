import { writeFileSync, mkdirSync } from "node:fs";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const line = "One star. He refilled my bowl four minutes late, so I knocked his coffee onto his laptop during his performance review. HR has been notified. I am HR.";
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
