import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    warmup: {
      clientFiles: [
        'src/main.tsx',
        './src/layouts/LayoutBase/LayoutBase.tsx',
        './src/pages/Hub/Hub.tsx',
        './src/components/Charts/BarChart.tsx',
        './src/components/Charts/LineChart.tsx',
        './src/components/Charts/PieChart.tsx',
        './src/components/Table/GenericTable.tsx',
      ],
    },
  },
  plugins: [react(), tailwindcss(),],
  optimizeDeps: {
    include: ['recharts', 'xlsx'],
  },
  resolve:{
    alias: {'@': '/src',},
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
})
