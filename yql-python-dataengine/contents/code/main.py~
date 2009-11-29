# -*- coding: utf-8 -*-
#
# Copyright 2009 Akhmad Fathonih <akhmadf@gmail.com>
# GPL
# Using yql module: http://python-yql.org/

from PyQt4.QtCore import *
from PyKDE4.kdecore import *
from PyKDE4 import plasmascript
import yql

class PyYqlEngine(plasmascript.DataEngine):
    def __init__(self,parent,args=None):
        plasmascript.DataEngine.__init__(self,parent)        

    def init(self):
        self.setMinimumPollingInterval(333)

    def sources(self):
        sources = ["onemanga"]
        return sources

    def sourceRequestEvent(self, name):
        return self.updateSourceEvent(name)

    def updateSourceEvent(self, query):
        localName = "onemanga"
        
        y = yql.Public()
        #res = y.execute("use 'http://yqlblog.net/samples/search.imageweb.xml' as searchimageweb; select title from searchimageweb where query='pizza' limit 3")
        res = y.execute("select * from rss where url = 'http://www.onemanga.com/updates-feed.xml'")
        for item in res['query']['results']['item']:          
          self.setData(localName, item['title'], item['link'])
        
        return True

def CreateDataEngine(parent):
    return PyYqlEngine(parent)