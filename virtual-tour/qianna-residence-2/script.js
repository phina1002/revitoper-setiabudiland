(function(){
    var script = {
 "backgroundPreloadEnabled": true,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_E49080C6_E84E_CD32_41C4_6503DD8111E1.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "paddingRight": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 2.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0.78
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E54C5143_E84E_CF31_41D2_72C7063640F3",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 3.9,
  "class": "PanoramaCameraPosition",
  "pitch": 2.53
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5D591B1_E84E_CF6E_41C1_7C03AB55EDE5",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_E6861022_F093_5A59_41CE_603C2026DEAA",
  "this.overlay_E6C67DEE_F092_A5A9_41E8_87F5294BBE3F"
 ],
 "thumbnailUrl": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 235.08,
   "angle": 425.66,
   "y": 162.77,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-TOILET",
 "id": "panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_2_t.jpg",
 "label": "IMG_6857",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_2",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_camera",
 "class": "PanoramaCamera"
},
{
 "movementMode": "constrained",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer"
},
{
 "overlays": [
  "this.overlay_E585B7BE_F097_A5A9_41DF_61F9C3236559",
  "this.overlay_E4F5A0DA_F091_BBE8_41E4_222AF45F4E63"
 ],
 "thumbnailUrl": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 232.89,
   "angle": 91.09,
   "y": 267.78,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-KAMAR1",
 "id": "panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "overlays": [
  "this.overlay_E2A5C503_F071_DA58_41E5_9A0A76B3CC1D",
  "this.overlay_E1FB7DA4_F073_6A58_41EC_01150C7D6441",
  "this.overlay_E26C4085_F072_DA58_41E9_04955BBBBB98",
  "this.overlay_E20749E3_F07F_ADDF_41E1_E8F01CE83005",
  "this.overlay_E10AC2E9_F072_BFA8_41C2_E5ABC8E47BD2",
  "this.overlay_E3D792AA_F071_5FA9_41E3_B804B4A32681",
  "this.overlay_E3DF768B_F077_6668_41BC_47FD53C08687",
  "this.overlay_E3A5F81F_F071_EA68_41D7_2E8A0E963431",
  "this.overlay_E324515E_F179_F704_41EB_53981AF8FED5"
 ],
 "thumbnailUrl": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 158.51,
   "angle": 0,
   "y": 171.52,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-R2",
 "id": "panorama_ED534A15_E640_C37A_41E6_8C6B72912575",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -102.63,
  "class": "PanoramaCameraPosition",
  "pitch": -5.56
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E58641F0_E84E_CEEE_4185_656C301B3598",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_E516FF40_F09F_66D9_41BD_CAD7085B3AE4",
  "this.overlay_E57F37A0_F091_E658_41ED_145441944EAD"
 ],
 "thumbnailUrl": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 83.03,
   "angle": 181.35,
   "y": 50.16,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-DAPUR",
 "id": "panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonCardboardView": "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_0_t.jpg",
 "label": "IMG_6850",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_0",
 "class": "Photo",
 "width": 2845,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3793
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -9.87,
  "class": "PanoramaCameraPosition",
  "pitch": -9.09
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5226192_E84E_CF52_4169_07D54F100CA5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED534A15_E640_C37A_41E6_8C6B72912575_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_camera",
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_t.png",
 "label": "Photo Album IMG_6850",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F",
 "playList": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_AlbumPlayList",
 "class": "PhotoAlbum"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 30.9,
  "class": "PanoramaCameraPosition",
  "pitch": -9.46
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5F461D0_E84E_CF2E_41E6_2B4E5B25F60C",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_4_t.jpg",
 "label": "IMG_6865",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_4",
 "class": "Photo",
 "width": 2914,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3886
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E49170C6_E84E_CD32_41D6_0298DE147440",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -104.14,
  "class": "PanoramaCameraPosition",
  "pitch": -5.1
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E59631E0_E84E_CEEE_41CA_6717272A6A42",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC",
   "camera": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575",
   "camera": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6",
   "camera": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE",
   "camera": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC",
   "camera": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5",
   "camera": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_2"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 0)",
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_6583C577_75AF_4C08_41D1_1146B7F236B7_t.jpg",
 "label": "Qianna Residence 2",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1080,
 "loop": false,
 "id": "video_6583C577_75AF_4C08_41D1_1146B7F236B7",
 "height": 1920,
 "video": {
  "width": 1080,
  "height": 1920,
  "mp4Url": "media/video_6583C577_75AF_4C08_41D1_1146B7F236B7.mp4",
  "class": "VideoResource"
 }
},
{
 "easing": "quart_in_out",
 "duration": 1000,
 "id": "effect_67BA7A31_70EE_049F_41D3_CF043914270C",
 "class": "FadeOutEffect"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 3.77,
  "class": "PanoramaCameraPosition",
  "pitch": 4.18
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E55A6134_E84E_CF56_41DA_F4774A9548EC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -2.2,
  "class": "PanoramaCameraPosition",
  "pitch": 4.87
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5A8621E_E84E_CD53_41E6_799CA8E0FD8B",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_FED99596_F072_DA78_41E7_806192299371",
  "this.overlay_FF145A5D_F072_EEEB_41E8_874EE5DB7C4A",
  "this.overlay_FF8FD4A8_F071_DBA9_41E9_54238476B84F",
  "this.overlay_FFA11D60_F077_AAD9_41EC_81041D265DC1"
 ],
 "thumbnailUrl": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 64.43,
   "angle": 183.43,
   "y": 263.41,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-R1",
 "id": "panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_6_t.jpg",
 "label": "IMG_6870",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_6",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_E49A10C6_E84E_CD32_41DB_0974036E3F6A, 0)",
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E49A10C6_E84E_CD32_41DB_0974036E3F6A",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E49080C6_E84E_CD32_41C4_6503DD8111E1",
 "class": "PlayList"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_3_t.jpg",
 "label": "IMG_6858",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_3",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_15_t.jpg",
 "label": "Tampak Depan",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_15",
 "class": "Photo",
 "width": 1436,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_15.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1096
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 29.02,
  "class": "PanoramaCameraPosition",
  "pitch": -1.79
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E64A124F_E84E_CD32_41E5_9818C7552F13",
 "class": "PanoramaCamera"
},
{
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -7.67,
  "class": "PanoramaCameraPosition",
  "pitch": -6.7
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E533E192_E84E_CF52_41D7_F90BE30FC9DE",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 67.91,
  "class": "PanoramaCameraPosition",
  "pitch": -2.98
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E4A8B124_E84E_CF76_41CB_97E00C514697",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_camera",
 "class": "PanoramaCamera"
},
{
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "viewerArea": "this.MainViewer"
},
{
 "items": [
  {
   "media": "this.video_6583C577_75AF_4C08_41D1_1146B7F236B7",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E48E00C6_E84E_CD32_41C8_959ED9FC70FE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E48E00C6_E84E_CD32_41C8_959ED9FC70FE, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_E48E00C6_E84E_CD32_41C8_959ED9FC70FE",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_74EADC86_5D4A_F741_41C1_1D3AD8A01C9F",
  "this.overlay_74FCB3C7_5D4B_D0CF_41D2_703CCB21E1E2",
  "this.overlay_77E363CD_5D4A_50C3_41D4_D02F9B339CF0",
  "this.overlay_74AF930C_5D4A_B141_41D1_1AAADF24A3D8",
  "this.overlay_75C2C170_5D45_D1C1_416E_500F099BABAC",
  "this.overlay_7420E7CF_5D46_D0DF_41B9_699096BC217E"
 ],
 "thumbnailUrl": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_t.png",
 "fieldOfViewOverlayInsideColor": "#00CC00",
 "label": "Denah Qianna Residence 2 - Copy",
 "id": "map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "width": 285,
 "initialZoomFactor": 1,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA.png",
    "width": 285,
    "class": "ImageResourceLevel",
    "height": 571
   },
   {
    "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_lq.png",
    "width": 180,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 361
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "minimumZoomFactor": 0.5,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayRadiusScale": 0.15,
 "height": 571
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 27.51,
  "class": "PanoramaCameraPosition",
  "pitch": -4.64
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E658722F_E84E_CD72_41CF_729E80663477",
 "class": "PanoramaCamera"
},
{
 "items": [
  "this.PanoramaPlayListItem_E48D60D5_E84E_CED1_41E5_52A30DF10571",
  "this.PanoramaPlayListItem_E48910DC_E84E_CED7_41D5_F915ABB60FDB",
  "this.PanoramaPlayListItem_E48660DC_E84E_CED7_41EA_60C19E1E2AED",
  "this.PanoramaPlayListItem_E48960DC_E84E_CED7_41DB_E2311BD97A25",
  "this.PanoramaPlayListItem_E489D0DC_E84E_CED7_41A5_AD17DDE9647D",
  "this.PanoramaPlayListItem_E48620DC_E84E_CED7_41DF_D6D4FF3A3083",
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 31.45,
  "class": "PanoramaCameraPosition",
  "pitch": -9.51
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5E7B1E0_E84E_CEEE_41E3_6557A26BA5E7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 151.16,
  "class": "PanoramaCameraPosition",
  "pitch": -3.58
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E57FA153_E84E_CFD2_41D3_391E778084B1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5B801FF_E84E_CED2_41E2_9D7FA627953B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 5.01,
  "class": "PanoramaCameraPosition",
  "pitch": 4.45
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5C5C1C1_E84E_CF2E_41E7_AE46F2F391EC",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -96.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0.64
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E561C163_E84E_CFF2_41D2_866C819678E4",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 127.74,
  "class": "PanoramaCameraPosition",
  "pitch": -3.9
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E503D182_E84E_CF32_41E8_29EBD9DBD60F",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_1_t.jpg",
 "label": "IMG_6856",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_1",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032
},
{
 "duration": 5000,
 "thumbnailUrl": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_5_t.jpg",
 "label": "IMG_6869",
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_5",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_5.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032
},
{
 "overlays": [
  "this.overlay_E4081B0E_F091_6E68_41B2_622206F7589E",
  "this.overlay_E50CA5ED_F09E_A5A8_41BC_D1E9530F660E"
 ],
 "thumbnailUrl": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_t.jpg",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA",
   "x": 207.73,
   "angle": 196.07,
   "y": 69.79,
   "class": "PanoramaMapLocation"
  }
 ],
 "label": "QR2-KAMAR2",
 "id": "panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "hfov": 360,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575"
  }
 ],
 "partial": false,
 "hfovMax": 130,
 "hfovMin": "150%"
},
{
 "easing": "quart_in_out",
 "duration": 1000,
 "id": "effect_67BA0A31_70EE_049F_41AB_C06D77D1CC54",
 "class": "FadeInEffect"
},
{
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": 150.47,
  "class": "PanoramaCameraPosition",
  "pitch": -6.38
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E571B163_E84E_CFF2_41A4_690254457FD1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "yaw": -99.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0.6
 },
 "automaticZoomSpeed": 10,
 "id": "camera_E5113172_E84E_CFD2_41CF_D61ED5DE73B2",
 "class": "PanoramaCamera"
},
{
 "progressBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressBarBorderColor": "#0066FF",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "toolTipPaddingRight": 10,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "class": "ViewerArea",
 "height": "100%",
 "toolTipFontSize": 13,
 "toolTipOpacity": 0.5,
 "paddingTop": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "propagateClick": true,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowOpacity": 0,
 "paddingBottom": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "borderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "progressBottom": 55,
 "playbackBarBottom": 5,
 "minHeight": 50,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarOpacity": 1,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "top": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#FFFFFF",
 "minWidth": 100,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderSize": 1,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingTop": 7,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 115.05,
 "backgroundOpacity": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "verticalAlign": "top",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": 641,
 "overflow": "scroll",
 "layout": "absolute",
 "shadow": false,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "--SETTINGS"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "horizontalAlign": "left",
 "paddingRight": 0,
 "paddingBottom": 0,
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.64,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 0,
 "height": 118,
 "overflow": "visible",
 "layout": "absolute",
 "shadow": false,
 "minWidth": 1,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "--MENU"
 },
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "borderRadius": 0,
 "right": "0%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "overflow": "scroll",
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "--HOUSE INFO"
 },
 "horizontalAlign": "left",
 "visible": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance"
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "borderRadius": 0,
 "right": "0%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "overflow": "scroll",
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "--PANORAMA LIST"
 },
 "horizontalAlign": "left",
 "visible": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance"
},
{
 "progressBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "id": "MapViewer",
 "left": "0%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipTextShadowColor": "#000000",
 "right": "86.25%",
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "toolTipPaddingRight": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "class": "ViewerArea",
 "height": "40%",
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "transitionDuration": 500,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowOpacity": 0,
 "paddingBottom": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "borderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "minHeight": 1,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarOpacity": 1,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "top": "0.17%",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBorderColor": "#FFFFFF",
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressLeft": 0,
 "progressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderSize": 1,
 "visible": false,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingTop": 4,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.6,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "borderRadius": 0,
 "right": "0%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "paddingLeft": 0,
 "top": "0%",
 "minHeight": 1,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "overflow": "scroll",
 "layout": "absolute",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "horizontalAlign": "left",
 "visible": false,
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance"
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "backgroundOpacity": 0,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E6861022_F093_5A59_41CE_603C2026DEAA",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E561C163_E84E_CFF2_41D2_866C819678E4); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -141.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.63,
   "hfov": 45.8
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -140.69,
   "image": "this.AnimatedImageResource_E259BD96_F16F_0F04_41D5_A05F1A5C5BA5",
   "pitch": 8.33,
   "hfov": 21.56,
   "distance": 100
  }
 ],
 "id": "overlay_E6C67DEE_F092_A5A9_41E8_87F5294BBE3F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E5113172_E84E_CFD2_41CF_D61ED5DE73B2); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -140.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 8.33,
   "hfov": 21.56
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E585B7BE_F097_A5A9_41DF_61F9C3236559",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E658722F_E84E_CD72_41CF_729E80663477); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0_HS_0_1_0_map.gif",
      "width": 69,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -140.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.87,
   "hfov": 21.37
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -140.58,
   "image": "this.AnimatedImageResource_FED438EC_F157_1504_41E5_FA6C7A14EA96",
   "pitch": -6.67,
   "hfov": 14.02,
   "distance": 100
  }
 ],
 "id": "overlay_E4F5A0DA_F091_BBE8_41E4_222AF45F4E63",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E64A124F_E84E_CD32_41E5_9818C7552F13); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -140.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.67,
   "hfov": 14.02
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E2A5C503_F071_DA58_41E5_9A0A76B3CC1D",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC, this.camera_E5D591B1_E84E_CF6E_41C1_7C03AB55EDE5); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Dapur",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_0_1_0_map.gif",
      "width": 56,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -30.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.34,
   "hfov": 51.83
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -32.67,
   "image": "this.AnimatedImageResource_FED5F8EC_F157_1504_41E4_E70BAC29FC50",
   "pitch": 13.91,
   "hfov": 17.84,
   "distance": 100
  }
 ],
 "id": "overlay_E1FB7DA4_F073_6A58_41EC_01150C7D6441",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC, this.camera_E5C5C1C1_E84E_CF2E_41E7_AE46F2F391EC); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Dapur",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -32.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 13.91,
   "hfov": 17.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E26C4085_F072_DA58_41E9_04955BBBBB98",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE, this.camera_E533E192_E84E_CF52_41D7_F90BE30FC9DE); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "Kamar 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_2_1_0_map.gif",
      "width": 54,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 28.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11,
   "hfov": 47.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 28.92,
   "image": "this.AnimatedImageResource_E1ED9FCE_F169_0B04_41E7_A8849AD65560",
   "pitch": 11.52,
   "hfov": 17.39,
   "distance": 100
  }
 ],
 "id": "overlay_E20749E3_F07F_ADDF_41E1_E8F01CE83005",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE, this.camera_E5226192_E84E_CF52_4169_07D54F100CA5); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "Kamar 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 28.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.52,
   "hfov": 17.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E10AC2E9_F072_BFA8_41C2_E5ABC8E47BD2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6, this.camera_E59631E0_E84E_CEEE_41CA_6717272A6A42); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Kamar 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_4_1_0_map.gif",
      "width": 58,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 151.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.25,
   "hfov": 56.45
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 153.3,
   "image": "this.AnimatedImageResource_FED548EC_F157_1504_41E1_F602BACC4679",
   "pitch": 10.32,
   "hfov": 19.56,
   "distance": 100
  }
 ],
 "id": "overlay_E3D792AA_F071_5FA9_41E3_B804B4A32681",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6, this.camera_E58641F0_E84E_CEEE_4185_656C301B3598); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Kamar 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 153.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 10.32,
   "hfov": 19.56
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E3DF768B_F077_6668_41BC_47FD53C08687",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5, this.camera_E5F461D0_E84E_CF2E_41E6_2B4E5B25F60C); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Toilet",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_6_1_0_map.gif",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "yaw": 68.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.6,
   "hfov": 34.69
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 67.66,
   "image": "this.AnimatedImageResource_E1ECBFCE_F169_0B04_41D1_AF581C09459C",
   "pitch": 5.53,
   "hfov": 15.58,
   "distance": 100
  }
 ],
 "id": "overlay_E3A5F81F_F071_EA68_41D7_2E8A0E963431",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5, this.camera_E5E7B1E0_E84E_CEEE_41E3_6557A26BA5E7); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Toilet",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 67.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.53,
   "hfov": 15.58
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 04 Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -104.96,
   "image": "this.AnimatedImageResource_E7618A24_F179_1504_41E4_EDDC1B80117A",
   "pitch": -60.53,
   "hfov": 21.44,
   "distance": 100
  }
 ],
 "id": "overlay_E324515E_F179_F704_41EB_53981AF8FED5",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC, this.camera_E503D182_E84E_CF32_41E8_29EBD9DBD60F); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_11_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -104.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -60.53,
   "hfov": 21.44
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E516FF40_F09F_66D9_41BD_CAD7085B3AE4",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC, this.camera_E5B801FF_E84E_CED2_41E2_9D7FA627953B); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Kembali ke ruang 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0_HS_0_1_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -25.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11,
   "hfov": 20.16
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -26.58,
   "image": "this.AnimatedImageResource_FED588F1_F157_151C_41DA_B74F61D8D2A6",
   "pitch": 7.41,
   "hfov": 12.88,
   "distance": 100
  }
 ],
 "id": "overlay_E57F37A0_F091_E658_41ED_145441944EAD",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC, this.camera_E5A8621E_E84E_CD53_41E6_799CA8E0FD8B); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Kembali ke Ruang 1",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -26.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 7.41,
   "hfov": 12.88
  }
 ]
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 49,
 "width": 100,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "backgroundOpacity": 0,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "verticalAlign": "middle",
 "right": 30,
 "maxHeight": 37,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 8,
 "height": 75,
 "mode": "push",
 "shadow": false,
 "minWidth": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "transparencyActive": true,
 "propagateClick": true,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "horizontalAlign": "center",
 "cursor": "hand"
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "backgroundOpacity": 0,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "mode": "toggle",
 "shadow": false,
 "minWidth": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "items": [
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_15",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.43",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.37"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_0",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.49"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_4",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_6",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.71",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.60"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_5",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.48",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.36"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_3",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_2",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.51",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.33"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_1",
   "camera": {
    "duration": 5000,
    "targetPosition": {
     "x": "0.47",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_EF228752_F1EB_7B1C_41EE_1A1676957D5F_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_FED99596_F072_DA78_41E7_806192299371",
 "areas": [
  {
   "mapColor": "#FF0000",
   "toolTip": "Pintu Keluar/Masuk",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_1_HS_0_1_0_map.gif",
      "width": 78,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -1.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.36,
   "hfov": 30.88
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Arrow 02a"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -154.31,
   "image": "this.AnimatedImageResource_6ED1CA93_7032_F311_41C0_CA0B224B28BB",
   "pitch": -38.11,
   "hfov": 14.04,
   "distance": 100
  }
 ],
 "id": "overlay_FF145A5D_F072_EEEB_41E8_874EE5DB7C4A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E4A8B124_E84E_CF76_41CB_97E00C514697); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -154.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.11,
   "hfov": 14.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_FF8FD4A8_F071_DBA9_41E9_54238476B84F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC, this.camera_E55A6134_E84E_CF56_41DA_F4774A9548EC); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Dapur",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0_HS_2_1_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": -163.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.11,
   "hfov": 19.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -163.67,
   "image": "this.AnimatedImageResource_6A1E064B_7036_F371_41CF_448734BE1D15",
   "pitch": 6.32,
   "hfov": 10.54,
   "distance": 100
  }
 ],
 "id": "overlay_FFA11D60_F077_AAD9_41EC_81041D265DC1",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC, this.camera_E54C5143_E84E_CF31_41D2_72C7063640F3); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Dapur",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -163.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.32,
   "hfov": 10.54
  }
 ]
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "right": 10,
 "width": "14.22%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "width": "14.22%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "20%",
 "minHeight": 50,
 "bottom": "20%",
 "mode": "push",
 "shadow": false,
 "minWidth": 50,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "propagateClick": false,
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "map": {
  "width": 35,
  "x": 46.98,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 238.41
 },
 "rollOverDisplay": false,
 "image": {
  "x": 46.93,
  "y": 238.41,
  "class": "HotspotMapOverlayImage",
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_0.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Ruang Tamu 2"
 },
 "useHandCursor": true,
 "id": "overlay_74EADC86_5D4A_F741_41C1_1D3AD8A01C9F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 35.02,
  "x": 215.44,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 242.78
 },
 "rollOverDisplay": false,
 "image": {
  "x": 215.38,
  "y": 242.78,
  "class": "HotspotMapOverlayImage",
  "width": 35.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_1.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Kamar 1"
 },
 "useHandCursor": true,
 "id": "overlay_74FCB3C7_5D4B_D0CF_41D2_703CCB21E1E2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 35.02,
  "x": 190.28,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 44.79
 },
 "rollOverDisplay": false,
 "image": {
  "x": 190.22,
  "y": 44.79,
  "class": "HotspotMapOverlayImage",
  "width": 35.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_2.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Kamar 2"
 },
 "useHandCursor": true,
 "id": "overlay_77E363CD_5D4A_50C3_41D4_D02F9B339CF0",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 35.02,
  "x": 217.63,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 137.77
 },
 "rollOverDisplay": false,
 "image": {
  "x": 217.57,
  "y": 137.77,
  "class": "HotspotMapOverlayImage",
  "width": 35.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_3.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Toilet"
 },
 "useHandCursor": true,
 "id": "overlay_74AF930C_5D4A_B141_41D1_1AAADF24A3D8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 35.02,
  "x": 65.58,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 25.16
 },
 "rollOverDisplay": false,
 "image": {
  "x": 65.52,
  "y": 25.16,
  "class": "HotspotMapOverlayImage",
  "width": 35.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_4.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Dapur"
 },
 "useHandCursor": true,
 "id": "overlay_75C2C170_5D45_D1C1_416E_500F099BABAC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 35.02,
  "x": 141.05,
  "height": 50,
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 22
    }
   ]
  },
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "y": 146.52
 },
 "rollOverDisplay": false,
 "image": {
  "x": 141,
  "y": 146.52,
  "class": "HotspotMapOverlayImage",
  "width": 35.02,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7D12BFE9_5CC7_B0C3_41C9_E3091DCC5DBA_HS_5.png",
     "width": 35,
     "class": "ImageResourceLevel",
     "height": 50
    }
   ]
  },
  "height": 50
 },
 "data": {
  "label": "Ruang Tamu 2"
 },
 "useHandCursor": true,
 "id": "overlay_7420E7CF_5D46_D0DF_41B9_699096BC217E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "class": "AreaHotspotMapOverlay"
},
{
 "media": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC",
 "camera": "this.panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E48D60D5_E84E_CED1_41E5_52A30DF10571, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E48D60D5_E84E_CED1_41E5_52A30DF10571",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575",
 "camera": "this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E48910DC_E84E_CED7_41D5_F915ABB60FDB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E48910DC_E84E_CED7_41D5_F915ABB60FDB",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6",
 "camera": "this.panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E48660DC_E84E_CED7_41EA_60C19E1E2AED, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E48660DC_E84E_CED7_41EA_60C19E1E2AED",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE",
 "camera": "this.panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E48960DC_E84E_CED7_41DB_E2311BD97A25, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E48960DC_E84E_CED7_41DB_E2311BD97A25",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC",
 "camera": "this.panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E489D0DC_E84E_CED7_41A5_AD17DDE9647D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E489D0DC_E84E_CED7_41A5_AD17DDE9647D",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5",
 "camera": "this.panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E48620DC_E84E_CED7_41DF_D6D4FF3A3083, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E48620DC_E84E_CED7_41DF_D6D4FF3A3083",
 "class": "PanoramaPlayListItem"
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "id": "overlay_E4081B0E_F091_6E68_41B2_622206F7589E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E57FA153_E84E_CFD2_41D3_391E778084B1); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0_HS_0_1_0_map.gif",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "yaw": 14.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.6,
   "hfov": 24.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "data": {
  "label": "Circle Door 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.45,
   "image": "this.AnimatedImageResource_FED5C8EC_F157_1504_41E8_01093F3BC9B5",
   "pitch": -5.63,
   "hfov": 14.16,
   "distance": 100
  }
 ],
 "id": "overlay_E50CA5ED_F09E_A5A8_41BC_D1E9530F660E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ED534A15_E640_C37A_41E6_8C6B72912575, this.camera_E571B163_E84E_CFF2_41A4_690254457FD1); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 14.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.63,
   "hfov": 14.16
  }
 ]
},
{
 "progressBorderRadius": 0,
 "toolTipShadowBlurRadius": 3,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingLeft": 6,
 "toolTipTextShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipDisplayTime": 600,
 "toolTipFontWeight": "normal",
 "toolTipPaddingRight": 6,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "class": "ViewerArea",
 "height": "100%",
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "paddingTop": 0,
 "transitionDuration": 500,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowColor": "#333333",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressRight": 0,
 "paddingRight": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E49A10C6_E84E_CD32_41DB_0974036E3F6A.set('selectedIndex', -1); }, this); this.playList_E49A10C6_E84E_CD32_41DB_0974036E3F6A.set('selectedIndex', 0)",
 "progressOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "toolTipTextShadowOpacity": 0,
 "paddingBottom": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "borderRadius": 0,
 "firstTransitionDuration": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarBottom": 0,
 "minHeight": 1,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipBorderRadius": 3,
 "playbackBarOpacity": 1,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "top": "0%",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minWidth": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "toolTipFontFamily": "Arial",
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "toolTipBorderSize": 1,
 "progressLeft": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingTop": 4,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 110,
 "backgroundOpacity": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": 110,
 "overflow": "visible",
 "layout": "horizontal",
 "shadow": false,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "button menu sup"
 },
 "horizontalAlign": "center",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 3,
 "children": [
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_6C299B9B_7032_1111_41D3_C2048BA5D18B"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "91.304%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": "0%",
 "height": "85.959%",
 "layout": "vertical",
 "shadow": false,
 "overflow": "scroll",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set"
 },
 "horizontalAlign": "center",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 3000,
 "left": "0%",
 "maxHeight": 2,
 "backgroundOpacity": 0,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "verticalAlign": "middle",
 "right": "0%",
 "borderRadius": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "bottom": 53,
 "height": 2,
 "shadow": false,
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_outside"
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "left": "0%",
 "scrollBarWidth": 10,
 "width": 1199,
 "backgroundOpacity": 0,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingLeft": 30,
 "minHeight": 1,
 "bottom": "0%",
 "height": 51,
 "overflow": "scroll",
 "layout": "horizontal",
 "shadow": false,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": true,
 "data": {
  "name": "-button set container"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 1,
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "10%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "5%",
 "minHeight": 1,
 "bottom": "5%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "shadow": true,
 "minWidth": 1,
 "class": "Container",
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarMargin": 2
},
{
 "paddingRight": 20,
 "paddingBottom": 0,
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "gap": 10,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "paddingLeft": 0,
 "top": "5%",
 "minHeight": 1,
 "bottom": "80%",
 "overflow": "visible",
 "layout": "vertical",
 "shadow": false,
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 20,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Container X global"
 },
 "horizontalAlign": "right",
 "scrollBarMargin": 2
},
{
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 1,
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "7%",
 "minHeight": 1,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "shadow": true,
 "minWidth": 1,
 "class": "Container",
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarMargin": 2
},
{
 "shadowOpacity": 0.3,
 "paddingBottom": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 1,
 "shadowBlurRadius": 25,
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "top": "7%",
 "contentOpaque": false,
 "minHeight": 1,
 "bottom": "7%",
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "visible",
 "layout": "vertical",
 "shadow": true,
 "minWidth": 1,
 "verticalAlign": "top",
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "paddingRight": 0
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E259BD96_F16F_0F04_41D5_A05F1A5C5BA5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534F07_E640_C166_41E5_D9D8C55DB8A5_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FED438EC_F157_1504_41E5_FA6C7A14EA96",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED5890D7_E640_40E7_41C1_A8D1728568A6_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FED5F8EC_F157_1504_41E4_E70BAC29FC50",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1ED9FCE_F169_0B04_41E7_A8849AD65560",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FED548EC_F157_1504_41E1_F602BACC4679",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E1ECBFCE_F169_0B04_41D1_AF581C09459C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_E7618A24_F179_1504_41E4_EDDC1B80117A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED534A15_E640_C37A_41E6_8C6B72912575_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FED588F1_F157_151C_41DA_B74F61D8D2A6",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_EA5D8DC2_E640_40D9_41DE_2574B68702CC_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_6ED1CA93_7032_F311_41C0_CA0B224B28BB",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_6A1E064B_7036_F371_41CF_448734BE1D15",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED53076E_E640_C1A6_41E8_23F3B44EC0EC_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "rowCount": 6,
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_FED5C8EC_F157_1504_41E8_01093F3BC9B5",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_ED50A3EF_E640_C0A6_41DF_B229668D23AE_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "backgroundOpacity": 0,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "verticalAlign": "middle",
 "width": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 60,
 "mode": "toggle",
 "shadow": false,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "minWidth": 1,
 "class": "IconButton",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "pressedIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_pressed.png",
 "backgroundOpacity": 0,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "verticalAlign": "middle",
 "width": 51.35,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 54.65,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "minWidth": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton WA"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 58,
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "id": "IconButton_6C299B9B_7032_1111_41D3_C2048BA5D18B",
 "verticalAlign": "middle",
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "mode": "push",
 "shadow": false,
 "click": "this.openLink('https://www.instagram.com/qianna_residence2/', '_blank')",
 "minWidth": 1,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_6C299B9B_7032_1111_41D3_C2048BA5D18B_rollover.png",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_6C299B9B_7032_1111_41D3_C2048BA5D18B.png",
 "propagateClick": true,
 "data": {
  "name": "IconButton IG"
 },
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_6C299B9B_7032_1111_41D3_C2048BA5D18B_pressed_rollover.png",
 "cursor": "hand",
 "transparencyActive": true
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "width": 120,
 "backgroundOpacity": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 0,
 "shadowBlurRadius": 15,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "height": 40,
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "label": "HOUSE INFO",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontStyle": "normal",
 "rollOverShadow": false,
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 0,
 "cursor": "hand",
 "data": {
  "name": "Button house info"
 },
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "width": 130,
 "backgroundOpacity": 0,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "label": "PANORAMA LIST",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "data": {
  "name": "Button panorama list"
 },
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "width": 90,
 "backgroundOpacity": 0,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "label": "LOCATION",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://maps.app.goo.gl/H7TE8C7WeJia4YAX6', '_blank')",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "data": {
  "name": "Button location"
 },
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "width": 103,
 "backgroundOpacity": 0,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "label": "FLOORPLAN",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_67BA0A31_70EE_049F_41AB_C06D77D1CC54, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_67BA7A31_70EE_049F_41D3_CF043914270C, 'hideEffect', false) }",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "data": {
  "name": "Button floorplan"
 },
 "iconBeforeLabel": true
},
{
 "fontFamily": "Montserrat",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "width": 112,
 "backgroundOpacity": 0,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 0.8,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 32,
 "shadowBlurRadius": 15,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 40,
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundOpacity": 1,
 "propagateClick": true,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "data": {
  "name": "Button photoalbum"
 },
 "iconBeforeLabel": true
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 1,
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "gap": 10,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "borderRadius": 0,
 "verticalAlign": "middle",
 "width": "85%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "overflow": "scroll",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "-left"
 },
 "horizontalAlign": "center",
 "scrollBarMargin": 2
},
{
 "paddingRight": 50,
 "paddingBottom": 20,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.51,
 "backgroundOpacity": 1,
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "50%",
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "overflow": "visible",
 "minWidth": 460,
 "class": "Container",
 "paddingTop": 20,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "-right"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "width": "25%",
 "borderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "mode": "push",
 "shadow": false,
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "propagateClick": false,
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.3,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 140,
 "layout": "absolute",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "header"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "itemLabelFontSize": 14,
 "itemPaddingBottom": 3,
 "width": "100%",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Montserrat",
 "scrollBarColor": "#04A3E1",
 "itemLabelTextDecoration": "none",
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "paddingLeft": 70,
 "itemHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "backgroundColor": [
  "#000000"
 ],
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "itemLabelHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "height": "100%",
 "paddingTop": 10,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailScaleMode": "fit_outside",
 "itemPaddingLeft": 3,
 "propagateClick": false,
 "horizontalAlign": "center",
 "itemMaxWidth": 1000,
 "paddingRight": 70,
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "scrollBarWidth": 10,
 "itemBackgroundColor": [],
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.05,
 "itemThumbnailShadow": false,
 "verticalAlign": "middle",
 "gap": 26,
 "itemLabelPosition": "bottom",
 "borderRadius": 5,
 "selectedItemThumbnailShadow": true,
 "rollOverItemThumbnailShadow": true,
 "itemBackgroundColorRatios": [],
 "backgroundColorDirection": "vertical",
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemOpacity": 1,
 "minHeight": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "shadow": false,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "minWidth": 1,
 "itemPaddingRight": 3,
 "itemMode": "normal",
 "itemMinHeight": 50,
 "borderSize": 0,
 "itemThumbnailBorderRadius": 0,
 "itemLabelFontWeight": "normal",
 "itemMinWidth": 50,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "ThumbnailList"
 },
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundOpacity": 0,
 "itemWidth": 220,
 "itemMaxHeight": 1000,
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.3,
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "overflow": "visible",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Container photo"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "borderRadius": 0,
 "verticalAlign": "middle",
 "width": "100%",
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "class": "Image",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_outside"
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0.3,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 0,
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 0,
 "paddingLeft": 0,
 "height": 60,
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "overflow": "scroll",
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 20,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "right",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 30,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.79,
 "backgroundOpacity": 0.3,
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "shadow": false,
 "height": "100%",
 "overflow": "scroll",
 "minWidth": 100,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Container text"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "width": 370,
 "backgroundOpacity": 0.3,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 10,
 "scrollBarOpacity": 0.5,
 "borderRadius": 0,
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "contentOpaque": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 40,
 "overflow": "scroll",
 "layout": "horizontal",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "class": "Container",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "Container space"
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.12vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.12vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "width": "77.115%",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "minWidth": 1,
 "class": "HTMLText",
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarMargin": 2
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "right": 20,
 "width": "100%",
 "borderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "mode": "push",
 "shadow": false,
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "paddingRight": 0,
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "right": 20,
 "width": "10%",
 "borderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "mode": "push",
 "shadow": false,
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": false,
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "transparencyActive": false
},
{
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.5vh;font-family:'Franklin Gothic Heavy';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.4vh;font-family:'Nirmala UI Semilight';\"><B>Qianna Residence 2</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Qianna Residence 2 menawarkan hunian komersil dengan gaya American Classic Minimalis yang elegan. Tersedia dalam 3 tipe, yaitu 30/60, 36/72, dan 45/84. Terdapat 1 carport, 1 taman depan, 1 ruang tamu, 2 kamar tidur, 1 kamar mandi, dan 1 dapur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Spesifikasi Bangunan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Pondasi Batu kali, Struktur Beton bertulang, Cakar Ayam, Rangka Atap Baja Ringan, Genteng Flat Beton, Dinding Bata Merah, Cat Dinding Wathershild (Outdoor), Kusen Pintu / Jendela (Alumunium), Pintu Utama HDF, Plafon Gypsum, Lantai Homogenous Tile (HT) 60x60, Lisplank Salur Kayu, Carpot Rabat Beton, Sanitasi Closet Duduk dan Jet Spray, Keran dan Shower, Air Sumur Bor dan Mesin Pompa, Listrik 1.300 watt Token, Stopkontak set Broco / Setara, Rumah Lampu Donwlight (Interior), Kanopy.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Fasilitas:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">CCTV 24 jam &amp; security, one gate system, jalan utama yang lebar, jalan menggunakan paving block, smart door lock, smart home system.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Keunggulan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">View pegunungan, suasana sejuk &amp; asri, dekat dengan pusat kota sukabumi, dekat dengan exit tol bocimi, dekat dengan sarana pendidikan, dekat dengan sarana kesehatan, dekat dengan sarana perbelanjaan, dekat dengan tempat ibadah, dekat dengan tempat wisata.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingRight": 10,
 "scrollBarOpacity": 0.5,
 "backgroundOpacity": 0,
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "borderRadius": 0,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "paddingLeft": 10,
 "height": "70.541%",
 "shadow": false,
 "class": "HTMLText",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "propagateClick": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarMargin": 2
},
{
 "fontFamily": "Impact",
 "paddingRight": 0,
 "paddingBottom": 0,
 "layout": "horizontal",
 "backgroundOpacity": 0.7,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "borderRadius": 50,
 "pressedBackgroundColorRatios": [
  0
 ],
 "width": "46%",
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundOpacity": 1,
 "minHeight": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "paddingLeft": 0,
 "iconHeight": 32,
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowSpread": 1,
 "mode": "push",
 "shadow": false,
 "height": "9%",
 "fontSize": "3.84vh",
 "borderColor": "#000000",
 "minWidth": 1,
 "class": "Button",
 "label": "BOOK NOW !",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "pressedBackgroundOpacity": 1,
 "propagateClick": false,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "fontColor": "#FFFFFF",
 "textDecoration": "none",
 "iconWidth": 32,
 "cursor": "hand",
 "data": {
  "name": "Button"
 },
 "iconBeforeLabel": true
}],
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.MapViewer",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E"
 ],
 "borderRadius": 0,
 "verticalAlign": "top",
 "width": "100%",
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "contentOpaque": false,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "downloadEnabled": false,
 "layout": "absolute",
 "shadow": false,
 "height": "100%",
 "overflow": "visible",
 "minWidth": 20,
 "class": "Player",
 "paddingTop": 0,
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "propagateClick": true,
 "data": {
  "name": "Player468"
 },
 "horizontalAlign": "left",
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": false,
 "scrollBarMargin": 2,
 "desktopMipmappingEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
