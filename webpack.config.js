var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  //entry는 웹팩의 최초 진입점.
  output: {
    filename: "bundle.js",
    //filename: "[name].bundle.js"
    path: path.resolve(__dirname, "dist"), //인자로 넘어온 경로들을 조합해 유효한 파일 경로를 만들어주는 nodejs api.
  },
  //output은 웹팩을 돌리고 난 결과물의 파일 경로.
  module: {
    rules: [
      {
        test: /\.css$/, //로더를 적용할 파일 유형(일반적으로 정규표현식 사용)
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"], //해당 파일에 적용할 로더의 이름
      },
      /*
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      }
      */
      //특정 파일은 여러개의 로더가 사용된다. 로더는 오른쪽에서 왼쪽 순서로 적용된다.
      //sass의 경우 scss를 css로 먼저 변환해야 하기 때문에 sass-loader를 오른쪽에 적는다.
    ],
  },
  //Loader로 웹팩이 웹 애플리케이션을 해석 할 때 자바스크립트 파일이 아닌 웹 자원(html,css,image,폰트 등)
  //을 변환 할 수 있도록 도와주는 속성이다. 예를 들어 css파일은 Css Loader라는 로더를 이용해야한다.
  plugins: [new MiniCssExtractPlugin()],
  /* plugin은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는데 해당 결과물의 형태를 바꾸는 역할을 한다.
   */
};
