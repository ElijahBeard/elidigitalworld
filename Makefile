all:
	g++ -std=c++17 -o split split.cc `pkg-config --cflags --libs opencv4`
clean:
	rm split
	rm tile_*.png
	rm ./static/split/rain.png*