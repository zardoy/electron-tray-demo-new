import type { ForgeConfig } from '@electron-forge/shared-types';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerDMG } from '@electron-forge/maker-dmg';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';

import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
    name: 'Electron Tray Demo',
    executableName: 'electron-tray-demo',
    icon: './public/IconTemplate@2x.png',
    appCopyright: 'Copyright © 2024 Vitaly Turovsky',
    appCategoryType: 'public.app-category.developer-tools',
    protocols: [
      {
        name: 'Electron Tray Demo',
        schemes: ['electron-tray-demo']
      }
    ]
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      name: 'Electron Tray Demo',
      iconUrl: 'https://raw.githubusercontent.com/yourusername/electron-tray-demo-new/main/public/IconTemplate@2x.png',
      setupIcon: './public/IconTemplate@2x.png'
    }),
    new MakerDMG({
      name: 'Electron Tray Demo',
      icon: './public/IconTemplate@2x.png',
      background: './public/IconTemplate@2x.png',
      format: 'ULFO'
    })
  ],
  plugins: [
    new AutoUnpackNativesPlugin({}),
    new WebpackPlugin({
      mainConfig,
      renderer: {
        config: rendererConfig,
        entryPoints: [
          {
            html: './src/index.html',
            js: './src/renderer.tsx',
            name: 'main_window',
            preload: {
              js: './src/preload.ts',
            },
          },
        ],
      },
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
