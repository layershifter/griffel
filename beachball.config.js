// @ts-check

const childProcess = require('child_process');

/**
 * @param {String} command
 *
 * @returns {Promise<string>}
 */
function sh(command) {
  return new Promise((resolve, reject) => {
    const [cmd, ...args] = command.split(' ');

    /** @type {import('child_process').SpawnOptions} */
    const options = {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit',
      shell: true,
    };
    const child = childProcess.spawn(cmd, args, options);

    let stdoutData = '';

    if (child.stdout) {
      child.stdout.on('data', data => {
        stdoutData += data;
      });
    }

    child.on('close', code => {
      if (code === 0) {
        resolve(stdoutData);
      }

      reject(new Error([`child process exited with code ${code}`, stdoutData].join('\n')));
    });
  });
}

let completedPostBump = false;

/**
 * @type {import('beachball').BeachballConfig}
 */
module.exports = {
  gitTags: false,
  // push: false,
  registry: 'http://localhost:4873/',
  access: 'public',
  branch: 'origin/test-publish',
  hooks: {
    async postbump() {
      if (!completedPostBump) {
        await sh('yarn');
        await sh('yarn prepublish');

        completedPostBump = true;
      }
    },
  },
};
