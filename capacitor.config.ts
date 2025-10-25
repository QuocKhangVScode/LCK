import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourname.lockchildkeeper',
  appName: 'Lock Child Keeper',
  webDir: 'dist', // hoặc 'build' nếu bạn dùng CRA
  server: {
    androidScheme: 'https'
  }
};

export default config;
