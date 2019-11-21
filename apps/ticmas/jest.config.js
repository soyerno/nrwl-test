module.exports = {
  name: 'ticmas',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ticmas',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
