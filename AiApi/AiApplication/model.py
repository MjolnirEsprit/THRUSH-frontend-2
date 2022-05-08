import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MinMaxScaler
from sklearn.feature_extraction.text import TfidfVectorizer
from textblob import TextBlob
import re

def generate_playlist_feature(complete_feature_set, playlist_df):
    #Resume la playliste du user en un seul vecteur

    #J'ai mis dans la playliste les chansons du feature dataframe et qui existent dans la playliste
    complete_feature_set_playlist = complete_feature_set[complete_feature_set['id'].isin(playlist_df['id'].values)]

    #Les chansons qui n'existent pas dans la playliste
    complete_feature_set_nonplaylist= complete_feature_set[~complete_feature_set['id'].isin(playlist_df['id'].values)]

    complete_feature_set_playlist_final = complete_feature_set_playlist.drop(columns = "id")

    #Renvoie les caracteristiques des chansons dans la playliste et hors la playliste
    return complete_feature_set_playlist_final.sum(axis = 0), complete_feature_set_nonplaylist

def generate_playlist_recom(df, features, nonplaylist_features):
    #df: dataframe spotify , features: vecteur résumé des caracteris de playlist
    #nonplaylist_features: carcterist des chansons qui sont pas ds la playlist
    non_playlist_df = df[df['id'].isin(nonplaylist_features['id'].values)]
    #Trouver la similarité cosine entre la playliste et les chansons hors playlist
    #Retourne les lignes representant el valeur taa similarité
    non_playlist_df['sim'] = cosine_similarity(nonplaylist_features.drop('id', axis = 1).values, features.values.reshape(1, -1))[:,0]
    non_playlist_df_top_40 = non_playlist_df.sort_values('sim', ascending = False).head(40)
    return non_playlist_df_top_40

def recommend_from_playlist(songDF, complete_feature_set, playlistDF_test):

    #Je genere les caracteristiques
    complete_feature_set_playlist_vector, complete_feature_set_nonplaylist = generate_playlist_feature(complete_feature_set, playlistDF_test)

    #Je genere les recommandations
    top40 = generate_playlist_recom(songDF, complete_feature_set_playlist_vector, complete_feature_set_nonplaylist)
    return top40
