import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import viteSolid from 'vite-plugin-solid'
import viteSolidFastifyDX from 'fastify-dx-solid/plugin'
import unocss from 'unocss/vite'

const path = fileURLToPath(import.meta.url)
const root = join(dirname(path), 'client')

const plugins = [
  viteSolid({ ssr: true }),
  viteSolidFastifyDX(),
  unocss()
]

const ssr = {
  noExternal: ['solid-app-router'],
}

export default { root, plugins, ssr }
