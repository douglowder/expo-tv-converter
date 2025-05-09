import { build } from 'gluegun'
import { Options } from 'gluegun/build/types/domain/options'

/**
 * Create the cli and kick it off
 */
async function run(argv: string | Options) {
  // create a CLI runtime
  const cli = build()
    .src(__dirname)
    .brand('expo-tv-converter')
    .defaultCommand()
    .plugins('./node_modules', {
      matching: 'expo-tv-converter-*',
      hidden: true,
    })
    .help() // provides default for help, h, --help, -h
    .version() // provides default for version, v, --version, -v
    .create()
  // enable the following method if you'd like to skip loading one of these core extensions
  // this can improve performance if they're not necessary for your project:
  // .exclude(['meta', 'strings', 'print', 'filesystem', 'semver', 'system', 'prompt', 'http', 'template', 'patching', 'package-manager'])
  // and run it
  const toolbox = await cli.run(argv)

  // send it back (for testing, mostly)
  return toolbox
}

module.exports = { run }
