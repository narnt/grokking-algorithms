def quickSort(arr):
    if len(arr) < 2:
        return arr
    else:
        point = arr[0]
        less = [i for i in arr[1:] if i<=point]
        greater = [i for i in arr[1:] if i>point]
        return quickSort(less) + [point] + quickSort(greater)

print(quickSort([10,1,5,2,8]))
print(quickSort(["g","h","a","o","p"]))