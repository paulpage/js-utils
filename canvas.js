var canvas = {
    init: function() {
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext('2d');

        this._real_canvas = document.createElement('canvas');
        this._real_context = this._real_canvas.getContext('2d');

        this.width = this.c.width;
        this.height = this.c.height;
    },

    draw: function() {
        this._real_canvas.width = this.width;
        this._real_canvas.height = this.height;
        this._real_context.drawImage(this.c, 0, 0);
    },

    setSize: function(width, height) {
        this.width = width;
        this.height = height;
        this.c.width = width;
        this.c.height = height;
    }
}
