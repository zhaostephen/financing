@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\typings\dist\bin.js" %*
) ELSE (
  node  "%~dp0\node_modules\typings\dist\bin.js" %*
)