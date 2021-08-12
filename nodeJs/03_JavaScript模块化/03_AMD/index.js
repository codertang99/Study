(function() {
  require.config({
    baseUrl:"",
    paths: {
      foo: "./modules/foo",
      bar: "./modules/bar"
    }
  })

  define(["foo"],function() {

  })

})()