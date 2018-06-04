def binary_search(list,item):
    low = 0
    high = len(list)-1

    while low <= high:
        middle = (low+high)//2
        guess = list[middle]
        if guess == item:
            return middle
        if guess > item:
            high = middle - 1
        else:
            low = middle + 1

n_list = [1,2,3,4,5,6,7,8,9]
w_list = ['a','b','c','d','e','f']

print(binary_search(n_list, 10))
print(binary_search(n_list, 3))
print(binary_search(w_list, 'e'))