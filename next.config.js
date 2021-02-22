// @generated: @expo/next-adapter@2.1.53
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#withexpo

const { withExpo } = require("@expo/next-adapter");
const withFonts = require("next-fonts");
const withImages = require("next-images");

module.exports = withExpo(
	withFonts(
		withImages({
			projectRoot: __dirname,
		})
	)
);
