import prettierPluginBabel from 'prettier/plugins/babel'
import prettierPluginEstree from 'prettier/plugins/estree'
import prettier from 'prettier/standalone'

export function formatCode(code: string) {
  return prettier.format(code, {
    parser: 'babel',
    plugins: [prettierPluginBabel, prettierPluginEstree],
  })
}
