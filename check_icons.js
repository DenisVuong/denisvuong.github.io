import * as si from 'react-icons/si';

const keys = Object.keys(si);
console.log("Code:", keys.filter(k => k.toLowerCase().includes('code')));
console.log("Visual:", keys.filter(k => k.toLowerCase().includes('visual')));
console.log("Micro:", keys.filter(k => k.toLowerCase().includes('micro')));
console.log("Power:", keys.filter(k => k.toLowerCase().includes('power')));
console.log("Auto:", keys.filter(k => k.toLowerCase().includes('auto')));
