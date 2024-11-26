
n = int(input())
setA = set(int(input()) for _ in range(n))
m = int(input())
setB = set(int(input()) for _ in range(m))
difference = sorted(setA - setB)
print(difference)
symmetric_difference = sorted(setA ^ setB)
print(symmetric_difference)