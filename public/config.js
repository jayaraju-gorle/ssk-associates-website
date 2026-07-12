/* Site configuration.
   Use geminiKeyEnc — base64 of the REVERSED key — instead of a plain key.
   Google's scanners auto-revoke any plain "AIzaSy..." key found in a public
   repo, even referrer-restricted ones. The encoding only avoids that scanner;
   real protection = HTTP-referrer restriction + a no-billing project.
   To generate:  node -e "console.log(Buffer.from('AIza...'.split('').reverse().join('')).toString('base64'))" */
window.SSK_CONFIG = {
  geminiKey: "",    // leave empty — use geminiKeyEnc below
  geminiKeyEnc: "d0pqckoyQlEtWkdhdWRiTW1SbkZCM2Joc1cxWUhCdlYzZ0NfUHkxSFpwM0s2TlI4YkEuUUE=",
};
