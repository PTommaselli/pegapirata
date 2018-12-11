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
echo * 1. Executar SERVIDOR - nodemon           *
echo * 2. Executar SERVIDOR - node        *
echo * 3. Abrir Diretorio   *
echo * 4. Sair                    *
echo  ==================================

set /p opcao= Escolha uma opcao:
echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4

:opcao1
cls
echo Executando app com nodemon
nodemon app
pause
goto menu


:opcao2
cls
echo Executando app com node
node app
pause
goto menu

:opcao3
cls
START  %pegapirata%
pause
goto menu

:opcao4
cls
exit
pause
goto menu

:opcao8
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
echo seu bosta
pause
goto menu
