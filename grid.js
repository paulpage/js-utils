function newGrid(width, height) {
    data = []
    for (var i = 0; i < width * height; i++) {
        data.push(0);
    }
    return {
        width: width,
        height: height,
        data: data
        get: function(x, y) {
            if (x < this.width && y < this.height) {
                return this.data[y * this.width + x]
            }
        }
        set: function(x, y, value) {
            if (x < this.width && y < this.height) {
                this.data[y * this.width + x] = value
            }
        }
    }
}
