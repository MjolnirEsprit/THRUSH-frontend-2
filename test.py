import lyricsgenius 
genius = lyricsgenius.Genius('jXq1yC5onaRC1ylei-Bl3k06LiD2S5zjq9zzdWrqltVB1T9AP6_-FjW7WtkFe90I')
artist=genius.search_artist("Shawn Mendes" , max_songs=10, sort="title" )
print(artist.songs)

print(artist)

artist.save_lyrics()