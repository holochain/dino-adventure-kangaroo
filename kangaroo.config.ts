import { defineConfig } from './src/main/defineConfig';

export default defineConfig({
  appId: 'org.holochain.dino-adventure',
  productName: 'Dino Adventure',
  version: '0.3.0-dev.2',
  macOSCodeSigning: true,
  windowsEVCodeSigning: true,
  fallbackToIndexHtml: true,
  autoUpdates: true,
  systray: true,
  webhapp: {
    url: 'https://github.com/holochain/dino-adventure/releases/download/v0.3.0-dev.0-iroh-fix/DinoAdventure.webhapp',
    sha256: '3cce5c01358c471d78839beb5c1c031648c6dc2e83717e7bfc23ae15ee156254',
  },
  passwordMode: 'no-password',
  bootstrapUrl: 'https://dev-test-bootstrap2-iroh.holochain.org/',
  signalUrl: 'wss://dev-test-bootstrap2.holochain.org/',
  relayUrl: 'https://dev-test-bootstrap2-iroh.holochain.org/',
  iceUrls: ['stun:stun.cloudflare.com:3478', 'stun:stun.l.google.com:19302'],
  bins: {
    holochainVersion: '0.7.0-dev.21-iroh-fix',
    holochainFeature: 'go-pion',
    holochain: {
      sha256: {
        'x86_64-unknown-linux-gnu':
          '60a2a6730280229b127698b336d24da88658897071822e17f54ba6d638bce146',
        'x86_64-pc-windows-msvc.exe':
          '5f6b98b7eaf6354e00134151d9bb68ac91b920d204376a374a03634a3197f573',
        'x86_64-apple-darwin': '676fd08e209fab143e1d3a4fdaf05cdde02597081996528945a5cde972b420e5',
        'aarch64-apple-darwin': 'ca98c76edfa6c9b42bf45f1920b0963388bfffaf319e0f6848e6867ba2757ebe',
        'aarch64-unknown-linux-gnu':
          '6c3146f5bb8058b3b0a7ebbdf600390d975a5f7949d1c8e5f48a3207e48af2a7',
      },
    },
    lair: {
      sha256: {
        'x86_64-unknown-linux-gnu':
          '6883e429f608a329616b8de0ea40a0e333538e27237220f028ea55d47b4126f6',
        'x86_64-pc-windows-msvc.exe':
          '1e0bcd14f84793d07f5b498a5fade934798b8402c779bbc7874b77b38fe2b91f',
        'x86_64-apple-darwin': '58c049e5ca5ba6e6dc4ab6444fce5cd8ea3583b25a680cf814a72edd17acc250',
        'aarch64-apple-darwin': 'd751a3e190f4b2274f34e91b0b2493ecc43b7528df83b3307d53ea4fdfe6c63d',
        'aarch64-unknown-linux-gnu':
          'ec6ad804e7b57d9c05475f14b4f6776f81f7d4acae630f4be07d1840679cd86c',
      },
    },
  },
});
