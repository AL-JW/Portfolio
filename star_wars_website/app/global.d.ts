export {}; // Prevents conflicts with other TypeScript modules

declare global {
  interface Window {
    toggleLightsaber: () => void;
    toggleContent: (id: number) => void;
    toggleMobileMenu: () => void;
    changeBladeColor: (color: string) => void;
  }
}
