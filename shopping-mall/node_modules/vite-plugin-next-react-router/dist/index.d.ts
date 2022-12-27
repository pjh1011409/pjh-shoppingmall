import { Plugin } from 'vite';

interface Options {
    /**
     * Indicates how to load the component. Default is true, which means that components should be loaded by React.lazy.
     * @default true
     */
    async: boolean;
    /**
     * Path to the directory to search for page components.
     * @default 'src/pages'
     */
    pageDir: string;
    /**
     * Valid file extensions for page components.
     * @default ['js', 'jsx', 'ts', 'tsx']
     */
    extensions: string[];
    /**
     * Generated routes code output
     * @default './src/routes.tsx
     */
    output?: string;
}
declare type UserOptions = Partial<Options>;

declare function reactRouterPlugin(userOptions?: UserOptions): Plugin;

export { reactRouterPlugin };
