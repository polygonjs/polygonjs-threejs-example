import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1666610547310",
  root: "1665070989922",
  nodes: {
    geo1: "1665070989922",
    "geo1/materials1": "1665070989922",
    perspectiveCamera1: "1651013669992",
    "perspectiveCamera1/events1": "1665070989922",
    arrows: "1651013669992",
    "arrows/actor1": "1665070989922",
  },
  shaders: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
