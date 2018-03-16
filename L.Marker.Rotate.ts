/**
 * 提供支持角度旋转和轨迹的marker
 * 
 */
declare var L: any;

var RotateMarker = L.Marker.extend({
    initialize: function(latlng, options) {
        L.Marker.prototype.initialize.call(this, latlng, options);
        //旋转的角度
        this._rotate = options.rotate? options.rotate: 0;
        this._centralaxis = options.centralaxis? options.centralaxis: 'center center';
    },

    onAdd: function (map) {
        L.Marker.prototype.onAdd.call(this, map);
        //map.on('zoom', this._updateRotate, this);
        map.on('moveend', this._updateRotate, this);
        //设置旋转的中心点
        this.getElement().style.transformOrigin = this._centralaxis;
    }, 
    onRemove: function (map) {
        L.Marker.prototype.onRemove.call(this, map);
        
        map.off('moveend', this._updateRotate, this);
    },
    getEvents: function () {
        var events = L.Marker.prototype.getEvents.call(this);

        return events;
    },

    setRotate: function(rotate) {
        this._rotate = rotate;//更新角度
        //更新地图上的标记的角度
        this._updateRotate();
    },
    setCentralAxis: function(centeraxis) {
        this._centralaxis = centeraxis;//更新旋转中心轴位置

        this._updateRotate();
    },
    //更新角度
    _updateRotate: function(){
        var rotate = this._rotate,
            elem: HTMLElement = this.getElement(),
            transformStyleText = elem.style.transform;
        //是否已经含有rotate属性
        var isRotate = transformStyleText.includes('rotate');
        if(isRotate){
            //替换属性值
            elem.style.transform = transformStyleText.replace(/rotate\((.+?)\)/, 
                'rotate(' + rotate +'deg)');
        }else{
            //添加属性值
            elem.style.transform += 'rotate(' + rotate +'deg)';
        }
    }     
});
    
export function rotateMarker(latlng, options?) {
    return new RotateMarker(latlng, options);
}