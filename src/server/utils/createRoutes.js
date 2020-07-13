export default function (ctrl, router) {
  // setup boilerplate route just to satisfy a request
  router.param("id", ctrl.params);

  router.route("/").get(ctrl.get).post(ctrl.post);

  router.route("/:id").get(ctrl.getOne).put(ctrl.put).delete(ctrl.delete);
}
