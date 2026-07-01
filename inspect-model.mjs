import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'tmp-character.glb');
const data = fs.readFileSync(file);
const header = data.slice(0, 12);

if (header.toString('utf8', 0, 4) !== 'glTF') {
  throw new Error('not glTF');
}

let offset = 12;
const chunks = [];

while (offset < data.length) {
  const chunkLength = data.readUInt32LE(offset);
  const chunkType = data.readUInt32LE(offset + 4);
  const chunkData = data.slice(offset + 8, offset + 8 + chunkLength);
  chunks.push({ chunkType, chunkLength, chunkData });
  offset += 8 + chunkLength;
}

const jsonChunk = chunks.find((c) => c.chunkType === 0x4e4f534a);
if (!jsonChunk) {
  throw new Error('no JSON chunk');
}

const gltf = JSON.parse(jsonChunk.chunkData.toString('utf8'));

console.log('materials:');
gltf.materials?.forEach((m, r) => console.log(`${r}: ${m.name || '<no-name>'}`));
console.log('---');
console.log('meshes:');
gltf.meshes?.forEach((m, r) => console.log(`${r}: ${m.name}`));
