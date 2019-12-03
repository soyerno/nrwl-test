module.exports = {
  name: 'cats',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cats',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
