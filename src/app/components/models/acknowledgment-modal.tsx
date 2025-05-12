"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { AcknowledgmentModalProps } from "@/app/shared/interfaces/common.interface"
import CustomButton from "../button"

const AcknowledgmentModal = ({ onAcknowledge, onClose }: AcknowledgmentModalProps) => {
    const router = useRouter();
    const [response, setResponse] = useState<string | null>(null);

    // Reading acknowledgment
    const readingAcknowledgment = () => {
        onAcknowledge();
        router.push("/");
    }

    return (
        <Dialog open={true} onOpenChange={(open: boolean) => !open && onClose()}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Reading Acknowledgment</DialogTitle>
                    <DialogDescription>Please confirm whether you have read and understood the content.</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <RadioGroup value={response || ""} onValueChange={setResponse}>
                        <div className="flex items-center space-x-2 mb-3">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes">Yes, I have read and understood the content</Label>
                        </div>
                        <div className="flex items-center space-x-2 mb-3">
                            <RadioGroupItem value="partial" id="partial" />
                            <Label htmlFor="partial">I have read parts of the content</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no">No, I have not read the content</Label>
                        </div>
                    </RadioGroup>
                </div>
                <DialogFooter>
                    {/* <Button variant="outline" className="cursor-pointer" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={readingAcknowledgment} className="cursor-pointer" disabled={!response}>
                        Submit
                    </Button> */}

                    <DialogFooter>
                        <CustomButton title="Cancel" variant="outline" onClick={onClose} />
                        <CustomButton title="Accept" onClick={readingAcknowledgment} disabled={!response} />
                    </DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
export default AcknowledgmentModal;