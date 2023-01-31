const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "ar" , "vi"],
		defaultLocale: "vi",
	},
	domains: [
		{
		  domain: 'http://localhost:3005',
		  defaultLocale: 'vi',
		}
	  ],
  
	localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
