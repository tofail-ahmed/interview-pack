def sum_of_even_numbers(numbers):
    sum_even = 0
    for num in numbers:
        if num % 2 == 0:  # Check if the number is even
            sum_even += num  # Add the even number to the sum
    return sum_even

# Example usage:
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = sum_of_even_numbers(numbers)
print(f"The sum of even numbers in the list is: {result}")
