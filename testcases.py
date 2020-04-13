from sample import *

def testcases(self):
    length = lru(5)
    length.put("SANDHYA")
    assert length.get("SANDHYA") == "SANDHYA is a good girl","testcase failed"

    length = lru(5)
    length.put("priyanka")
    assert length.get("priyanka") == "priyanka is a good girl","testcase failed"

    length = lru(5)
    length.put("rajkumar")
    assert length.get("rajkumar") == "rajkumar is a good girl","testcase failed"

    length = lru(5)
    length.put("kumar")
    assert length.get("kumar") == "kumar is a good girl","testcase failed"

    length = lru(5)
    length.put("goodbye")
    assert length.get("goodbye") == "goodbye is a good girl","testcase failed"
    print(testcase passed)
    length.put("SANDHYA") == None,"testcase failed"
    print(all test cases are passed...........!)


if __name__ == '__main__':
    length.testcases()