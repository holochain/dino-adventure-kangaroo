import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.1.3-rc.2',
  macOSCodeSigning: true,
  windowsEVCodeSigning: true,
  fallbackToIndexHtml: true,
  autoUpdates: true,
  systray: true,
  webhapp: {
    url: "https://github.com/holochain/dino-adventure/releases/download/v0.1.1/dino-adventure-v0.1.1.webhapp",
    sha256: "5a7004fde2d2953dc7c90ccb6c01d7a6421a381616ea2b7b30de503d12ef0456",
  },
  passwordMode: 'no-password',
  bootstrapUrl: 'https://dev-test-bootstrap2.holochain.org/',
  signalUrl: 'wss://dev-test-bootstrap2.holochain.org/',
  iceUrls: ['stun:stun.cloudflare.com:3478', 'stun:stun.l.google.com:19302'],
  bins: {
    holochain: {
      version: '0.5.5-rc.2',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '3ae6d6b2033e4422419c9fa3e8ab000081018486b5ea0ac2d9715090bf3bc5d2',
        'x86_64-pc-windows-msvc.exe':
          'f81d39eecf3838646d76b478600053e71a131ce3a13b0bd9b5c490dfc04355a7',
        'x86_64-apple-darwin': '48f2d131271a4944ad41c3f1724674fb00e4d8d50da21bea454922504dbb98bc',
        'aarch64-apple-darwin': 'c8bd0247ce85dd124e4bb3408d02bca2e7746e4a8d2720acfa28f6f2782e23cd',
      },
    },
    lair: {
      version: '0.6.2',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '3c9ea3dbfc0853743dad3874856fdcfe391dca1769a6a81fc91b7578c73e92a7',
        'x86_64-pc-windows-msvc.exe':
          '6392ce85e985483d43fa01709bfd518f8f67aed8ddfa5950591b4ed51d226b8e',
        'x86_64-apple-darwin': '746403e5d1655ecf14d95bccaeef11ad1abfc923e428c2f3d87c683edb6fdcdc',
        'aarch64-apple-darwin': '05c7270749bb1a5cf61b0eb344a7d7a562da34090d5ea81b4c5b6cf040dd32e8',
      },
    },
  },
});
