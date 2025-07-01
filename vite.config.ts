import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

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
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    minify: "terser", // Ativar minificação
    chunkSizeWarningLimit: 500, // Garantir chunks pequenos
    cssCodeSplit: true, // CSS dividido
    sourcemap: false, // Desativar mapa em produção
  },
});
