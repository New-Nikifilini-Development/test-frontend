const ruleChildren = (loader) =>
  loader.use ||
  loader.oneOf ||
  (Array.isArray(loader.loader) && loader.loader) ||
  [];

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined;
  const rules = Array.isArray(rulesSource)
    ? rulesSource
    : ruleChildren(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? { index, rules }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  );
  return result;
};

const findRule = (rulesSource, ruleMatcher) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  return rules[index];
};

const cssModuleRuleMatcher = (rule) =>
  rule.test && String(rule.test) === String(/\.module\.css$/);
const cssRuleMatcher = (rule) =>
  rule.test && String(rule.test) === String(/\.css$/);

module.exports = function (config, env) {
  const cssModuleRule = findRule(config.module.rules, cssModuleRuleMatcher);
  cssModuleRule.use.splice(1, 0, {
    loader: require.resolve("@teamsupercell/typings-for-css-modules-loader"),
    options: {},
  });

  const cssRule = findRule(config.module.rules, cssRuleMatcher);
  cssRule.use.splice(1, 0, {
    loader: require.resolve("@teamsupercell/typings-for-css-modules-loader"),
    options: {},
  });

  return config;
};
