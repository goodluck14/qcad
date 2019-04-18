// Auto generated by Testing Dashboard
// File        : scripts/Edit/Esc/Tests/EActionTest06.js
// Timestamp   : 2019-04-05 13:30:48
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function EActionTest06() {
    TdbTest.call(this, 'scripts/Edit/Esc/Tests/EActionTest06.js');
}

EActionTest06.prototype = new TdbTest();

EActionTest06.prototype.test00 = function() {
    qDebug('running EActionTest06.test00()...');
    this.setUp();
    this.importFile('scripts/Edit/Esc/Tests/data/image.dxf');
    // select image:
    var p = new RVector(0.745787, 119.212079);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // resize:
    var p = new RVector(256, 256);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(300, 150);
    this.sendMouseEventModelPos(QEvent.MouseMove, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('EActionTest06_000.dxf');
    this.tearDown();
    qDebug('finished EActionTest06.test00()');
};
