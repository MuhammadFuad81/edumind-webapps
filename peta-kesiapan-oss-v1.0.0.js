/*
 * Peta Kesiapan One Stop Schooling (OSS) — Edumind Academy v1.0.0
 * HTML: WSP Growva Full Page | JavaScript: GitHub/jsDelivr | Tanpa database/API/AI
 * Instrumen Edumind untuk pemetaan mandiri awal, bukan penilaian resmi Dr. Supangat.
 * Jangan menyimpan data rahasia atau kata sandi yang benar-benar sensitif di aplikasi ini.
 */
(function (host) {
  'use strict';
  const VERSION = '1.0.0';
  const STORE = 'edumind.oss.peta.v1.draft';
  const SESSION = 'edumind.oss.peta.v1.login';
  const AUTH_DIGEST = '481650102457e10592b8061acc19b93a1cb9593bd6123579353467eac4b9982a';
  const GRADE_NAMES = { tk:'PAUD/TK/RA', sd:'SD/MI', smp:'SMP/MTs', sma:'SMA/MA/SMK' };
  const GRADE_SHORT = { tk:'TK', sd:'SD', smp:'SMP', sma:'SMA' };
  const GRADE_ORDER = ['tk','sd','smp','sma'];
  const SECTIONS = [
    { label:'Arah dan Pengelolaan', subtitle:'Tujuan pendidikan dan cara mengelolanya', domain:['D1','D2'] },
    { label:'Pembelajaran dan Program', subtitle:'Kesinambungan belajar dan keunggulan sekolah', domain:['D3','D4'] },
    { label:'Orang Tua dan Kelanjutan Siswa', subtitle:'Pelayanan serta persiapan pendidikan berikutnya', domain:['D5','D6'] },
    { label:'Evaluasi dan Perbaikan', subtitle:'Memeriksa hasil lalu melakukan perbaikan', domain:['D7'] }
  ];
  const DOMAINS = [
    {id:'D1',label:'Arah dan pengelolaan'},
    {id:'D2',label:'Profil lulusan dan target belajar'},
    {id:'D3',label:'Pembelajaran berkelanjutan'},
    {id:'D4',label:'Program unggulan'},
    {id:'D5',label:'Pelayanan orang tua'},
    {id:'D6',label:'Kelanjutan pendidikan siswa'},
    {id:'D7',label:'Evaluasi dan perbaikan'}
  ];
  function steps(s0,s1,s2,proof,why) {
    return [
      {title:s0[0],first:s0[1],why:why[0],proof:proof[0]},
      {title:s1[0],first:s1[1],why:why[1],proof:proof[1]},
      {title:s2[0],first:s2[1],why:why[2],proof:proof[2]}
    ];
  }
  // Setiap pertanyaan mempunyai empat pilihan yang khusus untuk indikator tersebut.
  const QUESTIONS = [
    {id:'D1.01',domain:'D1',question:'Apakah pimpinan sudah menyepakati arah pendidikan berkelanjutan yang ingin dijalankan sekolah atau yayasan?',
      example:'Contoh: sekolah memiliki tujuan bersama tentang kemampuan lulusan dan kelanjutan pendidikan.',
      evidence:'Kesepakatan pimpinan atau rencana pengembangan sekolah.',
      options:['Belum ada arah bersama','Baru dibicarakan','Sudah disepakati, belum merata dijalankan','Sudah dijalankan dan ditinjau'],group:'arah',order:16,
      plans:steps(['Sepakati arah pendidikan berkelanjutan','Ajak pimpinan terkait menentukan tujuan OSS yang paling penting untuk lembaga.'],['Tetapkan keputusan bersama','Tuliskan hasil pembahasan pimpinan dan tunjuk pihak yang menjalankan.'],['Samakan pemahaman dan pelaksanaan','Bahas kembali arah OSS bersama unit terkait serta periksa tindak lanjutnya.'],
       ['Catatan keputusan pimpinan.','Kesepakatan tertulis dan penanggung jawab.','Catatan koordinasi serta tindak lanjut.'],
       ['Arah bersama belum ditetapkan.','Arah baru menjadi bahan pembicaraan.','Arah sudah ada, tetapi belum diterapkan merata.'])},
    {id:'D1.02',domain:'D1',question:'Apakah sudah jelas siapa yang bertanggung jawab dan bagaimana pekerjaan tersebut dikoordinasikan?',
      example:'Contoh: ada orang yang menghubungkan keputusan pimpinan dengan kegiatan di sekolah.',
      evidence:'Pembagian tugas, catatan pertemuan, atau hasil tindak lanjut.',
      options:['Belum ada penanggung jawab','Baru direncanakan','Sudah ada, koordinasi belum rutin','Sudah jelas dan tindak lanjut diperiksa'],group:'pengelolaan',order:70,
      plans:steps(['Tentukan penanggung jawab OSS','Pilih satu orang atau tim kecil untuk mengoordinasikan pekerjaan yang perlu dilakukan.'],['Perjelas tugas dan cara berkoordinasi','Sepakati siapa mengerjakan apa dan kapan saling melaporkan kemajuan.'],['Buat koordinasi lebih teratur','Jadwalkan pembahasan singkat dan catat tindak lanjut yang disepakati.'],
       ['Penugasan penanggung jawab.','Daftar tugas dan jadwal koordinasi.','Catatan koordinasi dan pekerjaan yang selesai.'],
       ['Belum ada pihak yang memimpin pelaksanaan.','Pembagian tugas belum diterapkan.','Koordinasi belum berjalan dengan teratur.'])},
    {id:'D1.03',domain:'D1',question:'Apakah rencana pengembangan sekolah sudah disesuaikan dengan tenaga, waktu, dan biaya yang tersedia?',
      example:'Contoh: sekolah memulai dari satu program penting yang sanggup dijalankan.',evidence:'Rencana kegiatan, penanggung jawab, serta perkiraan kebutuhan.',
      options:['Belum ada rencana bertahap','Ada rencana, kebutuhan belum diperhitungkan','Sudah disesuaikan sebagian','Sudah realistis dan ditinjau berkala'],group:'pengelolaan',order:74,
      plans:steps(['Tentukan langkah yang realistis','Pilih satu kebutuhan terpenting dan perkirakan tenaga, waktu, serta biaya untuk memulainya.'],['Periksa kemampuan pelaksanaan','Bandingkan rencana dengan orang, waktu, dan biaya yang memang tersedia.'],['Lengkapi dukungan yang masih kurang','Tentukan sumber daya dan penanggung jawab untuk langkah yang belum siap.'],
       ['Daftar satu hingga tiga pekerjaan awal.','Rencana singkat dan kebutuhan sumber daya.','Rencana yang telah disesuaikan.'],
       ['Rencana bertahap belum tersedia.','Rencana belum mempertimbangkan kemampuan pelaksanaan.','Sebagian rencana belum didukung sumber daya yang cukup.'])},
    {id:'D2.01',domain:'D2',question:'Apakah sekolah sudah menetapkan kemampuan dan karakter yang diharapkan dimiliki siswa ketika lulus?',
      example:'Contoh: target kemampuan Al-Qur’an, karakter, dan keterampilan sesuai arah sekolah.',evidence:'Profil lulusan atau rumusan kemampuan dan karakter siswa.',
      options:['Belum ditetapkan','Masih berupa cita-cita umum','Sebagian target sudah jelas','Sudah jelas dan menjadi acuan bersama'],group:'arah',order:10,
      plans:steps(['Rumuskan profil lulusan yang jelas','Sepakati beberapa kemampuan dan karakter terpenting yang diharapkan dimiliki siswa saat lulus.'],['Ubah cita-cita menjadi target yang terlihat','Jelaskan bentuk kemampuan siswa yang dapat diamati, bukan hanya slogan umum.'],['Lengkapi profil lulusan yang belum jelas','Periksa kembali target kemampuan dan karakter agar menjadi acuan bersama.'],
       ['Draf profil lulusan.','Daftar capaian yang dapat diamati.','Profil lulusan yang digunakan dalam perencanaan.'],
       ['Sekolah belum menetapkan hasil akhir pendidikan yang dituju.','Profil lulusan belum cukup jelas untuk dipakai sebagai acuan.','Beberapa target lulusan belum menjadi acuan bersama.'])},
    {id:'D2.02',domain:'D2',question:'Apakah target belajar setiap kelas atau jenjang sudah disusun untuk mencapai kemampuan lulusan tersebut?',
      example:'Contoh: kemampuan di kelas awal menjadi dasar kemampuan di kelas berikutnya.',evidence:'Peta target belajar setiap kelas atau jenjang.',
      options:['Belum dipetakan','Baru disusun','Sudah diterapkan pada sebagian tingkat','Sudah selaras dan hasilnya ditinjau'],group:'kurikulum',order:21,
      plans:steps(['Susun peta target belajar bertahap','Mulai dari kemampuan lulusan yang dituju, lalu tentukan tahapan target di kelas atau jenjang sebelumnya.'],['Uji peta target yang disusun','Pilih satu program prioritas dan minta guru mencoba tahapan target yang telah disepakati.'],['Selaraskan target yang belum terhubung','Bandingkan target antarkelas atau antarjenjang dan perbaiki bagian yang belum cocok.'],
       ['Peta target awal.','Catatan uji satu program.','Peta target yang direvisi bersama guru.'],
       ['Target pembelajaran belum dipetakan menuju profil lulusan.','Peta target belum diterapkan.','Sebagian target belum tersambung dengan baik.'])},
    {id:'D2.03',domain:'D2',question:'Apakah sekolah memeriksa kemajuan kemampuan siswa menuju target lulusan yang diharapkan?',
      example:'Contoh: sekolah melihat hasil belajar atau karya siswa untuk memeriksa kemajuan.',evidence:'Hasil belajar, portofolio, atau rekap capaian siswa.',
      options:['Belum diperiksa','Cara memeriksa sedang disiapkan','Baru sebagian yang diperiksa','Diperiksa rutin dan dipakai memperbaiki'],group:'capaian',order:50,
      plans:steps(['Mulai memeriksa capaian siswa','Tentukan satu atau dua kemampuan prioritas yang dapat dilihat dari hasil belajar siswa.'],['Coba cara pemeriksaan capaian','Gunakan tugas, praktik, atau karya siswa untuk memeriksa target yang ditetapkan.'],['Lengkapi pemeriksaan capaian siswa','Perluas pemeriksaan pada kemampuan yang belum dinilai dan bahas hasilnya bersama guru.'],
       ['Catatan capaian awal.','Contoh hasil pemeriksaan siswa.','Rekap kemajuan dan tindak lanjut guru.'],
       ['Kemajuan siswa belum diperiksa terhadap target lulusan.','Metode pemeriksaan belum digunakan.','Pemeriksaan baru meliputi sebagian capaian.'])},
    {id:'D3.01',domain:'D3',question:'Apakah target program Al-Qur’an, adab, atau program utama lainnya berkembang sesuai tingkat belajar siswa?',
      example:'Penguatan materi yang diperlukan tetap boleh dilakukan berdasarkan kemampuan siswa.',evidence:'Target belajar bertahap pada program prioritas sekolah.',
      options:['Belum ada tahapan target','Baru disusun','Diterapkan pada sebagian tingkat','Berjalan bertahap sesuai hasil belajar'],group:'kurikulum',order:25,
      plans:steps(['Susun tahapan satu program prioritas','Pilih satu program seperti Al-Qur’an atau adab, lalu tentukan perkembangan target antartingkat.'],['Uji tahapan program pada pembelajaran','Sepakati dengan guru di tingkat yang berhubungan untuk mencoba target bertahap.'],['Perbaiki ketidaksinambungan program','Bandingkan hasil siswa dan target berikutnya agar penguatan atau pengulangan dilakukan sesuai kebutuhan.'],
       ['Peta tahapan program.','Catatan pelaksanaan awal.','Peta target yang disesuaikan dengan hasil belajar.'],
       ['Target program belum dirancang bertahap.','Tahapan baru disusun, belum diterapkan.','Program berjalan tetapi belum konsisten berjenjang.'])},
    {id:'D3.02',domain:'D3',question:'Apakah guru menggunakan catatan kemampuan siswa dari kelas atau sekolah sebelumnya?',
      example:'Contoh: guru melihat kemampuan membaca Al-Qur’an sebelum menentukan materi berikutnya.',evidence:'Rekap capaian siswa, serah-terima antarguru, atau asesmen awal.',
      options:['Belum digunakan','Baru direncanakan','Digunakan sebagian guru','Digunakan rutin untuk menyusun pembelajaran'],group:'transisi-belajar',order:27,
      plans:steps(['Gunakan informasi kemampuan siswa saat transisi','Sepakati catatan kemampuan sederhana yang diteruskan dari guru atau jenjang sebelumnya.'],['Coba serah-terima catatan belajar','Tentukan informasi yang dibutuhkan oleh guru penerima dan coba pada satu kelas.'],['Perluas penggunaan catatan siswa','Pastikan lebih banyak guru memakai informasi tersebut untuk menyesuaikan kegiatan belajar.'],
       ['Format ringkasan kemampuan siswa.','Contoh serah-terima antarguru.','Bukti penggunaan catatan dalam rencana belajar.'],
       ['Informasi kemampuan sebelumnya belum dimanfaatkan.','Cara serah-terima catatan belum berjalan.','Informasi baru dipakai sebagian guru.'])},
    {id:'D3.03',domain:'D3',question:'Apakah siswa dengan kemampuan awal berbeda mendapatkan pembelajaran yang sesuai kebutuhannya?',
      example:'Contoh: anak yang belum lancar membaca mendapat bantuan sesuai kebutuhannya.',evidence:'Penilaian awal dan catatan pendampingan belajar.',
      options:['Belum ada penyesuaian','Baru direncanakan','Sudah diberikan sebagian','Sudah dilakukan dan kemajuan dipantau'],group:'transisi-belajar',order:32,
      plans:steps(['Kenali kemampuan awal siswa','Lakukan pemeriksaan sederhana untuk mengetahui perbedaan kemampuan pada satu materi penting.'],['Coba bantuan belajar yang sesuai','Tentukan bentuk pendampingan berdasarkan hasil pemeriksaan kemampuan awal.'],['Perluas penyesuaian pembelajaran','Tinjau siswa yang belum terlayani dan pantau kemajuan setelah diberi bantuan.'],
       ['Hasil pemetaan kemampuan awal.','Rencana dan catatan bantuan belajar.','Catatan perkembangan setelah pendampingan.'],
       ['Perbedaan kemampuan awal belum menjadi dasar pembelajaran.','Pendampingan masih direncanakan.','Bantuan belum menjangkau semua siswa yang membutuhkannya.'])},
    {id:'D4.01',domain:'D4',question:'Apakah program unggulan sekolah benar-benar dijalankan dan hasilnya dapat ditunjukkan?',
      example:'Contoh: bukan hanya nama program, tetapi ada kegiatan dan hasil belajar nyata.',evidence:'Rencana program, catatan kegiatan, dan hasil belajar siswa.',
      options:['Belum berjalan','Program baru disiapkan','Berjalan, hasil belum ditinjau baik','Berjalan rutin dan hasil digunakan'],group:'mutu-program',order:36,
      plans:steps(['Tentukan satu program unggulan yang realistis','Pilih keunggulan yang paling sesuai dengan tujuan sekolah dan kemampuan sumber daya.'],['Mulai uji program unggulan','Coba program pada lingkup kecil dan sepakati hasil belajar yang ingin dilihat.'],['Perkuat pelaksanaan dan bukti hasil','Periksa hasil program yang sudah berjalan sebelum menggunakannya sebagai klaim keunggulan sekolah.'],
       ['Rencana program prioritas.','Catatan kegiatan uji.','Bukti hasil siswa dan catatan perbaikan.'],
       ['Program unggulan belum dilaksanakan.','Program unggulan masih dalam perencanaan.','Pelaksanaan sudah ada, tetapi hasilnya belum cukup diperiksa.'])},
    {id:'D4.02',domain:'D4',question:'Apakah kegiatan unggulan disesuaikan dengan usia dan kemampuan siswa pada setiap tingkat?',
      example:'Tidak harus lebih mahal; tantangan belajar cukup berkembang sesuai kemampuan siswa.',evidence:'Perbandingan kegiatan antarkelas/tingkat dan manfaatnya.',
      options:['Belum menunjukkan perkembangan','Baru direncanakan','Berkembang pada sebagian tingkat','Berkembang sesuai kebutuhan dan ditinjau'],group:'mutu-program',order:69,
      plans:steps(['Buat kegiatan lebih sesuai perkembangan siswa','Bandingkan kegiatan pada dua tingkat dan cari perbedaan tantangan yang bermakna.'],['Uji variasi kegiatan belajar','Coba satu variasi kegiatan sesuai usia dan kemampuan siswa.'],['Lengkapi perkembangan kegiatan','Perbaiki tingkat yang masih menerima kegiatan tanpa perkembangan yang jelas.'],
       ['Contoh perubahan kegiatan.','Catatan uji variasi kegiatan.','Peta kegiatan antartingkat dan hasilnya.'],
       ['Kegiatan belum menunjukkan perkembangan yang sesuai.','Variasi kegiatan baru direncanakan.','Perkembangan kegiatan belum konsisten di seluruh tingkat.'])},
    {id:'D5.01',domain:'D5',question:'Apakah sekolah menjelaskan program dan hasilnya kepada orang tua secara jelas dan teratur?',
      example:'Misalnya melalui pertemuan atau media yang biasa digunakan orang tua.',evidence:'Materi sosialisasi, informasi program, atau catatan pertemuan.',
      options:['Belum terencana','Baru disiapkan','Sudah dilakukan tetapi belum rutin','Sudah rutin, jelas, dan sesuai kenyataan'],group:'orangtua',order:48,
      plans:steps(['Siapkan informasi program yang benar','Tentukan hal terpenting yang perlu diketahui orang tua berdasarkan program yang benar-benar berjalan.'],['Mulai komunikasi yang terarah','Coba satu cara komunikasi yang mudah dijangkau orang tua tanpa melebih-lebihkan hasil program.'],['Perbaiki komunikasi dengan orang tua','Buat informasi lebih teratur, mudah dipahami, dan didukung hasil program nyata.'],
       ['Daftar informasi program yang tepat.','Bahan informasi dan catatan penyampaian.','Rencana komunikasi dan tanggapan orang tua.'],
       ['Program dan hasilnya belum dikomunikasikan secara terencana.','Cara komunikasi belum dijalankan.','Komunikasi belum berjalan teratur.'])},
    {id:'D5.02',domain:'D5',question:'Apakah sekolah mencari tahu kebutuhan orang tua dan alasan mereka memilih sekolah?',
      example:'Contoh: sekolah mendengar kebutuhan dan pertimbangan keluarga, bukan menebaknya.',evidence:'Survei ringkas, ringkasan percakapan, atau masukan orang tua.',
      options:['Belum dilakukan','Sedang direncanakan','Sudah ditanyakan sesekali','Masukan rutin dikumpulkan dan digunakan'],group:'orangtua',order:41,
      plans:steps(['Cari tahu kebutuhan dan alasan orang tua','Tanyakan secara sederhana apa yang diharapkan orang tua dari pendidikan anaknya.'],['Mulai mengumpulkan masukan orang tua','Gunakan beberapa pertanyaan singkat dalam pertemuan atau survei untuk mendapatkan informasi nyata.'],['Gunakan masukan dalam keputusan sekolah','Kelompokkan kebutuhan orang tua dan bahas perbaikan yang paling relevan.'],
       ['Ringkasan kebutuhan orang tua.','Hasil survei atau percakapan awal.','Daftar kebutuhan dan keputusan tindak lanjut.'],
       ['Sekolah belum memiliki informasi kebutuhan orang tua.','Pengumpulan informasi baru direncanakan.','Masukan belum digunakan secara konsisten untuk perbaikan.'])},
    {id:'D5.03',domain:'D5',question:'Jika orang tua menyampaikan masukan atau keluhan, apakah sekolah memiliki cara menindaklanjutinya?',
      example:'Jika belum pernah ada keluhan, nilai kesiapan caranya; jangan menganggap kasus selesai.',evidence:'Alur masukan, penanggung jawab, dan catatan tindak lanjut bila pernah ada kasus.',
      options:['Belum ada cara yang jelas','Cara penanganan baru disiapkan','Sudah menangani sebagian masukan','Ditangani sampai tuntas dan diperiksa'],group:'layanan',order:66,
      plans:steps(['Siapkan cara menerima dan menanggapi masukan','Tentukan saluran penyampaian masukan dan siapa yang akan menanganinya.'],['Uji alur penanganan masukan','Pastikan orang tua mengetahui saluran yang tersedia dan petugas memahami langkah penanganannya.'],['Tuntaskan tindak lanjut masukan','Catat masukan yang belum selesai dan tentukan cara memberi kabar hasilnya kepada orang tua.'],
       ['Nama penanggung jawab dan saluran masukan.','Petunjuk alur penanganan.','Daftar masukan dan status penyelesaian.'],
       ['Belum ada cara menangani masukan yang jelas.','Cara menangani masukan belum teruji.','Sebagian masukan belum ditangani sampai selesai.'])},
    {id:'D6.01',domain:'D6',question:'Apakah sekolah membantu siswa dan orang tua mempersiapkan pendidikan ke tahap berikutnya?',
      example:'Misalnya informasi jenjang berikutnya, pendampingan pilihan sekolah, atau program adaptasi.',evidence:'Agenda informasi kelanjutan, kegiatan transisi, atau pendampingan siswa.',
      options:['Belum disiapkan','Baru direncanakan','Diberikan kepada sebagian siswa','Berjalan rutin dan manfaatnya ditinjau'],group:'kelanjutan',order:38,
      plans:steps(['Siapkan bantuan transisi pendidikan','Tentukan informasi dan bantuan sederhana yang dibutuhkan siswa ketika melanjutkan pendidikan.'],['Uji satu kegiatan persiapan transisi','Mulai dengan pertemuan informasi atau pendampingan untuk siswa dan orang tua yang membutuhkan.'],['Perluas dukungan transisi siswa','Periksa keluarga yang belum terjangkau dan perbaiki kesiapan siswa menuju tahap berikutnya.'],
       ['Daftar kebutuhan transisi.','Agenda dan materi pendampingan.','Catatan peserta dan manfaat kegiatan.'],
       ['Bantuan untuk pendidikan berikutnya belum disiapkan.','Dukungan transisi baru direncanakan.','Sebagian siswa atau keluarga belum mendapat dukungan transisi.'])},
    {id:'D6.02',domain:'D6',question:'Apakah sekolah mencatat ke mana siswa melanjutkan pendidikan setelah lulus?',
      example:'Cukup data jumlah siswa per tujuan pendidikan; tidak perlu nama anak.',evidence:'Rekap kelanjutan lulusan per angkatan.',
      options:['Belum dicatat','Pencatatan baru disiapkan','Data ada tetapi belum lengkap','Data ditinjau dan digunakan untuk perbaikan'],group:'kelanjutan-data',order:54,
      plans:steps(['Mulai mencatat kelanjutan pendidikan lulusan','Buat rekap agregat sederhana tujuan sekolah berikutnya bagi angkatan yang telah lulus.'],['Uji cara mencatat kelanjutan lulusan','Tentukan siapa yang mengumpulkan data dan kapan data diperbarui.'],['Lengkapi dan pelajari data kelanjutan lulusan','Periksa bagian data yang belum lengkap dan gunakan untuk memahami pola pilihan pendidikan.'],
       ['Format rekap kelanjutan.','Penugasan dan contoh pencatatan.','Rekap per angkatan dan ringkasan temuan.'],
       ['Data kelanjutan lulusan belum tersedia.','Pencatatan baru disiapkan.','Data yang ada belum lengkap atau belum dimanfaatkan.'])},
    {id:'D7.01',domain:'D7',question:'Apakah sekolah secara berkala memeriksa apakah program berjalan sesuai rencana?',
      example:'Contoh: guru atau pimpinan membahas kegiatan, hasilnya, dan kendala yang muncul.',evidence:'Catatan pembahasan, hasil kegiatan, atau evaluasi program.',
      options:['Belum diperiksa','Peninjauan baru direncanakan','Sudah dilakukan sesekali','Dilakukan rutin menggunakan hasil program'],group:'evaluasi',order:56,
      plans:steps(['Mulai meninjau pelaksanaan program','Pilih satu program prioritas dan bahas apa yang telah berjalan, hasilnya, serta kendalanya.'],['Jadwalkan pemeriksaan program pertama','Tentukan waktu, orang yang terlibat, dan informasi yang perlu dibawa.'],['Gunakan hasil nyata saat meninjau program','Buat pembahasan lebih teratur dan gunakan catatan hasil program sebagai dasar.'],
       ['Catatan tinjauan program.','Jadwal dan daftar bahan evaluasi.','Catatan evaluasi dan keputusan perbaikan.'],
       ['Pelaksanaan program belum ditinjau.','Peninjauan masih direncanakan.','Evaluasi belum teratur atau belum memakai informasi yang cukup.'])},
    {id:'D7.02',domain:'D7',question:'Jika ditemukan masalah, apakah sekolah melakukan perbaikan dan memeriksa kembali hasilnya?',
      example:'Contoh: hasil pertemuan ditindaklanjuti, bukan hanya dicatat.',evidence:'Daftar tindakan, penanggung jawab, dan hasil perbaikan.',
      options:['Temuan belum ditindaklanjuti','Tindakan baru direncanakan','Sebagian tindakan sudah dijalankan','Dikerjakan dan hasilnya diperiksa'],group:'evaluasi',order:61,
      plans:steps(['Tindak lanjuti temuan evaluasi','Pilih satu temuan penting yang belum ditangani dan tetapkan tindakan pertama.'],['Mulai menjalankan perbaikan','Tunjuk penanggung jawab dan tentukan kapan hasil tindakan akan diperiksa.'],['Periksa hasil perbaikan yang sudah dilakukan','Tinjau pekerjaan yang telah berjalan dan lihat apakah masalahnya berkurang.'],
       ['Catatan tindakan untuk satu temuan.','Penanggung jawab dan jadwal tindak lanjut.','Bukti pelaksanaan dan penilaian hasilnya.'],
       ['Temuan evaluasi belum ditangani.','Perbaikan baru direncanakan.','Hasil tindakan belum diperiksa secara memadai.'])}
  ];
  const BY_ID = Object.fromEntries(QUESTIONS.map(q=>[q.id,q]));
  const NOTE = 'Hasil ini merupakan pemetaan mandiri awal dari jawaban pengguna, bukan audit, sertifikasi, atau instrumen resmi Dr. Supangat. Bukti belum diperiksa secara independen.';

  function defaultProfile(){return {scope:'school', name:'',grades:['sd'],focus:'grade:sd',learning:'yes',transition:'yes',graduates:'yes',program:''};}
  function clone(v){return JSON.parse(JSON.stringify(v));}
  function safeHtml(s){return String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function focusOptions(profile){
    const gs=GRADE_ORDER.filter(g=>profile.grades.includes(g));
    if(profile.scope!=='foundation') return gs.length ? [{value:'grade:'+gs[0],label:GRADE_NAMES[gs[0]]}]:[];
    const opts=[];
    for(let i=0;i<gs.length;i++){
      const idx=GRADE_ORDER.indexOf(gs[i]);
      if(idx<3 && gs.includes(GRADE_ORDER[idx+1])){
        const next=GRADE_ORDER[idx+1];
        opts.push({value:gs[i]+'>'+next,label:GRADE_SHORT[gs[i]]+' → '+GRADE_SHORT[next]+' (jalur dalam yayasan)'});
      }
    }
    for(const g of gs) opts.push({value:'grade:'+g,label:GRADE_NAMES[g]+' (fokus satu jenjang)'});
    return opts;
  }
  function normalizedProfile(profile){
    let p=Object.assign(defaultProfile(),profile||{});
    p.scope=p.scope==='foundation'?'foundation':'school';
    p.grades=GRADE_ORDER.filter(g=>Array.isArray(p.grades) && p.grades.includes(g));
    if(p.scope==='school') p.grades=p.grades.slice(0,1);
    const options=focusOptions(p);
    if(!options.some(x=>x.value===p.focus)) p.focus=options[0]?.value||'';
    return p;
  }
  function focusLabel(p){return focusOptions(p).find(o=>o.value===p.focus)?.label||'Jenjang yang dinilai';}
  function eligibility(id,profile,answers){
    const a=answers||{}, p=normalizedProfile(profile);
    const score=(code)=>a[code]?.level;
    const validProfile=Number(score('D2.01'))>=2 && ['2','3'].includes(score('D2.01'));
    if(id==='D2.02' && !validProfile)return {show:false,status:'tertunda',why:'Profil lulusan belum cukup jelas untuk dijadikan acuan.'};
    if(id==='D2.03' && !validProfile)return {show:false,status:'tertunda',why:'Perlu profil lulusan yang jelas sebelum memeriksa pencapaiannya.'};
    if(id==='D2.03' && p.learning!=='yes')return {show:false,status:'tertunda',why:'Belum ada proses belajar yang dapat diperiksa.'};
    if(id==='D3.02' && p.transition!=='yes')return {show:false,status:'tertunda',why:p.transition==='unknown'?'Belum diketahui apakah pernah ada perpindahan kelas atau jenjang.':'Belum ada perpindahan kelas atau jenjang yang dapat diperiksa.'};
    if(id==='D3.03' && p.learning!=='yes')return {show:false,status:'tertunda',why:'Belum ada siswa yang mengikuti pembelajaran.'};
    if(id==='D4.02' && !['2','3'].includes(score('D4.01')))return {show:false,status:'tertunda',why:'Program unggulan belum berjalan sehingga perkembangannya belum dapat dinilai.'};
    if(id==='D6.02' && p.graduates!=='yes')return {show:false,status:p.graduates==='no'?'tidak berlaku':'tertunda',why:p.graduates==='no'?'Jenjang yang dinilai belum memiliki lulusan.':'Perlu memastikan apakah jenjang yang dinilai sudah memiliki lulusan.'};
    if(id==='D7.01' && p.learning!=='yes')return {show:false,status:'tertunda',why:'Belum ada pelaksanaan pembelajaran atau program yang dapat dievaluasi.'};
    if(id==='D7.02' && !['2','3'].includes(score('D7.01')))return {show:false,status:'tertunda',why:'Peninjauan program belum dilakukan sehingga tindak lanjutnya belum dapat dinilai.'};
    if(id==='D7.02' && a['D7.01']?.finding!=='yes')return {show:false,status:'tertunda',why:a['D7.01']?.finding==='no'?'Belum ada temuan perbaikan untuk ditindaklanjuti.':'Belum jelas apakah evaluasi menemukan hal yang perlu diperbaiki.'};
    return {show:true,status:'dinilai',why:''};
  }
  function visibleQuestions(profile,answers){return QUESTIONS.filter(q=>eligibility(q.id,profile,answers).show);}
  function pruneAnswers(profile,answers){
    const out=clone(answers||{});
    for(const q of QUESTIONS) if(!eligibility(q.id,profile,out).show) delete out[q.id];
    return out;
  }
  function strengthText(q){
    const strength={
      'D1.01':'Arah pendidikan berkelanjutan sudah dijalankan dan ditinjau.',
      'D1.02':'Pembagian tugas dan koordinasi sudah berjalan.',
      'D1.03':'Rencana pelaksanaan sudah disesuaikan dengan kemampuan lembaga.',
      'D2.01':'Profil lulusan sudah jelas dan menjadi acuan sekolah.',
      'D2.02':'Target belajar sudah disusun bertahap menuju profil lulusan.',
      'D2.03':'Kemajuan siswa menuju target lulusan sudah diperiksa.',
      'D3.01':'Program pendidikan prioritas sudah berkembang sesuai kemampuan siswa.',
      'D3.02':'Catatan kemampuan siswa telah digunakan saat perpindahan kelas atau jenjang.',
      'D3.03':'Perbedaan kemampuan awal siswa sudah diperhatikan dalam pembelajaran.',
      'D4.01':'Program unggulan sudah berjalan dan hasilnya digunakan untuk perbaikan.',
      'D4.02':'Kegiatan unggulan berkembang sesuai usia dan kemampuan siswa.',
      'D5.01':'Informasi kepada orang tua disampaikan secara teratur dan jelas.',
      'D5.02':'Kebutuhan orang tua sudah dipelajari dan digunakan untuk perbaikan.',
      'D5.03':'Masukan orang tua telah ditangani dan hasilnya diperiksa.',
      'D6.01':'Siswa dan keluarga mendapatkan dukungan menuju pendidikan berikutnya.',
      'D6.02':'Kelanjutan pendidikan lulusan telah dicatat dan ditinjau.',
      'D7.01':'Pelaksanaan program sudah ditinjau secara berkala.',
      'D7.02':'Tindakan perbaikan sudah dilaksanakan dan ditinjau hasilnya.'
    };
    return strength[q.id]||q.question;
  }
  function makeCandidate(q,answer){
    const level=Number(answer.level), detail=q.plans[level];
    return {ids:[q.id],group:q.group,order:q.order,level,title:detail.title,why:detail.why,first:detail.first,proof:detail.proof};
  }
  function mergeCandidates(candidates,ids,merged){
    const take=ids.map(id=>candidates.find(c=>c.ids.includes(id)));
    if(take.some(x=>!x))return candidates;
    if(take.some(x=>x.level>1))return candidates;
    const rest=candidates.filter(c=>!ids.some(id=>c.ids.includes(id)));
    rest.push(Object.assign({ids,level:Math.min(...take.map(x=>x.level)),order:Math.min(...take.map(x=>x.order)),group:take[0].group},merged));
    return rest;
  }
  function analyze(profile,rawAnswers){
    const p=normalizedProfile(profile), answers=pruneAnswers(p,rawAnswers);
    const rows=QUESTIONS.map(q=>{
      const e=eligibility(q.id,p,answers);
      const a=e.show?answers[q.id]:undefined;
      return {id:q.id,domain:q.domain,question:q.question,evidence:q.evidence,eligibility:e,
        level:a?.level??null,evidenceStatus:a?.evidence||null,finding:a?.finding||null,options:q.options};
    });
    const answered=rows.filter(r=>r.eligibility.show && r.level!==null);
    const strengths=[],gaps=[],checks=[],candidates=[],inactive=[];
    for(const row of rows){
      const q=BY_ID[row.id];
      if(!row.eligibility.show){inactive.push(row);continue;}
      if(row.level===null){checks.push({id:row.id,title:'Jawaban belum diisi',reason:q.question});continue;}
      if(row.level==='unknown'){checks.push({id:row.id,title:'Kondisi perlu ditanyakan',reason:'Periksa kondisi ini kepada penanggung jawab terkait. Contoh bukti: '+q.evidence});continue;}
      const n=Number(row.level);
      if(n===3)strengths.push({id:row.id,text:strengthText(q),proofReported:row.evidenceStatus==='yes'});
      if(n<3){
        const detail=q.plans[n];
        gaps.push({id:row.id,title:detail.title,why:detail.why,action:detail.first,proof:detail.proof,level:n});
        candidates.push(makeCandidate(q,row));
      }
      if(n>=2 && row.evidenceStatus!=='yes')checks.push({id:row.id,title:'Bukti pelaksanaan perlu diperiksa',reason:'Pada pertanyaan ini kegiatan dilaporkan sudah berjalan, tetapi bukti belum dinyatakan tersedia untuk diperiksa. Contoh: '+q.evidence});
      if(row.id==='D7.01' && n>=2 && row.finding==='unknown')checks.push({id:row.id,title:'Temuan evaluasi belum jelas',reason:'Periksa apakah hasil evaluasi menunjukkan hal yang perlu diperbaiki.'});
    }
    let cand=candidates;
    cand=mergeCandidates(cand,['D1.01','D2.01'],{title:'Sepakati arah OSS dan profil lulusan',
      why:'Arah pendidikan berkelanjutan dan target kemampuan lulusan belum cukup jelas.',
      first:'Pertemukan pimpinan untuk menentukan tujuan OSS dan kemampuan akhir lulusan yang diharapkan.',
      proof:'Keputusan bersama mengenai arah OSS dan draf profil lulusan.'});
    cand=mergeCandidates(cand,['D2.02','D3.01'],{title:'Selaraskan target belajar dan program berjenjang',
      why:'Target menuju profil lulusan dan tahapan program pendidikan belum dijalankan secara selaras.',
      first:'Pilih satu program pendidikan prioritas; bandingkan hasil akhir satu tingkat dengan kebutuhan tingkat berikutnya.',
      proof:'Peta tahapan kompetensi dan kesepakatan guru terkait.'});
    cand=mergeCandidates(cand,['D5.02','D6.02'],{title:'Kumpulkan informasi orang tua dan kelanjutan siswa',
      why:'Kebutuhan orang tua dan informasi kelanjutan lulusan belum cukup diketahui.',
      first:'Susun rekap agregat kelanjutan siswa dan tanyakan alasan pilihan pendidikan orang tua secara singkat.',
      proof:'Ringkasan kelanjutan lulusan dan kebutuhan orang tua tanpa data pribadi siswa.'});
    // Hindari menyarankan promosi ketika mutu program unggulan belum jelas.
    if(['0','1'].includes(answers['D4.01']?.level))for(const c of cand){if(c.ids.includes('D5.01'))c.order=Math.max(c.order,88);}
    cand.sort((a,b)=>a.level-b.level||a.order-b.order||a.ids[0].localeCompare(b.ids[0]));
    const priorities=[];const groups=new Set();
    for(const c of cand){if(priorities.length>=3)break;if(groups.has(c.group))continue;priorities.push(c);groups.add(c.group);}
    const known=answered.filter(r=>r.level!=='unknown').length;
    const unknown=answered.filter(r=>r.level==='unknown').length;
    return {profile:p,answers,rows,answeredCount:answered.length,knownCount:known,unknownCount:unknown,
      visibleCount:rows.filter(r=>r.eligibility.show).length,strengths,gaps,checks,inactive,priorities,
      note:NOTE,scopeText:p.scope==='foundation'?'Pemetaan pada yayasan, fokus '+focusLabel(p)+'. Hasil ini tidak mewakili seluruh jalur yayasan.':'Pemetaan pada satu sekolah jenjang '+focusLabel(p)+'.'};
  }
  const core={VERSION,QUESTIONS,SECTIONS,DOMAINS,GRADE_NAMES,defaultProfile,normalizedProfile,focusOptions,focusLabel,eligibility,visibleQuestions,pruneAnswers,analyze,safeHtml};
  if(typeof module!=='undefined' && module.exports)module.exports=core;
  if(typeof document==='undefined')return;

  const root=document.getElementById('oss-root');
  if(!root)return;
  host.OSS_BOOTED=true;
  host.OSSApp={core};
  const draft=readLocal();
  const state={
    view:'login',profile:normalizedProfile(draft?.profile||defaultProfile()),
    answers:draft?.answers||{},qid:draft?.qid||'',loginError:'',username:'',showPassword:false,
    storageWarn:false,reportExpanded:false
  };
  state.answers=pruneAnswers(state.profile,state.answers);
  if(sessionValue()===true)state.view=draft?.view==='report'?'report':draft?.view==='results'?'results':draft?.view==='assessment'?'assessment':'welcome';
  else state.view='login';
  function readLocal(){try {return JSON.parse(host.localStorage.getItem(STORE)||'null');}catch(e){return null;}}
  function sessionValue(){try{return host.sessionStorage.getItem(SESSION)==='yes';}catch(e){return false;}}
  function save(){
    try{host.localStorage.setItem(STORE,JSON.stringify({profile:state.profile,answers:state.answers,qid:state.qid,view:state.view}));state.storageWarn=false;}
    catch(e){state.storageWarn=true;}
  }
  function clearStored(){try{host.localStorage.removeItem(STORE);}catch(e){} }
  function persistSession(v){try{if(v)host.sessionStorage.setItem(SESSION,'yes');else host.sessionStorage.removeItem(SESSION);}catch(e){} }
  function currentQuestion(){
    const qs=visibleQuestions(state.profile,state.answers);
    const found=qs.find(x=>x.id===state.qid);
    if(found)return {q:found,idx:qs.indexOf(found),qs};
    state.qid=qs[0]?.id||'';return {q:qs[0],idx:0,qs};
  }
  function cleanAndSave(){state.answers=pruneAnswers(state.profile,state.answers);save();}
  function icon(name){
    const paths={
      arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6-6-6 6 6 6"/>',check:'<path d="m5 12 4 4L19 6"/>',eye:'<path d="M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
      close:'<path d="M6 6l12 12M18 6 6 18"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
      print:'<path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6z"/>',
      edit:'<path d="M12 20h9M16 4a2 2 0 0 1 3 3L9 17l-4 1 1-4 10-10z"/>',
      logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
      list:'<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
      spark:'<path d="m12 3 1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7L12 3Z"/>',
      shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
      refresh:'<path d="M20 7v5h-5M4 17v-5h5M6 9a7 7 0 0 1 12-2l2 2M18 15a7 7 0 0 1-12 2l-2-2"/>'
    };
    return '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="oss-icon">'+(paths[name]||paths.info)+'</svg>';
  }
  function logo(){return '<img class="oss-logo" src="'+safeHtml(root.getAttribute('data-logo')||'')+'" alt="Logo Edumind Academy" />';}
  function header(title,sub){
    return '<header class="oss-topbar"><div class="oss-brand">'+logo()+'<span class="oss-brand-sep"></span><span class="oss-brand-sub">APLIKASI OSS</span></div><button type="button" class="oss-link-button oss-logout" data-action="logout">'+icon('logout')+' Keluar</button></header>'+
      '<div class="oss-page-heading"><p class="oss-eyebrow">EDUMIND ACADEMY</p><h1 tabindex="-1">'+safeHtml(title)+'</h1>'+(sub?'<p class="oss-subtitle">'+safeHtml(sub)+'</p>':'')+'</div>';
  }
  function wrapper(content,cls=''){return '<div class="oss-shell '+cls+'">'+content+'</div>';}
  function button(txt,action,cls='oss-btn-primary',attr=''){
    return '<button type="button" class="oss-btn '+cls+'" data-action="'+action+'" '+attr+'>'+txt+'</button>';
  }
  function renderLogin(){
    return wrapper('<main class="oss-login-wrap"><div class="oss-login-card">'+logo()+
      '<p class="oss-eyebrow oss-login-label">APLIKASI OSS</p><h1 class="oss-login-title">Peta Kesiapan<br>One Stop Schooling<br>Sekolah Islam</h1>'+ 
      '<p class="oss-login-intro">Masuk untuk melihat kesiapan pendidikan berkelanjutan di sekolah Anda.</p>'+ 
      '<form id="oss-login-form" autocomplete="off"><label for="oss-username">Username</label><input id="oss-username" name="username" autocapitalize="none" spellcheck="false" required placeholder="Masukkan username" autocomplete="off" value="'+safeHtml(state.username)+'">'+
      '<label for="oss-password">Password</label><div class="oss-password-wrap"><input id="oss-password" name="password" type="'+(state.showPassword?'text':'password')+'" required autocomplete="off" placeholder="Masukkan password" />'+
      '<button type="button" data-action="toggle-password" class="oss-password-toggle" aria-label="'+(state.showPassword?'Sembunyikan':'Tampilkan')+' password">'+icon('eye')+' Lihat</button></div>'+ 
      (state.loginError?'<p role="alert" class="oss-form-error">'+safeHtml(state.loginError)+'</p>':'')+
      '<button class="oss-btn oss-btn-primary oss-btn-block" type="submit" id="oss-login-submit">Masuk Sistem '+icon('arrow')+'</button></form>'+ 
      '<div class="oss-login-footer"><p>Masuk hanya untuk pengguna yang mendapat izin Edumind Academy.</p><p>Login ini hanya pembatas akses sederhana, bukan perlindungan keamanan penuh. Jangan masukkan data rahasia.</p><small>Edumind Academy · Versi '+VERSION+'</small></div></div></main>','oss-login-shell');
  }
  function renderWelcome(){
    return wrapper(header('Peta Kesiapan One Stop Schooling','Kenali kondisi sekolah Anda. Tentukan langkah perbaikan yang paling dibutuhkan.')+
      '<main class="oss-main"><section class="oss-hero-card"><div class="oss-hero-text"><p class="oss-chip">Pemetaan Mandiri Sekolah Islam</p><h2>Sekolah sudah berjalan. Seberapa baik programnya saling terhubung?</h2><p>Jawab beberapa pertanyaan sederhana untuk melihat apa yang sudah baik, bagian yang perlu dibenahi, dan langkah pertama yang masuk akal.</p>'+button('Mulai Pemetaan '+icon('arrow'),'start','oss-btn-primary')+'</div><div class="oss-hero-mark" aria-hidden="true"><span>OSS</span><small>Pendidikan Berkelanjutan</small></div></section>'+ 
      '<section class="oss-three-col"><article>'+icon('check')+'<h3>Yang Sudah Berjalan</h3><p>Kenali kekuatan dan modal sekolah Anda.</p></article><article>'+icon('list')+'<h3>Yang Perlu Dibenahi</h3><p>Lihat bagian yang masih perlu perhatian.</p></article><article>'+icon('spark')+'<h3>Langkah yang Disarankan</h3><p>Dapatkan hingga tiga prioritas yang bisa ditindaklanjuti.</p></article></section>'+ 
      '<div class="oss-note">'+icon('info')+'<p>Tidak perlu membuat akun baru, mengunggah dokumen, atau memasukkan data pribadi siswa. '+safeHtml(NOTE)+'</p></div></main>'+footer());
  }
  function footer(){return '<footer class="oss-footer">Edumind Academy <span>•</span> Peta Kesiapan OSS v'+VERSION+'</footer>';}
  function radioRow(name,value,label,checked,desc=''){
    return '<label class="oss-radio-card"><input type="radio" name="'+safeHtml(name)+'" value="'+safeHtml(value)+'" '+(checked?'checked':'')+'><span class="oss-radio-art" aria-hidden="true"></span><span class="oss-radio-copy">'+safeHtml(label)+(desc?'<small>'+safeHtml(desc)+'</small>':'')+'</span></label>';
  }
  function renderProfile(){
    const p=state.profile, opts=focusOptions(p),focus=p.focus;
    let html=header('Tentang Sekolah atau Yayasan Anda','Isi informasi singkat agar pertanyaan sesuai dengan kondisi lembaga.')+
      '<main class="oss-main oss-narrow"><section class="oss-card"><div class="oss-card-header"><span class="oss-step-label">LANGKAH AWAL</span><h2>Ceritakan sedikit tentang lembaga Anda</h2><p>Data yang tidak diperlukan tidak akan kami minta.</p></div>'+ 
      '<div class="oss-fieldset"><h3>1. Apa yang ingin Anda nilai?</h3><div class="oss-radio-list">'+
      radioRow('scope','school','Satu sekolah',p.scope==='school')+
      radioRow('scope','foundation','Beberapa sekolah dalam satu yayasan',p.scope==='foundation')+'</div></div>'+ 
      '<div class="oss-fieldset"><label class="oss-field-label" for="oss-name">Nama sekolah atau yayasan <em>(boleh kosong)</em></label><input class="oss-input" id="oss-name" type="text" maxlength="100" placeholder="Contoh: Yayasan Pendidikan ..." value="'+safeHtml(p.name)+'"></div>'+ 
      '<div class="oss-fieldset"><h3>2. Jenjang pendidikan yang dinilai</h3><div class="oss-grade-grid">';
    for(const id of GRADE_ORDER){
      html+='<label class="oss-check-card"><input type="'+(p.scope==='school'?'radio':'checkbox')+'" name="grades" value="'+id+'" '+(p.grades.includes(id)?'checked':'')+'><span>'+safeHtml(GRADE_NAMES[id])+'</span></label>';
    }
    html+='</div><p class="oss-hint">'+(p.scope==='school'?'Pilih satu jenjang sekolah.':'Pilih semua jenjang yang ada dalam yayasan.')+'</p></div>';
    if(p.scope==='foundation'&&p.grades.length){html+='<div class="oss-fieldset"><label class="oss-field-label" for="oss-focus">3. Bagian mana yang ingin diperiksa lebih dekat?</label><select class="oss-input" id="oss-focus">'+opts.map(o=>'<option value="'+safeHtml(o.value)+'" '+(focus===o.value?'selected':'')+'>'+safeHtml(o.label)+'</option>').join('')+'</select><p class="oss-hint">Hasil nanti hanya berlaku untuk fokus yang dipilih, bukan seluruh jalur yayasan.</p></div>';}
    const n=p.scope==='foundation'?'4':'3', n2=p.scope==='foundation'?'5':'4',n3=p.scope==='foundation'?'6':'5';
    html+='<div class="oss-fieldset"><h3>'+n+'. Apakah pembelajaran sudah berjalan?</h3><div class="oss-mini-options">'+
      radioRow('learning','yes','Sudah ada siswa yang belajar',p.learning==='yes')+
      radioRow('learning','no','Belum mulai pembelajaran',p.learning==='no')+'</div></div>'+
      '<div class="oss-fieldset"><h3>'+n2+'. Apakah sudah ada siswa yang naik kelas atau pindah jenjang?</h3><div class="oss-mini-options">'+
      radioRow('transition','yes','Sudah',p.transition==='yes')+radioRow('transition','no','Belum',p.transition==='no')+radioRow('transition','unknown','Belum tahu',p.transition==='unknown')+'</div></div>'+
      '<div class="oss-fieldset"><h3>'+n3+'. Apakah jenjang yang sedang dinilai sudah memiliki lulusan?</h3><div class="oss-mini-options">'+
      radioRow('graduates','yes','Sudah',p.graduates==='yes')+radioRow('graduates','no','Belum',p.graduates==='no')+radioRow('graduates','unknown','Belum tahu',p.graduates==='unknown')+'</div></div>'+ 
      '<div class="oss-fieldset"><label class="oss-field-label" for="oss-program">Program utama yang ingin diperhatikan <em>(boleh kosong)</em></label><input class="oss-input" id="oss-program" type="text" maxlength="100" placeholder="Contoh: Al-Qur’an, adab, bahasa" value="'+safeHtml(p.program)+'"><p class="oss-hint">Contoh program ini membantu memahami konteks, bukan ukuran keberhasilan.</p></div>'+ 
      '<p id="oss-profile-error" class="oss-form-error" hidden role="alert">Pilih minimal satu jenjang pendidikan.</p></section>'+ 
      '<div class="oss-form-actions">'+button(icon('back')+' Kembali','to-welcome','oss-btn-outline')+button('Lanjutkan '+icon('arrow'),'profile-next','oss-btn-primary')+'</div></main>'+footer();
    return wrapper(html);
  }
  function renderAssessment(){
    const {q,idx,qs}=currentQuestion();
    if(!q){state.view='results';return renderResults();}
    const answer=state.answers[q.id]||{},sec=SECTIONS.findIndex(s=>s.domain.includes(q.domain));
    let html=header('Mari Lihat Kondisi Sekolah Anda','Pilih jawaban yang paling sesuai dengan keadaan sebenarnya. Tidak ada jawaban benar atau salah.')+
      '<main class="oss-main oss-narrow"><section class="oss-card oss-question-card"><div class="oss-progress-top"><div><span class="oss-step-label">BAGIAN '+(sec+1)+' DARI 4</span><h2>'+safeHtml(SECTIONS[sec].label)+'</h2></div><span class="oss-progress-count">Pertanyaan '+(idx+1)+' dari '+qs.length+'</span></div><div class="oss-progress-track"><div style="width:'+Math.round((idx+1)/qs.length*100)+'%"></div></div>'+ 
      '<div class="oss-question-main"><p class="oss-small-caps">KONDISI SEKOLAH</p><h3>'+safeHtml(q.question)+'</h3><p class="oss-question-example">'+safeHtml(q.example)+'</p></div>'+ 
      '<div class="oss-answer-list">'+q.options.map((o,i)=>radioRow('answer',String(i),o,answer.level===String(i))).join('')+radioRow('answer','unknown','Saya belum tahu',answer.level==='unknown')+'</div>'+ 
      '<div class="oss-evidence-help">'+icon('info')+'<p><strong>Contoh bukti:</strong> '+safeHtml(q.evidence)+'</p></div>';
    if(['2','3'].includes(answer.level))html+='<fieldset class="oss-proof-field"><legend>Apakah ada catatan atau hasil kegiatan yang bisa diperiksa? <span>(boleh dilewati)</span></legend><div class="oss-proof-grid">'+
      radioRow('evidence','yes','Ada',answer.evidence==='yes')+radioRow('evidence','no','Belum tersedia',answer.evidence==='no')+radioRow('evidence','unknown','Belum tahu',answer.evidence==='unknown')+'</div></fieldset>';
    if(q.id==='D7.01'&&['2','3'].includes(answer.level))html+='<fieldset class="oss-proof-field"><legend>Apakah dari peninjauan tersebut ada hal yang perlu diperbaiki?</legend><div class="oss-proof-grid">'+
      radioRow('finding','yes','Ada',answer.finding==='yes')+radioRow('finding','no','Belum ada',answer.finding==='no')+radioRow('finding','unknown','Belum tahu',answer.finding==='unknown'||!answer.finding)+'</div></fieldset>';
    html+='<p class="oss-form-error" id="oss-answer-error" role="alert" hidden>Pilih satu jawaban untuk melanjutkan. Jika belum mengetahui kondisinya, pilih “Saya belum tahu”.</p>'+ 
      '</section><div class="oss-form-actions">'+button(icon('back')+' Kembali','question-back','oss-btn-outline')+
      button((idx===qs.length-1?'Lihat Hasil':'Lanjutkan')+' '+icon('arrow'),'question-next','oss-btn-primary')+'</div>'+ 
      '<p class="oss-bottom-helper">Jawaban dapat diperbaiki kapan saja. Hasil hanya berdasarkan kondisi yang Anda isi.</p></main>'+footer();
    return wrapper(html);
  }
  function listText(items,makeText,empty){
    if(!items.length)return '<p class="oss-muted">'+safeHtml(empty)+'</p>';
    return '<ul class="oss-bullet-list">'+items.map(item=>'<li>'+safeHtml(makeText(item))+'</li>').join('')+'</ul>';
  }
  function outcomeIntro(data){
    if(data.answeredCount===0)return 'Belum ada jawaban untuk menyusun peta kondisi sekolah.';
    if(!data.knownCount)return 'Sebagian besar kondisi belum diketahui. Periksa informasi yang dibutuhkan sebelum menentukan langkah perbaikan.';
    if(!data.gaps.length)return 'Berdasarkan jawaban Anda, belum terlihat kesenjangan utama yang memerlukan perbaikan segera. Pertahankan praktik yang berjalan dan tetap periksa bukti hasilnya.';
    return 'Berikut ringkasan berdasarkan jawaban Anda. Gunakan hasil ini sebagai bahan pembahasan bersama pimpinan sekolah atau yayasan.';
  }
  function priorityCard(c,i){
    return '<article class="oss-priority-card"><div class="oss-priority-num">'+String(i+1).padStart(2,'0')+'</div><div class="oss-priority-body"><h3>'+safeHtml(c.title)+'</h3>'+ 
      '<div class="oss-priority-item"><strong>Apa yang ditemukan?</strong><p>'+safeHtml(c.why)+'</p></div>'+ 
      '<div class="oss-priority-item"><strong>Mulai dari sini:</strong><p>'+safeHtml(c.first)+'</p></div>'+ 
      '<div class="oss-priority-item"><strong>Tanda bahwa langkah dilakukan:</strong><p>'+safeHtml(c.proof)+'</p></div></div></article>';
  }
  function sectionCard(title,iconName,items,mapper,empty,type){
    const sample=items.slice(0,4);
    const more=items.length>sample.length?'<p class="oss-more-count">'+(items.length-sample.length)+' hal lainnya tersedia dalam laporan lengkap.</p>':'';
    return '<section class="oss-summary-box oss-summary-'+type+'"><div class="oss-summary-head">'+icon(iconName)+'<h2>'+safeHtml(title)+'</h2><span class="oss-counter">'+items.length+'</span></div>'+listText(sample,mapper,empty)+more+'</section>';
  }
  function renderResults(){
    const data=analyze(state.profile,state.answers);
    let html=header('Hasil Pemetaan '+(state.profile.scope==='foundation'?'Yayasan':'Sekolah'),outcomeIntro(data))+
      '<main class="oss-main"><div class="oss-scope-bar">'+icon('info')+'<span>'+safeHtml(data.scopeText)+'</span></div>'+ 
      '<section class="oss-results-grid">'+
      sectionCard('Yang Sudah Berjalan','check',data.strengths,x=>x.text,'Belum ada kondisi yang dilaporkan sudah berjalan konsisten.','strength')+
      sectionCard('Yang Perlu Dibenahi','list',data.gaps,x=>x.why,'Belum ditemukan kesenjangan yang jelas dari jawaban pengguna.','gap')+
      sectionCard('Hal yang Perlu Diperiksa','info',data.checks,x=>x.reason,'Tidak ada informasi tambahan yang perlu diperiksa berdasarkan isian saat ini.','verify')+
      '</section><section class="oss-priorities"><div class="oss-section-title"><span class="oss-step-label">LANGKAH BERIKUTNYA</span><h2>Langkah yang Disarankan</h2><p>Dipilih dari jawaban dan kondisi lembaga, bukan dari skor kesiapan.</p></div>'+
      (data.priorities.length?'<div class="oss-priority-list">'+data.priorities.map(priorityCard).join('')+'</div>':
        '<div class="oss-empty-priority">'+icon('check')+'<div><h3>'+(!data.knownCount?'Periksa kondisi sekolah terlebih dahulu':'Tidak perlu memaksakan langkah perbaikan')+'</h3><p>'+(!data.knownCount?'Jawaban yang tersedia belum cukup untuk menentukan prioritas. Mulailah dengan memastikan informasi yang masih belum diketahui.':'Belum ditemukan kesenjangan utama yang dapat dijadikan prioritas baru. Lanjutkan pemeriksaan bukti dan pemeliharaan program.')+'</p></div></div>')+
      '<div class="oss-results-actions">'+button(icon('edit')+' Perbaiki Jawaban','edit-answers','oss-btn-outline')+
      button(icon('print')+' Lihat Laporan / Simpan PDF','to-report','oss-btn-primary')+'</div></section>'+ 
      '<section class="oss-card oss-results-note"><h2>Catatan penting</h2><p>'+safeHtml(NOTE)+'</p><p>Jawaban “Saya belum tahu” dan pertanyaan yang belum sesuai kondisi lembaga tidak dihitung sebagai kegagalan.</p></section></main>'+footer();
    return wrapper(html);
  }
  function statusText(r){
    if(!r.eligibility.show)return r.eligibility.status==='tidak berlaku'?'Tidak berlaku':'Belum dapat dinilai';
    if(r.level===null)return 'Belum dijawab';
    if(r.level==='unknown')return 'Saya belum tahu';
    return r.options[Number(r.level)];
  }
  function renderReport(){
    const data=analyze(state.profile,state.answers);
    const p=data.profile, date=new Intl.DateTimeFormat('id-ID',{timeZone:'Asia/Jakarta',day:'numeric',month:'long',year:'numeric'}).format(new Date());
    const name=p.name?.trim()||'Belum diisi';
    let html=header('Laporan untuk Pimpinan','Ringkasan pemetaan mandiri untuk dibahas dan ditindaklanjuti.')+
      '<main class="oss-main"><div class="oss-report-buttons">'+button(icon('back')+' Kembali ke Hasil','to-results','oss-btn-outline')+button(icon('print')+' Cetak / Simpan PDF','print','oss-btn-primary')+'</div>'+ 
      '<article id="oss-print-area" class="oss-report"><div class="oss-report-heading">'+logo()+'<p class="oss-eyebrow">EDUMIND ACADEMY</p><h2>Laporan Peta Kesiapan<br>One Stop Schooling</h2><p class="oss-muted">Bahan diskusi dan penentuan langkah perbaikan sekolah Islam</p></div>'+ 
      '<div class="oss-report-meta"><div><strong>Nama lembaga</strong><span>'+safeHtml(name)+'</span></div><div><strong>Cakupan</strong><span>'+(p.scope==='foundation'?'Beberapa sekolah dalam satu yayasan':'Satu sekolah')+'</span></div><div><strong>Jenjang</strong><span>'+p.grades.map(g=>safeHtml(GRADE_NAMES[g])).join(', ')+'</span></div><div><strong>Fokus penilaian</strong><span>'+safeHtml(focusLabel(p))+'</span></div><div><strong>Tanggal</strong><span>'+safeHtml(date)+'</span></div><div><strong>Program utama</strong><span>'+safeHtml(p.program||'Tidak ditentukan')+'</span></div></div>'+ 
      '<section class="oss-report-section"><h3>1. Ringkasan Kondisi</h3><p>'+safeHtml(outcomeIntro(data))+'</p><p><strong>Cakupan:</strong> '+safeHtml(data.scopeText)+'</p></section>'+ 
      '<section class="oss-report-section"><h3>2. Yang Sudah Berjalan</h3>'+listText(data.strengths,x=>x.text,'Belum ditemukan kondisi yang dilaporkan konsisten.')+'</section>'+ 
      '<section class="oss-report-section"><h3>3. Yang Perlu Dibenahi</h3>'+listText(data.gaps,x=>x.why,'Belum ditemukan kesenjangan utama berdasarkan jawaban pengguna.')+'</section>'+ 
      '<section class="oss-report-section"><h3>4. Hal yang Perlu Diperiksa</h3>'+listText(data.checks,x=>x.reason,'Tidak ada hal tambahan yang secara khusus ditandai untuk pemeriksaan.')+'</section>'+ 
      '<section class="oss-report-section"><h3>5. Langkah yang Disarankan</h3>'+(data.priorities.length?data.priorities.map(priorityCard).join(''):'<p>Belum ada prioritas perbaikan yang cukup jelas untuk ditetapkan berdasarkan jawaban yang tersedia.</p>')+'</section>'+ 
      '<section class="oss-report-section"><h3>6. Rincian Jawaban Pemetaan</h3><p class="oss-muted">Pertanyaan yang tidak berlaku atau belum dapat dinilai ditampilkan agar pembaca mengetahui batas hasil pemetaan.</p>'+
      DOMAINS.map(d=>'<div class="oss-report-domain"><h4>'+safeHtml(d.label)+'</h4><table class="oss-report-table"><thead><tr><th style="width:12%">Kode</th><th>Pertanyaan</th><th style="width:28%">Jawaban atau status</th></tr></thead><tbody>'+data.rows.filter(r=>r.domain===d.id).map(r=>'<tr><td>'+safeHtml(r.id)+'</td><td>'+safeHtml(r.question)+(r.eligibility.show&&['2','3'].includes(r.level)?'<div class="oss-row-note">Bukti: '+(r.evidenceStatus==='yes'?'Dilaporkan ada':r.evidenceStatus==='no'?'Belum tersedia':'Belum diketahui')+'</div>':'')+'</td><td>'+safeHtml(statusText(r))+(r.eligibility.show?'':'<div class="oss-row-note">'+safeHtml(r.eligibility.why)+'</div>')+'</td></tr>').join('')+'</tbody></table></div>').join('')+'</section>'+ 
      '<section class="oss-report-section oss-report-disclaimer"><h3>7. Catatan dan Batasan</h3><p>'+safeHtml(NOTE)+'</p><p>Ini adalah instrumen pengembangan Edumind Academy yang mengambil inspirasi dari penjelasan Dr. Supangat; bukan instrumen asesmen resmi narasumber. Data jawaban tidak dikirim ke server penyimpanan oleh kode aplikasi ini. Jika penyimpanan lokal browser tersedia, isian dapat tersimpan sementara di perangkat pengguna.</p></section>'+ 
      '<footer class="oss-report-foot">Edumind Academy · Aplikasi Peta Kesiapan OSS v'+VERSION+' · '+safeHtml(date)+'</footer></article>'+ 
      '<div class="oss-report-buttons oss-report-buttons-bottom">'+button(icon('back')+' Kembali','to-results','oss-btn-outline')+button(icon('print')+' Cetak / Simpan PDF','print','oss-btn-primary')+'</div></main>'+footer();
    return wrapper(html,'oss-report-shell');
  }
  function render(){
    const views={login:renderLogin,welcome:renderWelcome,profile:renderProfile,assessment:renderAssessment,results:renderResults,report:renderReport};
    root.innerHTML=(views[state.view]||renderLogin)();
    root.setAttribute('data-oss-version',VERSION);
  }
  function go(view){state.view=view;save();render();try{host.scrollTo({top:0,behavior:'instant'});}catch(e){}}
  function getLoginStatus(user,pass){
    if(!host.crypto?.subtle)return Promise.resolve({ok:false,reason:'Halaman harus dibuka melalui koneksi aman (HTTPS) atau pratinjau lokal yang mendukung fitur keamanan browser.'});
    const input='edumind-oss-v1-access|'+user+'|'+pass;
    return host.crypto.subtle.digest('SHA-256',new TextEncoder().encode(input)).then(x=>{
      const hex=[...new Uint8Array(x)].map(v=>v.toString(16).padStart(2,'0')).join('');
      return {ok:hex===AUTH_DIGEST,reason:'Username atau password belum sesuai. Silakan periksa kembali.'};
    }).catch(()=>({ok:false,reason:'Pemeriksaan login tidak dapat dilakukan pada browser ini.'}));
  }
  function navQuestion(direction){
    const item=currentQuestion(),qs=item.qs;
    if(direction>0){
      if(!state.answers[item.q.id]?.level){
        const err=root.querySelector('#oss-answer-error');if(err){err.hidden=false;err.scrollIntoView({block:'center'});}return;
      }
      if(item.idx===qs.length-1){go('results');return;}
      state.qid=qs[item.idx+1]?.id||qs[0].id;
    }else if(item.idx>0){state.qid=qs[item.idx-1].id;}
    else {go('profile');return;}
    go('assessment');
  }
  root.addEventListener('submit',async(e)=>{
    if(e.target.id!=='oss-login-form')return;
    e.preventDefault();
    const form=e.target;
    const user=(form.querySelector('#oss-username')?.value||'').trim();
    const pass=form.querySelector('#oss-password')?.value||'';
    state.username=user;
    const btn=form.querySelector('#oss-login-submit');if(btn){btn.disabled=true;btn.textContent='Memeriksa...';}
    const result=await getLoginStatus(user,pass);
    if(result.ok){persistSession(true);state.loginError='';state.view='welcome';save();render();}
    else{state.loginError=result.reason;state.view='login';render();const ps=root.querySelector('#oss-password');if(ps)ps.focus();}
  });
  root.addEventListener('change',(e)=>{
    const el=e.target;
    if(state.view==='profile'){
      const p=state.profile;
      if(el.name==='scope'){p.scope=el.value;p.grades=p.grades.slice(0,1);p.focus='';p.name=root.querySelector('#oss-name')?.value||p.name;p.program=root.querySelector('#oss-program')?.value||p.program;state.profile=normalizedProfile(p);cleanAndSave();render();return;}
      if(el.name==='grades'){
        if(p.scope==='school')p.grades=[el.value];
        else{const chosen=new Set(p.grades);if(el.checked)chosen.add(el.value);else chosen.delete(el.value);p.grades=GRADE_ORDER.filter(g=>chosen.has(g));}
        p.name=root.querySelector('#oss-name')?.value||p.name;p.program=root.querySelector('#oss-program')?.value||p.program;state.profile=normalizedProfile(p);cleanAndSave();render();return;
      }
      if(el.id==='oss-focus'){p.focus=el.value;cleanAndSave();return;}
      if(['learning','transition','graduates'].includes(el.name)){p[el.name]=el.value;cleanAndSave();return;}
    }
    if(state.view==='assessment'){
      const id=currentQuestion().q.id;
      if(!state.answers[id])state.answers[id]={};
      const a=state.answers[id];
      if(el.name==='answer'){a.level=el.value;if(!['2','3'].includes(a.level)){delete a.evidence;delete a.finding;}if(a.level==='unknown'){delete a.evidence;delete a.finding;}cleanAndSave();render();return;}
      if(el.name==='evidence'){a.evidence=el.value;save();return;}
      if(el.name==='finding'){a.finding=el.value;cleanAndSave();return;}
    }
  });
  root.addEventListener('input',(e)=>{
    if(state.view!=='profile')return;
    if(e.target.id==='oss-name'){state.profile.name=e.target.value;save();}
    if(e.target.id==='oss-program'){state.profile.program=e.target.value;save();}
  });
  root.addEventListener('click',(e)=>{
    const target=e.target.closest('[data-action]');if(!target)return;
    const action=target.getAttribute('data-action');
    if(action==='toggle-password'){
      const pass=root.querySelector('#oss-password');if(!pass)return;
      pass.type=pass.type==='password'?'text':'password';
      target.setAttribute('aria-label',pass.type==='password'?'Tampilkan password':'Sembunyikan password');return;
    }
    if(action==='logout'){
      if(!host.confirm('Keluar dari aplikasi? Jawaban sementara pada perangkat ini juga akan dihapus.'))return;
      persistSession(false);clearStored();state.answers={};state.profile=normalizedProfile(defaultProfile());state.qid='';state.view='login';state.username='';state.loginError='';render();return;
    }
    if(action==='start'){go('profile');return;}
    if(action==='to-welcome'){go('welcome');return;}
    if(action==='profile-next'){
      state.profile=normalizedProfile(state.profile);
      if(!state.profile.grades.length){const err=root.querySelector('#oss-profile-error');if(err){err.hidden=false;err.scrollIntoView({block:'center'});}return;}
      cleanAndSave();state.qid=visibleQuestions(state.profile,state.answers)[0]?.id||'';go('assessment');return;
    }
    if(action==='question-back'){navQuestion(-1);return;}
    if(action==='question-next'){navQuestion(1);return;}
    if(action==='edit-answers'){state.qid=visibleQuestions(state.profile,state.answers)[0]?.id||'';go('assessment');return;}
    if(action==='to-report'){go('report');return;}
    if(action==='to-results'){go('results');return;}
    if(action==='print'){host.print();return;}
  });
  render();
})(typeof window!=='undefined'?window:globalThis);
