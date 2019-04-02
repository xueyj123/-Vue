


export default {
    inserted(el, binding, vnode) {
        let move = 50;
        let startX, startY, endX, endY, dx, dy,angle;
        el.addEventListener("touchstart", function(e) {
            startX = e.touches[0].pageX;
            startY = e.touches[0].pageY;
        });
        el.addEventListener("touchend", function(e) {
            endX = e.changedTouches[0].pageX;
            endY = e.changedTouches[0].pageY;
            dx = endX - startX;
            dy = endY - startY;
            if (dx < move) {
                return;
            }
            angle=Math.atan2(dx,dy)*180/Math.PI;
            if(angle<=135&&angle>=45){
                vnode.context.$router.go(-1)
            }
        });
    }
};
