import matplotlib.pyplot as plt

def generate_histogram(data):
    # Extract values and frequencies from the dictionary
    values = list(data.keys())
    frequencies = list(data.values())

    # Plotting the histogram
    plt.bar(values, frequencies, color='red', alpha=1)
    plt.xlabel('States')
    plt.ylabel('Cases')
    plt.title('Disease Distribution')
    plt.show()

# Your data in the form of a dictionary
data = {
    'Gujrat': 10,
    'Maharashtra': 5,
    'Punjab': 15,
    'Harayana': 7,
}

# generate_histogram(data)
