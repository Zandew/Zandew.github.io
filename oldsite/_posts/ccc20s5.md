---
title: ccc20s5
---
```
#include <bits/stdc++.h>

using namespace std;

int n, arr[1000001], cnt[500001], lst[500001];
long double dp[1000001], t=0, v[500001];

int main() {
    cin >> n; 
    for (int i=1; i<=n; i++){
        cin >> arr[i];
        cnt[arr[i]]++;
        lst[arr[i]] = i;
    }
    t = (long double) 1/n;
    for (int i=2; i<=n; i++){
        if (arr[i]==arr[1]) continue;
        dp[lst[arr[i]]] += cnt[arr[i]]*(t-v[arr[i]]);
        v[arr[i]] += t-v[arr[i]];
        cnt[arr[i]]--;
        if (lst[arr[i]]==i&&arr[i]!=arr[1]) t += (long double) dp[i]/(n-i+1);
    }
    cout << fixed << setprecision(6) << 1-dp[n] << endl;
    return 0;
}
```
