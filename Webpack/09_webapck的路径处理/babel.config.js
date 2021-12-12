
module.exports = {
  presets: [
    [require("@babel/preset-env")],
    [require("@babel/preset-react")]
  ],
  plugins: [
    require("react-refresh/babel")
  ]
}