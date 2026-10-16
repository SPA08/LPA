import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import data files
import { cadastralDataset } from './src/data/cadastralDataset.ts';
import { localities } from './src/data/locations.ts';
import { cityPlaces } from './src/data/cityIntelligence.ts';

const seenMapIds = new Set();
const curatedLocations = [
  ...cadastralDataset.map(c => ({
    id: c.id,
    name: c.name,
    category: c.category,
    group: c.group,
    districtHub: 'Chichawatni',
    perMarlaRate: c.rate,
    lat: c.lat,
    lng: c.lng,
    address: c.parentChak || 'Tehsil Chichawatni',
    badge: c.statusBadge,
    desc: c.description,
    legal: c.legalStatus,
    rakba: c.rakba,
    streets: c.streets || '',
    rate: c.rate,
    canal: c.canal || '',
    water: c.water || '',
    categoryGroup: c.categoryGroup,
    highlights: c.highlights || ['Verified Road Access', 'Electricity & Water Available', 'Arazi Record Registry Verified'],
    isVerified: true,
    source: 'Cadastral Land Record'
  })),
  ...localities.map(loc => {
    let group = 'Residential';
    if (loc.category === 'Village & Chak') group = 'Village';
    else if (loc.category === 'Private Housing Scheme') group = 'Private';
    else if (loc.category === 'Government & Revenue Office') group = 'Government';
    else if (loc.category === 'Emergency & Healthcare') group = 'Health';
    else if (loc.category === 'Education & Landmark') group = 'Education';
    else if (loc.category === 'Commercial & Bazaar') group = 'Banking';
    else if (loc.category === 'Road & Highway') group = 'Government';

    return {
      id: loc.id,
      name: loc.name,
      category: loc.category,
      group: group,
      districtHub: loc.districtHub || 'Chichawatni',
      perMarlaRate: loc.perMarlaRate || '',
      lat: loc.lat,
      lng: loc.lng,
      address: loc.parentChak || (loc.districtHub === 'Sahiwal' ? 'District Sahiwal' : 'Tehsil Chichawatni'),
      badge: loc.statusBadge || (loc.districtHub === 'Sahiwal' ? 'Sahiwal Premier Town' : 'Verified Locality'),
      desc: loc.description,
      legal: loc.legalStatus,
      highlights: loc.highlights || ['Verified Road Access', 'Electricity & Water Available', 'Arazi Record Registry Verified'],
      isVerified: true,
      source: 'Curated Verified'
    };
  }),
  ...cityPlaces.map(p => ({
    id: p.id,
    name: p.name,
    category: p.category,
    group: p.category,
    districtHub: 'Chichawatni',
    perMarlaRate: '',
    lat: p.lat,
    lng: p.lng,
    address: `${p.locality} • ${p.roadAddress}`,
    badge: p.subCategory || p.category,
    desc: p.usefulness,
    legal: p.roadAddress,
    highlights: p.highlights || ['Major Civic Amenity', 'Prime Road Access', 'Tehsil Focal Point'],
    isVerified: true,
    source: 'Curated Verified'
  }))
].filter(loc => {
  if (seenMapIds.has(loc.id)) return false;
  seenMapIds.add(loc.id);
  return true;
});

const outDir = path.join(__dirname, 'public', 'assets', 'data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const outPath = path.join(outDir, 'mapLocations.json');
fs.writeFileSync(outPath, JSON.stringify(curatedLocations));
console.log(`Wrote ${curatedLocations.length} locations to ${outPath} (${Math.round(fs.statSync(outPath).size / 1024)} KB)`);
