import { readdir, stat } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join, parse, resolve } from 'node:path'
import sharp from 'sharp'

const LOGOS_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'logos')
const QUALITY = 80
const MAX_WIDTH = 200

const files = await readdir(LOGOS_DIR)
const pngs = files.filter(f => f.toLowerCase().endsWith('.png'))

if (pngs.length === 0) {
  console.log('No PNG files found in', LOGOS_DIR)
  process.exit(0)
}

console.log(`Optimizing ${pngs.length} PNG file(s) → WebP @ q${QUALITY}, max ${MAX_WIDTH}px wide`)

let totalIn = 0
let totalOut = 0

for (const file of pngs) {
  const inPath = join(LOGOS_DIR, file)
  const outPath = join(LOGOS_DIR, parse(file).name + '.webp')

  const inSize = (await stat(inPath)).size
  await sharp(inPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath)
  const outSize = (await stat(outPath)).size

  totalIn += inSize
  totalOut += outSize
  const saved = (((inSize - outSize) / inSize) * 100).toFixed(1)
  console.log(`  ${file.padEnd(28)} ${(inSize / 1024).toFixed(1)} KB → ${(outSize / 1024).toFixed(1)} KB  (-${saved}%)`)
}

const totalSaved = (((totalIn - totalOut) / totalIn) * 100).toFixed(1)
console.log(`\nTotal: ${(totalIn / 1024).toFixed(1)} KB → ${(totalOut / 1024).toFixed(1)} KB  (-${totalSaved}%)`)
