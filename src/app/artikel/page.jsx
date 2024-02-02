"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NavBar } from "@/components/navbar";
import { Navbar } from "@material-tailwind/react";

export default function DetailArtikel() {
  return (
    <div>
      <NavBar></NavBar>
      <div className=" max-w-4xl mx-auto mt-6 p-4">
        <h1 className="text-3xl font-bold mb-4 text-left">
          Mahasiswa KKN PMD UNRAM melakukan Pelatihan dan pendampingan
          pengolahan makanan bergizi untuk mengurangi resiko terjadinya gejala
          stunting di desa belanting{" "}
        </h1>
        <p className="text-gray-600 mb-6">Published on February 02, 2024</p>
        <img
          src="/images/sosialisasi_pendampingan.jpg"
          alt="kkn"
          className="w-full h-64 object-cover mb-6"
        />
        <div className="prose text-justify">
          <p>
            Makanan bergizi memiliki peran penting dalam menjaga kesehatan
            tubuh. Dalam konteks ini, KKN PMD UNRAM Periode 2023-2024 menggelar
            pelatihan dan pendampingan pengolahan makanan bergizi di Desa
            Belanting dengan tujuan mengurangi risiko terjadinya gejala stunting
            dan meningkatkan pola hidup sehat masyarakat.
          </p>
          <br />
          <p>
            Makanan bergizi mencakup berbagai komponen penting seperti
            karbohidrat, protein nabati dan hewani, buah, dan sayur. Sementara
            makanan berkecukupan adalah makanan yang sesuai dengan kebutuhan
            berdasarkan usia dan kondisi tubuh. Pemenuhan gizi bagi anak balita
            bukan hanya berasal dari Makanan Pendamping ASI (MPASI) saja. Anak
            pada usia ini mulai dapat membedakan rasa, sehingga pemilihan
            makanan perlu dilakukan dengan kreativitas agar kebutuhan nutrisi
            terpenuhi.
          </p>
          <br />
          <p>
            Pada Senin, 29 Januari 2024, kegiatan ini dilaksanakan di Gedung
            Serbaguna Kantor Desa Belanting Kecamatan Sambelia. Mahasiswa KKN
            PMD UNRAM dengan antusias melibatkan pemateri dari ahli gizi
            Puskesmas Belanting yakni, ibu Subaedah A.md Gz dan ibu Jane
            Haspitasari A.md Gz, Kepala Desa Belanting Bapak Sukradi, Kader
            Posyandu dari seluruh Desa Belanting dan ibu-ibu yang memiliki
            balita serta ibu hamil. Tujuan utama kegiatan ini adalah memberikan
            pengetahuan kepada para ibu tentang pentingnya pemberian gizi bagi
            balita.
          </p>
          <br />
          <p>
            Para ibu diberikan pengetahuan tentang takaran gizi yang wajib
            dipenuhi oleh balita setiap harinya. Hal ini menjadi langkah
            preventif untuk mencegah terjadinya stunting, masalah kesehatan yang
            dapat memengaruhi pertumbuhan anak secara serius.
          </p>
          <br />
          <p>
            Dalam kegiatan ini, mahasiswa KKN PMD UNRAM Periode 2023-2024
            menunjukkan kreativitas dalam pengolahan makanan bergizi. Salah satu
            contohnya adalah pembuatan Bola-Bola Nasi (Rice Ball), yang
            mengandung empat komponen utama: karbohidrat (nasi dan tepung),
            protein hewani (Ayam dan Telur), protein nabati (Tempe), dan sayur
            (Seledri dan Wortel).
          </p>
          <br />
          <p>
            Penambahan produk makanan bergizi berupa puding yang terbuat dari
            buah naga sebagai tambahan nutrisi bagi anak anak. Selain mengandung
            berbagai manfaat buah Naga merupakan hasil alam di Desa Belanting.
          </p>
          <br />
          <p>
            Dengan mengadakan kegiatan ini, KKN PMD UNRAM Periode 2023-2024
            berharap dapat menyemai pengetahuan dan keterampilan yang bermanfaat
            bagi masyarakat Desa Belanting. Dengan pengetahuan yang lebih baik
            tentang gizi dan kreativitas dalam pengolahan makanan, diharapkan
            masyarakat dapat menjalani pola hidup sehat dan terhindar dari
            risiko stunting. Program ini bukan hanya memberikan makanan, tetapi
            juga memberdayakan masyarakat untuk mengelola gizi dan kesehatan
            mereka sendiri. Sehingga, harapan sehat dapat tumbuh dan berkembang
            di setiap rumah tangga Desa Belanting.
          </p>
          <br />
          <p>
            Semoga kegiatan ini memberikan manfaat bagi orang tua dan warga
            masyarakat Desa Belanting semakin sehat.
          </p>
          {/* Add your article content here */}
        </div>
      </div>
    </div>
  );
}
