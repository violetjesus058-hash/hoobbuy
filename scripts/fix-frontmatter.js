/**
 * Fix files that start with --- but have no closing ---
 * Remove the leading --- line from these files
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

const brokenFiles = [
  'hoobbuy-consolidation-guide.md',
  'hoobbuy-dashboard-guide.md',
  'hoobbuy-delivery-guide.md',
  'hoobbuy-first-order.md',
  'hoobbuy-getting-started.md',
  'hoobbuy-how-to-buy.md',
  'hoobbuy-how-to-order.md',
  'hoobbuy-new-user-guide.md',
  'hoobbuy-order-guide.md',
  'hoobbuy-ordering-process.md',
  'hoobbuy-payment-guide.md',
  'hoobbuy-platform-guide.md',
  'hoobbuy-purchase-guide.md',
  'hoobbuy-registration-guide.md',
  'hoobbuy-shipping-methods.md',
  'hoobbuy-shipping-options.md',
  'hoobbuy-shopping-guide.md',
  'hoobbuy-top-up-guide.md',
  'hoobbuy-warehouse-guide.md',
];

let fixed = 0;
for (const file of brokenFiles) {
  const filePath = path.join(BLOG_DIR, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove leading ---\n
  if (content.startsWith('---\n')) {
    content = content.substring(4); // remove '---\n'
    fs.writeFileSync(filePath, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`\nFixed ${fixed} files`);
