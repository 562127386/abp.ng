import { BuilderOutput, createBuilder } from '@angular-devkit/architect';
import * as childProcess from 'child_process';
import { JsonObject } from '@angular-devkit/core';
import execa from 'execa';
import * as path from 'path';
import { readFileSync } from 'fs';

interface Options extends JsonObject {
  symlinkConfig: string;
  args: string[];
}

export default createBuilder<Options>((options, context) => {
  return new Promise<BuilderOutput>(async (resolve, reject) => {
    const systemRoot = context.workspaceRoot;
    const symlinkConfigPath = options.symlinkConfig
    ? path.resolve(systemRoot, options.symlinkConfig)
    : null;

    let buildActions=JSON.parse(getFileContents(symlinkConfigPath));
    console.log(`Task Executing ...`);

    for (var i = 0; i < buildActions.length; i++) {
      console.log(`"${buildActions[i].name}" Symlink building ...`);
      await execa(
        'yarn',
        [
          'symlink',
          'copy',
          '--angular',
          '--no-watch',
          buildActions[i].sync ? '--sync' : '',
          '--packages',
          buildActions[i].packages.join(',')
        ],
        { stdout: 'inherit', cwd: './' },
      );
      console.log(`"${buildActions[i].name}" Symlink done ...`);
    }

    console.log(`Others packages Symlink building ...`);
    //others
    await execa(
      'yarn',
      [
        'symlink',
        'copy',
        '--angular',
        '--no-watch',
        '--all-packages',
        '--excluded-packages',
        buildActions.reduce(function (a, b) {  return {sync:false,packages:a.packages.concat(b.packages)}; }).packages.join(','),
      ],
      { stdout: 'inherit', cwd: './' },
    );
    console.log(`Others packages Symlink done ...`);


    console.log(`Task Done.`);

    resolve({ success: true });
  });
});
function getFileContents(file: string): string {
  try {
    return readFileSync(file, 'utf-8');
  } catch {
    throw new Error(`Could not read file '${file}'.`);
  }
}
