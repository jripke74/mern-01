const AppleMaps = require("apple-maps-server-sdk").default;

const { appleMapKitKey } = require("../secrets/authKeys");

const appleMaps = new AppleMaps({
  authorizationToken: appleMapKitKey,
});



exports.appleMaps = appleMaps;
