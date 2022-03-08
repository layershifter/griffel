/**
 * @type {import('beachball').BeachballConfig}
 */
module.exports = {
  gitTags: false,
  registry: 'http://localhost:4873/',
  access: 'public',
  branch: 'origin/test-publish',
  hooks: require('./beachball.hooks'),
};
