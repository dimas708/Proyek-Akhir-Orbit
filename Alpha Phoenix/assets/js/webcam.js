<script type="text/javascript">
    // elemen untuk menyeleksi video, dan variable #video-webcam harus sama seperti pada atribut id="video-webcam"
    var video = document.querySelector("#video-webcam");

    // Berfungsi untuk meminta izin terlebih dahulu kepada user
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

    // jika user memberikan izin pada program webcam panduancode
    if (navigator.getUserMedia) {
        // run fungsi handleVideo, dan videoError jika user tidak memberikan izin
        navigator.getUserMedia({ video: true }, handleVideo, videoError);
    }

    // fungsi ini hanya akan di run jika user telah memberi izin kepada program webcam
    function handleVideo(stream) {
        video.srcObject = stream;
    }

    // jika user tidak memberikan izin maka fungsi ini akan di run
    function videoError(e) {
        // do something
        alert("Izinkan program webcam dengan javascript dan html ini untuk melihat demo.!")
    }
</script>
