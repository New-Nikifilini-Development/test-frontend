const setupStylus = require("./rewires/stylus")
const setupTsCssModules = require("./rewires/ts-css-modules")
const { addWebpackAlias, override } = require('customize-cra')
const path = require('path')

const ruleChildren = (loader) => loader.use || loader.oneOf || Array.isArray(loader.loader) && loader.loader || []

const findIndexAndRules = (rulesSource, ruleMatcher) => {
    let result = undefined
    const rules = Array.isArray(rulesSource) ? rulesSource : ruleChildren(rulesSource)
    rules.some((rule, index) => result = ruleMatcher(rule) ? { index, rules } : findIndexAndRules(ruleChildren(rule), ruleMatcher))
    return result
}
const findRule = (rulesSource, ruleMatcher) => {
    const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher)
    return rules[index]
}

const cssModuleRuleMatcher = (rule) => rule.test && String(rule.test) === String( /\.module\.css$/)
const cssRuleMatcher = (rule) => rule.test && String(rule.test) === String( /\.module\.styl$/)

// const aliasMap = {
//     "~/*": "./*",
//     "components/*": "./components/*",
//     "~/components/*": "./components/*",
//     "~/assets/*": "./assets/*"
// }

module.exports = function ovr(config, env) {
    config = setupStylus(config, env)
    config = setupTsCssModules(config, env)

    config.resolve.alias = {
        ...config.resolve.alias,
        '~/assets': path.resolve(__dirname, 'src/assets')
    }

    config = override(addWebpackAlias({
        '~': path.resolve(__dirname, 'src')
    }))(config,env)
    config.module.rules[1].oneOf.splice(0,0,{
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader'
    })

    console.log(JSON.stringify(config.module.rules, null, '  '))

    return config;
}