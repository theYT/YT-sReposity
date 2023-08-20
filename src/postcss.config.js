// 在vue-cli,webpack中配置
// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            viewportWidth: 375,
        },
    },
};