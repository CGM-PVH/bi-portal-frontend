import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; // 👉 Importar path para resolver os aliases corretamente

// https://vite.dev/config/
export default defineConfig({
  server: {
    warmup: {
      clientFiles: [
        "src/main.tsx",
        "./src/layouts/LayoutBase/LayoutBase.tsx",
        "./src/pages/Hub/Hub.tsx",
        "./src/components/Charts/CustosDetalhados/BarChart.tsx",
        "./src/components/Charts/CustosDetalhados/LineChart.tsx",
        "./src/components/Charts/CustosDetalhados/PieChart.tsx",
        "./src/components/Table/GenericTable.tsx",
      ],
    },
  },
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["recharts", "xlsx"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Isso aqui é o que resolve os imports com "@"
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    minify: "terser",
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    sourcemap: false,
  },
});
