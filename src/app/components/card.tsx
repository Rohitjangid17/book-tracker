"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import CustomButton from "./button";
import Image from "next/image";
import { Book } from "../shared/interfaces/common.interface";

const CustomCard = ({ data }: { data: Book }) => {
    return (
        <>
            <Card className="overflow-hidden">
                <CardHeader className="pb-2">
                    <CardTitle>{data.title}</CardTitle>
                    <CardDescription>{data.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                    {/* <img
                        src={data.coverImage || "/images/icons/placeholder.svg?height=200&width=150"}
                        alt={data.title}
                        className="h-[200px] w-[150px] object-cover rounded-md mb-4"
                    /> */}

                    <Image src={data.coverImage || "/images/icons/placeholder.svg?height=200&width=150"}
                        alt={data.title} className="h-[200px] w-[150px] object-cover rounded-md mb-4" width={150} height={200} />

                    <p className="text-sm text-muted-foreground">{data.description}</p>
                </CardContent>
                <CardFooter>
                    <Link href={`/books/${data.id}`} className="w-full">
                        <CustomButton className="w-full cursor-pointer" title="Read Book" isMode={true} />
                    </Link>
                </CardFooter>
            </Card>
        </>
    )
}

export default CustomCard;
