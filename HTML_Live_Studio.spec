# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

excludes = [
    'tkinter', '_tkinter', 'Tkinter',
    'unittest', 'test', 'pydoc', 'pydoc_data', 'doctest',
    'sqlite3', '_sqlite3',
    'yt_dlp', 'PIL', 'Pillow', 'keyboard', 'mouse',
    'xmlrpc', 'pdb', 'idlelib', 'distutils', 'setuptools', 'pip',
    'multiprocessing', 'concurrent.futures',
    'ftplib', 'imaplib', 'poplib', 'smtplib', 'telnetlib', 'nntplib',
    'curses', 'py_compile', 'compileall'
]

a = Analysis(
    ['main.py'],
    pathex=[],
    binaries=[],
    datas=[
        ('gui', 'gui'),
        ('icon_circle_v3.ico', '.')
    ],
    hiddenimports=['webview.platforms.winforms', 'webview.platforms.edgechromium', 'clr'],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=excludes,
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

pyz = PYZ(a.pure, a.zipped_data, cipher=block_cipher)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.zipfiles,
    a.datas,
    [],
    name='HTML Live Studio',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
    icon='icon_circle_v3.ico'
)
