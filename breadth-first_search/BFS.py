graph = {}
graph["you"]=["alice","bob","claire"]
graph["bob"]=["anuj","peggy"]
graph["alice"]=["peggy"]
graph["claire"]=["thom","jonny"]
graph["anuj"]=[]
graph["thom"]=[]
graph["jonny"]=[]

from collections import deque

def search(name): #search person with'y' in person's name
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if 'y' in person:
                print("it is %s"%person)
                return True
            else:
                search_queue += graph[person]
                print(person)
                searched.append(person)
                # return False


# persons = {'me': [{'you': ['Clair', {'Peggie': 'Amy'}, {'Clair': ['Marine', 'Iris']}, {'Ann': 'Beka'}}]}
# d = {'dict': ['Clair', {'Peggie': 'Am'}, {'Clair': ['Marine', 'Iris']}, {'Ann': 'Beka'}], 'dictionary': 2}
search("you")