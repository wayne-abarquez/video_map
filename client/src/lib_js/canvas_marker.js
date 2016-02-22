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
  var div = document.createElement('div');
      div.style.position = 'absolute';

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