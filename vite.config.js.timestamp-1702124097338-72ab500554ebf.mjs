// vite.config.js
import { defineConfig } from "file:///Users/saku/workspace/code-lessons/nekopon/04_intermediate02/www/node_modules/vite/dist/node/index.js";
import path from "path";
import globule from "file:///Users/saku/workspace/code-lessons/nekopon/04_intermediate02/www/node_modules/globule/lib/globule.js";
import handlebars from "file:///Users/saku/workspace/code-lessons/nekopon/04_intermediate02/www/node_modules/vite-plugin-handlebars/dist/index.js";
import sassGlobImports from "file:///Users/saku/workspace/code-lessons/nekopon/04_intermediate02/www/node_modules/vite-plugin-sass-glob-import/dist/index.mjs";

// src/data/siteData.json
var siteData_default = {
  "/index.html": {
    pageName: "Home",
    title: "ENGBODY",
    description: "ENGBODY\u306F\u3001\u30D1\u30FC\u30BD\u30CA\u30EB\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u3068\u82F1\u4F1A\u8A71\u3092\u878D\u5408\u3055\u305B\u305F\u30D1\u30FC\u30BD\u30CA\u30EB\u30B8\u30E0\u3067\u3059\u3002\u3059\u3079\u3066\u306E\u30C8\u30EC\u30FC\u30CA\u306F\u30CD\u30A4\u30C6\u30A3\u30D6\u306E\u82F1\u4F1A\u8A71\u8005\u3067\u3001\u30C8\u30EC\u30FC\u30CB\u30F3\u30B0\u4E2D\u306F\u3059\u3079\u3066\u82F1\u8A9E\u3067\u884C\u308F\u308C\u307E\u3059\u3002"
  }
};

