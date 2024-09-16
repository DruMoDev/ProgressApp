/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF", // Azul brillante
        primaryHover: "#187bcd",
        secondary: "#4B5563", // Gris oscuro
        secondaryHover: "#374151",
        success: "#10B981", // Verde esmeralda
        warning: "#F59E0B", // Naranja intenso
        error: "#EF4444", // Rojo brillante
        background: "#F3F4F6", // Gris claro
        textPrimary: "#111827", // Negro casi puro
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
