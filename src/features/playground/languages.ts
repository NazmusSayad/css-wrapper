import { Platform } from './interface'

export const platforms: Platform[] = [
  new Platform(
    'JavaScript',
    () => [
      {
        file: 'space-hack.js',
        code: `// Simulate hacking NASA telemetry (fun)
const satellites = ["Hubble", "ISS", "GPS"];
satellites.forEach(s => console.log(\`Accessing \${s} data stream...\`));
console.log("Warning: Do not try this in real life!");`,
      },
      {
        file: 'forest-simulation.js',
        code: `// Simulate random forest growth
function growTrees(count) {
  const trees = [];
  for(let i=0;i<count;i++){
    trees.push({id:i, height:Math.random()*100});
  }
  return trees;
}
console.log(growTrees(5));`,
      },
      {
        file: 'stock-analyzer.js',
        code: `// Random stock prediction
function predictStock() {
  return Math.random() > 0.5 ? "Buy" : "Sell";
}
console.log("Stock suggestion:", predictStock());`,
      },
      {
        file: 'ascii-art.js',
        code: `// Generate simple ASCII art
const lines = ["\\/", "/\\", "\\/", "/\\"];
lines.forEach(line => console.log(line));`,
      },
    ],
    () => [
      {
        file: 'weather-fetcher.js',
        code: `// Fetch weather from fake API
async function getWeather(city){
  return {city, temp:Math.floor(Math.random()*40)};
}
getWeather("Dhaka").then(console.log);`,
      },
      {
        file: 'maze-generator.js',
        code: `// Random maze generator
function maze(n){return Array.from({length:n},()=>Array.from({length:n},()=>Math.random()>0.5?"#":" "));}
console.table(maze(5));`,
      },
      {
        file: 'dice-game.js',
        code: `// Simple dice roll game
const roll = () => Math.floor(Math.random()*6)+1;
console.log("You rolled a", roll());`,
      },
      {
        file: 'text-encryptor.js',
        code: `// Basic text encryption
function encrypt(text){return text.split("").map(c=>c.charCodeAt(0)+1).join("-");}
console.log(encrypt("hello"));`,
      },
    ]
  ),

  new Platform(
    'TypeScript',
    () => [
      {
        file: 'quantum-sim.ts',
        code: `// Fake quantum simulator
interface Qubit {state:number;}
const qubits: Qubit[] = [{state:0},{state:1}];
qubits.forEach(q => console.log("Measured:", q.state));`,
      },
      {
        file: 'crypto-wallet.ts',
        code: `// Simulate wallet balance
class Wallet {
  balance = 0;
  deposit(amount:number){this.balance+=amount;}
}
const myWallet = new Wallet();
myWallet.deposit(500);
console.log(myWallet.balance);`,
      },
      {
        file: 'text-reverser.ts',
        code: `// Reverse text strings
function reverse(s:string){return s.split("").reverse().join("");}
console.log(reverse("Nazmus"));`,
      },
      {
        file: 'game-of-life.ts',
        code: `// Mini Conway's game of life
const grid = [[0,1,0],[0,0,1],[1,1,1]];
console.table(grid);`,
      },
    ],
    () => [
      {
        file: 'network-ping.ts',
        code: `// Fake network ping
function ping(host:string){return Math.floor(Math.random()*100)+"ms";}
console.log("Ping to server:", ping("example.com"));`,
      },
      {
        file: 'random-poem.ts',
        code: `// Generate random poem line
const words=["sky","river","wind","stone"];
console.log("Poem:", words.sort(()=>Math.random()-0.5).join(" "));`,
      },
      {
        file: 'math-puzzle.ts',
        code: `// Simple math puzzle
const result = [1,2,3].map(x=>x*2).reduce((a,b)=>a+b,0);
console.log("Puzzle result:", result);`,
      },
      {
        file: 'binary-counter.ts',
        code: `// Count in binary
for(let i=0;i<8;i++){console.log(i.toString(2));}`,
      },
    ]
  ),
]
