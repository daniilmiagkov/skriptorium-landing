/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // Record<string, unknown> — означает «объект с любыми ключами», но без использования `{}`
  // unknown — безопасная замена `any`
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>;
  export default component;
}
