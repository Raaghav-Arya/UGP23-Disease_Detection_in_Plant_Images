from flask import Flask, request, jsonify, send_file
import os
from flask_cors import CORS 
import cv2
# import zipfile
from backend_py.histogram import generate_histogram
import base64
import json


app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload', methods=['POST'])
def upload_images():
    if 'images' not in request.files:
        return jsonify(message='No images provided'), 400

    images = request.files.getlist('images')
    uploaded_filenames = []

    img_ret = []

    for image in images:
        if image.filename == '':
            return jsonify(message='No selected file'), 400

        if image:
            filename = os.path.join(app.config['UPLOAD_FOLDER'], image.filename)
            image.save(filename)
            uploaded_filenames.append(image.filename)

        for file in os.listdir('uploads'):
            image = cv2.imread(os.path.join('uploads', file))
            ########################################
            # Insert your function here
            gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
            disease_name = 'Disease'
            ########################################
            filename = os.path.join(app.config['UPLOAD_FOLDER'], file)
            cv2.imwrite(os.path.join('uploads', file), gray_image)
            img_ret.append

    # zipf = zipfile.ZipFile('greys.zip','w', zipfile.ZIP_DEFLATED)
    # for file in os.listdir('uploads/'):
    #     zipf.write('uploads/'+file)
    # zipf.close()

    # for file in os.listdir('uploads/'):
    #     os.remove('uploads/'+file)

    # return send_file('greys.zip', mimetype = 'zip', as_attachment = True)

    images = []
    for file in os.listdir('uploads/'):
        with open('uploads/'+file, 'rb') as f:
            images.append(base64.b64encode(f.read()).decode('utf-8'))

    # Create JSON response
    response = {
        'message': disease_name,
        'images': images
    }

    # Remove all files in uploads folder
    for file in os.listdir('uploads/'):
        os.remove('uploads/'+file)

    return json.dumps(response), 200

if __name__ == '__main__':
    app.run(debug=True)
