
// actor
import {OnTickActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/OnTick';
import {PlaneActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/Plane';
import {RayFromCursorActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayFromCursor';
import {RayIntersectPlaneActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/RayIntersectPlane';
import {SetObjectLookAtActorNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/actor/SetObjectLookAt';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshLambertMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambert';
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


export const requiredImports_scene_01 = {
	nodes: [
		OnTickActorNode,
		PlaneActorNode,
		RayFromCursorActorNode,
		RayIntersectPlaneActorNode,
		SetObjectLookAtActorNode,
		CameraOrbitControlsEventNode,
		MeshLambertMatNode,
		GeoObjNode,
		HemisphereLightObjNode,
		PerspectiveCameraObjNode,
		SpotLightObjNode,
		ActorSopNode,
		BoxSopNode,
		ColorSopNode,
		CopySopNode,
		EventsNetworkSopNode,
		MaterialSopNode,
		MaterialsNetworkSopNode,
		MergeSopNode,
		PlaneSopNode,
		TextSopNode,
		TransformSopNode,
		TubeSopNode
	],
	operations: [
		
	]
}
