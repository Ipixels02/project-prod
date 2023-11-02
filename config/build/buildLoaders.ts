import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpg|jpeg|gif|woff2|woff)$/i,
        type: 'asset/resource'
    }

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: false,
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
        fileLoader
    ]
}
