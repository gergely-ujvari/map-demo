/*
 Warning: Uses mongo-js! (currently no ES6 features)
*/

try {
    var conn = new Mongo();
    var db = conn.getDB('icontest');

    var bpRegion = {
        _id: 'budapest',
        name: 'Budapest',
        position: {
            lat: 47.496827198238826,
            lng: 19.02788329620364
        },
        zoom: 14
    };
    db.regions.save(bpRegion);

    var paksRegion = {
        _id: 'paks',
        name: 'Paks',
        position: {
            lat: 46.62147778674571,
            lng: 18.83888412017825
        },
        zoom: 15
    };
    db.regions.save(paksRegion);

    var debrecenRegion = {
        _id: 'debrecen',
        name: 'Debrecen',
        position: {
            lat: 47.52395944714706,
            lng: 21.60391974945071
        },
        zoom: 14
    };
    db.regions.save(debrecenRegion);

    print('*** Saved ***');

} catch (e) {
    print('Unexpected error!');
    print(e.message);
}
