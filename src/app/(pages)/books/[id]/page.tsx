"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import books from "@/app/shared/data/bookData"
import { Book } from "@/app/shared/interfaces/common.interface"
import AcknowledgmentModal from "@/app/components/models/acknowledgment-modal"
import TermsModal from "@/app/components/models/terms-modal"
import { MIN_READ_TIME } from "@/app/shared/constant"
import CustomButton from "@/app/components/button"

const BookDetails = () => {
    const router = useRouter();
    const { id } = useParams();
    const [readingTime, setReadingTime] = useState<number>(0);
    const [showTerms, setShowTerms] = useState<boolean>(false);
    const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
    const [showAcknowledgment, setShowAcknowledgment] = useState<boolean>(false);
    const [acknowledged, setAcknowledged] = useState<boolean>(false);
    const [book, setBook] = useState<Book | null | undefined>(undefined);

    const readingProgress: number = Math.min((readingTime / 300) * 100, 100);

    useEffect(() => {
        if (!id) return;
        const book = books.find((book: Book) => book.id === Number(id));
        document.title = `${book?.title} by ${book?.author} | BookTrack`;
        setBook(book ?? null);
    }, [id]);

    // Track reading time
    useEffect(() => {
        const timer = setInterval(() => {
            setReadingTime((prev) => {
                const newTime: number = prev + 1;
                // Show terms after minimum reading time
                if (newTime >= MIN_READ_TIME && !termsAccepted && !showTerms) {
                    setShowTerms(true);
                }
                return newTime;
            })
        }, 1000);

        return () => clearInterval(timer);
    }, [termsAccepted, showTerms]);

    // formate time
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`
    }

    // handle terms and accept
    const handleTermsAccept = () => {
        setTermsAccepted(true);
        setShowTerms(false);
    }

    // handle acknowledge
    const handleAcknowledge = () => {
        setAcknowledged(true);
        setShowAcknowledgment(false);
        alert("Reading acknowledged! Thank you for confirming you've read this book.");
    }


    // check book data is undefine
    if (book === undefined) {
        return (
            <div className="p-6 text-center">
                <p className="text-muted-foreground">Loading...</p>
            </div>
        );
    }

    // check the book is null
    if (book === null) {
        return (
            <div className="p-6 text-center text-red-600">
                <h2 className="text-2xl font-bold mb-4">Book Not Found</h2>
                <Button onClick={() => router.push("/")} className="cursor-pointer">Go Back</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-6 px-4">
            <div className="flex items-center justify-between mb-6">
                <CustomButton className="cursor-pointer flex items-center gap-2"
                    variant="outline" title="Back to Books"
                    onClick={() => router.push("/")}
                    icon={<ArrowLeft className="h-4 w-4" />} />
                <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Reading time: {formatTime(readingTime)}</span>
                </div>
            </div>

            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-2">{book?.title}</h1>
                <div className="flex items-center gap-2 mb-4">
                    <Progress value={readingProgress} className="w-full" />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{Math.round(readingProgress)}%</span>
                </div>
                {acknowledged && (
                    <div className="flex items-center gap-2 text-green-600 mb-4">
                        <CheckCircle className="h-5 w-5" />
                        <span>You have acknowledged reading this book</span>
                    </div>
                )}
            </div>

            <Separator className="my-4" />

            <div className="prose max-w-none dark:prose-invert">
                <div className="bg-muted p-6 rounded-lg mb-6">
                    <p className="text-md text-muted-foreground font-semibold">
                        Please read the entire content carefully. After spending sufficient time reading, you will be prompted to
                        accept the terms and conditions and acknowledge your reading.
                    </p>
                </div>
                <div className="space-y-4 mb-10">
                    {book?.briefDescription && (
                        <p>{book.briefDescription}</p>
                    )}
                </div>

                <div className="space-y-4">
                    {book?.description && (
                        <p>Moral: {book.description}</p>
                    )}
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                {/* <Button className={`${termsAccepted || !acknowledged ? `cursor-pointer` : 'cursor-not-allowed'} px-8`} onClick={() => setShowAcknowledgment(true)} disabled={!termsAccepted || acknowledged}>
                    I've Finished Reading
                </Button> */}

                <CustomButton
                    title="I've Finished Reading"
                    disabled={!termsAccepted || acknowledged}
                    onClick={() => setShowAcknowledgment(true)}
                    className="px-8"
                />

            </div>

            {showTerms && <TermsModal onAccept={handleTermsAccept} onClose={() => setShowTerms(false)} />}

            {showAcknowledgment && (
                <AcknowledgmentModal onAcknowledge={handleAcknowledge} onClose={() => setShowAcknowledgment(false)} />
            )}
        </div>
    )
}

export default BookDetails;