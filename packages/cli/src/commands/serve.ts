import path from "path";
import { Command } from "commander";
import { serve } from "local-api";

export const serveCommand = new Command()
  .command("serve [fliename]")
  .description("Open a file for editing")
  .option("-p, --port <number>", "Port to run server on", "4005")
  .action((fileName = "notebook.js", options: { port: string }) => {
    const dir = path.join(process.cwd(), path.dirname(fileName));

    serve(parseInt(options.port), path.basename(fileName), dir);
  });
