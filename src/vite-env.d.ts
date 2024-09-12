/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_SUPABASE_KEY: string;
    // Agrega todas las variables de entorno que vayas a usar
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  