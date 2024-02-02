import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Proker() {
  useEffect(() => {
    Aos.init({ 
    });
  }, []);
  return (
    <div className="h-screen md: mb-96">
      <div id="proker" className="mt-14 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Proker Utama</h1>
        <div className="mt-2 border-b border-solid w-1/4 bg-blue-900 h-1"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Card data-aos="zoom-in-right" className="mt-6 w-96 border-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Memberikan edukasi untuk mencegah terjadinya stunting
            </Typography>
            <Typography>
            Mengadakan sosialisasi terkait permasalahan kesehatan yang dihadapi dengan mengundang masyarakat setempat yang mengalami, perangkat desa, kader dan tenaga medis terkait.            
            </Typography>
          </CardBody>
        </Card>

        <Card data-aos="zoom-in-left" className="mt-6 w-96 p-2 border-2">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Melakukan Sosialisasi Pernikahan dini Untuk Mencegah Terjadinya Stunting
            </Typography>
            <Typography>
            Mengadakan sosialisasi dan penyuluhan terkait penyebab terjadinya permasalahan kesehatan dengan mengundang siswa/siswi menengah pertama dan menengah atas serta BKKBN (Badan Kependudukan Dan Keluarga Berencana Nasional).
            </Typography>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
