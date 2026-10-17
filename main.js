name: Build Windows EXE

on:
  workflow_dispatch:
  push:
    branches: [main]
    paths:
      - "src/**"
      - "package.json"
      - ".github/workflows/build-windows.yml"

permissions:
  contents: read

jobs:
  build:
    runs-on: windows-latest
    steps:
      - name: Checkout source
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build Windows installer and portable EXE
        run: npx electron-builder --win nsis portable

      - name: Upload EXE files
        uses: actions/upload-artifact@v4
        with:
          name: OMEGA-Script-Studio-Windows
          path: |
            dist/*.exe
          if-no-files-found: error
          retention-days: 14
