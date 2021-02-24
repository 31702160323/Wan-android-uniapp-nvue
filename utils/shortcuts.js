const Build = plus.android.importClass('android.os.Build');

function addShortcuts(main, shortcuts) {
	
	if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N_MR1) {
		const shortcutManager = main.getSystemService(plus.android.getAttribute( main, 'SHORTCUT_SERVICE' ));

		try {
			const shortcutInfoList = plus.android.newObject('java.util.ArrayList');
			shortcuts.forEach((item) => {
				const intent = plus.android.newObject('android.content.Intent', 'io.dcloud.PandoraEntry');
				plus.android.invoke(intent, 'setClassName', main, 'io.dcloud.PandoraEntryActivity');
				plus.android.invoke(intent, 'setFlags', plus.android.getAttribute(intent, 'FLAG_ACTIVITY_NEW_TASK'));
				plus.android.invoke(intent, 'putExtra', 'path', item.path);
				
				const shortcut = plus.android.newObject( 'android.content.pm.ShortcutInfo$Builder', main, item.id);
				const bitmap = plus.android.invoke('android.graphics.BitmapFactory', 'decodeFile', item.icon);
				const icon = plus.android.invoke('android.graphics.drawable.Icon', 'createWithBitmap', bitmap);
				
				plus.android.invoke(shortcut, 'setShortLabel', item.shortLabel || item.title);
				plus.android.invoke(shortcut, 'setLongLabel', item.title);
				plus.android.invoke(shortcut, 'setIntent', intent);
				console.log(plus.android.invoke(shortcut, 'setIcon', icon));

				plus.android.invoke(shortcutInfoList, 'add', plus.android.invoke(shortcut, 'build'));
			})
			return plus.android.invoke(shortcutManager, 'setDynamicShortcuts', shortcutInfoList);
		} catch (e) {
			console.log(e);
			return false;
		}
	}
	return false;
}

function removeAll(main) {
	if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N_MR1) {
		const shortcutManager = main.getSystemService(plus.android.getAttribute( main, 'SHORTCUT_SERVICE' ));
		return plus.android.invoke(shortcutManager, 'removeAllDynamicShortcuts');
	}
}

export { addShortcuts, removeAll };
