
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {ColorSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Color';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {TextSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Text';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
// mat
import {MeshLambertMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambert';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';

export class PolySceneWithNodeMap_scene_01 extends PolyScene {
	node(path: '/hemisphereLight1'): HemisphereLightObjNode;
	node(path: '/spotLight1'): SpotLightObjNode;
	node(path: '/geo1'): GeoObjNode;
	node(path: '/geo1/text_welcome'): TextSopNode;
	node(path: '/geo1/text_to'): TextSopNode;
	node(path: '/geo1/text_Polygonjs'): TextSopNode;
	node(path: '/geo1/merge1'): MergeSopNode;
	node(path: '/geo1/color1'): ColorSopNode;
	node(path: '/geo1/material1'): MaterialSopNode;
	node(path: '/geo1/color2'): ColorSopNode;
	node(path: '/geo1/color3'): ColorSopNode;
	node(path: '/geo1/transform1'): TransformSopNode;
	node(path: '/geo1/transform2'): TransformSopNode;
	node(path: '/geo1/transform3'): TransformSopNode;
	node(path: '/geo1/materials1'): MaterialsNetworkSopNode;
	node(path: '/geo1/materials1/meshLambert1'): MeshLambertMatNode;
	node(path: '/perspectiveCamera1'): PerspectiveCameraObjNode;
	node(path: '/perspectiveCamera1/events1'): EventsNetworkSopNode;
	node(path: '/perspectiveCamera1/events1/cameraOrbitControls1'): CameraOrbitControlsEventNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
