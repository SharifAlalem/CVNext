/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.scss')}";`,
        includePaths: [path.join(__dirname, 'styles')],
    },
};

export default nextConfig;
