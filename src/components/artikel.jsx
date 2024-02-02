import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Artikels from "@/app/data/artikels";

function truncateText(text, wordLimit) {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}
export function Artikel() {
    useEffect(() => {
        Aos.init({
          delay:0 
        });
        console.log(Artikels.map((artikel) => {
          console.log(artikel.id);
        }))
      }, []);
  return (
    <div id="artikel" className="min-h-screen md:mb-72">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Artikel</h1>
        <div className="mt-2 border-b border-solid w-1/4 bg-blue-900 h-1"></div>
      </div>
      <div className="mt-8 mx-6 md: grid-cols-3">
        {Artikels.map((artikel) => (
          
        <Link key={artikel.id} href={`/artikel/${artikel.id}`} target="_blank" rel="noopener noreferrer">
        <Card data-aos="zoom-in-right" className="border-2 max-w-[24rem] overflow-hidden mb-6 "> 
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src={artikel.image}
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="">
              {truncateText(artikel.title, 5)}
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              {truncateText(artikel.body, 15)}
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <Typography className="font-normal">{artikel.date}</Typography>
          </CardFooter>
        </Card>
        </Link>
        ))}
      </div>
    </div>
  );
}
