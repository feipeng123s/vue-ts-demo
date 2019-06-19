
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://127.0.0.1:5001',
        target: 'http://127.0.0.1:5000',
        secure: false,
        // ws: true, // proxy websockets
        changeOrigin: true
      },
      '/foo': {
        target: 'http://localhost:5000'
      }
    }
  }
}
