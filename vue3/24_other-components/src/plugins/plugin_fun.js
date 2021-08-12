export default function(app) {
  app.directive("ccc", {
    mounted(el) {
      console.log(el);
    }
  })
}