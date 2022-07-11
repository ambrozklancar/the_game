export function getDistanceFromLatLonInKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
) {
    var R = 6371 //radius of the Earth in km
    var dLat = deg2rad(lat2 - lat1); 
    var dLon = deg2rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + 
    Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * 
    Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = (R * c) * 1000;
    console.log(d + 'm');
    return d
    
}

function deg2rad(deg: number){
    return deg * (Math.PI / 180);
}