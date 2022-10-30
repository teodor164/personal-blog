import {BuildOptions} from "./types/config";
import {Configuration as DevServerConfigurations} from "webpack-dev-server";

export function buildDevServer({port}: BuildOptions): DevServerConfigurations {
    return {
        port: port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
