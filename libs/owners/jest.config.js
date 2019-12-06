module.exports = {
  name: 'owners',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/owners',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
