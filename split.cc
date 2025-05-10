#include <opencv2/opencv.hpp>
#include <iostream>
#include <string>

int main(int argc, const char* argv[]) {
    if (argc < 2) {
        std::cerr << "Usage: " << argv[0] << " <image_path>\n";
        return 1;
    }
    printf("Splitting\n");
    std::string img_path = argv[1];
    size_t last_slash = img_path.find_last_of("/");
    std::string directory = (last_slash != std::string::npos)
                            ? img_path.substr(0, last_slash + 1)
                            : "";

    cv::Mat image = cv::imread(img_path);
    if(image.empty()) {
        return -1;
    }
    int rows = 3, cols = 3;
    int tilew = image.cols / cols;
    int tileh = image.rows / rows;
    int tile_no = 0;
    
    for (int r = 0; r < rows; ++r) {
        for (int c = 0; c < cols; ++c) {
            int x = c * tilew;
            int y  = r * tileh;
            printf("Processed %d,%d\n",x,y);
            int w = (c == cols - 1) ? (image.cols - x) : tilew;
            int h = (r == rows - 1) ? (image.rows - y) : tileh;

            cv::Rect tile_region(x,y,w,h);
            cv::Mat tile = image(tile_region);
            std::string filename = directory + "tile_" + std::to_string(tile_no) + ".png";
            cv::imwrite(filename,tile);
            ++tile_no;
        }
    }
    printf("Image Divided Sucessfully\n");
    return 0;
}