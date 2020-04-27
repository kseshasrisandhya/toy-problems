from lru import lru
class testcases:
    def __init__(self):
        pass
    def test(self):
        p = lru(3)
        p.put("SANDHYA")
        assert p.get("SANDHYA") == "SANDHYA is a good girl","testcase failed"

        # length = lru(5)
        p.put("priyanka")
        assert p.get("priyanka") == "priyanka is a good girl","testcase failed"

        # length = lru(5)
        p.put("rajkumari")
        assert p.get("rajkumari") == "rajkumari is a good girl","testcase failed"

        # length = lru(5)
        p.put("kumari")
        assert p.get("kumari") == "kumari is a good girl","testcase failed"

        # length = lru(5)
        p.put("roopa")
        assert p.get("roopa") == "roopa is a good girl","testcase failed"
        print("testcase passed")
        p.put("SANDHYA") == None,"testcase failed"
        print("all test cases are passed...........!")


if __name__ == '__main__':
    l=testcases()
    l.test()
