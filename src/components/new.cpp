#include<iostream>
#include<vector>
using namespace std;
int main(){
    int n;
    cin>>n;
    while(n--){
        int t;
        cin>>t;
        vector<int>p(t,-1);
        int sum = 0;
        for(int i =0;i<t;i++){
            cin>>p[i];
            sum+=abs(p[i]);
        }
        cout<<sum<<endl;
    }
}