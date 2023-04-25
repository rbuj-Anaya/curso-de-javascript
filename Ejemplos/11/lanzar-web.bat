@ECHO OFF

REM Capítulo: 11
REM Descripción: Instala servidor web y lanza el módulo script.mjs desde Windows

REM !!!!!!!!!!
REM IMPORTANTE: Debe tener instalado Npm (incluido en Node) (https://nodejs.org/es/download)
REM !!!!!!!!!!

npm install -g http-server && http-server . -o && npm uninstall -g http-server