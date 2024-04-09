#include <iostream>
#include <fstream>

using namespace std;

int main(int argc, const char* argv[])
{
    long long current_value = 1;
    double current_sum = 0.0;
    {
        ifstream in("data");
        if (in.is_open())
        {
            in >> current_value >> current_sum;
        }
    }
    for (long long i = current_value; ; ++i)
    {
        current_sum += 1.0 / i;
        if (i % 10000 == 0)
        {
            ofstream out("data");
            out << i << "  " << current_sum;
            cout << i << "  " << current_sum << endl;
        }
    }
}