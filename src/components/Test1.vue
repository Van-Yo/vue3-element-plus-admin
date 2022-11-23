
<template>
    <el-row ref="viewerContainer" class="demo-viewer">
      <vc-viewer @ready="onViewerReady">
        <vc-primitive :appearance="appearance" @click="onClicked">
          <vc-geometry-instance :attributes="attributes">
            <vc-geometry-frustum
              ref="geometryRef"
              :frustum="frustum"
              :origin="[117.169969, 31.840886, 299999.87]"
              :orientation="{ x: 1, y: 0.1, z: 0, w: 0.8}"
              :vertexFormat="vertexFormat"
            ></vc-geometry-frustum>
          </vc-geometry-instance>
        </vc-primitive>
        <vc-primitive :appearance="appearance" @click="onClicked">
          <vc-geometry-instance :attributes="attributesOutline">
            <vc-geometry-frustum-outline
              ref="geometryOutlineRef"
              :frustum="frustum"
              :origin="[117.169969, 31.840886, 299999.87]"
              :orientation="{ x: 1, y: 0.1, z: 0, w: 0.8}"
            ></vc-geometry-frustum-outline>
          </vc-geometry-instance>
        </vc-primitive>
      </vc-viewer>
      <!-- <el-row class="demo-toolbar">
        <el-button type="danger" round @click="unload">销毁</el-button>
        <el-button type="danger" round @click="load">加载</el-button>
        <el-button type="danger" round @click="reload">重载</el-button>
        <el-switch v-model="outline" active-color="#13ce66" inactive-text="边框"> </el-switch>
      </el-row> -->
    </el-row>
    </template>
    
    <script>
      import { ref, reactive, getCurrentInstance, onMounted, watch } from 'vue'
      export default {
        setup() {
          // state
          const instance = getCurrentInstance()
          const geometryRef = ref(null)
          const geometryOutlineRef = ref(null)
          const appearance = ref(null)
          const attributes = ref(null)
          const attributesOutline = ref(null)
          const outline = ref(true)
          const frustum = ref(null)
          const vertexFormat = ref(null)
          // methods
          const onClicked = e => {
            console.log(e)
          }
          const unload = () => {
            geometryRef.value.unload()
            geometryOutlineRef.value.unload()
          }
          const reload = () => {
            geometryRef.value.reload()
            geometryOutlineRef.value.reload()
          }
          const load = () => {
            geometryRef.value.load()
            geometryOutlineRef.value.load()
          }
          const onViewerReady = ({ Cesium, viewer }) => {
            console.log('onViewerReady')
            const { ColorGeometryInstanceAttribute, PerInstanceColorAppearance, Matrix4, Cartesian3, PerspectiveFrustum } = Cesium
            attributes.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random(), 0.5)
            }
            attributesOutline.value = {
              color: new ColorGeometryInstanceAttribute(Math.random(), Math.random(), Math.random())
            }
            appearance.value = new PerInstanceColorAppearance({
              flat: true
            })
            vertexFormat.value = PerInstanceColorAppearance.VERTEX_FORMAT
            frustum.value = new PerspectiveFrustum({
              fov: Cesium.Math.toRadians(5.0),
              aspectRatio: 1920.0 / 1080.0,
              near: 1.0,
              far: 500000
            })
          }
          // lifecycle
          onMounted(() => {
            Promise.all([geometryRef.value.creatingPromise, geometryOutlineRef.value.creatingPromise]).then(geometries => {
              const { BoundingSphere } = Cesium
              const boundingSphereUnion = geometries.reduce((prev, cur) => {
                const geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)
                const boundingSphere = cur.vm.$parent.modelMatrix
                  ? BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)
                  : geometry.boundingSphere
                return prev === null ? boundingSphere : BoundingSphere.union(prev, boundingSphere)
              }, null)
              geometries[0].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)
              console.log('All geometries are loaded.')
            })
          })
          return {
            unload,
            reload,
            load,
            onClicked,
            onViewerReady,
            geometryRef,
            geometryOutlineRef,
            appearance,
            attributes,
            attributesOutline,
            outline,
            frustum,
            vertexFormat
          }
        }
      }
    </script>
    
    <style>
    
    </style>
    