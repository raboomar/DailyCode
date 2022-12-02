cal = [1000,
       2000,
       3000,
       " ",
       4000,
       " ",
       5000,
       6000,
       " ",
       7000,
       8000,
       9000,
       " ",
       10000
       ]

cal_count = {}
total = 0
elf = 1
print(len(cal))
for num in cal:
    cal_count[elf] = total
    if type(num) == int:
        total += num
        cal_count[elf] = total

    elif type(num) == str:
        elf += 1
        total = 0


print(max(cal_count.values()))
