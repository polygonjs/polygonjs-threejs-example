
import {PolyScene} from '@polygonjs/polygonjs/dist/src/engine/scene/PolyScene';
// obj
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {ActorSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Actor';
import {BoxSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Box';
import {ColorSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Color';
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/EventsNetwork';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {MaterialsNetworkSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/MaterialsNetwork';
import {MergeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Merge';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {TextSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Text';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
import {TubeSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Tube';
// mat
import {MeshLambertMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambert';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// actor
import {OnTickActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick';
import {PlaneActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/Plane';
import {RayFromCursorActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayFromCursor';
import {RayIntersectPlaneActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayIntersectPlane';
import {SetObjectLookAtActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectLookAt';

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
	node(path: '/arrows'): GeoObjNode;
	node(path: '/arrows/actor1'): ActorSopNode;
	node(path: '/arrows/actor1/onTick1'): OnTickActorNode;
	node(path: '/arrows/actor1/plane1'): PlaneActorNode;
	node(path: '/arrows/actor1/rayFromCursor1'): RayFromCursorActorNode;
	node(path: '/arrows/actor1/rayIntersectPlane1'): RayIntersectPlaneActorNode;
	node(path: '/arrows/actor1/setObjectLookAt1'): SetObjectLookAtActorNode;
	node(path: '/arrows/box1'): BoxSopNode;
	node(path: '/arrows/copy1'): CopySopNode;
	node(path: '/arrows/merge1'): MergeSopNode;
	node(path: '/arrows/plane1'): PlaneSopNode;
	node(path: '/arrows/transform1'): TransformSopNode;
	node(path: '/arrows/transform2'): TransformSopNode;
	node(path: '/arrows/tube1'): TubeSopNode;
	node(path: string):any /* we need any for now as otherwise an error occurs when adding plugins to the overloaded methods */ {
		return super.node(path);
	}
}
