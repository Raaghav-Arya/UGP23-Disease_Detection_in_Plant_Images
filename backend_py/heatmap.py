import pandas as pd 
import geopandas as gpd
import matplotlib.pyplot as plt 

disease_data = pd.read_csv('./disease_distribution.csv')
# disease_data=pd.read_csv('./regional_disease_distribution.csv')
# disease_data.head(30)

# india = gpd.read_file('India-State-and-Country-Shapefile/India_State_Boundary.shp')
india = gpd.read_file('India_State_Shapefile/India_State_Boundary.shp')
# india.head()

# merged = india.set_index('State_Name').join(disease_data.set_index('state'))
merged = india.set_index('Name').join(disease_data.set_index('state'))
# merged.head(50)

# Plot the data
fig, ax = plt.subplots(1, figsize=(10, 6))
merged.plot(column='cases', cmap='YlOrRd', linewidth=0.8, ax=ax, edgecolor='0.8', legend=True)
plt.show()