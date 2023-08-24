import requests

r = requests.get('https://jupiter.challenges.picoctf.org/problem/17205/')

_bytes = [int(x) for x in r.text.split() ]

# png header
result = [
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
]

dp = [ [] for _ in range(20) ]
dp[0].append("")

for i in range(16):
    for key in range(10):
        if result[i] == _bytes[key*16+i]:
            for d in dp[i]:
                dp[i+1].append(d + str(key))

for d in dp[16]:
    print(d)