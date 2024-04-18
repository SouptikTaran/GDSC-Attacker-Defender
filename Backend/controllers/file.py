# Change the value of num to the desired number of controllers you want to generate
num = 10

for i in range(1, num+1):
    # Format the index number with leading zeros if necessary
    index = str(i)
    # Create the controller file
    with open(f"controller{index}.js", "w") as f:
        pass  # No content, creating an empty file
