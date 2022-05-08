from flask import Flask, render_template, request
from flask_cors import CORS
import os
import pandas as pd
from features import *
from model import *

#Creation et localisation de l'instance de flask
app_path= os.path.dirname(__file__)
app= Flask(__name__, static_folder = app_path + '/static')
CORS(app)
#Creation d'une cle secrete pour la securité des sessions cote client
app.config['SECRET_KEY'] = 'Y\x95I\xaebyQ\x1et\xce\x89\xc4$L\xc4\x0e7v\xb7V\x8c\x85\xb9\xfc'

songDF = pd.read_csv("data1/allsong_data.csv")
complete_feature_set = pd.read_csv("data1/complete_feature.csv")

@app.route("/")
def home():
    #render el home page
    return render_template('home.html')

@app.route("/recommend", methods = ['POST'])
def recommend():
    #request el url du form html
    URL = request.form['URL']

    #j'applique la methode extract pour avoir un dataframe de caracterist
    df = extract(URL)

    #je retourne les resultats et je renvoie un nbre de recommandations tels
    #que le user veut
    edm_top40 = recommend_from_playlist(songDF, complete_feature_set, df)
    number_of_recs = int(request.form['number-of-recs'])
    my_songs = []
    for i in range(number_of_recs):
        my_songs.append([str(edm_top40.iloc[i,0]) + ' - '+ '"'+ str(edm_top40.iloc[i,2])+'"', "https://open.spotify.com/track/"+ str(edm_top40.iloc[i,1]).split("/")[-1]])
    return render_template('results.html', songs = my_songs)
