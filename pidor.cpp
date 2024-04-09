/*
 ������� �� ���������� ������ ������ �����.
*/
#include <iostream>

using namespace std;

int main() {
	// ������ ������
	int numbers[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	int size = sizeof(numbers) / sizeof(numbers[0]); // ���������� ������ �������

   
    int* oddNumbers = new int[size];
    int oddCount = 0; // ������� ��� �������� �����

    
    for (int i = 0; i < size; ++i) {
        if (numbers[i] % 2 != 0) {
            oddNumbers[oddCount] = numbers[i];
            ++oddCount;
        }
    }

   
    for (int i = 0; i < oddCount; ++i) {
        std::cout << oddNumbers[i] << " ";
    }

    
    delete[] oddNumbers;

    return 0;
}