import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.1.3-rc.0',
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
      version: '0.5.5-rc.0',
      sha256: {
        'x86_64-unknown-linux-gnu':
          'fd902e49e725ed4e67df78566164c534df0a7031779a7b59bafd3e5b27c249a5',
        'x86_64-pc-windows-msvc.exe':
          '2257328c4b85bc4358e737decd761a3323d6f2bb769abb8275bd874cfc661196',
        'x86_64-apple-darwin': '86708eb7c9ff0c3222b8e687df197a1b6c0af13a14be1242c62310d0077b1201',
        'aarch64-apple-darwin': 'f73a1f98964efc8fcb6320d334d28f5ec12bcb313adad2528073a4272d2c6091',
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
