﻿// written by fabianthelbind// http://www.the-moron.netvar doc = app.activeDocument;for(var i = 0; i<doc.pages.length; i++){        var p = doc.pages.item(i);    for(var j =0;j < p.textFrames.length; j++){                var t = p.textFrames.item(j);        for(var k = 0; k < t.paragraphs.length; k++){            var par = t.paragraphs.item(k);            //alert(par.appliedParagraphStyle.name);                if(par.appliedParagraphStyle.name == "body"){                    par.appliedParagraphStyle = "verzeichnis";                    }                        }        }    }