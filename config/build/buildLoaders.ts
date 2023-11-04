import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import {buildCssLoader} from "./loaders/buildCssLoader";
import { buildBabelLoader } from './loaders/buildBabelLoader';
import ReactRefreshTypeScript from 'react-refresh-typescript';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = buildBabelLoader(options);

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif|woff2|woff)$/i,
        type: 'asset/resource'
    }

    const cssLoader = buildCssLoader(isDev);

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    // Тайпскрипт лоадер до babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
                    }),
                    transpileOnly: isDev,
                    // getCustomTransformers: () => ({
                    //     before: [ReactRefreshTypeScript()]
                    // }),
                    allowTsInNodeModules: true
                }
            }
        ],
        exclude: /node_modules/
    }
    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        fileLoader,
        babelLoader
    ]
}
