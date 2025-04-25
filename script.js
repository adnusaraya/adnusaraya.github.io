
function sendToWhatsApp() {
  const nama = document.querySelector('input[name=nama]').value;
  const wa = document.querySelector('input[name=wa]').value;
  const tanggal = document.querySelector('input[name=tanggal]').value;
  const jumlah = document.querySelector('input[name=jumlah]').value;
  const tujuan = document.querySelector('input[name=tujuan]').value;
  const jemput = document.querySelector('input[name=penjemputan]').value;
  const catatan = document.querySelector('textarea[name=catatan]').value;

  const pesan = `Halo A&D Nusaraya! Saya ingin memesan perjalanan:%0A
Nama: ${nama}%0A
No. WA: ${wa}%0A
Tanggal: ${tanggal}%0A
Jumlah Orang: ${jumlah}%0A
Tujuan: ${tujuan}%0A
Lokasi Penjemputan: ${jemput}%0A
Catatan: ${catatan}`;

  const url = `https://wa.me/6281234567890?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
  return false;
}
