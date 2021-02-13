#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import program from "commander";
import { apply } from "./apply";

clear();
console.log(
    chalk.red(figlet.textSync("devPlay", { horizontalLayout: "full" }))
);

program.version("1.1.0").parse(process.argv);

console.log("Usage:");
console.log(
    "devPlay [gameCode] [devPlayID] [coupon]: Apply coupon in devPlayID"
);
console.log("devPlay [jsonPath]: Apply coupon with json format");
if (process.argv.length == 3 || process.argv.length == 5) {
    clear();
}
apply(process.argv);
