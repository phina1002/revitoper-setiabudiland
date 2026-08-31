(function(){
    var script = {
 "mobileMipmappingEnabled": false,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "overflow": "visible",
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.MapViewer"
 ],
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_E6C00414_E869_D8A3_41E5_D9AD63B34906.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Player",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "scrollBarColor": "#000000",
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "unregisterKey": function(key){  delete window[key]; },
  "existsKey": function(key){  return key in window; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } }
 },
 "minHeight": 20,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "minWidth": 20,
 "height": "100%",
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "downloadEnabled": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 92.43,
  "class": "PanoramaCameraPosition",
  "pitch": -1.15
 },
 "id": "camera_E40FE4B0_E869_D9E3_41EC_CFEACA269293",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -94.45,
  "class": "PanoramaCameraPosition",
  "pitch": 7.94
 },
 "id": "camera_E456D491_E869_D9A5_41D6_8BE2DDF7DCE1",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "overlays": [
  "this.overlay_EEACF7E2_F991_A37E_41B3_4AC09E1654A8",
  "this.overlay_E39D3BA4_F98E_A3FA_41BA_972E73A6A7BC"
 ],
 "label": "GH-KAMAR2",
 "id": "panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 130.41,
   "angle": 103.55,
   "y": 232.29,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  }
 ]
},
{
 "overlays": [
  "this.overlay_E302B98F_F9F3_AFC5_41CC_A385B48E3B88",
  "this.overlay_E2FB73D7_F9F3_E346_41D6_361CAE8AB4EB"
 ],
 "label": "GH-TOILET",
 "id": "panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 475.74,
   "angle": -244.09,
   "y": 209.03,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.video_E6085C77_F9B1_A546_41EC_AD44B4C56DA1",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E6C15414_E869_D8A3_41EC_4CD499ECD1CF, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E6C15414_E869_D8A3_41EC_4CD499ECD1CF, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_E6C15414_E869_D8A3_41EC_4CD499ECD1CF",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_camera",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_6EB28BA5_71EA_76CB_41D8_2559222011E6",
  "this.overlay_6C1159D0_71EA_9249_41C4_A0B20E24FC75",
  "this.overlay_6C4F35CC_71ED_9259_41BF_00A6859F4813",
  "this.overlay_6F81AD14_71ED_93C8_41D3_F906F1965769",
  "this.overlay_6F27C54A_71ED_9259_41D8_BA934CD3370A",
  "this.overlay_6FDB9760_71EF_BE48_417D_0382CFF217EC"
 ],
 "fieldOfViewOverlayRadiusScale": 0.1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#00CC00",
 "label": "Denah Goalpara Hills - Copy",
 "id": "map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
 "width": 577,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395.png",
    "width": 577,
    "class": "ImageResourceLevel",
    "height": 934
   },
   {
    "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_lq.png",
    "width": 201,
    "class": "ImageResourceLevel",
    "height": 326,
    "tags": "preload"
   }
  ]
 },
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_t.png",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 934
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.82,
  "class": "PanoramaCameraPosition",
  "pitch": 2.66
 },
 "id": "camera_E7683443_E869_D8A5_41AF_0C6DE4EE9D1F",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "begin": "this.loopAlbum(this.playList_E6F5D404_E869_D8A3_41E6_E998E670495B, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E6F5D404_E869_D8A3_41E6_E998E670495B",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -98.45,
  "class": "PanoramaCameraPosition",
  "pitch": 5.42
 },
 "id": "camera_E45DA491_E869_D9A5_41E0_6E836FA4E262",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.71,
  "class": "PanoramaCameraPosition",
  "pitch": 4.82
 },
 "id": "camera_E6980433_E869_D8E5_41E9_7AB0953DCED3",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  "this.PanoramaPlayListItem_E6C44414_E869_D8A3_41EB_57EE4159945A",
  "this.PanoramaPlayListItem_E6D87414_E869_D8A3_41EA_D3ED8C7D1C4E",
  "this.PanoramaPlayListItem_E6D9F414_E869_D8A3_41D5_03B77A48A4C9",
  "this.PanoramaPlayListItem_E6D81414_E869_D8A3_41EC_3785B23912FB",
  "this.PanoramaPlayListItem_E6D9B414_E869_D8A3_41E5_AFAB23D0C32A",
  "this.PanoramaPlayListItem_E6D95414_E869_D8A3_41E6_515BA16AE289",
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7",
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
 "duration": 1000,
 "id": "effect_5D9B8155_71DA_9248_41D8_9C2643C88BF9",
 "class": "FadeInEffect",
 "easing": "quad_in_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -170.86,
  "class": "PanoramaCameraPosition",
  "pitch": 8.27
 },
 "id": "camera_E4777481_E869_D9A5_41E1_D3ADAF9B27F7",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.26,
  "class": "PanoramaCameraPosition",
  "pitch": 4.18
 },
 "id": "camera_E7663443_E869_D8A5_41D7_86F576B2EC8D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E41554C0_E869_D9A3_41E6_BB4B3216EA3E",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "height": 1852,
 "label": "20231223_132012-1",
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_1",
 "width": 1080,
 "thumbnailUrl": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_1_t.jpg",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_1.jpg"
   }
  ]
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.55,
  "class": "PanoramaCameraPosition",
  "pitch": 1.84
 },
 "id": "camera_E421B4A1_E869_D9E5_41D4_E93CF0E56E97",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -95.28,
  "class": "PanoramaCameraPosition",
  "pitch": 5.23
 },
 "id": "camera_E6BB9424_E869_D8E3_41DF_BD62B252382F",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "height": 4032,
 "label": "20240104_094454-1",
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_3",
 "width": 2268,
 "thumbnailUrl": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_3_t.jpg",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_3.jpg"
   }
  ]
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.09,
  "class": "PanoramaCameraPosition",
  "pitch": 2.34
 },
 "id": "camera_E43534B0_E869_D9E3_41D8_11F598AAE199",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.01,
  "class": "PanoramaCameraPosition",
  "pitch": 3.21
 },
 "id": "camera_E43A04A1_E869_D9E5_41EC_C282D5702E80",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_F69799DB_F992_AF4E_41D0_FD5BF047B01D",
  "this.overlay_E826D3D7_F996_A346_41DB_F840ED196E14",
  "this.overlay_F6F3A0DD_F996_BD4A_41E7_64489FF8EEDB",
  "this.overlay_F61E43B3_F992_E3DE_41E9_EBCF76E982F0",
  "this.overlay_F611B248_F99E_7D4A_41D9_CB42E16D3C64",
  "this.overlay_E932D078_F99F_9D4A_41EB_887A447CAA5C",
  "this.overlay_EDAD55F4_F9B7_E75A_41D9_546AA7C1D982",
  "this.overlay_ECD60194_F9BE_7FD9_41E0_F760AFB17DC9",
  "this.overlay_EDDAEF3D_F9B1_E4CA_41D5_A47EF8EBB8C0"
 ],
 "label": "GH-R1",
 "id": "panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 425.64,
   "angle": 95.34,
   "y": 387.96,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15"
  }
 ]
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "class": "PhotoAlbumPlayer",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
},
{
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ]
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "movementMode": "constrained",
 "id": "MapViewerMapPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -96.06,
  "class": "PanoramaCameraPosition",
  "pitch": 6.11
 },
 "id": "camera_E776F452_E869_D8A4_41C5_95EC331225C5",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_camera",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_EFA0AFEF_F991_E346_41D8_F7FCBA3DDE0E",
  "this.overlay_EFED3027_F996_7CC6_41C1_F247003674D0"
 ],
 "label": "GH-KAMAR1",
 "id": "panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 135.78,
   "angle": -101.08,
   "y": 479.21,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20"
  }
 ]
},
{
 "duration": 5000,
 "height": 4032,
 "label": "20240104_094406",
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_2",
 "width": 2268,
 "thumbnailUrl": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_2_t.jpg",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_2.jpg"
   }
  ]
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 95.05,
  "class": "PanoramaCameraPosition",
  "pitch": -1.1
 },
 "id": "camera_E41A04C0_E869_D9A3_41DE_3E18EBE5CF4A",
 "class": "PanoramaCamera"
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_AlbumPlayList",
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7",
 "label": "Photo Album 20231222_105132",
 "thumbnailUrl": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_t.png"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_E4EFF4C0_E869_D9A3_41DB_3F89339511E1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.89,
  "class": "PanoramaCameraPosition",
  "pitch": 4.82
 },
 "id": "camera_E442E481_E869_D9A5_41DA_BEBCCCEEAC58",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E6C00414_E869_D8A3_41E5_D9AD63B34906",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E6C17414_E869_D8A3_41BD_8899A506121C",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_ECBF9DC6_F9B2_E746_41E4_993000FD7D26",
  "this.overlay_EFFC858F_F9B1_E7C6_41DD_C516F42FCFCF",
  "this.overlay_EC853D03_F9B7_E4BF_41D7_A8781730C79F",
  "this.overlay_EC7686D8_F98E_654A_41E7_F3EABAF601DD",
  "this.overlay_E004F8B7_F992_6DC6_41E9_A42834D5F21C",
  "this.overlay_E0BB760D_F991_A4CA_41E9_6AE055D7D0C9",
  "this.overlay_E3D60D0F_F992_64C7_41DB_F87D9B40D1EE"
 ],
 "label": "GH-R2",
 "id": "panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 327.23,
   "angle": 90.55,
   "y": 216.19,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -31.64,
  "class": "PanoramaCameraPosition",
  "pitch": -2.39
 },
 "id": "camera_E44C9481_E869_D9A5_41E9_0F41F06FDC35",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "height": 4032,
 "label": "20231222_105132",
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_0",
 "width": 2268,
 "thumbnailUrl": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_0_t.jpg",
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_0.jpg"
   }
  ]
 }
},
{
 "overlays": [
  "this.overlay_EF6C3A09_F992_ACCB_41D2_D7F0F2F9F459",
  "this.overlay_E39B467B_F98F_A54F_41CD_BD5AF580FBB2"
 ],
 "label": "GH-DAPUR",
 "id": "panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60",
 "vfov": 180,
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "class": "TiledImageResourceLevel",
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   }
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "mapLocations": [
  {
   "map": "this.map_7CAA08F4_71AA_7249_4195_436CD7AA6395",
   "x": 309.34,
   "angle": 256.11,
   "y": 74.84,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E"
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20",
   "camera": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E",
   "camera": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15",
   "camera": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077",
   "camera": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60",
   "camera": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965",
   "camera": "this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "label": "Goalpara Hills",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_E6085C77_F9B1_A546_41EC_AD44B4C56DA1",
 "thumbnailUrl": "media/video_E6085C77_F9B1_A546_41EC_AD44B4C56DA1_t.jpg",
 "class": "Video",
 "height": 1280,
 "video": {
  "width": 720,
  "mp4Url": "media/video_E6085C77_F9B1_A546_41EC_AD44B4C56DA1.mp4",
  "class": "VideoResource",
  "height": 1280
 }
},
{
 "duration": 1000,
 "id": "effect_5D9B6160_71DA_9249_41C9_8CA79D8D1CAA",
 "class": "FadeOutEffect",
 "easing": "quad_in_out"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -91.97,
  "class": "PanoramaCameraPosition",
  "pitch": 4.13
 },
 "id": "camera_E68A3433_E869_D8E5_41E2_576DE7FA355E",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_camera",
 "class": "PanoramaCamera"
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer"
},
{
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "toolTipFontSize": 13,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 0.5,
 "toolTipBorderRadius": 3,
 "progressRight": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBottom": 5,
 "toolTipPaddingLeft": 10,
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "paddingLeft": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressOpacity": 1,
 "playbackBarLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionColor": "#FF6600",
 "height": "100%",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 7,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBorderSize": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 55,
 "progressHeight": 6,
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingRight": 10,
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressOpacity": 1,
 "propagateClick": true,
 "toolTipShadowBlurRadius": 3,
 "top": 0,
 "toolTipTextShadowColor": "#000000",
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipShadowOpacity": 0,
 "minWidth": 100,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#0066FF",
 "progressBorderRadius": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipBorderColor": "#767676"
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "overflow": "scroll",
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "gap": 10,
 "class": "Container",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": 641,
 "top": "0%",
 "minWidth": 1,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "visible",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "backgroundOpacity": 0.64,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": 118,
 "minWidth": 1,
 "bottom": 0,
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "--MENU"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "scroll",
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "-- HOUSE INFO"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "visible": false
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "scroll",
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "visible": false
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "scroll",
 "backgroundOpacity": 0.6,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "minWidth": 1,
 "bottom": "0%",
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "visible": false
},
{
 "visible": false,
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "id": "MapViewer",
 "left": "0%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontSize": 12,
 "progressBackgroundColorDirection": "vertical",
 "right": "86.25%",
 "toolTipOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressRight": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipFontColor": "#606060",
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressOpacity": 1,
 "playbackBarLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionColor": "#FF6600",
 "height": "40%",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBorderSize": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 6,
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "propagateClick": false,
 "toolTipShadowBlurRadius": 3,
 "top": "0%",
 "toolTipFontWeight": "normal",
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipShadowOpacity": 1,
 "minWidth": 1,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "--FLOORPLAN"
 },
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipBorderColor": "#767676"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "toggle",
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "minWidth": 1,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "top": "20%",
 "minWidth": 50,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "right": 10,
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "top": "20%",
 "minWidth": 50,
 "bottom": "20%",
 "transparencyActive": false,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "cursor": "hand"
},
{
 "id": "overlay_EEACF7E2_F991_A37E_41B3_4AC09E1654A8",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 27.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0_HS_0_1_0_map.gif",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.71,
   "hfov": 29.88
  }
 ]
},
{
 "id": "overlay_E39D3BA4_F98E_A3FA_41BA_972E73A6A7BC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E3EBA672_F9F1_A55E_41B0_876E011D9E49",
   "pitch": 4.06,
   "yaw": 28.67,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.58,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 28.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.06,
   "hfov": 13.58
  }
 ]
},
{
 "id": "overlay_E302B98F_F9F3_AFC5_41CC_A385B48E3B88",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E, this.camera_E4777481_E869_D9A5_41E1_D3ADAF9B27F7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0_HS_0_2_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0_HS_0_3_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "id": "overlay_E2FB73D7_F9F3_E346_41D6_361CAE8AB4EB",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E, this.camera_E44C9481_E869_D9A5_41E9_0F41F06FDC35); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2A3FC44D_0A4C_9198_4183_9368CB2B6938",
   "pitch": 7.55,
   "yaw": 168.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.42,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 168.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.55,
   "hfov": 19.42
  }
 ]
},
{
 "map": {
  "width": 64.01,
  "x": 103.78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 433,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6EB28BA5_71EA_76CB_41D8_2559222011E6",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 103.78,
  "y": 433,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_0.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Kamar 1"
 }
},
{
 "map": {
  "width": 64.01,
  "x": 98.41,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 186.08,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6C1159D0_71EA_9249_41C4_A0B20E24FC75",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 98.41,
  "y": 186.08,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_1.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Kamar 2"
 }
},
{
 "map": {
  "width": 64.01,
  "x": 277.34,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 28.63,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6C4F35CC_71ED_9259_41BF_00A6859F4813",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 277.34,
  "y": 28.63,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_2.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Dapur"
 }
},
{
 "map": {
  "width": 64.01,
  "x": 443.74,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 162.82,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6F81AD14_71ED_93C8_41D3_F906F1965769",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 443.74,
  "y": 162.82,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_3.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Toilet"
 }
},
{
 "map": {
  "width": 64.01,
  "x": 393.64,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 341.75,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6F27C54A_71ED_9259_41D8_BA934CD3370A",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 393.64,
  "y": 341.75,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_4.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Ruang Tamu 1"
 }
},
{
 "map": {
  "width": 64.01,
  "x": 295.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_5_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 23
    }
   ]
  },
  "y": 169.98,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 92.42,
  "offsetX": 0
 },
 "id": "overlay_6FDB9760_71EF_BE48_417D_0382CFF217EC",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 295.23,
  "y": 169.98,
  "width": 64.01,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7CAA08F4_71AA_7249_4195_436CD7AA6395_HS_5.png",
     "width": 64,
     "class": "ImageResourceLevel",
     "height": 92
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 92.42
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "AreaHotspotMapOverlay",
 "data": {
  "label": "Ruang Tamu 2"
 }
},
{
 "media": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20",
 "camera": "this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6C44414_E869_D8A3_41EB_57EE4159945A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6C44414_E869_D8A3_41EB_57EE4159945A",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E",
 "camera": "this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6D87414_E869_D8A3_41EA_D3ED8C7D1C4E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6D87414_E869_D8A3_41EA_D3ED8C7D1C4E",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15",
 "camera": "this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6D9F414_E869_D8A3_41D5_03B77A48A4C9, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6D9F414_E869_D8A3_41D5_03B77A48A4C9",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077",
 "camera": "this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6D81414_E869_D8A3_41EC_3785B23912FB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6D81414_E869_D8A3_41EC_3785B23912FB",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60",
 "camera": "this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6D9B414_E869_D8A3_41E5_AFAB23D0C32A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6D9B414_E869_D8A3_41E5_AFAB23D0C32A",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965",
 "camera": "this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6D95414_E869_D8A3_41E6_515BA16AE289, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6D95414_E869_D8A3_41E6_515BA16AE289",
 "class": "PanoramaPlayListItem"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pintu Keluar/Masuk"
  }
 ],
 "enabledInCardboard": true,
 "id": "overlay_F69799DB_F992_AF4E_41D0_FD5BF047B01D",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 132.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_0_1_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -6.47,
   "hfov": 22.12
  }
 ]
},
{
 "id": "overlay_E826D3D7_F996_A346_41DB_F840ED196E14",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15, this.camera_E7663443_E869_D8A5_41D7_86F576B2EC8D); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 178.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_1_1_0_map.gif",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.4,
   "hfov": 29.77
  }
 ]
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "enabledInCardboard": true,
 "id": "overlay_F6F3A0DD_F996_BD4A_41E7_64489FF8EEDB",
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4D72DE_71AD_9679_41A7_480F7E8F58A5",
   "pitch": 61.14,
   "yaw": -60.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 0.56,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "yaw": -60.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 61.14,
   "hfov": 0.56
  }
 ]
},
{
 "id": "overlay_F61E43B3_F992_E3DE_41E9_EBCF76E982F0",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15, this.camera_E776F452_E869_D8A4_41C5_95EC331225C5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4D82EE_71AD_9658_41D4_8D0F6E414ADE",
   "pitch": 2.85,
   "yaw": 178.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.58,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 178.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.85,
   "hfov": 13.58
  }
 ]
},
{
 "id": "overlay_F611B248_F99E_7D4A_41D9_CB42E16D3C64",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077, this.camera_E6BB9424_E869_D8E3_41DF_BD62B252382F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -153.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_4_1_0_map.gif",
      "width": 84,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -3.29,
   "hfov": 26.28
  }
 ]
},
{
 "id": "overlay_E932D078_F99F_9D4A_41EB_887A447CAA5C",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077, this.camera_E68A3433_E869_D8E5_41E2_576DE7FA355E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4E12EE_71AD_9658_41C7_99699D8AB032",
   "pitch": 2.84,
   "yaw": -153.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.4,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -153.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.84,
   "hfov": 12.4
  }
 ]
},
{
 "id": "overlay_EDAD55F4_F9B7_E75A_41D9_546AA7C1D982",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4EA2EE_71AD_9658_41C0_2E5CD7DD00AD",
   "pitch": -42.85,
   "yaw": -146.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.96,
   "distance": 50
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02 Right-Up"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -146.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.85,
   "hfov": 13.96
  }
 ]
},
{
 "id": "overlay_ECD60194_F9BE_7FD9_41E0_F760AFB17DC9",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60, this.camera_E6980433_E869_D8E5_41E9_7AB0953DCED3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -119.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_10_1_0_map.gif",
      "width": 63,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 14.26
  }
 ]
},
{
 "id": "overlay_EDDAEF3D_F9B1_E4CA_41D5_A47EF8EBB8C0",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60, this.camera_E7683443_E869_D8A5_41AF_0C6DE4EE9D1F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4ED2EE_71AD_9658_4194_AB8BF91CAA74",
   "pitch": 2.72,
   "yaw": -119.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.57,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -119.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.72,
   "hfov": 10.57
  }
 ]
},
{
 "toolTipShadowSpread": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "width": "100%",
 "toolTipFontSize": 12,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressRight": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarBottom": 0,
 "toolTipPaddingLeft": 6,
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "paddingLeft": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressOpacity": 1,
 "playbackBarLeft": 0,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "vrPointerSelectionColor": "#FF6600",
 "height": "100%",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadow": true,
 "transitionMode": "blending",
 "toolTipBorderSize": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBackgroundOpacity": 1,
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "playbackBarOpacity": 1,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E6F5D404_E869_D8A3_41E6_E998E670495B.set('selectedIndex', -1); }, this); this.playList_E6F5D404_E869_D8A3_41E6_E998E670495B.set('selectedIndex', 0)",
 "progressBottom": 2,
 "progressHeight": 6,
 "paddingBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "progressBarOpacity": 1,
 "class": "ViewerArea",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "propagateClick": false,
 "toolTipShadowBlurRadius": 3,
 "top": "0%",
 "toolTipTextShadowColor": "#000000",
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "shadow": false,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipShadowOpacity": 1,
 "minWidth": 1,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBarBorderColor": "#0066FF",
 "progressBorderRadius": 0,
 "toolTipShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderSize": 6,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarHeadOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBarBorderRadius": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "toolTipBorderColor": "#767676"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "toggle",
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "minWidth": 1,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "minWidth": 1,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "visible": false,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "right": 30,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 37,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "height": 75,
 "transparencyActive": true,
 "minWidth": 1,
 "bottom": 8,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "visible": false,
 "cursor": "hand"
},
{
 "id": "overlay_EFA0AFEF_F991_E346_41D8_F7FCBA3DDE0E",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20, this.camera_E41554C0_E869_D9A3_41E6_BB4B3216EA3E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 148.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0_HS_0_1_0_map.gif",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -5.88,
   "hfov": 26.87
  }
 ]
},
{
 "id": "overlay_EFED3027_F996_7CC6_41C1_F247003674D0",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20, this.camera_E4EFF4C0_E869_D9A3_41DB_3F89339511E1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11C50A2_F992_9DFE_41D5_DC9D94DFD810",
   "pitch": 3,
   "yaw": 147.9,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.6,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 147.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3,
   "hfov": 13.6
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_2",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.41",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.30"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_1",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.37",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.41"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_3",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.41",
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
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_0",
   "camera": {
    "duration": 5000,
    "easing": "linear",
    "targetPosition": {
     "x": "0.60",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_CF226284_FA91_9DBA_41D5_06A82B0E5EC7_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "id": "overlay_ECBF9DC6_F9B2_E746_41E4_993000FD7D26",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20, this.camera_E442E481_E869_D9A5_41DA_BEBCCCEEAC58); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_ECA6CA85_F9B2_EDBA_41ED_65BE93BC0966",
   "pitch": -49.51,
   "yaw": 87.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.92,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 87.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.51,
   "hfov": 15.92
  }
 ]
},
{
 "id": "overlay_EFFC858F_F9B1_E7C6_41DD_C516F42FCFCF",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60, this.camera_E421B4A1_E869_D9E5_41D4_E93CF0E56E97); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -111.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_1_1_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -1.36,
   "hfov": 42.05
  }
 ]
},
{
 "id": "overlay_EC853D03_F9B7_E4BF_41D7_A8781730C79F",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60, this.camera_E43A04A1_E869_D9E5_41EC_C282D5702E80); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11D70A2_F992_9DFE_41D1_4C65A20E9A48",
   "pitch": 9.81,
   "yaw": -112.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.81,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -112.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.81,
   "hfov": 15.81
  }
 ]
},
{
 "id": "overlay_EC7686D8_F98E_654A_41E7_F3EABAF601DD",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965, this.camera_E43534B0_E869_D9E3_41D8_11F598AAE199); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E11CD0A2_F992_9DFE_41D6_412CF02931B3",
   "pitch": -42.99,
   "yaw": -30.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.28,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -30.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_4_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.99,
   "hfov": 13.28
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pinntu Keluar/Masuk"
  }
 ],
 "enabledInCardboard": true,
 "id": "overlay_E004F8B7_F992_6DC6_41E9_A42834D5F21C",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "maps": [
  {
   "yaw": 94.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_5_1_0_map.gif",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -2.86,
   "hfov": 19.73
  }
 ]
},
{
 "id": "overlay_E0BB760D_F991_A4CA_41E9_6AE055D7D0C9",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077, this.camera_E45DA491_E869_D9A5_41E0_6E836FA4E262); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 145.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_6_1_0_map.gif",
      "width": 60,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -4.52,
   "hfov": 39.49
  }
 ]
},
{
 "id": "overlay_E3D60D0F_F992_64C7_41DB_F87D9B40D1EE",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077, this.camera_E456D491_E869_D9A5_41D6_8BE2DDF7DCE1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_E3EAA672_F9F1_A55E_41E4_DF1F9F66ADA3",
   "pitch": 4.2,
   "yaw": 141.71,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.58,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 141.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.2,
   "hfov": 13.58
  }
 ]
},
{
 "id": "overlay_EF6C3A09_F992_ACCB_41D2_D7F0F2F9F459",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E, this.camera_E40FE4B0_E869_D9E3_41EC_CFEACA269293); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Polygon"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 0,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": 90,
   "hfov": 90
  },
  {
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "pitch": -90,
   "hfov": 90
  }
 ]
},
{
 "id": "overlay_E39B467B_F98F_A54F_41CD_BD5AF580FBB2",
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E, this.camera_E41A04C0_E869_D9A3_41DE_3E18EBE5CF4A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_7E4A22EE_71AD_9658_41D3_2665A5E42948",
   "pitch": 15.11,
   "yaw": -78.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.01,
   "distance": 100
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle Door 02"
 },
 "enabledInCardboard": true,
 "maps": [
  {
   "yaw": -78.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.11,
   "hfov": 26.01
  }
 ]
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "overflow": "visible",
 "width": 110,
 "right": "0%",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "gap": 10,
 "class": "Container",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": 110,
 "top": "0%",
 "minWidth": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "overflow": "scroll",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_506DF6C1_71EA_9E48_4181_B55BFC788631",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "right": "0%",
 "verticalAlign": "top",
 "gap": 3,
 "class": "Container",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": "85.959%",
 "minWidth": 1,
 "bottom": "0%",
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "right": "0%",
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": 2,
 "minWidth": 1,
 "bottom": 53,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "gap": 3,
 "class": "Container",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 30,
 "contentOpaque": false,
 "propagateClick": true,
 "borderRadius": 0,
 "shadow": false,
 "height": 51,
 "minWidth": 1,
 "bottom": "0%",
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowVerticalLength": 0,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "minWidth": 1,
 "bottom": "5%",
 "minHeight": 1,
 "shadowSpread": 1,
 "layout": "horizontal",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "right": "10%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "top": "5%",
 "minWidth": 1,
 "bottom": "80%",
 "layout": "vertical",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 20
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "7%",
 "borderRadius": 0,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "bottom": "7%",
 "minHeight": 1,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "right": "15%",
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "overflow": "visible",
 "backgroundOpacity": 1,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "propagateClick": false,
 "top": "7%",
 "borderRadius": 0,
 "contentOpaque": false,
 "shadowBlurRadius": 25,
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "bottom": "7%",
 "minHeight": 1,
 "shadowSpread": 1,
 "layout": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "shadowHorizontalLength": 0
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FAA034ED_F1AE_954D_41C5_6137DA8C2077_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E3EBA672_F9F1_A55E_41B0_876E011D9E49",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FAA7C20B_F1AE_ACB5_41CA_0338979B5965_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2A3FC44D_0A4C_9198_4183_9368CB2B6938",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4D72DE_71AD_9679_41A7_480F7E8F58A5",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4D82EE_71AD_9658_41D4_8D0F6E414ADE",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4E12EE_71AD_9658_41C7_99699D8AB032",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4EA2EE_71AD_9658_41C0_2E5CD7DD00AD",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FD9B1CDB_F1AF_9555_41DB_C4D276A97F20_1_HS_11_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4ED2EE_71AD_9658_4194_AB8BF91CAA74",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FABC0E24_F1AE_74F3_41E4_20481F7B5E15_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E11C50A2_F992_9DFE_41D5_DC9D94DFD810",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_ECA6CA85_F9B2_EDBA_41ED_65BE93BC0966",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E11D70A2_F992_9DFE_41D1_4C65A20E9A48",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_E11CD0A2_F992_9DFE_41D6_412CF02931B3",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FABF5B22_F1AE_BCF7_41A1_018DB435892E_0_HS_7_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_E3EAA672_F9F1_A55E_41E4_DF1F9F66ADA3",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_FDCDE741_F1AE_74B5_41E1_F7BC28889C60_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7E4A22EE_71AD_9658_41D3_2665A5E42948",
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 60,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "toggle",
 "shadow": false,
 "height": 60,
 "transparencyActive": true,
 "minWidth": 1,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "paddingRight": 0,
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_506DF6C1_71EA_9E48_4181_B55BFC788631",
 "width": 46.65,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "height": 52,
 "pressedRollOverIconURL": "skin/IconButton_506DF6C1_71EA_9E48_4181_B55BFC788631_pressed_rollover.png",
 "transparencyActive": true,
 "minWidth": 1,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_506DF6C1_71EA_9E48_4181_B55BFC788631.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton WA"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_506DF6C1_71EA_9E48_4181_B55BFC788631_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 52,
 "verticalAlign": "middle",
 "class": "IconButton",
 "maxHeight": 58,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "propagateClick": true,
 "borderRadius": 0,
 "mode": "push",
 "shadow": false,
 "height": 56,
 "pressedRollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_pressed_rollover.png",
 "transparencyActive": true,
 "minWidth": 1,
 "click": "this.openLink('https://www.instagram.com/goalparahills/', '_blank')",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton IG"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "iconWidth": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "backgroundColorRatios": [
  0
 ],
 "width": 120,
 "iconBeforeLabel": true,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 0,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverShadow": false,
 "propagateClick": true,
 "borderRadius": 0,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "label": "HOUSE INFO",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "cursor": "hand",
 "gap": 5
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 130,
 "iconBeforeLabel": true,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 32,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "gap": 5,
 "propagateClick": true,
 "borderRadius": 0,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "label": "PANORAMA LIST",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "Button panorama list"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 90,
 "iconBeforeLabel": true,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 32,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "gap": 5,
 "propagateClick": true,
 "borderRadius": 0,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "label": "LOCATION",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "click": "this.openLink('https://maps.app.goo.gl/597WqWcrtjK749Es8', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "Button location"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 103,
 "iconBeforeLabel": true,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 32,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "gap": 5,
 "propagateClick": true,
 "borderRadius": 0,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "label": "FLOORPLAN",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_5D9B8155_71DA_9248_41D8_9C2643C88BF9, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_5D9B6160_71DA_9249_41C9_8CA79D8D1CAA, 'hideEffect', false) }",
 "horizontalAlign": "center",
 "data": {
  "name": "Button floorplan"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": 112,
 "iconBeforeLabel": true,
 "fontFamily": "Montserrat",
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 32,
 "backgroundOpacity": 0,
 "rollOverBackgroundOpacity": 0.8,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "gap": 5,
 "propagateClick": true,
 "borderRadius": 0,
 "pressedBackgroundOpacity": 1,
 "mode": "push",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "horizontal",
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "data": {
  "name": "Button photoalbum"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "overflow": "scroll",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "verticalAlign": "middle",
 "gap": 10,
 "class": "Container",
 "width": "85%",
 "backgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "overflow": "visible",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "verticalAlign": "top",
 "gap": 0,
 "class": "Container",
 "width": "50%",
 "backgroundOpacity": 1,
 "scrollBarColor": "#0069A3",
 "minHeight": 1,
 "paddingLeft": 50,
 "contentOpaque": false,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51,
 "paddingRight": 50,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "verticalAlign": "middle",
 "class": "IconButton",
 "width": "25%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "height": 140,
 "borderRadius": 0,
 "shadow": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "itemPaddingLeft": 3,
 "scrollBarColor": "#04A3E1",
 "backgroundOpacity": 0.05,
 "itemVerticalAlign": "top",
 "itemThumbnailScaleMode": "fit_outside",
 "paddingLeft": 70,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingTop": 3,
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadow": true,
 "itemBackgroundColor": [],
 "itemLabelFontColor": "#666666",
 "height": "100%",
 "paddingTop": 10,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailOpacity": 1,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "itemThumbnailWidth": 220,
 "itemLabelGap": 7,
 "selectedItemLabelFontColor": "#04A3E1",
 "horizontalAlign": "center",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadow": true,
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "paddingRight": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingBottom": 70,
 "itemOpacity": 1,
 "itemMode": "normal",
 "backgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "gap": 26,
 "itemThumbnailBorderRadius": 0,
 "itemMaxWidth": 1000,
 "class": "ThumbnailGrid",
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontWeight": "normal",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemMinHeight": 50,
 "minHeight": 1,
 "itemMaxHeight": 1000,
 "itemLabelTextDecoration": "none",
 "propagateClick": false,
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelFontSize": 14,
 "shadow": false,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "minWidth": 1,
 "itemMinWidth": 50,
 "itemLabelFontFamily": "Montserrat",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemWidth": 220,
 "itemBackgroundOpacity": 0,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "itemThumbnailHeight": 125,
 "itemLabelPosition": "bottom",
 "itemHeight": 156,
 "itemBorderRadius": 0,
 "itemLabelFontStyle": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelHorizontalAlign": "center"
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "layout": "absolute",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "verticalAlign": "middle",
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 },
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "overflow": "scroll",
 "verticalAlign": "top",
 "gap": 0,
 "class": "Container",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "minHeight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "height": 60,
 "borderRadius": 0,
 "shadow": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingTop": 20,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 30,
 "scrollBarVisible": "rollOver",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "overflow": "scroll",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#E73B2C",
 "minHeight": 520,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "layout": "vertical",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "overflow": "scroll",
 "width": 370,
 "verticalAlign": "top",
 "gap": 10,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "propagateClick": false,
 "height": 40,
 "borderRadius": 0,
 "shadow": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0,
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "scrollBarColor": "#000000",
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "100%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.94vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "right": 20,
 "verticalAlign": "top",
 "class": "IconButton",
 "width": "100%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "borderSize": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 0,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "right": 20,
 "verticalAlign": "top",
 "class": "IconButton",
 "width": "10%",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "borderSize": 0,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "cursor": "hand"
},
{
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "class": "HTMLText",
 "backgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "minHeight": 1,
 "paddingLeft": 10,
 "propagateClick": false,
 "borderRadius": 0,
 "shadow": false,
 "height": "71.163%",
 "minWidth": 1,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.5vh;font-family:'Franklin Gothic Heavy';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.4vh;font-family:'Nirmala UI Semilight';\"><B>Goalpara Hills</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Goalpara Hills menawarkan hunian subsidi tipe 30/60. Terdapat 1 carport, 1 taman depan, 1 ruang tamu, 2 kamar tidur, 1 kamar mandi, dan 1 dapur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Spesifikasi Bangunan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Pondasi: Batu kali, Struktur: Beton bertulang, Dinding: Bata ringan, Double dinding, Rangkap atap: Baja ringan, Kusen jendela pintu: Kayu, Atap: Metal Roof, Plafond: Gypsum, Lantai: Keramik, Jaringan air: Sumur bor, Listrik: PLN 1300 Watt.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Fasilitas:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">CCTV 24 jam &amp; security, one gate system, jalan utama yang lebar, jalan menggunakan paving block, dan TK. </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Keunggulan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">View pegunungan, suasana sejuk &amp; asri, dekat dengan pusat kota sukabumi, dekat dengan exit tol bocimi, dekat dengan ATM center, dekat dengan sarana pendidikan, dekat dengan sarana kesehatan, dekat dengan sarana perbelanjaan, dekat dengan tempat ibadah, dekat dengan tempat wisata, dilalui dengan SPBU.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5,
 "paddingRight": 10
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "fontFamily": "Impact",
 "layout": "horizontal",
 "shadowColor": "#000000",
 "class": "Button",
 "iconHeight": 32,
 "backgroundOpacity": 0.7,
 "rollOverBackgroundOpacity": 1,
 "width": "46%",
 "fontColor": "#FFFFFF",
 "minHeight": 1,
 "paddingLeft": 0,
 "gap": 5,
 "propagateClick": false,
 "borderRadius": 50,
 "pressedBackgroundOpacity": 1,
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "minWidth": 1,
 "mode": "push",
 "shadowSpread": 1,
 "fontSize": "4vh",
 "label": "BOOK NOW !",
 "paddingTop": 0,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "9%",
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "textDecoration": "none",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "backgroundColorRatios": [
  0
 ]
}],
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "layout": "absolute"
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
