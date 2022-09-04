# SSR Vue 3 + TypeScript + Vite

This template should help get you started developing with SSR Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Routing

The router of this template is file-based. All your pages should go inside the `src/pages` folder. A folder for each page is recommended. Inside the page folder, you should create an `index.page.vue` file that represents the page.

## Server Side Rendering

You can have server-side logic that runs before rendering each page. Alongside your `index.page.vue`, you can add an `index.page.server.ts` file that exports an `onBeforeRender` function. This function will run before the page render. From this function, you can return an object using the `makePageProps` method (located in `src/utils/server.ts`). This object will get passed to the page as props.

## Env Variables

Every environmental variable used within a `*.page.*` file and all its dependencies will be loaded by Vite. This means that you should prefix those variables using `VITE_`. They will be loaded from `.env` files. The rest of the environmental variables (namely those used by the server) will be loaded from the machine's environment, and don't need to be prefixed with `VITE_`.
