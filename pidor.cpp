/*
 Удалить из созданного списка четные числа.
*/
#include <iostream>

using namespace std;

int main() {
	// создал массив
	int numbers[] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	int size = sizeof(numbers) / sizeof(numbers[0]); // Определяем размер массива

   
    int* oddNumbers = new int[size];
    int oddCount = 0; // Счетчик для нечетных чисел

    
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