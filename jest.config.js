module.exports = {
  setupTestFrameworkScriptFile: "<rootDir>/__tests__/setup/setupEnzyme.js",
  setupFiles: ["<rootDir>/__tests__/setup/setupEnv.js"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/setup/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  snapshotSerializers: [
    "enzyme-to-json/serializer"
  ]
}