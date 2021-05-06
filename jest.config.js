module.exports = {
    verbose: true,
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      '.*/.(css|less|scss)$': 'identity-obj-proxy',
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
      "LandingPage": "<rootDir>/src/components/Deshboard/LandingPage.jsx",
      "Items": "<rootDir>/src/components/Deshboard/items.jsx",
      "Header": "<rootDir>/src/components/Deshboard/Header.jsx",
      "Footer": "<rootDir>/src/components/Deshboard/Footer.jsx"
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.js$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.ts$",
      "/node_modules/(?![@autofiy/autofiyable|@autofiy/property]).+\\.tsx$",
  ],
};
