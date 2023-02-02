const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "ar" , "vi"],
		defaultLocale: "vi",
	},
	domains: [
		{
		  domain: 'https://vinh-develop.d1q228kyov3rfz.amplifyapp.com',
		  defaultLocale: 'vi',
		}
	  ],
  
	localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
