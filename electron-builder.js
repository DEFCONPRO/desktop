/* eslint-disable @typescript-eslint/no-var-requires */
const deepMerge = require('deepmerge');
const packageJson = require('./package.json');

const network = process.env.STX_NETWORK || 'testnet';

if (!network) throw new Error('Must define STX_NETWORK environment variable');

if (!['mainnet', 'testnet'].includes(process.env.STX_NETWORK)) {
  console.warn('You have no set a `STX_NETWORK` env var, defaulting to testnet');
}

const baseConfig = {
  afterSign: 'scripts/notarize.js',
  asarUnpack: ['**/*.node'],
  files: [
    'dist/',
    'node_modules/',
    'resources/',
    'app.html',
    'main.prod.js',
    'main.prod.js.map',
    'preload.js',
    'package.json',
  ],
  nsis: {
    perMachine: true,
    oneClick: false,
    allowToChangeInstallationDirectory: true,
  },
  dmg: {
    contents: [
      {
        x: 130,
        y: 220,
      },
      {
        x: 410,
        y: 220,
        type: 'link',
        path: '/Applications',
      },
    ],
  },
  win: {
    // Don't use `msi` installer issues
    target: [
      {
        target: 'nsis',
        arch: ['x64', 'ia32'],
      },
    ],
    extraFiles: [
      {
        from: './resources/libusbK.dll',
        to: '.',
      },
    ],
    publisherName: 'Hiro Systems PBC',
  },
  mac: {
    hardenedRuntime: true,
    category: 'public.app-category.finance',
    entitlements: 'resources/entitlements.mac.plist',
    entitlementsInherit: 'resources/entitlements.mac.plist',
    darkModeSupport: true,
  },
  linux: {
    target: ['deb', 'rpm'],
    category: 'Finance',
  },
  directories: {
    buildResources: 'resources',
    output: 'release',
  },
  extraMetadata: {
    version: packageJson.version,
  },
};

const networkConfigs = {
  testnet: {
    productName: 'Leather Testnet',
    appId: 'so.hiro.StacksWalletTestnet',
    artifactName: 'leather-wallet.testnet.${ext}',
    mac: {
      icon: 'icon.testnet.icns',
    },
    win: {
      icon: 'icon.testnet.ico',
    },
    linux: {
      icon: 'icons-testnet',
    },
    // macos `Application Support` dir name
    extraMetadata: {
      name: 'leather-wallet-testnet',
      productName: 'Leather Testnet',
    },
  },
  mainnet: {
    productName: 'Leather',
    appId: 'so.hiro.StacksWallet',
    icon: 'icon-512x512.png',
    artifactName: 'leather-wallet.mainnet.${ext}',
    mac: {
      icon: 'icon.icns',
    },
    win: {
      icon: 'icon.mainnet.ico',
    },
    linux: {
      icon: 'icons-mainnet',
    },
    extraMetadata: {
      name: 'leather-wallet',
      productName: 'Leather',
    },
  },
};

const mergedConfig = deepMerge(baseConfig, networkConfigs[network]);

module.exports = mergedConfig;
