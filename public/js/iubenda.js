var _iub = _iub || [];
_iub.csConfiguration = {
  askConsentAtCookiePolicyUpdate: true,
  countryDetection: true,
  enableLgpd: true,
  enableUspr: true,
  floatingPreferencesButtonDisplay: "bottom-right",
  lang: "en",
  lgpdAppliesGlobally: false,
  logLevel: "debug",
  perPurposeConsent: true,
  siteId: 3025389,
  whitelabel: false,
  cookiePolicyId: 91236926,
  callback: {
    onActivationDone: function () {
      console.log("onActivationDone");
    },
    onConsentGiven: function () {
      console.log("onConsentGiven");
    },
  },
  banner: {
    acceptButtonDisplay: true,
    closeButtonDisplay: false,
    customizeButtonDisplay: true,
    explicitWithdrawal: true,
    listPurposes: true,
    position: "float-top-center",
    rejectButtonDisplay: true,
    showPurposesToggles: true,
  },
};
