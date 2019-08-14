def calculate():

    number_1 = int(input('Enter the current monthly bill for broadband: '))
    number_2 = int(input('Enter the proposed monhtly bill for broadband: '))

    my_savings = ((number_1 * 12) - (number_2 * 12))

    if number_1 <= number_2:
        print("No savings made")
   
    if number_1 > number_2:
        print("You are making a saving of '€'my_savings for the year!")
   
calculate()