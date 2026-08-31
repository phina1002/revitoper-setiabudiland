(function(){
    var script = {
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.MapViewer",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E"
 ],
 "mobileMipmappingEnabled": false,
 "defaultVRPointer": "laser",
 "id": "rootPlayer",
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_E6B95D46_E86B_92AE_41AD_0C4D68F65E9A.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "width": "100%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "propagateClick": true,
 "gap": 10,
 "minHeight": 20,
 "paddingLeft": 0,
 "downloadEnabled": false,
 "contentOpaque": false,
 "backgroundPreloadEnabled": true,
 "shadow": false,
 "height": "100%",
 "class": "Player",
 "minWidth": 20,
 "borderRadius": 0,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.07,
  "class": "PanoramaCameraPosition",
  "pitch": 1.79
 },
 "id": "camera_E74D5D77_E86B_ED6D_4189_DEE7C7AC8200",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_FED6104E_EFEC_B281_41E3_4AD9F8384BBF",
  "this.overlay_FD8E3811_EFED_5283_41E6_895E160ACE9F"
 ],
 "class": "Panorama",
 "label": "BPB-KAMAR2",
 "id": "panorama_F4C668B0_E66F_9592_41D3_F38364B22793",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 86.04,
   "angle": 76.34,
   "y": 107.72,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "items": [
  {
   "media": "this.video_3AC07A08_725A_91D9_41CA_F6C918E35043",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E6BF2D46_E86B_92AE_41EB_CE86604B3BB5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E6BF2D46_E86B_92AE_41EB_CE86604B3BB5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_E6BF2D46_E86B_92AE_41EB_CE86604B3BB5",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -59.46,
  "class": "PanoramaCameraPosition",
  "pitch": -2.34
 },
 "id": "camera_E40C0DF2_E86B_ED66_41BB_D19F9FD3DCB4",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_camera",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_5F90B2D5_71B7_B64B_41D1_8FCA6A026F3B",
  "this.overlay_5E17EFFB_71BD_EE38_41D1_584841D6AD9E",
  "this.overlay_410883EA_71BD_9659_41AF_D5F9FEEA7833",
  "this.overlay_5F761658_71BE_BE79_41C0_4B9762EDC133",
  "this.overlay_41ED8CDE_71BE_9279_41BB_9979E920EA7D",
  "this.overlay_40B6A49C_71BE_72F8_41D8_DF5E3B2B549F"
 ],
 "fieldOfViewOverlayRadiusScale": 0.12,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayInsideColor": "#00CC00",
 "label": "Denah Bukit Pinus Banjaran - Copy",
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "width": 415,
 "id": "map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72.jpeg",
    "width": 415,
    "height": 692,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_lq.jpeg",
    "width": 198,
    "height": 331,
    "class": "ImageResourceLevel",
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "thumbnailUrl": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_t.jpg",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 692
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E6BE8D46_E86B_92AE_41C2_419E94CF59EB",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "player": "this.MapViewerMapPlayer",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_E6B95D46_E86B_92AE_41AD_0C4D68F65E9A",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.album_F884DE85_E6AB_EC72_41E4_4B799B786088",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
   "begin": "this.loopAlbum(this.playList_E6A30D46_E86B_92AE_41C0_3E6ED22B5B4B, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_E6A30D46_E86B_92AE_41C0_3E6ED22B5B4B",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 25.44,
  "class": "PanoramaCameraPosition",
  "pitch": 3.58
 },
 "id": "camera_E7191D94_E86B_EDA3_41E1_4E82C8E45C9A",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "media": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
   "camera": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "camera": "this.panorama_F495E899_E668_9595_41E0_745577909166_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
   "camera": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793",
   "camera": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A",
   "camera": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336",
   "camera": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.album_F884DE85_E6AB_EC72_41E4_4B799B786088",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.19,
  "class": "PanoramaCameraPosition",
  "pitch": 4.36
 },
 "id": "camera_E42D1DE2_E86B_ED67_41EB_0E18E0DDF7B1",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.66,
  "class": "PanoramaCameraPosition",
  "pitch": 2.34
 },
 "id": "camera_E772AD64_E86B_ED63_41A3_6FA6C35111A6",
 "class": "PanoramaCamera"
},
{
 "touchControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonCardboardView": "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.97,
  "class": "PanoramaCameraPosition",
  "pitch": 6.02
 },
 "id": "camera_E4560DE2_E86B_ED67_41D5_1D159B18471D",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 88.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0.05
 },
 "id": "camera_E73FCD84_E86B_EDA3_41E1_265020270194",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_F884DE85_E6AB_EC72_41E4_4B799B786088_AlbumPlayList",
 "id": "album_F884DE85_E6AB_EC72_41E4_4B799B786088",
 "label": "Photo Album 20240125_095352",
 "thumbnailUrl": "media/album_F884DE85_E6AB_EC72_41E4_4B799B786088_t.png",
 "class": "PhotoAlbum"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.15,
  "class": "PanoramaCameraPosition",
  "pitch": 4.27
 },
 "id": "camera_E4382DF2_E86B_ED66_41E6_0E492646BE6A",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_3114CF82_0A4D_AE89_4175_EDFA153B516C_t.jpg",
 "label": "20240104_094406",
 "id": "photo_3114CF82_0A4D_AE89_4175_EDFA153B516C",
 "width": 2268,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_3114CF82_0A4D_AE89_4175_EDFA153B516C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032,
 "class": "Photo"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -62.17,
  "class": "PanoramaCameraPosition",
  "pitch": -3.58
 },
 "id": "camera_E4055E01_E86B_EEA5_41EB_E5448174B752",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "camera_E4430DC3_E86B_EDA5_41DA_8B2FD13E1950",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_582B9B66_0AC5_F789_4196_E627992AC0ED",
  "this.overlay_582BEB66_0AC5_F789_418F_31CD88991DD6"
 ],
 "class": "Panorama",
 "label": "BPB-DAPUR",
 "id": "panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 255.72,
   "angle": 197.34,
   "y": 63.97,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "duration": 1000,
 "id": "effect_408B3009_71BA_71DB_41BE_A60054B75DE2",
 "easing": "quad_in_out",
 "class": "FadeOutEffect"
},
{
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ]
},
{
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_31F46E69_0A4D_B198_419D_6FF75F0F3A99_t.jpg",
 "label": "20231223_132012-1",
 "id": "photo_31F46E69_0A4D_B198_419D_6FF75F0F3A99",
 "width": 1080,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_31F46E69_0A4D_B198_419D_6FF75F0F3A99.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1852,
 "class": "Photo"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_4A75BC84_0A4D_B289_41A2_0FAC7D8C9DD1_t.jpg",
 "label": "20231222_105132",
 "id": "photo_4A75BC84_0A4D_B289_41A2_0FAC7D8C9DD1",
 "width": 2268,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_4A75BC84_0A4D_B289_41A2_0FAC7D8C9DD1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032,
 "class": "Photo"
},
{
 "overlays": [
  "this.overlay_F4A14A6C_E66B_F4B3_41E1_9EE2EDA34D75",
  "this.overlay_F5FFB190_E669_9793_41BC_AE7E4B30E5AB",
  "this.overlay_FFD71053_EFD4_B287_41DC_992E48DC741D",
  "this.overlay_FB5505AC_EFD5_7D81_41D6_332A1B509D9E"
 ],
 "class": "Panorama",
 "label": "BPB-R1",
 "id": "panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 314.05,
   "angle": 0,
   "y": 318.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 6.61,
  "class": "PanoramaCameraPosition",
  "pitch": 4.22
 },
 "id": "camera_E4316DF2_E86B_ED66_41E3_ADF379FAC37B",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_F495E899_E668_9595_41E0_745577909166_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 1000,
 "id": "effect_408B6009_71BA_71DB_41D5_210788E982A2",
 "easing": "quad_in_out",
 "class": "FadeInEffect"
},
{
 "label": "Bukit Pinus Banjaran",
 "scaleMode": "fit_inside",
 "width": 1080,
 "loop": false,
 "id": "video_3AC07A08_725A_91D9_41CA_F6C918E35043",
 "thumbnailUrl": "media/video_3AC07A08_725A_91D9_41CA_F6C918E35043_t.jpg",
 "height": 1920,
 "class": "Video",
 "video": {
  "width": 1080,
  "mp4Url": "media/video_3AC07A08_725A_91D9_41CA_F6C918E35043.mp4",
  "height": 1920,
  "class": "VideoResource"
 }
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_camera",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -97.99,
  "class": "PanoramaCameraPosition",
  "pitch": -2.98
 },
 "id": "camera_E75C8D77_E86B_ED6D_41E5_CC9F95EBEFC2",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 26.27,
  "class": "PanoramaCameraPosition",
  "pitch": 3.58
 },
 "id": "camera_E70EAD94_E86B_EDA3_41E4_88A615573093",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_F271FE22_E678_ACB7_41E9_7CFE7A1E5815",
  "this.overlay_F2E66447_E678_9CFE_41E9_825A8E0A7C8B",
  "this.overlay_F2B100EE_E679_958F_41DF_4679334D4220",
  "this.overlay_FD40F9A5_EFD4_B580_41D0_E28B6401C525",
  "this.overlay_FDA0F77D_EFF5_DE80_41EC_E82F6458EBAE",
  "this.overlay_FCBCB6C1_EFF7_BF83_41B5_5FA2938061A3",
  "this.overlay_FC92C236_EFF4_B681_41E2_0A185EC8F250",
  "this.overlay_FC22CE42_EFED_AE81_41B0_7864A5E1155C",
  "this.overlay_F8839952_EFD4_D280_41C7_37A240BAFBC7",
  "this.overlay_34464452_0A44_9189_4196_26C3B51E624D"
 ],
 "class": "Panorama",
 "label": "BPB-R2",
 "id": "panorama_F495E899_E668_9595_41E0_745577909166",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F495E899_E668_9595_41E0_745577909166_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_F495E899_E668_9595_41E0_745577909166_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 229.21,
   "angle": 152.98,
   "y": 208.47,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "items": [
  "this.PanoramaPlayListItem_E6B29D46_E86B_92AE_41EA_8A151BF97069",
  "this.PanoramaPlayListItem_E6B6CD46_E86B_92AE_41E6_3B2F827E616B",
  "this.PanoramaPlayListItem_E6B65D46_E86B_92AE_41DE_28AB863A0901",
  "this.PanoramaPlayListItem_E6B6AD46_E86B_92AE_41E0_E658DB4DF6E2",
  "this.PanoramaPlayListItem_E6B66D46_E86B_92AE_41E5_F225A46BFA9E",
  "this.PanoramaPlayListItem_E6B7ED46_E86B_92AE_41E0_3F2E326E4B74",
  {
   "media": "this.album_F884DE85_E6AB_EC72_41E4_4B799B786088",
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
 "duration": 5000,
 "thumbnailUrl": "media/photo_311332EE_0A4D_9699_41A3_629517D02CF9_t.jpg",
 "label": "20240125_095352",
 "id": "photo_311332EE_0A4D_9699_41A3_629517D02CF9",
 "width": 2268,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_311332EE_0A4D_9699_41A3_629517D02CF9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032,
 "class": "Photo"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0.37
 },
 "id": "camera_E760BD64_E86B_ED63_41EB_346B84F43631",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -143.45,
  "class": "PanoramaCameraPosition",
  "pitch": 4.78
 },
 "id": "camera_E696FD64_E86B_ED63_41A7_141580DC08AA",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 147.35,
  "class": "PanoramaCameraPosition",
  "pitch": -0.23
 },
 "id": "camera_E4118E01_E86B_EEA5_41E1_8C45B82A0628",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "camera_E444DDD2_E86B_EDA7_41EA_94DF0C3490FD",
 "class": "PanoramaCamera"
},
{
 "overlays": [
  "this.overlay_FE2CAA72_EFF7_5681_41D1_E16B1717B430"
 ],
 "class": "Panorama",
 "label": "BPB-TOILET",
 "id": "panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 340.57,
   "angle": 97.04,
   "y": 171.35,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F495E899_E668_9595_41E0_745577909166",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "overlays": [
  "this.overlay_FD247EE9_EFDF_6F83_41E2_94B4C819454F",
  "this.overlay_FF2CEF98_EFD4_ED81_41E2_E1B8C1BFD5D8"
 ],
 "class": "Panorama",
 "label": "BPB-KAMAR1",
 "id": "panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
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
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "rowCount": 4,
      "width": 2048,
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "height": 512,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "thumbnailUrl": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_t.jpg",
 "mapLocations": [
  {
   "map": "this.map_404189BB_71AA_B23F_41D5_AC9D0CF63E72",
   "x": 83.39,
   "angle": 154.99,
   "y": 315.85,
   "class": "PanoramaMapLocation"
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained",
 "class": "MapPlayer"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0.73
 },
 "id": "camera_E45E5DD2_E86B_EDA7_41E1_A6F39B381755",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 89.77,
  "class": "PanoramaCameraPosition",
  "pitch": 2.25
 },
 "id": "camera_E72F7D84_E86B_EDA3_41AF_A56498CB8255",
 "class": "PanoramaCamera"
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
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
 "id": "panorama_F4C668B0_E66F_9592_41D3_F38364B22793_camera",
 "class": "PanoramaCamera"
},
{
 "duration": 5000,
 "thumbnailUrl": "media/photo_311DF148_0A4D_9399_41A4_A0A120E5FC4A_t.jpg",
 "label": "20240104_094454-1",
 "id": "photo_311DF148_0A4D_9399_41A4_A0A120E5FC4A",
 "width": 2268,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_311DF148_0A4D_9399_41A4_A0A120E5FC4A.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4032,
 "class": "Photo"
},
{
 "left": 0,
 "toolTipFontWeight": "normal",
 "progressBorderColor": "#FFFFFF",
 "id": "MainViewer",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipPaddingRight": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarBottom": 5,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "toolTipOpacity": 0.5,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 13,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBorderSize": 0,
 "playbackBarOpacity": 1,
 "progressRight": 0,
 "progressBarBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "propagateClick": true,
 "displayTooltipInTouchScreens": true,
 "minHeight": 50,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBorderSize": 0,
 "minWidth": 100,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "borderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 0,
 "borderSize": 0,
 "toolTipFontFamily": "Georgia",
 "progressBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipDisplayTime": 600,
 "progressBottom": 55,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipPaddingLeft": 10,
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "width": 115.05,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "right": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "height": 641,
 "class": "Container",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "backgroundOpacity": 0.64,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "right": "0%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "propagateClick": true,
 "overflow": "visible",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "bottom": 0,
 "height": 118,
 "class": "Container",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "backgroundOpacity": 0.6,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "creationPolicy": "inAdvance",
 "right": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "overflow": "scroll",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--HOUSE INFO "
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "backgroundOpacity": 0.6,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "creationPolicy": "inAdvance",
 "right": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "overflow": "scroll",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "backgroundOpacity": 0.6,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "creationPolicy": "inAdvance",
 "right": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "overflow": "scroll",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "left": "0%",
 "toolTipFontWeight": "normal",
 "progressBorderColor": "#FFFFFF",
 "id": "MapViewer",
 "playbackBarHeadShadowOpacity": 0.7,
 "right": "86.25%",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowVerticalLength": 0,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "40%",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "playbackBarOpacity": 1,
 "progressRight": 0,
 "progressBarBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "propagateClick": false,
 "displayTooltipInTouchScreens": true,
 "minHeight": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": "0%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "shadow": false,
 "firstTransitionDuration": 0,
 "progressBorderSize": 0,
 "minWidth": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "borderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 0,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipDisplayTime": 600,
 "progressBottom": 2,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipPaddingLeft": 6,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "visible": false,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "--FLOORPLAN"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "backgroundOpacity": 0.6,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "creationPolicy": "inAdvance",
 "right": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "overflow": "scroll",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "backgroundOpacity": 0.6,
 "left": "0%",
 "layout": "absolute",
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "creationPolicy": "inAdvance",
 "right": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "overflow": "scroll",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "class": "Container",
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "visible": false,
 "paddingRight": 0,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E74D5D77_E86B_ED6D_4189_DEE7C7AC8200); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_FED6104E_EFEC_B281_41E3_4AD9F8384BBF",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.44,
   "yaw": 39.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0_HS_0_1_0_map.gif",
      "width": 57,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E75C8D77_E86B_ED6D_41E5_CC9F95EBEFC2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C01CF88_0AC7_AE98_41A4_F2264A121458",
   "yaw": 42.14,
   "pitch": 5.6,
   "hfov": 11.77,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD8E3811_EFED_5283_41E6_895E160ACE9F",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.77,
   "yaw": 42.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "left": 10,
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "width": "14.22%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton <"
 },
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "left": 10,
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "width": "14.22%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton <"
 },
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "right": 10,
 "width": "14.22%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton >"
 },
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "width": "14.22%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton >"
 },
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 65.89,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_0_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 290.85,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 65.89,
  "height": 50,
  "y": 290.85,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_0.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_5F90B2D5_71B7_B64B_41D1_8FCA6A026F3B",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 68.54,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_1_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 82.72,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 68.54,
  "height": 50,
  "y": 82.72,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_1.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_5E17EFFB_71BD_EE38_41D1_584841D6AD9E",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 323.07,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_2_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 146.35,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 323.07,
  "height": 50,
  "y": 146.35,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_2.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_410883EA_71BD_9659_41AF_D5F9FEEA7833",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 238.22,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_3_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 38.97,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 238.22,
  "height": 50,
  "y": 38.97,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_3.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_5F761658_71BE_BE79_41C0_4B9762EDC133",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 211.71,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_4_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 183.47,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 211.71,
  "height": 50,
  "y": 183.47,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_4.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_41ED8CDE_71BE_9279_41BB_9979E920EA7D",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "rollOverDisplay": false,
 "map": {
  "width": 35,
  "x": 296.55,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_5_map.gif",
     "width": 16,
     "height": 22,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 293.5,
  "offsetY": 0,
  "height": 50,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 296.55,
  "height": 50,
  "y": 293.5,
  "width": 35,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_404189BB_71AA_B23F_41D5_AC9D0CF63E72_HS_5.png",
     "width": 35,
     "height": 50,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 },
 "useHandCursor": true,
 "id": "overlay_40B6A49C_71BE_72F8_41D8_DF5E3B2B549F",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 58,
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 49,
 "backgroundOpacity": 0,
 "width": 100,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "right": 30,
 "maxHeight": 37,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 8,
 "height": 75,
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "horizontalAlign": "center",
 "visible": false,
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton VR"
 },
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png"
},
{
 "items": [
  {
   "media": "this.photo_311332EE_0A4D_9699_41A3_629517D02CF9",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.56",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_3114CF82_0A4D_AE89_4175_EDFA153B516C",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.49",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.29"
    },
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_31F46E69_0A4D_B198_419D_6FF75F0F3A99",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.40",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.74"
    },
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_311DF148_0A4D_9399_41A4_A0A120E5FC4A",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.62",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.65"
    },
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.photo_4A75BC84_0A4D_B289_41A2_0FAC7D8C9DD1",
   "camera": {
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside",
    "targetPosition": {
     "x": "0.65",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.51"
    },
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_F884DE85_E6AB_EC72_41E4_4B799B786088_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E70EAD94_E86B_EDA3_41E4_88A615573093); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_582B9B66_0AC5_F789_4196_E627992AC0ED",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.01,
   "yaw": 22.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_1_HS_0_1_0_map.gif",
      "width": 41,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E7191D94_E86B_EDA3_41E1_4E82C8E45C9A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5F761C41_0ACD_918B_4199_B86EA58B4569",
   "yaw": 22.29,
   "pitch": 9.5,
   "hfov": 11.64,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_582BEB66_0AC5_F789_418F_31CD88991DD6",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.64,
   "yaw": 22.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 9.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "left": "0%",
 "toolTipFontWeight": "normal",
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowVerticalLength": 0,
 "width": "100%",
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E6A30D46_E86B_92AE_41C0_3E6ED22B5B4B.set('selectedIndex', -1); }, this); this.playList_E6A30D46_E86B_92AE_41C0_3E6ED22B5B4B.set('selectedIndex', 0)",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "playbackBarOpacity": 1,
 "progressRight": 0,
 "progressBarBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "propagateClick": false,
 "minHeight": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": "0%",
 "toolTipShadowOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBorderSize": 0,
 "minWidth": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "borderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 0,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipDisplayTime": 600,
 "progressBottom": 2,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipPaddingLeft": 6,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736, this.camera_E760BD64_E86B_ED63_41EB_346B84F43631); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_F4A14A6C_E66B_F4B3_41E1_9EE2EDA34D75",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 18.43,
   "yaw": -57.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_0_1_0_map.gif",
      "width": 63,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736, this.camera_E772AD64_E86B_ED63_41A3_6FA6C35111A6); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_68DB2091_0ACD_9288_417F_BBE48C88AF74",
   "yaw": -57.71,
   "pitch": 4.13,
   "hfov": 10.48,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F5FFB190_E669_9793_41BC_AE7E4B30E5AB",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.48,
   "yaw": -57.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pintu Keluar/Masuk"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_FFD71053_EFD4_B287_41DC_992E48DC741D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.06,
   "yaw": -135.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_3_1_0_map.gif",
      "width": 53,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E696FD64_E86B_ED63_41A7_141580DC08AA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F85D5F88_EFD3_6D81_41E6_07C2B9768CC5",
   "yaw": -29.94,
   "pitch": -49.38,
   "hfov": 20.45,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FB5505AC_EFD5_7D81_41D6_332A1B509D9E",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.45,
   "yaw": -29.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_4_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -49.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736, this.camera_E4382DF2_E86B_ED66_41E6_0E492646BE6A); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_F271FE22_E678_ACB7_41E9_7CFE7A1E5815",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 45.75,
   "yaw": 97.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_0_1_0_map.gif",
      "width": 67,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736, this.camera_E4316DF2_E86B_ED66_41E3_ADF379FAC37B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C02FF88_0AC7_AE98_41A4_0CE7E92679B0",
   "yaw": 95.83,
   "pitch": 7.87,
   "hfov": 15.29,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F2E66447_E678_9CFE_41E9_825A8E0A7C8B",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.29,
   "yaw": 95.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 7.87,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793, this.camera_E4560DE2_E86B_ED67_41D5_1D159B18471D); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_F2B100EE_E679_958F_41DF_4679334D4220",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 45.35,
   "yaw": 148.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_2_1_0_map.gif",
      "width": 68,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793, this.camera_E42D1DE2_E86B_ED67_41EB_0E18E0DDF7B1); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kamar 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C036F88_0AC7_AE98_4168_EA408E252D44",
   "yaw": 151.52,
   "pitch": 8.18,
   "hfov": 14.99,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FD40F9A5_EFD4_B580_41D0_E28B6401C525",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.99,
   "yaw": 151.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 8.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336, this.camera_E40C0DF2_E86B_ED66_41BB_D19F9FD3DCB4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_68DA9091_0ACD_9288_41A2_E7B529A502FF",
   "yaw": -170.93,
   "pitch": 9.42,
   "hfov": 14.31,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FDA0F77D_EFF5_DE80_41EC_E82F6458EBAE",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.31,
   "yaw": -170.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 9.42,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A, this.camera_E4430DC3_E86B_EDA5_41DA_8B2FD13E1950); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_FCBCB6C1_EFF7_BF83_41B5_5FA2938061A3",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 31.15,
   "yaw": -96.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_6_1_0_map.gif",
      "width": 48,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A, this.camera_E444DDD2_E86B_EDA7_41EA_94DF0C3490FD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Toilet"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C03AF88_0AC7_AE98_419E_A736DD0F14C9",
   "yaw": -97.4,
   "pitch": 5.45,
   "hfov": 15.95,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FC92C236_EFF4_B681_41E2_0A185EC8F250",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.95,
   "yaw": -97.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pintu Keluar/Masuk"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_FC22CE42_EFED_AE81_41B0_7864A5E1155C",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.82,
   "yaw": 38.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_8_1_0_map.gif",
      "width": 81,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5, this.camera_E45E5DD2_E86B_EDA7_41E1_A6F39B381755); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F8588F88_EFD3_6D81_41D5_BD65B80C1CE4",
   "yaw": -1.86,
   "pitch": -60.96,
   "hfov": 20.17,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_F8839952_EFD4_D280_41C7_37A240BAFBC7",
 "data": {
  "label": "Circle Arrow 02b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.17,
   "yaw": -1.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_10_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -60.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336, this.camera_E4055E01_E86B_EEA5_41EB_E5448174B752); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Dapur"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_34464452_0A44_9189_4196_26C3B51E624D",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 29.16,
   "yaw": -170.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_11_1_0_map.gif",
      "width": 53,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "media": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5",
 "camera": "this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B29D46_E86B_92AE_41EA_8A151BF97069, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B29D46_E86B_92AE_41EA_8A151BF97069",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F495E899_E668_9595_41E0_745577909166",
 "camera": "this.panorama_F495E899_E668_9595_41E0_745577909166_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B6CD46_E86B_92AE_41E6_3B2F827E616B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B6CD46_E86B_92AE_41E6_3B2F827E616B",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736",
 "camera": "this.panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B65D46_E86B_92AE_41DE_28AB863A0901, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B65D46_E86B_92AE_41DE_28AB863A0901",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793",
 "camera": "this.panorama_F4C668B0_E66F_9592_41D3_F38364B22793_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B6AD46_E86B_92AE_41E0_E658DB4DF6E2, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B6AD46_E86B_92AE_41E0_E658DB4DF6E2",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A",
 "camera": "this.panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B66D46_E86B_92AE_41E5_F225A46BFA9E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B66D46_E86B_92AE_41E5_F225A46BFA9E",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336",
 "camera": "this.panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E6B7ED46_E86B_92AE_41E0_3F2E326E4B74, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E6B7ED46_E86B_92AE_41E0_3F2E326E4B74",
 "class": "PanoramaPlayListItem"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F495E899_E668_9595_41E0_745577909166, this.camera_E4118E01_E86B_EEA5_41E1_8C45B82A0628); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_F631F6E9_EFD3_BF80_41E5_E2BE4557E29A",
   "yaw": -171.23,
   "pitch": -63.74,
   "hfov": 14.59,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FE2CAA72_EFF7_5681_41D1_E16B1717B430",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.59,
   "yaw": -171.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0_HS_0_0_0_map.gif",
      "width": 28,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -63.74,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5, this.camera_E72F7D84_E86B_EDA3_41AF_A56498CB8255); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "id": "overlay_FD247EE9_EFDF_6F83_41E2_94B4C819454F",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 31.36,
   "yaw": -103.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0_HS_0_1_0_map.gif",
      "width": 69,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5, this.camera_E73FCD84_E86B_EDA3_41E1_265020270194); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6C014F88_0AC7_AE98_4181_7B1E1FE87B82",
   "yaw": -105.25,
   "pitch": 6.63,
   "hfov": 13.53,
   "distance": 100,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_FF2CEF98_EFD4_ED81_41E2_E1B8C1BFD5D8",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.53,
   "yaw": -105.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 6.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "backgroundOpacity": 0,
 "overflow": "visible",
 "layout": "horizontal",
 "width": 110,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "right": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "height": 110,
 "class": "Container",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_5DC1451F_7256_93F7_41C3_4EC31610EB51",
  "this.IconButton_5DE8CBEE_7256_9658_41D3_E6C0BD8A5B2D"
 ],
 "backgroundOpacity": 0,
 "layout": "vertical",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "right": "0%",
 "width": "91.304%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "gap": 3,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "bottom": "0%",
 "height": "85.959%",
 "shadow": false,
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "overflow": "scroll",
 "data": {
  "name": "-button set"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 3000,
 "backgroundOpacity": 0,
 "left": "0%",
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "height": 2,
 "class": "Image",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "data": {
  "name": "white line"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "backgroundOpacity": 0,
 "left": "0%",
 "layout": "horizontal",
 "width": 1199,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "propagateClick": true,
 "gap": 3,
 "minHeight": 1,
 "paddingLeft": 30,
 "contentOpaque": false,
 "bottom": "0%",
 "height": 51,
 "class": "Container",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "borderSize": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "backgroundOpacity": 1,
 "left": "10%",
 "layout": "horizontal",
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "right": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "backgroundOpacity": 0,
 "left": "10%",
 "layout": "vertical",
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "right": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "gap": 10,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "backgroundOpacity": 1,
 "left": "15%",
 "layout": "vertical",
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "right": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "backgroundOpacity": 1,
 "left": "10%",
 "layout": "horizontal",
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "right": "10%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "5%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "backgroundOpacity": 0,
 "left": "10%",
 "layout": "vertical",
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "right": "10%",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "overflow": "visible",
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "contentOpaque": false,
 "bottom": "80%",
 "class": "Container",
 "shadow": false,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "backgroundOpacity": 1,
 "left": "15%",
 "layout": "vertical",
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "right": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "gap": 10
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowHorizontalLength": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "backgroundOpacity": 1,
 "left": "15%",
 "layout": "vertical",
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "right": "15%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "verticalAlign": "top",
 "shadowOpacity": 0.3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "propagateClick": false,
 "overflow": "visible",
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "contentOpaque": false,
 "bottom": "7%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "shadow": true,
 "shadowBlurRadius": 25,
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "shadowSpread": 1,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Global"
 },
 "gap": 10
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4C668B0_E66F_9592_41D3_F38364B22793_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6C01CF88_0AC7_AE98_41A4_F2264A121458",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_582BAB66_0AC5_F789_4199_2E58EBBF6336_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_5F761C41_0ACD_918B_4199_B86EA58B4569",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_68DB2091_0ACD_9288_417F_BBE48C88AF74",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F3C66E1B_E668_AC96_41B3_1D0FF66934E5_0_HS_4_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_F85D5F88_EFD3_6D81_41E6_07C2B9768CC5",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6C02FF88_0AC7_AE98_41A4_0CE7E92679B0",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6C036F88_0AC7_AE98_4168_EA408E252D44",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_68DA9091_0ACD_9288_41A2_E7B529A502FF",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6C03AF88_0AC7_AE98_419E_A736DD0F14C9",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F495E899_E668_9595_41E0_745577909166_0_HS_10_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_F8588F88_EFD3_6D81_41D5_BD65B80C1CE4",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F41AC395_E66F_7B92_41DC_A59D0401AC9A_0_HS_0_0.png",
   "width": 1080,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_F631F6E9_EFD3_BF80_41E5_E2BE4557E29A",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "colCount": 4,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_F4D37EE6_E66F_6DBF_41DD_703100F06736_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "AnimatedImageResource_6C014F88_0AC7_AE98_4181_7B1E1FE87B82",
 "frameCount": 24,
 "class": "AnimatedImageResource"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 60,
 "class": "IconButton",
 "shadow": false,
 "transparencyActive": true,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "minWidth": 1,
 "mode": "toggle",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "image button menu"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "id": "IconButton_5DC1451F_7256_93F7_41C3_4EC31610EB51",
 "width": 50,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 50.6,
 "class": "IconButton",
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_5DC1451F_7256_93F7_41C3_4EC31610EB51_pressed_rollover.png",
 "transparencyActive": true,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_5DC1451F_7256_93F7_41C3_4EC31610EB51.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton WA"
 },
 "rollOverIconURL": "skin/IconButton_5DC1451F_7256_93F7_41C3_4EC31610EB51_rollover.png"
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 58,
 "backgroundOpacity": 0,
 "maxHeight": 58,
 "id": "IconButton_5DE8CBEE_7256_9658_41D3_E6C0BD8A5B2D",
 "width": 54.7,
 "propagateClick": true,
 "minHeight": 1,
 "paddingLeft": 0,
 "height": 56.65,
 "class": "IconButton",
 "shadow": false,
 "pressedRollOverIconURL": "skin/IconButton_5DE8CBEE_7256_9658_41D3_E6C0BD8A5B2D_pressed_rollover.png",
 "transparencyActive": true,
 "click": "this.openLink('https://www.instagram.com/bukitpinusbanjaran/', '_blank')",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_5DE8CBEE_7256_9658_41D3_E6C0BD8A5B2D.png",
 "borderSize": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton ig"
 },
 "rollOverIconURL": "skin/IconButton_5DE8CBEE_7256_9658_41D3_E6C0BD8A5B2D_rollover.png"
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 120,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "propagateClick": true,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 0,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 40,
 "class": "Button",
 "rollOverShadow": false,
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "fontSize": 12,
 "label": "HOUSE INFO",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button house info"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 130,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 40,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "PANORAMA LIST",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button panorama list"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 90,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 40,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "LOCATION",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://maps.app.goo.gl/EAVdcAeV89gWuX9BA', '_blank')",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button location"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 103,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 40,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "FLOORPLAN",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_408B6009_71BA_71DB_41D5_210788E982A2, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_408B3009_71BA_71DB_41BE_A60054B75DE2, 'hideEffect', false) }",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button floorplan"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 0.8,
 "width": 112,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "propagateClick": true,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 40,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "label": "PHOTOALBUM",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "fontStyle": "normal",
 "iconBeforeLabel": true,
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button photoalbum"
 },
 "rollOverBackgroundColor": [
  "#04A3E1"
 ]
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "backgroundOpacity": 1,
 "layout": "absolute",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "overflow": "scroll",
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarOpacity": 0.51,
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "backgroundOpacity": 1,
 "layout": "vertical",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "50%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "gap": 0,
 "minHeight": 1,
 "paddingLeft": 50,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 460,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "overflow": "visible",
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "absolute",
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 100,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "header"
 }
},
{
 "backgroundOpacity": 0.05,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "itemPaddingLeft": 3,
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "top",
 "paddingLeft": 70,
 "backgroundColor": [
  "#000000"
 ],
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadow": true,
 "height": "76.617%",
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorRatios": [],
 "paddingTop": 10,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailOpacity": 1,
 "itemThumbnailWidth": 220,
 "scrollBarWidth": 10,
 "itemLabelGap": 7,
 "selectedItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingRight": 3,
 "selectedItemThumbnailShadow": true,
 "horizontalAlign": "center",
 "itemBackgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "itemThumbnailShadow": false,
 "scrollBarVisible": "rollOver",
 "paddingRight": 70,
 "itemOpacity": 1,
 "paddingBottom": 70,
 "verticalAlign": "middle",
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontWeight": "normal",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemHorizontalAlign": "center",
 "propagateClick": false,
 "itemMinHeight": 50,
 "itemLabelTextDecoration": "none",
 "minHeight": 1,
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemLabelFontWeight": "bold",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Montserrat",
 "itemLabelFontSize": 14,
 "itemBackgroundOpacity": 0,
 "shadow": false,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "minWidth": 1,
 "borderRadius": 5,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMinWidth": 50,
 "borderSize": 0,
 "itemWidth": 220,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "scrollBarMargin": 2,
 "itemHeight": 156,
 "itemThumbnailHeight": 125,
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemLabelFontStyle": "normal",
 "itemBorderRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.WebFrame_FCE9B5F9_E668_FF95_41BF_BF525CF14070"
 ],
 "backgroundOpacity": 1,
 "layout": "absolute",
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "backgroundColorRatios": [
  0
 ],
 "width": "85%",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "overflow": "scroll",
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarOpacity": 0.51,
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "backgroundOpacity": 1,
 "layout": "vertical",
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "15%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "propagateClick": false,
 "gap": 0,
 "minHeight": 1,
 "paddingLeft": 50,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 400,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "overflow": "visible",
 "data": {
  "name": "-right"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "height": "75%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 },
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "absolute",
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 140,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "visible",
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "backgroundOpacity": 0.3,
 "layout": "absolute",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "visible",
 "data": {
  "name": "Container photo"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "maxWidth": 2000,
 "backgroundOpacity": 0,
 "left": "0%",
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "height": "100%",
 "shadow": false,
 "class": "Image",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0,
 "data": {
  "name": "Image"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "horizontal",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.79,
 "paddingBottom": 30,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 100,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "horizontal",
 "width": 370,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "left": "0%",
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "scrollBarColor": "#000000",
 "width": "77.182%",
 "propagateClick": false,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "shadow": false,
 "height": "71.429%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.12vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.12vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingRight": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "top",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "width": "100%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 },
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg"
},
{
 "paddingBottom": 0,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "left": "0%",
 "id": "WebFrame_FCE9B5F9_E668_FF95_41BF_BF525CF14070",
 "backgroundColorRatios": [
  0
 ],
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "url": "https://maps.google.com/maps?output=embed&center=-7.0529551,107.621147&z=15&q=BUKIT+PINUS+BANJARAN",
 "propagateClick": false,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "WebFrame",
 "minWidth": 1,
 "borderRadius": 0,
 "scrollEnabled": true,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingRight": 0,
 "data": {
  "name": "WebFrame16165"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "horizontal",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 0,
 "minHeight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 60,
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 20,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.79,
 "paddingBottom": 30,
 "scrollBarVisible": "rollOver",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "backgroundOpacity": 0.3,
 "layout": "vertical",
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "backgroundColorRatios": [
  0,
  1
 ],
 "width": "100%",
 "verticalAlign": "top",
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 520,
 "paddingLeft": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "height": "100%",
 "class": "Container",
 "minWidth": 100,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "overflow": "scroll",
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "layout": "horizontal",
 "width": 370,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "propagateClick": false,
 "gap": 10,
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 40,
 "class": "Container",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "left": "0%",
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "scrollBarColor": "#000000",
 "width": "77.115%",
 "propagateClick": false,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.12vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.12vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingRight": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "paddingBottom": 0,
 "verticalAlign": "top",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "right": 20,
 "width": "100%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "36.14%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 },
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg"
},
{
 "left": "0%",
 "toolTipFontWeight": "normal",
 "progressBorderColor": "#FFFFFF",
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowVerticalLength": 0,
 "width": "100%",
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "toolTipPaddingRight": 6,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarHeight": 10,
 "toolTipBorderRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowSpread": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadHeight": 15,
 "toolTipTextShadowColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "paddingRight": 0,
 "progressBarOpacity": 1,
 "toolTipOpacity": 1,
 "paddingBottom": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontSize": 12,
 "playbackBarProgressBorderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadow": true,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderColor": "#000000",
 "progressBarBorderColor": "#0066FF",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderSize": 0,
 "playbackBarOpacity": 1,
 "progressRight": 0,
 "progressBarBorderRadius": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipBorderColor": "#767676",
 "propagateClick": false,
 "displayTooltipInTouchScreens": true,
 "minHeight": 1,
 "playbackBarHeadShadowBlurRadius": 3,
 "top": "0%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerSelectionTime": 2000,
 "shadow": false,
 "firstTransitionDuration": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressBorderSize": 0,
 "minWidth": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "borderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipTextShadowOpacity": 0,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "progressBackgroundOpacity": 1,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "progressHeight": 6,
 "toolTipDisplayTime": 600,
 "progressBottom": 2,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipPaddingLeft": 6,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressOpacity": 1
},
{
 "paddingBottom": 0,
 "verticalAlign": "top",
 "maxWidth": 60,
 "backgroundOpacity": 0,
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "width": "10%",
 "propagateClick": false,
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "height": "10%",
 "shadow": false,
 "class": "IconButton",
 "transparencyActive": false,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 50,
 "mode": "push",
 "borderRadius": 0,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "horizontalAlign": "right",
 "paddingRight": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 },
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg"
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "paddingLeft": 10,
 "shadow": false,
 "height": "60.888%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Nirmala UI Semilight';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.4vh;font-family:'Nirmala UI Semilight';\"><B>Bukit Pinus Banjaran</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Bukit Pinus Banjaran menawarkan hunian subsidi tipe 30/60. Terdapat 1 carport, 1 taman depan, 1 ruang tamu, 2 kamar tidur, 1 kamar mandi, dan 1 dapur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Spesifikasi Bangunan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Pondasi: Batu kali, Struktur: Beton bertulang, Dinding: Bata ringan, Rangkap atap: Baja ringan, Kusen jendela pintu: Kayu, Atap: Metal Roof, Plafond: Gypsum, Lantai: Keramik, Jaringan air: Sumur bor, Listrik: PLN 1300 Watt.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Fasilitas:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">CCTV 24 jam &amp; security, jalan utama yang lebar, jalan menggunakan paving block.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Keunggulan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.56vh;font-family:'Nirmala UI Semilight';\">Suasana sejuk &amp; asri, dekat dengan pusat kota banjaran, dekat dengan exit tol seroja, dekat dengan sarana pendidikan, dekat dengan sarana perbelanjaan, dekat dengan tempat wisata. </SPAN></SPAN></DIV></div>",
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0.7,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "fontFamily": "Impact",
 "backgroundColorRatios": [
  0
 ],
 "width": "46%",
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadow": false,
 "shadowBlurRadius": 6,
 "class": "Button",
 "fontSize": "4vh",
 "label": "BOOK NOW !",
 "minWidth": 1,
 "mode": "push",
 "borderRadius": 50,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "height": "9%",
 "horizontalAlign": "center",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button"
 },
 "gap": 5
},
{
 "scrollBarOpacity": 0.5,
 "paddingBottom": 20,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "scrollBarColor": "#04A3E1",
 "width": "100%",
 "propagateClick": false,
 "minHeight": 1,
 "paddingLeft": 10,
 "shadow": false,
 "height": "100%",
 "class": "HTMLText",
 "minWidth": 1,
 "borderRadius": 0,
 "paddingTop": 0,
 "borderSize": 0,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.68vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.4vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.83vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.11vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.11vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.12vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.55vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "paddingRight": 10,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "paddingBottom": 0,
 "iconWidth": 32,
 "verticalAlign": "middle",
 "backgroundOpacity": 0.7,
 "layout": "horizontal",
 "rollOverBackgroundOpacity": 1,
 "width": 207,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "fontFamily": "Bebas Neue Bold",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "propagateClick": false,
 "borderColor": "#000000",
 "minHeight": 1,
 "iconHeight": 32,
 "paddingLeft": 0,
 "pressedBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "height": 59,
 "class": "Button",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontColor": "#FFFFFF",
 "fontSize": 34,
 "label": "lorem ipsum",
 "minWidth": 1,
 "mode": "push",
 "shadowBlurRadius": 6,
 "borderRadius": 0,
 "iconBeforeLabel": true,
 "paddingTop": 0,
 "borderSize": 0,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "horizontalAlign": "center",
 "visible": false,
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "cursor": "hand",
 "data": {
  "name": "Button"
 },
 "gap": 5
}],
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "data": {
  "name": "Player468"
 }
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
