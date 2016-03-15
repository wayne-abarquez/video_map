function CanvasMarker(opts) {
  // Mandatory parameters
  this.point = opts.position;

  // Optional parameters
  this.id_ = opts.id || 'myCanvas';
  this.pixelOffset = opts.pixelOffset || new google.maps.Size(0, 0);

  this.image_ = opts.image;

  this.canvas_ = document.createElement('canvas');
  this.canvas_.setAttribute('id', this.id_);
  this.canvas_.height = 32;
  this.canvas_.width = 32;
  this.context_ = this.canvas_.getContext('2d');

  this.setMap(opts.map);
}

CanvasMarker.prototype = new google.maps.OverlayView();

CanvasMarker.prototype.onAdd = function() {
  var that = this;
  var overlayProjection = this.getProjection();

  var div = document.createElement('div');
  div.style.position = 'absolute';
  div.draggable = true;


  google.maps.event.addDomListener(this.get('map').getDiv(),
      'mouseleave',
      function () {
        google.maps.event.trigger(div, 'mouseup');
      }
  );

  google.maps.event.addDomListener(div,
    'mousedown',
    function (e) {
      this.style.cursor = 'move';
      that.map.set('draggable', false);
      that.set('origin', e);

      if( !that.moveHandler) {
          that.moveHandler = google.maps.event.addDomListener(that.get('map').getDiv(),
              'mousemove',
              function (e) {
                var origin = that.get('origin'),
                    left = origin.clientX - e.clientX,
                    top = origin.clientY - e.clientY,
                    pos = overlayProjection.fromLatLngToDivPixel(that.point),
                    latLng = overlayProjection.fromDivPixelToLatLng(new google.maps.Point(pos.x - left,
                            pos.y - top));
                that.set('origin', e);
                that.set('point', latLng);
                that.draw();
              });
      }
    }
  );
  /* End of mousedown listener */

  google.maps.event.addDomListener(div, 'mouseup', function () {
    that.map.set('draggable', true);
    this.style.cursor = 'default';
    google.maps.event.removeListener(that.moveHandler);

    that.moveHandler = null;
  });
  /* End of mouseup listener */


  div.appendChild(this.canvas_);
  this.div_ = div;

  var panes = this.getPanes();
      panes.floatShadow.appendChild(this.div_);
}

CanvasMarker.prototype.draw = function() {
  var overlayProjection = this.getProjection();
  var p = overlayProjection.fromLatLngToDivPixel(this.point);

  var h = parseInt(this.div_.clientHeight);
  this.div_.style.left = (p.x + this.pixelOffset.width) + "px";
  this.div_.style.top = (p.y +this.pixelOffset.height - h) + "px";
}

CanvasMarker.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
}

CanvasMarker.prototype.plot = function(angle) {
  var cosa = Math.cos(angle);
  var sina = Math.sin(angle);

    //console.log('Setting Car Angle: ', angle);

  this.context_.clearRect(0,0,32,32);
  this.context_.save();
  this.context_.rotate(angle);
  this.context_.translate(16*sina+16*cosa, 16*cosa-16*sina);
  this.context_.drawImage(this.image_,-16,-16);
  this.context_.restore();
}

CanvasMarker.prototype.setPoint = function(point) {
  this.point = point;
  this.draw();
}

CanvasMarker.prototype.setPosition = function (point) {
    this.point = point;
    this.draw();
}

CanvasMarker.prototype.getPosition = function () {
    return this.point;
}