import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = () => {
  const unpkgUrl = "https://unpkg.com";
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // Handle root entry file of 'index.js'
      build.onResolve({ filter: /(^index\.js$)/ }, () => {
        return { path: "index.js", namespace: "a" };
      });

      // Handle relative paths in a module
      build.onResolve({ filter: /^\.+\// }, (args: any) => {
        const url = new URL(args.path, unpkgUrl + args.resolveDir + "/").href;
        return { path: url, namespace: "a" };
      });

      // Handle main file of a module
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        return { path: `${unpkgUrl}/${args.path}`, namespace: "a" };
      });
    },
  };
};
