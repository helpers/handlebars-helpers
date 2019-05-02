module.exports = {
  source: {
    include: ['./index.js', './lib'],
    includePattern: '.js$'
  },
  opts: {
    template: 'node_modules/docdash',
    destination: 'docs/',
    recurse: true,
    verbose: true
  },
  plugins: [
    'plugins/markdown'
  ],
  templates: {
    cleverLinks: false,
    monospaceLinks: false
  }
};
