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

export function Artikel() {
    useEffect(() => {
        Aos.init({
          delay:0 
        });
      }, []);
  return (
    <div id="artikel" className="min-h-screen ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Artikel</h1>
        <div className="mt-2 border-b border-solid w-1/4 bg-blue-900 h-1"></div>
      </div>
      <div className="mt-8 mx-6">
        <Link href="/artikel" target="_blank" rel="noopener noreferrer">
        <Card data-aos="zoom-in-right" className="border-2 max-w-[24rem] overflow-hidden"> 
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray">
              UI/UX Review Check
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mt-3 font-normal"
            >
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
          <CardFooter className="flex items-center justify-between">
            <Typography className="font-normal">January 10</Typography>
          </CardFooter>
        </Card>
        </Link>
      </div>
    </div>
  );
}
