import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'repo-name' with the actual name of your GitHub repository
const repoName = 'Finance-tracker-prototype'; 

export default defineConfig({
  plugins: [react()],
// base: './', // <--- MUST BE EXACTLY THIS
})