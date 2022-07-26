import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

const rootPath = path.resolve(__dirname, 'src');
const outPath = path.resolve(__dirname, 'dist');

export default defineConfig({
    root: rootPath,
    build: {
        outDir: outPath,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                home: path.resolve(rootPath, 'index.html'),
                about: path.resolve(rootPath, 'about/index.html'),
            },
            output: {
                assetFileNames: ({ name }) => {
                    let extType = name ? name.split('.')[1] : '';
                    if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'images';
                    }
                    return `assets/${extType}/[name].[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name].[hash].js',
                entryFileNames: 'assets/js/[name].[hash].js',
            },
        },
    },
    resolve: {
        alias: {
            '~': rootPath,
        },
    },
    plugins: [
        createHtmlPlugin({
            minify: true,
        }),
    ],
});
