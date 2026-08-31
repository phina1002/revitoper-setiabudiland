(function(){
    var script = {
 "paddingBottom": 0,
 "overflow": "visible",
 "backgroundPreloadEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.MapViewer",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "borderRadius": 0,
 "minHeight": 20,
 "paddingLeft": 0,
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_E4F6A3A8_E864_7C68_41C0_886CA36C5A37.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "downloadEnabled": false,
 "scripts": {
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getKey": function(key){  return window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; }
 },
 "shadow": false,
 "propagateClick": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "borderSize": 0,
 "defaultVRPointer": "laser",
 "minWidth": 20,
 "class": "Player",
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 26.68,
  "pitch": -0.18
 },
 "id": "camera_E51AB416_E864_6439_41B5_97E8B47EF583",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_C67B5E4B_E617_7F08_41DE_2DDFB50C27DE",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.53,
  "pitch": 0.05
 },
 "id": "panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.99,
  "pitch": -9.69
 },
 "id": "camera_E4AFE3C7_E864_7C18_41D1_FE682CB5CE37",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96"
},
{
 "movementMode": "constrained",
 "class": "MapPlayer",
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 23.01,
  "pitch": 0.37
 },
 "id": "camera_E5151416_E864_6439_41E9_1B5572F0B2C0",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "duration": 5000,
 "height": 4032,
 "label": "IMG-20240405-WA0063",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_1",
 "width": 2268,
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_1_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "height": 4032,
 "label": "IMG-20240405-WA0062",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_0",
 "width": 2268,
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_0_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E4F1E3A8_E864_7C68_41DC_EB7245D505C7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E4F1E3A8_E864_7C68_41DC_EB7245D505C7, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_1896A03F_0B9D_0481_4171_B8667E4D2BA5",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E4F1E3A8_E864_7C68_41DC_EB7245D505C7"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.15,
  "pitch": 2.39
 },
 "id": "camera_E5EB4425_E864_6418_41DF_40DC38E553F3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 116.59,
  "pitch": -17.77
 },
 "id": "camera_E524E3F6_E864_63F8_41E6_FC3834625E5A",
 "automaticZoomSpeed": 10
},
{
 "overlays": [
  "this.overlay_62CC3505_7129_5A6E_41D0_AD3F88160082",
  "this.overlay_62CFE505_7129_5A6E_41CD_636F8262632D"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": 175.28,
   "y": 55.48,
   "x": 131.67
  }
 ],
 "label": "BCA-DAPUR",
 "id": "panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_AlbumPlayList",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD",
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_t.png",
 "label": "Photo Album IMG-20240405-WA0062"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -151.26,
  "pitch": -8.68
 },
 "id": "camera_E4BD83C7_E864_7C18_41E0_2903E5E8F2AA",
 "automaticZoomSpeed": 10
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_5043B33B_70EE_0483_41BA_2FFF86E57B53",
 "easing": "quad_in_out"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F095AF5A_E51B_A484_41E5_97614E864D90_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.43,
  "pitch": 0
 },
 "id": "camera_E5FB3425_E864_6418_41EB_43FA2E9BAA89",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E4F053A8_E864_7C68_41E4_E142D621A58E"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 117.14,
  "pitch": -17.22
 },
 "id": "camera_E556C3F6_E864_63F8_41C3_D5869335A7F6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5D92435_E864_647B_41E9_108CA6A9237E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.74,
  "pitch": -1.33
 },
 "id": "camera_E5D93435_E864_647B_41E3_7F06ABD16838",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "duration": 5000,
 "height": 4032,
 "label": "IMG-20240405-WA0065",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_3",
 "width": 1816,
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_3_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "Video",
 "label": "Bukit Cibadak Asri",
 "scaleMode": "fit_inside",
 "width": 720,
 "loop": false,
 "id": "video_1896A03F_0B9D_0481_4171_B8667E4D2BA5",
 "thumbnailUrl": "media/video_1896A03F_0B9D_0481_4171_B8667E4D2BA5_t.jpg",
 "height": 1280,
 "video": {
  "width": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_1896A03F_0B9D_0481_4171_B8667E4D2BA5.mp4",
  "height": 1280
 }
},
{
 "overlays": [
  "this.overlay_F39157B1_E507_A387_41DD_F6679C5B41ED",
  "this.overlay_F2913B43_E506_EC8B_41E1_E45895404F96",
  "this.overlay_FCF8EAAE_E53A_AD9C_41E1_F2E535EB787C",
  "this.overlay_FD65A18F_E53A_DF9C_41D9_94993DFBE88D",
  "this.overlay_FCFB0AC0_E539_AD85_41E2_71C87830C8AB",
  "this.overlay_FF4C807B_E539_DC84_41CB_B189E14112D9",
  "this.overlay_0077CFF5_0F6E_5DA3_418C_824AF45876B5",
  "this.overlay_14861B38_0F6A_E6A2_41A3_FEEB82D4C12E"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": 346.8,
   "y": 201.23,
   "x": 183.3
  }
 ],
 "label": "BCA-R2",
 "id": "panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbumPlayer",
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer",
 "viewerArea": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.84,
  "pitch": -7.3
 },
 "id": "camera_E5052405_E864_641B_41D0_30E8C4227943",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "buttonNext": "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "buttonPrevious": "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
},
{
 "overlays": [
  "this.overlay_FC2B0254_E51B_5C8D_41D8_E18F39892704",
  "this.overlay_F86D089A_E50B_6D85_41E3_B16204C228A8"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": 0,
   "y": 173.43,
   "x": 76.08
  }
 ],
 "label": "BCA-TOILET",
 "id": "panorama_F251F738_E519_6485_41E6_4CD1059E1483",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "overlays": [
  "this.overlay_FD082822_E50B_AC84_41CC_AA05AE444347",
  "this.overlay_FC7C7935_E507_AC8F_41D2_EE6431AB5EAB"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": 213.25,
   "y": 107.24,
   "x": 323.62
  }
 ],
 "label": "BCA-KAMAR2",
 "id": "panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD",
   "begin": "this.loopAlbum(this.playList_E4EC6398_E864_7C28_41E9_D725A369FC5C, 0)",
   "player": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9CPhotoAlbumPlayer"
  }
 ],
 "id": "playList_E4EC6398_E864_7C28_41E9_D725A369FC5C"
},
{
 "overlays": [
  "this.overlay_17274F72_0F7A_7EA6_41A6_8F063F2A0795",
  "this.overlay_16295883_0F6A_6266_414A_9C0579B727A8"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": -4.28,
   "y": 326.98,
   "x": 332.88
  }
 ],
 "label": "BCA-KAMAR1",
 "id": "panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_5043833B_70EE_0483_41D1_47B6E179C2C1",
 "easing": "quad_in_out"
},
{
 "overlays": [
  "this.overlay_F156AFD9_E51A_A387_41E3_4606D149F986",
  "this.overlay_F3D748C5_E50A_AD8F_41E1_75AF35A07677",
  "this.overlay_F2165178_E53F_DC85_41DA_1E10D22830C4",
  "this.overlay_000649E9_0F6F_A5A2_41A6_EA52F7661823"
 ],
 "mapLocations": [
  {
   "map": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "class": "PanoramaMapLocation",
   "angle": 93.27,
   "y": 325.66,
   "x": 131.61
  }
 ],
 "label": "BCA-R1",
 "id": "panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "hfov": 360,
 "class": "Panorama",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
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
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
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
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "height": 2048,
      "rowCount": 4,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "height": 1024,
      "rowCount": 2,
      "tags": "ondemand"
     },
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "height": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ]
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_t.jpg"
  }
 ],
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_t.jpg",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
   "class": "AdjacentPanorama"
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  "this.PanoramaPlayListItem_E4F2C3A8_E864_7C68_41DC_D8369D5FA745",
  "this.PanoramaPlayListItem_E4F933A8_E864_7C68_41DF_CB9B5CBAE0EB",
  "this.PanoramaPlayListItem_E4FE53A8_E864_7C68_41B9_9BC71DEFEEBA",
  "this.PanoramaPlayListItem_E4FEF3A8_E864_7C68_41E6_FA384ACEA52C",
  "this.PanoramaPlayListItem_E4F963A8_E864_7C68_41C5_B4A908D7C95B",
  "this.PanoramaPlayListItem_E4F813A8_E864_7C68_419B_1C5AFE898A0B",
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "Photo",
 "duration": 5000,
 "height": 4032,
 "label": "IMG-20240405-WA0064",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_2",
 "width": 2268,
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_2_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E5C94425_E864_6418_41E6_24DD5CE54E49",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.62,
  "pitch": 2.07
 },
 "id": "camera_E5C92425_E864_6418_41C0_6DFF986B305E",
 "automaticZoomSpeed": 10
},
{
 "class": "VideoPlayer",
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -52.3,
  "pitch": 9.73
 },
 "id": "camera_E493B3D6_E864_7C39_41D2_06D09DE8C084",
 "automaticZoomSpeed": 10
},
{
 "class": "Photo",
 "duration": 5000,
 "height": 1600,
 "label": "IMG-20240405-WA0068",
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_4",
 "width": 900,
 "thumbnailUrl": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_4_t.jpg",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "MapPlayListItem",
   "media": "this.map_7F00E600_711B_2666_41D1_5BC4770A70A6",
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_E4F6A3A8_E864_7C68_41C0_886CA36C5A37"
},
{
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_E54123E6_E864_7C18_41E2_6DE425E9BE43",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.14,
  "pitch": -0.64
 },
 "id": "camera_E54133E6_E864_7C18_41D8_486E481D2A27",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 165.99,
  "pitch": -5.37
 },
 "id": "camera_E5371405_E864_641B_41C8_A5E99D00CC36",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.26,
  "pitch": 0
 },
 "id": "camera_E4DE43B7_E864_7C67_41D3_45AB3A04039C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.34,
  "pitch": 2.3
 },
 "id": "camera_E48D73D6_E864_7C39_41EB_5DE90D7F3866",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_F251F738_E519_6485_41E6_4CD1059E1483_camera",
 "automaticZoomSpeed": 10
},
{
 "overlays": [
  "this.overlay_7C59384A_711A_EAFA_41D8_AA54DB1E1C42",
  "this.overlay_7F27909C_7119_DB9F_41CF_C8032E678B45",
  "this.overlay_7C7B1332_7119_7EAB_419B_921329369E78",
  "this.overlay_7CBFE171_7119_3AA9_41D8_8935FFF03A2B",
  "this.overlay_7CF3979C_711E_E59F_41D3_52A791CF393F",
  "this.overlay_7C853820_711F_2AA6_41C1_2869AD0856AB"
 ],
 "width": 414,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "Denah Bukit Cibadak Asri",
 "id": "map_7F00E600_711B_2666_41D1_5BC4770A70A6",
 "maximumZoomFactor": 1.2,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6.jpeg",
    "class": "ImageResourceLevel",
    "width": 414,
    "height": 691
   },
   {
    "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_lq.jpeg",
    "class": "ImageResourceLevel",
    "width": 198,
    "height": 331,
    "tags": "preload"
   }
  ]
 },
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayRadiusScale": 0.08,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#00CC00",
 "thumbnailUrl": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_t.jpg",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "height": 691
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.42,
  "pitch": -5.23
 },
 "id": "camera_E57313E6_E864_7C18_41E9_0486017F3F8F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.13,
  "pitch": -5.56
 },
 "id": "camera_E56353E6_E864_7C18_41B6_C8CAFBD4550E",
 "automaticZoomSpeed": 10
},
{
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "left": 0,
 "width": "100%",
 "toolTipBorderSize": 1,
 "toolTipBorderRadius": 3,
 "id": "MainViewer",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 3000,
 "toolTipPaddingLeft": 10,
 "borderRadius": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressRight": 0,
 "playbackBarBottom": 5,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingTop": 7,
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "paddingTop": 0,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontColor": "#FFFFFF",
 "transitionMode": "blending",
 "class": "ViewerArea",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 4000,
 "firstTransitionDuration": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBottom": 55,
 "toolTipShadowOpacity": 0,
 "paddingBottom": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipOpacity": 0.5,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressBorderSize": 0,
 "toolTipFontSize": "13px",
 "minHeight": 50,
 "top": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "toolTipFontFamily": "Georgia",
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "propagateClick": true,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "borderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "minWidth": 100,
 "progressBarBorderSize": 6,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "layout": "absolute",
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "verticalAlign": "top",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "shadow": false,
 "height": 641,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "borderRadius": 0,
 "scrollBarColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 0,
 "contentOpaque": false,
 "shadow": false,
 "height": 118,
 "backgroundOpacity": 0.64,
 "propagateClick": true,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "--MENU"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0.6,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "--HOUSE INFO"
 },
 "scrollBarMargin": 2,
 "visible": false,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0.6,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarMargin": 2,
 "visible": false,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "left": "0%",
 "toolTipBorderSize": 1,
 "toolTipBorderRadius": 3,
 "id": "MapViewer",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 3000,
 "right": "86.25%",
 "toolTipPaddingLeft": 10,
 "borderRadius": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressRight": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingTop": 7,
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "paddingTop": 0,
 "height": "40%",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontColor": "#FFFFFF",
 "transitionMode": "blending",
 "class": "ViewerArea",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 4000,
 "firstTransitionDuration": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipShadowOpacity": 0,
 "paddingBottom": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipOpacity": 0.5,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressBorderSize": 0,
 "toolTipFontSize": "13px",
 "minHeight": 1,
 "top": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "toolTipFontFamily": "Georgia",
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "propagateClick": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "borderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "minWidth": 1,
 "progressBarBorderSize": 6,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 },
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "bottom": "0%",
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundOpacity": 0.6,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarMargin": 2,
 "visible": false,
 "scrollBarWidth": 10,
 "show": "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_E4EC6398_E864_7C28_41E9_D725A369FC5C.set('selectedIndex', -1); }, this); this.playList_E4EC6398_E864_7C28_41E9_D725A369FC5C.set('selectedIndex', 0)",
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_C67B5E4B_E617_7F08_41DE_2DDFB50C27DE",
 "restartMovementOnUserInteraction": false
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E56353E6_E864_7C18_41B6_C8CAFBD4550E); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 67,
      "height": 200
     }
    ]
   },
   "pitch": -1.25,
   "hfov": 44.71
  }
 ],
 "useHandCursor": true,
 "id": "overlay_62CC3505_7129_5A6E_41D0_AD3F88160082",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E57313E6_E864_7C18_41E9_0486017F3F8F); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 10.32,
   "hfov": 21.75
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6592BCE3_7129_2BA9_41C0_C9843DD04735",
   "pitch": 10.32,
   "yaw": -52.14,
   "hfov": 21.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_62CFE505_7129_5A6E_41CD_636F8262632D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_4",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "zoomFactor": 1.1,
     "y": "0.44"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_2",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.27",
     "zoomFactor": 1.1,
     "y": "0.66"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_1",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.36",
     "zoomFactor": 1.1,
     "y": "0.27"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_0",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.49"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_3",
   "camera": {
    "class": "MovementPhotoCamera",
    "duration": 5000,
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "easing": "linear",
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_10685FE1_0BAB_1B81_4197_0D352C8E5BDD_AlbumPlayList"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_E5D92435_E864_647B_41E9_108CA6A9237E",
 "restartMovementOnUserInteraction": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A, this.camera_E556C3F6_E864_63F8_41C3_D5869335A7F6); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "Kamar 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 200
     }
    ]
   },
   "pitch": -3.97,
   "hfov": 48.11
  }
 ],
 "useHandCursor": true,
 "id": "overlay_F39157B1_E507_A387_41DD_F6679C5B41ED",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 200
     }
    ]
   },
   "pitch": -3.29,
   "hfov": 48.12
  }
 ],
 "useHandCursor": true,
 "id": "overlay_F2913B43_E506_EC8B_41E1_E45895404F96",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226, this.camera_E5151416_E864_6439_41E9_1B5572F0B2C0); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Dapur"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 81,
      "height": 200
     }
    ]
   },
   "pitch": -2.75,
   "hfov": 42.75
  }
 ],
 "useHandCursor": true,
 "id": "overlay_FCF8EAAE_E53A_AD9C_41E1_F2E535EB787C",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F251F738_E519_6485_41E6_4CD1059E1483, this.camera_E5371405_E864_641B_41C8_A5E99D00CC36); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Toilet"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.21,
   "hfov": 17.97
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_19F64322_0F75_E6A6_417F_1FF01ED38740",
   "pitch": 11.21,
   "yaw": -52.24,
   "hfov": 17.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FD65A18F_E53A_DF9C_41D9_94993DFBE88D",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226, this.camera_E51AB416_E864_6439_41B5_97E8B47EF583); this.mainPlayList.set('selectedIndex', 5)",
   "toolTip": "Dapur"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 11.03,
   "hfov": 18.71
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FA1A9317_E519_BC8C_41B3_8FD038279911",
   "pitch": 11.03,
   "yaw": 13.53,
   "hfov": 18.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FCFB0AC0_E539_AD85_41E2_71C87830C8AB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A, this.camera_E524E3F6_E864_63F8_41E6_FC3834625E5A); this.mainPlayList.set('selectedIndex', 3)",
   "toolTip": "Kamar 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.67,
   "hfov": 18.8
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_19F6C322_0F75_E6A6_41A8_1ABA4D0D9BFC",
   "pitch": 9.67,
   "yaw": 61.2,
   "hfov": 18.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FF4C807B_E539_DC84_41CB_B189E14112D9",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F251F738_E519_6485_41E6_4CD1059E1483, this.camera_E5052405_E864_641B_41D0_30E8C4227943); this.mainPlayList.set('selectedIndex', 4)",
   "toolTip": "Toilet"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 200
     }
    ]
   },
   "pitch": -1.48,
   "hfov": 26.1
  }
 ],
 "useHandCursor": true,
 "id": "overlay_0077CFF5_0F6E_5DA3_418C_824AF45876B5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B, this.camera_E54133E6_E864_7C18_41D8_486E481D2A27); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -56.76,
   "hfov": 20.9
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_299FABB3_0F96_A5A6_4193_0A3A4FA6A115",
   "pitch": -56.76,
   "yaw": -176.37,
   "hfov": 20.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_14861B38_0F6A_E6A2_41A3_FEEB82D4C12E",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "toolTipPaddingBottom": 7,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "left": "0%",
 "width": "100%",
 "toolTipBorderSize": 1,
 "toolTipBorderRadius": 3,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipDisplayTime": 3000,
 "toolTipPaddingLeft": 10,
 "borderRadius": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressRight": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "transitionDuration": 500,
 "playbackBarHeadBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderRadius": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipPaddingTop": 7,
 "playbackBarHeadBorderSize": 0,
 "progressOpacity": 1,
 "paddingTop": 0,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontColor": "#FFFFFF",
 "transitionMode": "blending",
 "class": "ViewerArea",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadShadow": true,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontWeight": "normal",
 "vrPointerSelectionTime": 4000,
 "firstTransitionDuration": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadHeight": 15,
 "paddingRight": 0,
 "progressBottom": 2,
 "toolTipShadowOpacity": 0,
 "paddingBottom": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipOpacity": 0.5,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipBackgroundColor": "#000000",
 "progressBorderSize": 0,
 "toolTipFontSize": "13px",
 "minHeight": 1,
 "top": "0%",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressLeft": 0,
 "toolTipFontFamily": "Georgia",
 "progressBorderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeight": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "propagateClick": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadWidth": 6,
 "borderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderColor": "#0066FF",
 "minWidth": 1,
 "progressBarBorderSize": 6,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarRight": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarBackgroundOpacity": 1,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderRadius": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxHeight": 60,
 "maxWidth": 60,
 "right": 10,
 "width": "14.22%",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "shadow": false,
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton >"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "cursor": "hand",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "14.22%",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "shadow": false,
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton <"
 },
 "horizontalAlign": "center",
 "paddingRight": 0
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E5EB4425_E864_6418_41DF_40DC38E553F3); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 78,
      "height": 200
     }
    ]
   },
   "pitch": -6.51,
   "hfov": 56.07
  }
 ],
 "useHandCursor": true,
 "id": "overlay_FC2B0254_E51B_5C8D_41D8_E18F39892704",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E5FB3425_E864_6418_41EB_43FA2E9BAA89); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Kembali ke Ruang 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 7.39,
   "hfov": 26.43
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_2640E346_0F9D_E6EE_41AD_8D284AFF9A18",
   "pitch": 7.39,
   "yaw": 61.35,
   "hfov": 26.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F86D089A_E50B_6D85_41E3_B16204C228A8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E48D73D6_E864_7C39_41EB_5DE90D7F3866); this.mainPlayList.set('selectedIndex', 1)",
   "toolTip": "Back to room 2"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 90,
      "height": 200
     }
    ]
   },
   "pitch": -17.59,
   "hfov": 26.65
  }
 ],
 "useHandCursor": true,
 "id": "overlay_FD082822_E50B_AC84_41CC_AA05AE444347",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E493B3D6_E864_7C39_41D2_06D09DE8C084); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -9.23,
   "hfov": 15.37
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_26407337_0F9D_E6AE_41A5_8EDD930C72FF",
   "pitch": -9.23,
   "yaw": 9.6,
   "hfov": 15.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_FC7C7935_E507_AC8F_41D2_EE6431AB5EAB",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B, this.camera_E5C92425_E864_6418_41C0_6DFF986B305E); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -26.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 67,
      "height": 200
     }
    ]
   },
   "pitch": -0.79,
   "hfov": 30.82
  }
 ],
 "useHandCursor": true,
 "id": "overlay_17274F72_0F7A_7EA6_41A6_8F063F2A0795",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B, this.camera_E5D93435_E864_647B_41E3_7F06ABD16838); this.mainPlayList.set('selectedIndex', 0)",
   "toolTip": "Kembali ke Ruang 1"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 9.66,
   "hfov": 16.11
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1067FE4E_0F6D_BEFE_415F_FD9A5EE7FF66",
   "pitch": 9.66,
   "yaw": -25.2,
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_16295883_0F6A_6266_414A_9C0579B727A8",
 "data": {
  "label": "Circle Door 02"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD, this.camera_E4AFE3C7_E864_7C18_41D1_FE682CB5CE37); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 200
     }
    ]
   },
   "pitch": -1.7,
   "hfov": 18.53
  }
 ],
 "useHandCursor": true,
 "id": "overlay_F156AFD9_E51A_A387_41E3_4606D149F986",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90, this.camera_E4DE43B7_E864_7C67_41D3_45AB3A04039C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -27.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 28,
      "height": 16
     }
    ]
   },
   "pitch": -37.7,
   "hfov": 19.4
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_FA1D430F_E519_BC9B_41E7_6F9CF256F1B6",
   "pitch": -37.7,
   "yaw": -27.62,
   "hfov": 19.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F3D748C5_E50A_AD8F_41E1_75AF35A07677",
 "data": {
  "label": "Circle Arrow 02a"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD, this.camera_E4BD83C7_E864_7C18_41E0_2903E5E8F2AA); this.mainPlayList.set('selectedIndex', 2)",
   "toolTip": "Kamar 1"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -21.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 6.2,
   "hfov": 11.94
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_1065CE4E_0F6D_BEFE_4196_F5BFA0695C33",
   "pitch": 6.2,
   "yaw": -21.28,
   "hfov": 11.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F2165178_E53F_DC85_41DA_1E10D22830C4",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Pintu Keluar/Masuk"
  }
 ],
 "enabledInCardboard": true,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 53,
      "height": 200
     }
    ]
   },
   "pitch": -4.65,
   "hfov": 17.21
  }
 ],
 "useHandCursor": true,
 "id": "overlay_000649E9_0F6F_A5A2_41A6_EA52F7661823",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4F2C3A8_E864_7C68_41DC_D8369D5FA745, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "media": "this.panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4F2C3A8_E864_7C68_41DC_D8369D5FA745"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4F933A8_E864_7C68_41DF_CB9B5CBAE0EB, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "media": "this.panorama_F095AF5A_E51B_A484_41E5_97614E864D90",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4F933A8_E864_7C68_41DF_CB9B5CBAE0EB"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4FE53A8_E864_7C68_41B9_9BC71DEFEEBA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "media": "this.panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4FE53A8_E864_7C68_41B9_9BC71DEFEEBA"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4FEF3A8_E864_7C68_41E6_FA384ACEA52C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "media": "this.panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4FEF3A8_E864_7C68_41E6_FA384ACEA52C"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4F963A8_E864_7C68_41C5_B4A908D7C95B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 5)",
 "media": "this.panorama_F251F738_E519_6485_41E6_4CD1059E1483",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4F963A8_E864_7C68_41C5_B4A908D7C95B"
},
{
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_camera",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_E4F813A8_E864_7C68_419B_1C5AFE898A0B, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 5, 6)",
 "media": "this.panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_E4F813A8_E864_7C68_419B_1C5AFE898A0B"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_E5C94425_E864_6418_41E6_24DD5CE54E49",
 "restartMovementOnUserInteraction": false
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_E54123E6_E864_7C18_41E2_6DE425E9BE43",
 "restartMovementOnUserInteraction": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 295.66,
  "x": 106.17,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 295.66,
  "width": 50.89,
  "x": 106.17,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7C59384A_711A_EAFA_41D8_AA54DB1E1C42",
 "data": {
  "label": "Ruang Tamu"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 143.43,
  "x": 50.63,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 143.43,
  "width": 50.89,
  "x": 50.63,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_1.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7F27909C_7119_DB9F_41CF_C8032E678B45",
 "data": {
  "label": "Toilet"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 296.98,
  "x": 307.51,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 296.98,
  "width": 50.89,
  "x": 307.44,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_2.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7C7B1332_7119_7EAB_419B_921329369E78",
 "data": {
  "label": "Kamar 1"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 77.24,
  "x": 298.18,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 77.24,
  "width": 50.89,
  "x": 298.18,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_3.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7CBFE171_7119_3AA9_41D8_8935FFF03A2B",
 "data": {
  "label": "Kamar 2"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 171.23,
  "x": 157.86,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 171.23,
  "width": 50.89,
  "x": 157.86,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_4.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7CF3979C_711E_E59F_41D3_52A791CF393F",
 "data": {
  "label": "Ruang Tamu 2"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 50.89,
  "class": "HotspotMapOverlayMap",
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 16,
     "height": 19
    }
   ]
  },
  "y": 25.48,
  "x": 106.23,
  "offsetY": 0,
  "height": 60,
  "offsetX": 0
 },
 "class": "AreaHotspotMapOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 25.48,
  "width": 50.89,
  "x": 106.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_7F00E600_711B_2666_41D1_5BC4770A70A6_HS_5.png",
     "class": "ImageResourceLevel",
     "width": 50,
     "height": 60
    }
   ]
  },
  "height": 60
 },
 "useHandCursor": true,
 "id": "overlay_7C853820_711F_2AA6_41C1_2869AD0856AB",
 "data": {
  "label": "Dapur"
 },
 "rollOverDisplay": false
},
{
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "layout": "horizontal",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "verticalAlign": "middle",
 "scrollBarColor": "#000000",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "contentOpaque": false,
 "shadow": false,
 "height": 110,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "paddingRight": 0,
 "children": [
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "layout": "vertical",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "0%",
 "width": "91.304%",
 "gap": 3,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": "0%",
 "shadow": false,
 "height": "85.959%",
 "backgroundOpacity": 0,
 "propagateClick": true,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxHeight": 2,
 "maxWidth": 3000,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "bottom": 53,
 "shadow": false,
 "height": 2,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "data": {
  "name": "white line"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "layout": "horizontal",
 "width": 1199,
 "scrollBarVisible": "rollOver",
 "verticalAlign": "middle",
 "gap": 3,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 30,
 "bottom": "0%",
 "contentOpaque": false,
 "shadow": false,
 "height": 51,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "layout": "horizontal",
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "propagateClick": false,
 "bottom": "5%",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "layout": "vertical",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "right": "10%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "5%",
 "bottom": "80%",
 "contentOpaque": false,
 "shadow": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingTop": 20,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "propagateClick": false,
 "bottom": "7%",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "layout": "vertical",
 "verticalAlign": "top",
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "right": "15%",
 "shadowHorizontalLength": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "7%",
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "shadowSpread": 1,
 "contentOpaque": false,
 "borderRadius": 0,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "propagateClick": false,
 "bottom": "7%",
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "shadowOpacity": 0.3,
 "scrollBarOpacity": 0.5
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_62CC2505_7129_5A6E_41D3_E9B6A99A0226_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_6592BCE3_7129_2BA9_41C0_C9843DD04735",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_19F64322_0F75_E6A6_417F_1FF01ED38740",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_FA1A9317_E519_BC8C_41B3_8FD038279911",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_19F6C322_0F75_E6A6_41A8_1ABA4D0D9BFC",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F095AF5A_E51B_A484_41E5_97614E864D90_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_299FABB3_0F96_A5A6_4193_0A3A4FA6A115",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F251F738_E519_6485_41E6_4CD1059E1483_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_2640E346_0F9D_E6EE_41AD_8D284AFF9A18",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F09BA257_E51A_DC8C_41D3_B936A8EA5B7A_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_26407337_0F9D_E6AE_41A5_8EDD930C72FF",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F0900A7F_E51A_AD7C_41C1_AE5A8520D2FD_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1067FE4E_0F6D_BEFE_415F_FD9A5EE7FF66",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_FA1D430F_E519_BC9B_41E7_6F9CF256F1B6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "levels": [
  {
   "url": "media/panorama_F6E95A74_E51B_6C8D_41D1_731D99C21D4B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1065CE4E_0F6D_BEFE_4196_F5BFA0695C33",
 "rowCount": 6,
 "frameCount": 24
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxHeight": 60,
 "maxWidth": 60,
 "width": 60,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "shadow": false,
 "height": 60,
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "toggle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 50.65,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "shadow": false,
 "height": 50.65,
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton WA"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxHeight": 58,
 "maxWidth": 58,
 "width": 58,
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "shadow": false,
 "height": 58,
 "transparencyActive": true,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.openLink('https://www.instagram.com/bukitcibadakasri/', '_blank')",
 "minWidth": 1,
 "class": "IconButton",
 "data": {
  "name": "IconButton IG"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "iconWidth": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "layout": "horizontal",
 "width": 120,
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 0,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "label": "HOUSE INFO",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "rollOverShadow": false,
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button house info"
 }
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "layout": "horizontal",
 "width": 130,
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "label": "PANORAMA LIST",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button panorama list"
 }
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "layout": "horizontal",
 "width": 90,
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "label": "LOCATION",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "this.openLink('https://maps.app.goo.gl/NtSRWadW1WdV7KxX9', '_blank')",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button location"
 }
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "layout": "horizontal",
 "width": 103,
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "label": "FLOORPLAN",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_5043833B_70EE_0483_41D1_47B6E179C2C1, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_5043B33B_70EE_0483_41BA_2FFF86E57B53, 'hideEffect', false) }",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button floorplan"
 }
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "layout": "horizontal",
 "width": 112,
 "fontFamily": "Montserrat",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "rollOverBackgroundOpacity": 0.8,
 "iconHeight": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "shadowSpread": 1,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 40,
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "label": "PHOTOALBUM",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "shadowBlurRadius": 15,
 "fontStyle": "normal",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "bold",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button photoalbum"
 }
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "layout": "absolute",
 "verticalAlign": "middle",
 "scrollBarVisible": "rollOver",
 "width": "85%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 1,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 20,
 "overflow": "visible",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "layout": "vertical",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "width": "50%",
 "gap": 0,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#0069A3",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 50,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingTop": 20,
 "borderSize": 0,
 "minWidth": 460,
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "scrollBarOpacity": 0.51
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxHeight": 60,
 "maxWidth": 60,
 "width": "25%",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "borderRadius": 0,
 "minHeight": 50,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "shadow": false,
 "height": "75%",
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "mode": "push",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "horizontalAlign": "center",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 140,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "itemLabelFontSize": 14,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemPaddingBottom": 3,
 "width": "100%",
 "itemLabelTextDecoration": "none",
 "borderRadius": 5,
 "itemLabelFontFamily": "Montserrat",
 "scrollBarColor": "#04A3E1",
 "itemLabelFontStyle": "normal",
 "backgroundColorRatios": [
  0
 ],
 "itemBorderRadius": 0,
 "paddingLeft": 70,
 "itemMaxWidth": 1000,
 "itemVerticalAlign": "top",
 "itemLabelHorizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "itemThumbnailScaleMode": "fit_outside",
 "height": "100%",
 "itemThumbnailWidth": 220,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemLabelGap": 7,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarWidth": 10,
 "itemPaddingRight": 3,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 70,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadow": true,
 "verticalAlign": "middle",
 "itemThumbnailShadow": false,
 "scrollBarVisible": "rollOver",
 "paddingRight": 70,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelFontColor": "#666666",
 "gap": 26,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadow": true,
 "itemOpacity": 1,
 "minHeight": 1,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMinHeight": 50,
 "itemThumbnailBorderRadius": 0,
 "shadow": false,
 "itemLabelFontWeight": "normal",
 "itemBackgroundColorDirection": "vertical",
 "backgroundOpacity": 0.05,
 "propagateClick": false,
 "itemMaxHeight": 1000,
 "rollOverItemLabelFontColor": "#04A3E1",
 "minWidth": 1,
 "borderSize": 0,
 "itemMode": "normal",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemMinWidth": 50,
 "data": {
  "name": "ThumbnailList"
 },
 "itemBackgroundOpacity": 0,
 "itemThumbnailHeight": 125,
 "scrollBarMargin": 2,
 "itemHeight": 156,
 "itemWidth": 220,
 "rollOverItemThumbnailShadowColor": "#04A3E1"
},
{
 "paddingBottom": 0,
 "overflow": "visible",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "layout": "absolute",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "Container photo"
 },
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "width": "100%",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 0,
 "top": "0%",
 "shadow": false,
 "height": "100%",
 "backgroundOpacity": 0,
 "propagateClick": false,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Image",
 "data": {
  "name": "Image"
 },
 "horizontalAlign": "center",
 "scaleMode": "fit_outside",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "layout": "horizontal",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 60,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 20,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 30,
 "overflow": "scroll",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "layout": "vertical",
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "width": "100%",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#E73B2C",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 520,
 "paddingLeft": 0,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "contentOpaque": false,
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 100,
 "class": "Container",
 "data": {
  "name": "Container text"
 },
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.79
},
{
 "paddingBottom": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "layout": "horizontal",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "paddingLeft": 0,
 "contentOpaque": false,
 "height": 40,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundOpacity": 0.3,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "paddingRight": 0,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "minHeight": 100,
 "paddingLeft": 80,
 "top": "0%",
 "shadow": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.94vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.94vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxHeight": 60,
 "maxWidth": 60,
 "right": 20,
 "width": "100%",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "shadow": false,
 "height": "36.14%",
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "mode": "push",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 0,
 "verticalAlign": "top",
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxHeight": 60,
 "maxWidth": 60,
 "right": 20,
 "width": "10%",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "minHeight": 50,
 "paddingLeft": 0,
 "top": 20,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "shadow": false,
 "height": "10%",
 "transparencyActive": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minWidth": 50,
 "class": "IconButton",
 "data": {
  "name": "IconButton X"
 },
 "horizontalAlign": "right",
 "cursor": "hand",
 "paddingRight": 0
},
{
 "paddingBottom": 20,
 "paddingRight": 10,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "borderRadius": 0,
 "minHeight": 1,
 "paddingLeft": 10,
 "shadow": false,
 "backgroundOpacity": 0,
 "propagateClick": false,
 "height": "70.684%",
 "paddingTop": 0,
 "borderSize": 0,
 "minWidth": 1,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.5vh;font-family:'Nirmala UI Semilight';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.4vh;font-family:'Nirmala UI Semilight';\"><B>BUKIT CIBADAK ASRI</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.56vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Bukit Cibadak Asri menawarkan hunian subsidi tipe 30/60. Terdapat 1 carport, 1 taman depan, 1 ruang tamu, 2 kamar tidur, 1 kamar mandi, dan 1 dapur.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Spesifikasi Bangunan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Pondasi: Batu kali, Struktur: Beton bertulang, Dinding: Hebel/Bata ringan, double dinding, Rangkap atap: Baja ringan, Kusen jendela pintu: Kayu, Atap: Metal Roof/baja ringan, Plafond: Gypsum, Lantai: Keramik 40x40, Jaringan air: Sumur bor, Listrik: PLN 1300 Watt.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Fasilitas:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">CCTV 24 jam &amp; security, one gate system, jalan utama yang lebar, jalan menggunakan paving block.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.38vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.37vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Keunggulan:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.38vh;font-family:'Nirmala UI Semilight';\">Suasana sejuk &amp; asri, dekat dengan exit tol bocimi, dekat dengan ATM center, dekat dengan sarana pendidikan, dekat dengan sarana kesehatan, dekat dengan sarana perbelanjaan, dekat dengan tempat ibadah, dekat dengan tempat kuliner, dilalui dengan SPBU.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarMargin": 2,
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5
},
{
 "paddingBottom": 0,
 "iconWidth": 32,
 "pressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "height": "9%",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "layout": "horizontal",
 "width": "46%",
 "fontFamily": "Impact",
 "iconBeforeLabel": true,
 "shadowColor": "#000000",
 "rollOverBackgroundOpacity": 1,
 "iconHeight": 32,
 "gap": 5,
 "backgroundColorRatios": [
  0
 ],
 "borderColor": "#000000",
 "minHeight": 1,
 "paddingLeft": 0,
 "shadowSpread": 1,
 "borderRadius": 50,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "4vh",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "propagateClick": false,
 "mode": "push",
 "paddingTop": 0,
 "borderSize": 0,
 "label": "Book Now!",
 "minWidth": 1,
 "fontColor": "#FFFFFF",
 "class": "Button",
 "click": "this.openLink('https://wa.me/628111190412', '_blank')",
 "shadowBlurRadius": 6,
 "fontStyle": "normal",
 "textDecoration": "none",
 "horizontalAlign": "center",
 "fontWeight": "normal",
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "Button"
 }
}],
 "data": {
  "name": "Player468"
 },
 "scrollBarMargin": 2,
 "height": "100%",
 "scrollBarWidth": 10,
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": false,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarOpacity": 0.5
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
