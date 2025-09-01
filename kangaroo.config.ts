import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.1.4-rc.0',
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
      version: '0.5.6-rc.0',
      sha256: {
        'x86_64-unknown-linux-gnu':
          '1369334f414a18ef870e3da8ff8fbeeffda0ac32a16d7d8a1e870c864b463bfb',
        'x86_64-pc-windows-msvc.exe':
          'e4c2fdb8004ac85d742cf47621438624faa974ef292edcc059f152e963e84ce2',
        'x86_64-apple-darwin': '5b5103492a546a78e8b7bd9005d240a7a870ff9e13998a6ef0e804a64185aed0',
        'aarch64-apple-darwin': '17c68cc37aadf4c932dad13247ccc90998a5df9dd23852853c944d60d8a0a163',
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
