﻿// splitTextFrame.jsx InDesign JavaScript// written by fabiantheblind// http://www.the-moron.net// tested for CS5// Sat Dec 11 10:03:40 CET 2010//	var tf = app.activeDocument.selection[0].textFrames;//	if(tf.length >=0){//	$.writeln("got it " + tf.toString());//	}else{//	$.writeln("sry found nothing");//	}				//DESCRIPTION:CopyCutter 2 — Cut your Copy into Slivers// Jongware, 3-Jun-2010 if (app.selection.length == 1 && app.selection[0] instanceof TextFrame){     f = app.selection[0];     for (i=0; i<f.lines.length; i++)     {          newf = f.duplicate();          newf.texts[0].remove();          f.lines[i].duplicate (LocationOptions.BEFORE,newf.lines[0]);          if (i > 0)               top = f.lines[i-1].baseline;          else               top = f.geometricBounds[0];          bot = f.lines[i].baseline;          newf.geometricBounds = [ top, f.geometricBounds[1], bot, f.geometricBounds[3] ];     }     f.remove();} 