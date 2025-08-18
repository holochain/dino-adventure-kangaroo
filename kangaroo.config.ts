import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.1.3-rc.3',
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
      version: '0.5.5-rc.3',
      sha256: {
        'x86_64-unknown-linux-gnu':
          'f5103e984d0050daaf25e76bf9694af569a07c88c63399ca027be2ae64e41cbb',
        'x86_64-pc-windows-msvc.exe':
          '165792ee921e488eef47cfbcc5428cec51e83be20c517e667921e842e7ac849b',
        'x86_64-apple-darwin': '3b702717f6e043e2ea5383e532508a4ce034660db65466c272228514a7af326a',
        'aarch64-apple-darwin': 'd0b12439c43ce8271c80fe77b857763b45d2472e0b45317b096f6bad163be145',
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
