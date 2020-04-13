class lru:
    def __init__ (self,size):
        self.size = size
        self.cache = {}
        self.lru = []
    def put(self,key):
        if len(self.lru) < self.size:
            if key in self.lru:
                self.lru.remove(key)
                self.lru.append(key)
                self.cache[key] = str(key) + " is a good girl"
            else:
                self.lru.append(key)
                self.cache[key]=str(key)+  " is a good girl"
        else:
            r= self.lru.pop(0)
            self.lru.append(key)
            del self.cache[r]
            self.cache[key]=str(key) + " is a good girl"
            
    def get(self,key,value=None):
        if key in self.lru:
            return self.cache[key]
        return value
    def get_cache(self):
        l1 = []
        for key in reversed(self.lru):
            l1.append(key + "_________"+self.cache[key])
        return l1