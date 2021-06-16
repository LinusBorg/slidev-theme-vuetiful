module.exports = {
  root: true,
  extends: ['@linusborg'],
  overrides: [
    {
      files: ['*.js', '*.ts'],
      env: {
        node: true,
      },
    },
  ],
}