// vite.config.js
var __vite_injected_original_dirname = "/Users/saku/workspace/code-lessons/nekopon/04_intermediate02/www";
var htmlFiles = globule.find("src/**/*.html", {
  ignore: ["src/**/_*.html"]
});
var pageObject = Object.fromEntries(
  htmlFiles.map((filePath) => {
    const key = filePath.split("/").slice(-1)[0].replace(".html", "");
    return [key, filePath];
  })
);
var vite_config_default = defineConfig({
  root: "src",
  publicDir: "../public",
  server: {
    host: true,
    // IPアドレス有効化
    open: true,
    port: 8080
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
      input: pageObject,
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/[name].js`,
        assetFileNames: (assetInfo) => {
          console.log(assetInfo.name);
          if (/\.css$/.test(assetInfo.name)) {
            return "assets/css/[name].[ext]";
          }
          return "assets/[name].[ext]";
        }
      }
    }
  },
  plugins: [
    handlebars({
      /* eslint-env node */
      partialDirectory: path.resolve(__vite_injected_original_dirname, "./src/partials"),
      context: (pagePath) => {
        return {
          ...siteData_default[pagePath]
        };
      }
    }),
    sassGlobImports()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL2RhdGEvc2l0ZURhdGEuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zYWt1L3dvcmtzcGFjZS9jb2RlLWxlc3NvbnMvbmVrb3Bvbi8wNF9pbnRlcm1lZGlhdGUwMi93d3dcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9zYWt1L3dvcmtzcGFjZS9jb2RlLWxlc3NvbnMvbmVrb3Bvbi8wNF9pbnRlcm1lZGlhdGUwMi93d3cvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Nha3Uvd29ya3NwYWNlL2NvZGUtbGVzc29ucy9uZWtvcG9uLzA0X2ludGVybWVkaWF0ZTAyL3d3dy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgZ2xvYnVsZSBmcm9tICdnbG9idWxlJztcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gJ3ZpdGUtcGx1Z2luLWhhbmRsZWJhcnMnO1xuaW1wb3J0IHNhc3NHbG9iSW1wb3J0cyBmcm9tICd2aXRlLXBsdWdpbi1zYXNzLWdsb2ItaW1wb3J0JztcbmltcG9ydCBzaXRlRGF0YSBmcm9tICcuL3NyYy9kYXRhL3NpdGVEYXRhLmpzb24nO1xuXG4vKipcbiAqIGh0bWxcdTMwRDVcdTMwQTFcdTMwQTRcdTMwRUJcdTMwOTJcdTkxNERcdTUyMTdcdTMwNjdcdTUzRDZcdTVGOTdcdTMwNTdcdTMwNjZcdTMwMDFcdTRFRTVcdTRFMEJcdTMwNkVcdTVGNjJcdTVGMEZcdTMwNjdcdTMwQUFcdTMwRDZcdTMwQjhcdTMwQTdcdTMwQUZcdTMwQzhcdTMwNkJcdTU5MDlcdTYzREJcbiAqIHsgaW5kZXg6ICdzcmMvaW5kZXguaHRtbCcsIGZpbGVuYW1lOiAnc3JjL2ZpbGVuYW1lLmh0bWwnLCAuLi4gfVxuICovXG5jb25zdCBodG1sRmlsZXMgPSBnbG9idWxlLmZpbmQoJ3NyYy8qKi8qLmh0bWwnLCB7XG4gIGlnbm9yZTogWydzcmMvKiovXyouaHRtbCddLFxufSk7XG5jb25zdCBwYWdlT2JqZWN0ID0gT2JqZWN0LmZyb21FbnRyaWVzKFxuICBodG1sRmlsZXMubWFwKChmaWxlUGF0aCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGZpbGVQYXRoLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdLnJlcGxhY2UoJy5odG1sJywgJycpO1xuICAgIHJldHVybiBba2V5LCBmaWxlUGF0aF07XG4gIH0pLFxuKTtcblxuLy8gaHR0cHM6Ly9qYS52aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJvb3Q6ICdzcmMnLFxuICBwdWJsaWNEaXI6ICcuLi9wdWJsaWMnLFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLCAvLyBJUFx1MzBBMlx1MzBDOVx1MzBFQ1x1MzBCOVx1NjcwOVx1NTJCOVx1NTMxNlxuICAgIG9wZW46IHRydWUsXG4gICAgcG9ydDogODA4MCxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcbiAgICBtaW5pZnk6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zL1xuICAgICAgaW5wdXQ6IHBhZ2VPYmplY3QsXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IGBhc3NldHMvanMvW25hbWVdLmpzYCxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IGBhc3NldHMvanMvW25hbWVdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhhc3NldEluZm8ubmFtZSk7XG4gICAgICAgICAgaWYgKC9cXC5jc3MkLy50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvY3NzL1tuYW1lXS5bZXh0XSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnYXNzZXRzL1tuYW1lXS5bZXh0XSc7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBoYW5kbGViYXJzKHtcbiAgICAgIC8qIGVzbGludC1lbnYgbm9kZSAqL1xuICAgICAgcGFydGlhbERpcmVjdG9yeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhcnRpYWxzJyksXG4gICAgICBjb250ZXh0OiAocGFnZVBhdGgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zaXRlRGF0YVtwYWdlUGF0aF0sXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICAgIHNhc3NHbG9iSW1wb3J0cygpLFxuICBdLFxufSk7XG4iLCAie1xuICBcIi9pbmRleC5odG1sXCI6IHtcbiAgICBcInBhZ2VOYW1lXCI6IFwiSG9tZVwiLFxuICAgIFwidGl0bGVcIjogXCJFTkdCT0RZXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkVOR0JPRFlcdTMwNkZcdTMwMDFcdTMwRDFcdTMwRkNcdTMwQkRcdTMwQ0FcdTMwRUJcdTMwQzhcdTMwRUNcdTMwRkNcdTMwQ0JcdTMwRjNcdTMwQjBcdTMwNjhcdTgyRjFcdTRGMUFcdThBNzFcdTMwOTJcdTg3OERcdTU0MDhcdTMwNTVcdTMwNUJcdTMwNUZcdTMwRDFcdTMwRkNcdTMwQkRcdTMwQ0FcdTMwRUJcdTMwQjhcdTMwRTBcdTMwNjdcdTMwNTlcdTMwMDJcdTMwNTlcdTMwNzlcdTMwNjZcdTMwNkVcdTMwQzhcdTMwRUNcdTMwRkNcdTMwQ0FcdTMwNkZcdTMwQ0RcdTMwQTRcdTMwQzZcdTMwQTNcdTMwRDZcdTMwNkVcdTgyRjFcdTRGMUFcdThBNzFcdTgwMDVcdTMwNjdcdTMwMDFcdTMwQzhcdTMwRUNcdTMwRkNcdTMwQ0JcdTMwRjNcdTMwQjBcdTRFMkRcdTMwNkZcdTMwNTlcdTMwNzlcdTMwNjZcdTgyRjFcdThBOUVcdTMwNjdcdTg4NENcdTMwOEZcdTMwOENcdTMwN0VcdTMwNTlcdTMwMDJcIlxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtYLFNBQVMsb0JBQW9CO0FBQy9ZLE9BQU8sVUFBVTtBQUNqQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxxQkFBcUI7OztBQ0o1QjtBQUFBLEVBQ0UsZUFBZTtBQUFBLElBQ2IsVUFBWTtBQUFBLElBQ1osT0FBUztBQUFBLElBQ1QsYUFBZTtBQUFBLEVBQ2pCO0FBQ0Y7OztBRE5BLElBQU0sbUNBQW1DO0FBV3pDLElBQU0sWUFBWSxRQUFRLEtBQUssaUJBQWlCO0FBQUEsRUFDOUMsUUFBUSxDQUFDLGdCQUFnQjtBQUMzQixDQUFDO0FBQ0QsSUFBTSxhQUFhLE9BQU87QUFBQSxFQUN4QixVQUFVLElBQUksQ0FBQyxhQUFhO0FBQzFCLFVBQU0sTUFBTSxTQUFTLE1BQU0sR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLFNBQVMsRUFBRTtBQUNoRSxXQUFPLENBQUMsS0FBSyxRQUFRO0FBQUEsRUFDdkIsQ0FBQztBQUNIO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBO0FBQUEsTUFFYixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGtCQUFRLElBQUksVUFBVSxJQUFJO0FBQzFCLGNBQUksU0FBUyxLQUFLLFVBQVUsSUFBSSxHQUFHO0FBQ2pDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsV0FBVztBQUFBO0FBQUEsTUFFVCxrQkFBa0IsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQzFELFNBQVMsQ0FBQyxhQUFhO0FBQ3JCLGVBQU87QUFBQSxVQUNMLEdBQUcsaUJBQVMsUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsZ0JBQWdCO0FBQUEsRUFDbEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
