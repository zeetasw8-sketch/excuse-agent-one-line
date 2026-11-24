import { readFileSync as r, writeFileSync as w, mkdirSync as m } from "node:fs";
import { join as j, dirname as d } from "node:path";
import { fileURLToPath as f } from "node:url";
const o = process.env.MAKEFUN_OUTPUT_DIR ?? "/output", l = r(j(d(f(import.meta.url)), "line.txt"), "utf8").trim();
if (!l || l.length > 160 || /\n/.test(l)) throw new Error("line must be one line, 1-160 characters");
m(o, { recursive: true }); w(j(o, "line.txt"), l + "\n"); console.log(l);
