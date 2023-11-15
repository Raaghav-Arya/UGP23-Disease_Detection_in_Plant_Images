import pandas as pd 
import geopandas as gpd
import matplotlib.pyplot as plt 

disease_data = pd.read_csv('../input/paramedical-staff-in-india/paramed/paramedical_staff.xlsx')
india = gpd.read_file('India-State-and-Country-Shapefile/India_State_Boundary.shp')

merged = india.set_index('state').join(data.set_index('state'))






































# import folium
# import pandas as pd
# import json

# # Your data as a dictionary
# data_dict = {
#     'Uttar Pradesh': 100,
#     'Maharashtra': 200,
#     'Bihar': 150,
#     "Punjab": 250,
#     "Haryana": 300,
#     # Add other states here...
# }

# # Convert the dictionary to a pandas DataFrame
# data_frame = pd.DataFrame(list(data_dict.items()), columns=['State', 'Value'])

# # Load GeoJSON file containing the boundaries of Indian states
# # Replace 'india_states.json' with the path to your GeoJSON file
# with open('Indian_States.json') as file:
#     india_geojson = json.load(file)

# # Initialize a map centered around India
# india_map = folium.Map(location=[20.5937, 78.9629], zoom_start=5)

# # Create a Choropleth layer and add it to the map
# folium.Choropleth(
#     geo_data=india_geojson,
#     name='heatmap',
#     data=data_frame,
#     columns=['State', 'Value'],
#     key_on='feature.properties.name',
#     fill_color='YlGn',
#     fill_opacity=0.7,
#     line_opacity=0.2,
#     legend_name='Heatmap'
# ).add_to(india_map)

# # Display the map
# india_map
# india_map.save('india_map.html')


# import geopandas as gpd
# import matplotlib.pyplot as plt

# # Load the shapefile of India (replace 'india.shp' with your shapefile)
# india = gpd.read_file('india.shp')

# # Your data as a dictionary
# data = {
#     'Uttar Pradesh': 100,
#     'Maharashtra': 200,
#     'Bihar': 150,
#     # Add other states here...
# }

# # Add a new column to the GeoDataFrame for the values
# india['Value'] = india['State'].map(data)

# # Plot the heatmap
# fig, ax = plt.subplots(1, 1)
# india.plot(column='Value', cmap='YlGn', linewidth=0.8, ax=ax, edgecolor='0.8', legend=True)
# plt.show()