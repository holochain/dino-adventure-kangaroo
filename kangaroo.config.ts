import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.1.3-rc.1',
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
      version: '0.5.5-rc.1',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '0786644549e4770079a9225b2283eb5e5be9e1cd5eb0044c90153f792043fcf2',
        'x86_64-pc-windows-msvc.exe':
          'b840504f941ca80cdc04eecc3fc8d34f056cf450e66aada7b183c33a71224000',
        'x86_64-apple-darwin': '1363011e2ae3d3b53d3f8d9e1206928ec8a7a84aa7798e9db96b3ab7700f9bc0',
        'aarch64-apple-darwin': 'fd6d8df4c2750fca4403e657e85d647ac19371f9218f29c1ff67da548da2d5bd',
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
