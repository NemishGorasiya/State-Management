module.exports = {
	transform: {
		"^.+\\.[t|j]sx?$": "babel-jest",
	},
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	moduleNameMapper: {
		"^.+\\.(jpg|jpeg|png|gif|webp|svg|css)$": "jest-transform-stub",
	},
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["<rootDir>/node_modules/"],
	testEnvironmentOptions: {
		customExportConditions: [""], // add 'node' and 'node-addons'
	},
};
