module.exports = (config) => {
  config.set({
    coverageAnalysis: "perTest",
    maxConvurrentTestRunners: 4,
    mutate: ["/api/range/js", "!/api/styker.*", "/api/**/*.spec.js"],
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["clear-text", "progress", "html"],
    testFramework: "jasmine",
    commandRunner: { command: 'npm run test:unit' },
    symlinkNodeModules: false
  })
}