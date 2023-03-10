import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
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
                    transpileOnly: true,
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
