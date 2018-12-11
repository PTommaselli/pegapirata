@echo off
cls
:menu
~/.bashrc:
pushd pegapirata
title INICIALIZADOR pegapirata
cls

color 0
date /t
echo Computador: %computername%        Usuario: %username%

cls
echo SEU DIRETORIO:
dir /W %pushd pegapirata%

echo
echo  ===================================
echo     BEM-VINDOS AO INICIALIZADOR
echo              Menu
echo  ==================================
echo * 1. Executar APP    *
echo * 2. Abrir Diretorio   *
echo * 3. Sair                    *
echo  ==================================

set /p opcao= Escolha uma opcao:
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3

:opcao1
cls
echo Inicilizando app
expo start
pause
goto menu


:opcao2
cls
START  %pegapirata%
pause
goto menu

:opcao3
cls
exit
pause
goto menu
