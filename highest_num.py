	
stack = [2, 53, 23, 0, 49, 64, -37, 101, 20, 47, 90, 64, -37, 53, 64]
max_so_far = stack[0]
for i in range(len(stack)):
	if stack[i] > max_so_far:
		max_so_far = stack[i]
print ("highest number: ", max_so_far)

specific_number = 23
for i in range(len(stack)):
	if stack[i] == specific_number:
		print("YES")
	else:
		print("NO")

count = 0
for i in range(len(stack)):
	count = count + stack[i]
print("total of the stack is:", count)

max_so_far = 0
for i in range(len(stack)):
	if (stack[i] % 2) ==0:
		if stack[i] > max_so_far:
			max_so_far = stack[i]
print("highest even number is:", max_so_far)

max_so_far = 0
for i in range(len(stack)):
	if (stack[i] % 2) != 0:
		if stack[i] > max_so_far:
			max_so_far = stack[i]
print("highest odd number is:", max_so_far)

max = 0
second_max = 0
for i in range(len(stack)):
	if stack[i] > max_so_far:
		max_so_far = stack[i]
	elif max_so_far > stack[i] > second_max:
		second_max = stack[i]
print(second_max)

specific = 64
count = 0
for i in range(len(stack)):
	if stack[i] == specific:
		count = count + 1
print(count)

print(stack.count(64))

from collections import Counter
print(Counter(stack))

count = 0
for i in range(len(stack)):
	if stack[i] > 0:
		count = count + 1
print("Positive integers:", count)

count = 0
for i in range(len(stack)):
	if stack[i] < 0:
		count = count + 1
print("Negative integers:", count)

countup = 0
countdown = 0
for i in range(len(stack)):
	if stack[i] > 10:
		countup = countup + 1
	elif stack[i] < 10:
		countdown = countdown + 1
print("there are %s numbers above 10 and %s numbers below 10" % (countup, countdown))

countup = 0
countdown = 0
specific_number = int(input("specific number: "))
for i in range(len(stack)):
	if stack[i] > specific_number:
		countup = countup + 1
	elif stack[i] < specific_number:
		countdown = countdown + 1
print("there are %s numbers above and %s numbers below %s" %(countup, countdown, specific_number))
