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
  'hoobuy-consolidation-guide.md',
  'hoobuy-dashboard-guide.md',
  'hoobuy-delivery-guide.md',
  'hoobuy-first-order.md',
  'hoobuy-getting-started.md',
  'hoobuy-how-to-buy.md',
  'hoobuy-how-to-order.md',
  'hoobuy-new-user-guide.md',
  'hoobuy-order-guide.md',
  'hoobuy-ordering-process.md',
  'hoobuy-payment-guide.md',
  'hoobuy-platform-guide.md',
  'hoobuy-purchase-guide.md',
  'hoobuy-registration-guide.md',
  'hoobuy-shipping-methods.md',
  'hoobuy-shipping-options.md',
  'hoobuy-shopping-guide.md',
  'hoobuy-top-up-guide.md',
  'hoobuy-warehouse-guide.md',
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
