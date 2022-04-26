import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651013548744',
	root: '1651013548744',
	nodes: {
		geo1: '1651013548744',
		'geo1/materials1': '1651013548744',
		perspectiveCamera1: '1651013548744',
		'perspectiveCamera1/events1': '1651013548744',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/' + 'scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
