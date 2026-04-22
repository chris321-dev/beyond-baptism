const fs = require("fs");
const path = require("path");

const versionData = {
  version: `build-${Date.now()}`
};

const filePath = path.join(__dirname, "../public/version.json");

fs.writeFileSync(filePath, JSON.stringify(versionData, null, 2));

console.log("version.json generated:", versionData);